import { endpoints } from '../api.js';

export default function Users() {
  fetch(endpoints[3]);
  return <main className="card p-4 mt-3"><h2>Users</h2></main>;
}
