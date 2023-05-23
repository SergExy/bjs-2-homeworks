function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
    sum = arr[i] + sum

  }
  let avg = sum / arr.length;

  avg = avg.toFixed(2);

  return { min: min, max: max, avg: +avg };
}

console.log(getArrayParams(-9, 99, -5));

///////////////////////////////////////////////////////////////

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker(10, 10, 10, 10));

/////////////////////////

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  difference = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  difference = max - min;
  return difference;
}
console.log(differenceMaxMinWorker(10, 20, 10, 10));

/////////////////////////


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  difference = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sumOddElement += arr[i];
    } else {
      sumEvenElement += arr[i];
    }
  }
  difference = sumEvenElement - sumOddElement;

  return difference;
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));


/////////////////////////
function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  difference = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  difference = sumEvenElement / countEvenElement;
  return difference;
}

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5

///////////////////////////////////////////////////////////////


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let functionResult = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    const max = func(...arrOfArr[i]);
    functionResult.push(max);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return `максимум из ${functionResult.join()} => ${maxWorkerResult} `
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72