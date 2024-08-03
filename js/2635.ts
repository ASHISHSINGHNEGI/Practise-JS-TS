var map = function (
  arr: number[],
  fn: (n: number, i: number) => number,
): number[] {
  let resultArray: number[] = [];
  arr.forEach((item, i) => {
    resultArray.push(fn(item, i));
  });

  return resultArray;
};
