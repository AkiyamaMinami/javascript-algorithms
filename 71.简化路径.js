/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // "/a/./b/../../c/"
    let stacks = []
    let paths = path.split('/')
    for (let i = 0; i < paths.length; i++) {
        const p = paths[i]
        if(p === '..') {
            stacks.pop()
        }else if(p && p !== '.') {
            stacks.push(p)
        }
    }
    return '/' + stacks.join('/')
};
// @lc code=end

