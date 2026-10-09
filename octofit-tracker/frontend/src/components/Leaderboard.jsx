import { useEffect, useState } from 'react';
import { endpoints, normalizeCollection } from '../api.js';

export default function Leaderboard() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    fetch(endpoints.leaderboard)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`);
        }
        return response.json();
      })
      .then((payload) => {
        if (isMounted) setItems(normalizeCollection(payload));
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card p-4 mt-3">
      <h2>Leaderboard</h2>
      {error ? <div className="alert alert-danger">{error}</div> : null}
      <ul className="list-group mt-3">
        {items.length === 0 ? (
          <li className="list-group-item text-muted">No leaderboard data found.</li>
        ) : (
          items.map((item, index) => (
            <li key={item._id ?? item.id ?? `leaderboard-${index}`} className="list-group-item">
              {item.name ?? item.user ?? 'Entry'}: {item.score ?? item.points ?? 'N/A'}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
