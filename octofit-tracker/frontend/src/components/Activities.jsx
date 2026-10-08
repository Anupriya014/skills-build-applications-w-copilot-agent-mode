import { endpoints } from '../api.js';

export default function Activities() {
  fetch(endpoints[0]);
  return <main className="card p-4 mt-3"><h2>Activities</h2></main>;
}
