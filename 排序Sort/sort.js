let arryData = require('./index')
// JS自带api
// arr.sort((a, b) => a - b) // 升序
// console.log(arr)

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

// 二分法、快排 => 核心找个标志位
// 数组找一个标志位，所有人跟我比，比我小的在左，比我大在右。这样一次比较完，我的左边跟右边就不用再去比较了。
// 然后左边右边继续各自找一个标志位，然后类型上面的比较方式，递归进行比较
// 多占了空间复杂度，降低时间复杂度
// 时间 O(n * lgn)
// 空间 O(n * lgn)
function quickSort(arr) {
  if(arr.length < 2) return arr
  // 随机抽取一个标志位
  let flag = arr[0]
  let left  = []
  let right = []
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > flag) {
      right.push(arr[i])
    }else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(flag, quickSort(right))
}
quickSort(arryData)
console.log(quickSort(arryData))
// 原地快排
// i =>   <= j
// e 
// i 找比e大的
// j 找比e小的
// i j找到的值相互交换
// i j最终会相遇
function quickSort1(arr) {

}
