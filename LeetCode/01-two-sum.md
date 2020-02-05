给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

```js
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

Solution:

- 暴力两重循环（略）

- Map

```js
const twoSum = function(nums, target) {
    let len = nums.length
    let map = {}
    for(let i = 0; i < len; i++) {
        let other = target - nums[i]
        if(map[other] !== undefined) {
            return [map[other], i]
        }
        map[nums[i]] = i
    }
    return null
};
```

- 双指针（适合有序数组）

```js
const twoSum = function(nums, target) {
    let len = nums.length
    let left = 0,
        right = len - 1;
    while(left < right) {
      let sum = nums[left] + nums[right]
      if(sum === target) {
        return [left, right]
      }else if(sum > target) {
        right--
      }else {
        left++
      }
    }
    return null
};
```