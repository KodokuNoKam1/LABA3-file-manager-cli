// src/tasks/sortStrings.js

export function sortStrings(arr) {
  return arr.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    throw new Error("Both elements must be strings");
  });
}
