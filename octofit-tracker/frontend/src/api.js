// VITE_CODESPACE_NAME must be defined in .env.local for Codespaces, for example:
// VITE_CODESPACE_NAME=my-codespace
// When it is unset, the app falls back to the local backend on localhost:8000.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
export const apiBase = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export const endpoints = {
  activities: `${apiBase}/api/activities/`,
  leaderboard: `${apiBase}/api/leaderboard/`,
  teams: `${apiBase}/api/teams/`,
  users: `${apiBase}/api/users/`,
  workouts: `${apiBase}/api/workouts/`,
};

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && Array.isArray(payload.results)) {
    return payload.results;
  }

  if (payload && Array.isArray(payload.data)) {
    return payload.data;
  }

  if (payload && Array.isArray(payload.items)) {
    return payload.items;
  }

  return [];
}
