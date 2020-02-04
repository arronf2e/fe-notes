### line-height

#### 基线

西方字母在文档中排列的基准线，如

```js
teachery   // 除了y，其他字符都在同一基线上
```

#### 什么是 line-height

每一行基线之间的距离

行距 = line-height - font-size，上下各有相等的半边行距

#### 五种取值

- normal  使用浏览器默认值
- number  font-size的倍数，如 2 
- length  固定的行间距，如 50px
- %       font-size的百分比， 如 200%
- inherit 继承父元素的 line-height 值 

#### 垂直居中，其实只和 line-height 相关

[https://jsbin.com/hexezemiya/edit?html,css,output](https://jsbin.com/hexezemiya/edit?html,css,output)
