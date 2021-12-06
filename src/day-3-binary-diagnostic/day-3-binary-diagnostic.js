const fs = require('fs');

function parseInput() {
  const raw = fs.readFileSync('./src/day-3-binary-diagnostic/day-3-input.txt', 'utf-8');
  return raw.trim().split('\n');
}

function calcRates(arr) {
  let gammaRate = [];
  let epsilonRate = [];

  for (let i = 0; i < arr[0].length; i++){
    let count0 = 0;
    let count1 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === '0'){
        count0++;
      }else {
        count1++;
      }
    }

    gammaRate[i] = count0 > count1 ? 0 : 1;
    epsilonRate[i] = count0 > count1 ? 1 : 0;
  }

  return {
    min: gammaRate,
    max: epsilonRate
  }
}

const diagnostic1 = () => {
  const data = parseInput();
  const {min: gamma, max: epsilon} = calcRates(data);

  const gammaRate = parseInt(gamma.join(''), 2);
  const epsilonRate = parseInt(epsilon.join(''), 2);

  return gammaRate * epsilonRate
}

const diagnostic2 =() => {
  let o2 = parseInput();
  let co2 = parseInput();

  function calcRates(arr) {
    let gammaRate = [];
    let epsilonRate = [];

    for (let i = 0; i < arr[0].length; i++){
      let count0 = 0;
      let count1 = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j][i] === '0'){
          count0++;
        }else {
          count1++;
        }
      }

      if (count0 === count1){
        gammaRate[i] = null;
        epsilonRate[i] = null;
      } else if(count0 > count1){
        gammaRate[i] = '1';
        epsilonRate[i] = '0';
      } else {
        gammaRate[i] = '0';
        epsilonRate[i] = '1';
      }
    }

    return {
      min: gammaRate,
      max: epsilonRate
    }
  }

  let bit = 0;

  while(o2.length > 1){
    const { max } = calcRates(o2);
    o2 = o2.filter((num) => max[bit] === null ? num[bit] === '1' : num[bit] === max[bit])
    bit++
  }

  bit = 0;
  while(co2.length > 1){
    const { min } = calcRates(co2);
    co2 = co2.filter((num) => min[bit] === null ? num[bit] === '0' : num[bit] === min[bit])
    bit++
  }

  const o2Rating = parseInt(o2[0], 2);
  const co2Scrub = parseInt(co2[0], 2);

  return o2Rating * co2Scrub;
}

module.exports = {diagnostic1, diagnostic2}
