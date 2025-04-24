// src/tasks/manhattan.js
function manhattanDistance(point1, point2) {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

export default manhattanDistance;
