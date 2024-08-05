function kthDistinct(arr: string[], k: number): string {
  let uniqueEle: any[] = [];
  for (let i = 0; i < arr.length; i++) {
      let count: number = 0;
      for (let j = 0; j < arr.length; j++) {
          if (arr[i] == arr[j]) count++
      }
      if (count == 1) uniqueEle.push(arr[i]);
  }
  if (uniqueEle.length > k) return ""
  else return uniqueEle[k - 1];
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
