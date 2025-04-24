// src/utils.js
import fs from 'fs';

export function readInput(filePath) {
  return fs.createReadStream(filePath);
}

export function writeOutput(filePath) {
  return fs.createWriteStream(filePath);
}
