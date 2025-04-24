// src/task_cli.js
import { program } from 'commander';
import manhattanDistance from './tasks/manhattan.js';
import { readInput, writeOutput } from './utils.js';
import { sortStrings } from './tasks/sortStrings.js';

program
  .option('-t, --task <task>', 'choose task')
  .option('-i, --input <input>', 'input file path')
  .option('-o, --output <output>', 'output file path');

program.parse(process.argv);

const options = program.opts();

// Обработка задачи на Манхэттенское расстояние
if (options.task === 'manhattan') {
  const input = options.input ? readInput(options.input) : process.stdin;
  const output = options.output ? writeOutput(options.output) : process.stdout;

  input.on('data', (data) => {
    const points = JSON.parse(data.toString().trim());
    const result = manhattanDistance(points[0], points[1]);
    output.write(`Манхэттенское расстояние: ${result}\n`);
  });

  input.on('end', () => {
    process.exit(0);
  });
}

// Обработка задачи на сортировку строк
if (options.task === 'sort') {
  const input = options.input ? readInput(options.input) : process.stdin;
  const output = options.output ? writeOutput(options.output) : process.stdout;

  input.on('data', (data) => {
    const arr = JSON.parse(data.toString().trim());
    const sortedArr = sortStrings(arr);
    output.write(`Отсортированный массив: ${JSON.stringify(sortedArr)}\n`);
  });

  input.on('end', () => {
    process.exit(0);
  });
}
