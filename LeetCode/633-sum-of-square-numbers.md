给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。

示例1:

```js
输入: 5
输出: True
解释: 1 * 1 + 2 * 2 = 5

输入: 3
输出: False
```

Solution:

- 双指针

```js
const judgeSquareSum = function(c) {
    let i = 0,
        j = parseInt(Math.sqrt(c))
    while(i <= j) {
        let sum = i * i + j * j
        if(sum === c) {
            return true
        }else if(sum > c) {
            j--
        }else {
            i++
        }
    }
    return false
}
```