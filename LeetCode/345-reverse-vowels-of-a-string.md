编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例1：

```js
输入: "hello"
输出: "holle"
```

示例2：

```js
输入: "leetcode"
输出: "leotcede"
```

说明:
元音字母不包含字母"y"。

Solution: 

- 双指针 

```js
var reverseVowels = function(s) {
    var vowels = {
      'a': 1,
      'e': 1,
      'i': 1,
      'o': 1,
      'u': 1,
      'A': 1,
      'E': 1,
      'I': 1,
      'O': 1,
      'U': 1
    }
    s = s.split('')
    let len = s.length
    let from = 0, end = len - 1
    while(from < end) {
      if(vowels[s[from]] && vowels[s[end]]) {
        [s[from], s[end]] = [s[end], s[from]]
        from++
        end--
      }else if(!vowels[s[from]]) {
        from++
      }else {
        end--
      }
    }
    return s.join('')
};
```