给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例1：
```js
输入: 123
输出: 321
```
示例2：
```js
输入: -123
输出: -321
```
示例3：
```js
输入: 120
输出: 21
```

Solution:

- 求余法

```js
const reverse = function(x) {
    let res = 0
    let max = Math.pow(2, 31) - 1
    let min = Math.pow(-2, 31)
    let current
    while(x != 0) {
      current = x % 10
      res = res * 10 + current
      x = parseInt(x / 10)
    }
    if(res > max || res < min) {
      return 0
    }
    return res
}
```

- 双指针法

```js
const reverse = function(x) {
    let max = Math.pow(2, 31) - 1
    let min = Math.pow(-2, 31)
    let sign = Math.sign(x)
    x = String(Math.abs(x)).split('')
    let length = x.length
    let left = 0,
        right = length - 1
    while(left < right) {
      [x[left], x[right]] = [x[right], x[left]]
      left++
      right--
    }
    x = Number(x.join(''))
    x *= sign
    if(x < min || x > max) {
      return 0
    }
    return x
};
```