### this 的几种绑定规则

- 默认绑定

```js
function a() {
    console.log(this)  // Window
}
a()
```

- 隐式绑定

```js
var boy = {
    name: '小张',
    age: 27,
    height: 178,
    detail: function() {
        console.log(`${this.name}今年${this.age}岁，他身高${this.height}`)
    }
}
boy.detail()  // 小张今年27岁，他身高178
```

- 硬绑定（apply、call、bind)

```js
var zhang = {
    name: '小张',
    sayName: function() {
        console.log(`我的名字叫：${this.name}`)
    }
}
var wang = {
    name: '小王'
}
var zhao = {
    name: '小赵'
}
zhang.sayName()                 // 我的名字叫：小张
zhang.sayName.call(wang)        // 我的名字叫：小王
zhang.sayName.call(zhao)        // 我的名字叫：小赵
zhang.sayName.apply(wang)       // 我的名字叫：小王
zhang.sayName.apply(zhao)       // 我的名字叫：小赵
zhang.sayName.bind(wang)()      // 我的名字叫：小王
zhang.sayName.bind(zhao)()      // 我的名字叫：小赵
```

- 构造函数绑定，this 指向实例

```js
function Boy(name) {
    this.name = name
    this.sayName = function() {
        console.log(`我的名字叫${this.name}`)
    }
}
var name = '小W'
var zhang = new Boy('小张')
zhang.sayName()  // 我的名字叫小张
```