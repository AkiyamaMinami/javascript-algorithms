let arryData = require('./index')

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
// i j最终会相遇 => 数组遍历完毕
function quickSort1(arr, start, end) {
}
