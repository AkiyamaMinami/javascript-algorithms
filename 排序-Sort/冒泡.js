let arryData = require('./index')

// 冒泡 => 数据量大,不推荐使用
// 时间复杂度O(n^2)/2 常量是没有意义的 所以还是O(n^2)
function bubbleSort(arr) {
  // 每个数据跟相邻的数据比较，比较大的跟小的交换位置
  let len = arr.length - 1;
  for(let j = 0; j < len; j++) {
    for(let i = 0; i < len - j; i++) {
      if(arr[i] > arr[i + 1]) {
        // let tmp = arr[i];
        // arr[i] = arr[i + 1];
        // arr[i + 1] = tmp
        // 结构交换
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr
}
// bubbleSort(arryData)
// console.log(arryData)