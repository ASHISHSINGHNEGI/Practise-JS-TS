function kthDistinct(arr, k) {
  var uniqueEle = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) count++;
    }
    if (count == 1) uniqueEle.push(arr[i]);
  }
  console.log(uniqueEle+ " "+ uniqueEle.length +" "+ k);
  if (uniqueEle.length < k) return "";
  else return uniqueEle[k - 1];
}
// console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1)+'ans');
