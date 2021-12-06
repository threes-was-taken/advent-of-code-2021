const fs = require('fs');

function parseInput() {
  const raw = fs.readFileSync("./src/day-2-dive/day-2-input.txt", "utf-8");
  return raw.split('\n');
}

const dive1 = () => {
  const data = parseInput();
  let horizontal = 0;
  let depth = 0;

  data.forEach(item => {
    const direction = item.split(' ')[0];
    const steps = item.split(' ')[1];

    switch (direction) {
      case 'forward':
        horizontal += Number(steps);
        break;
      case 'down':
        depth += Number(steps);
        break;
      case 'up':
        depth -= Number(steps);
        break;
    }
  });

  return horizontal * depth;
}

const dive2 = () => {
  const data = parseInput();
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  data.forEach(item => {
    const direction = item.split(' ')[0];
    const steps = item.split(' ')[1];

    switch (direction) {
      case 'up':
        aim -= Number(steps);
        break;
      case 'down':
        aim += Number(steps);
        break;
      case 'forward':
        horizontal += Number(steps);
        depth += (aim * Number(steps));
        break;
    }
  });

  return horizontal * depth;
}


module.exports = {dive1, dive2}
