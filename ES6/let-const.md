### 块级作用域的出现

> 块级声明用于声明在指定块的作用域之外无法访问的变量。

### let 和 const 

这两者声明的变量有以下特点：

- 不会被提升

```js
if(false) {
    let name = 'arron'
}
console.log(name) // name is not defined
```

- 不允许重复声明

```js
let name = 'arron'
var name = 'jerry'  
// Identifier 'name' has already been declared
```

- 不会绑定全局的作用域

```js
// 用 var 声明的变量
var a = 1
console.log(window.a)  // 1

let b = 2
console.log(window.b)  // undefined
```

- TDZ

在代码块内，使用let/const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）

```js
console.log(a)  // Cannot access 'a' before initialization
let a = 1
```


这两者的区别：

- const 用来声明常量，一旦声明就不可以被修改，否则报错

```js
const a = 1
a = 2   // Assignment to constant variable.
```

- 但是如果用 const 声明一个对象，不可以修改绑定，但可以修改它的值

```js
const a = {
    name: 'arron'
}

a.name = 'jerry'
a = {}  // Assignment to constant variable.
```

