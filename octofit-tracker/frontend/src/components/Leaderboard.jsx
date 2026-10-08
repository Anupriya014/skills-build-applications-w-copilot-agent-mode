import { endpoints } from '../api.js';

export default function Leaderboard() {
  fetch(endpoints[1]);
  return <main className="card p-4 mt-3"><h2>Leaderboard</h2></main>;
}
