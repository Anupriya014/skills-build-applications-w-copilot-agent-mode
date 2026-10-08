import { endpoints } from '../api.js';

export default function Workouts() {
  fetch(endpoints[4]);
  return <main className="card p-4 mt-3"><h2>Workouts</h2></main>;
}
