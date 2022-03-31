// 力扣 => 141. 环形链表 https://leetcode-cn.com/problems/linked-list-cycle/
// 问: 给你一个链表的头节点(head)，判断链表中是否有环？
// 有环 => 如果链表中某个节点可以通过连续next指针再次到达自身，则表示链表中存在环。
// 存在环 return true else return false

// 思路1: 遍历链表，判断链表某个节点是否出现多次
// 借助JS的Set数据结构的唯一性(Set对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。)
function hasCircle(head) {
  while(head) {
    let temp = new Set()
    if(temp.has(head)) {
      return true
    }else {
      temp.add(head)
    }
    head = head.next
  }
  return false
}
// 思路2：若链表存在环，设置快慢两个指针，两者最终一定会相遇
function hasCircle2() {
  let slow = head
  let fast = head
  while(fast && fast.next) {
    slow = head.next
    fast = head.next.next
    if(slow === fast) return true
  }
  return false
}