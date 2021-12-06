const fs = require('fs');

const sonarSweep1 = () => {
  let count = 0;
  parseInput()
    .map(data => Number(data))
    .reduce((prev, curr) => {
      if (curr > prev) count++;
      return curr;
    })
  return count;
}

const sonarSweep2 = () => {
  let count = 0;
  const sonarInput = parseInput().map(x => Number(x))
  let previous = calcWindow(sonarInput, 0)

  for(let i = 1; i < sonarInput.length - 2; i++) {
    const current = calcWindow(sonarInput, i);
    if(current > previous) count ++;
    previous = current;
  }

  return count;
}

function calcWindow(arr, i){
  return arr[i] + arr[i+1] + arr[i+2]
}

function parseInput() {
  const raw = fs.readFileSync("./src/day-1-sonar-sweep/day-1-input.txt", "utf-8");
  return raw.split('\n');
}

module.exports = {sonarSweep1, sonarSweep2}

