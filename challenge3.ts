function findMissingNumber(arr: number[]): number {
  let expectedSum: number = 0;
  let actualSum: number = 0;
  for (let n: number = arr[0]; n <= arr[arr.length - 1]; n++) {
    expectedSum += n;
  }
  for (let x: number = 0; x < arr.length; x++) {
    actualSum += arr[x];
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 3, 4, 5, 6, 7, 8, 9]));
