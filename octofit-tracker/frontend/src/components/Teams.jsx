import { endpoints } from '../api.js';

export default function Teams() {
  fetch(endpoints[2]);
  return <main className="card p-4 mt-3"><h2>Teams</h2></main>;
}
