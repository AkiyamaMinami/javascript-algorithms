// 原数组[[0],[2,3,4],1,[1,[2,3]]]，写一段代码，将该数组扁平化，输出[0,2,3,4,1,1,2,3]
// 1. 递归遍历拆解数组
(function () {
    let sourceArr = [[0], [2, 3, 4], 1, [1, [2, 3]]];
    let resultArr = [];
    (function flat(arr) {
      if(!hasChildArray(arr)) {
        resultArr = resultArr.concat(arr)
      }else {
        for(let i = 0; i < arr.length; i++) {
          if(Array.isArray(arr[i])) {
            flat(arr[i])
          }else {
            resultArr.push(arr[i])
          }
        }
      }
    })(sourceArr)
    console.log(resultArr)
    // 检测是否包含数组项
    function hasChildArray(arr) {
      // Array.prototype.some() 检测数组至少有一个元素通过测试 => 返回true
      return arr.some(() => {
        if(Array.isArray(arr)) return true
      })
    }
})();
// 2. toString获得扁平化字符串
(() => {
   //题目中给的测试数据
   let sourceArr = [[0], [2, 3, 4], 1, [1, [2, 3]]];
   //结果数组，用来保存最终输出的数据
   let resultArr;
   (function flat(arr) {
     resultArr  = arr.toString().split(',');
     resultArr = resultArr.map(i => Number(i));
   })(sourceArr)
   console.log(resultArr)
})()
