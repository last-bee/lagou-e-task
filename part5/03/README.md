## 公共api http://lastbee.cn/api
### 注册
* POST
* 接口 /register
* 参数
```js
{
  "email": "", // test@163.com
  "name": "", // test
  "password": "" // 123456
}
```

* result 
```js
{
  "user": {
    "name": "test",
    "email": "test@163.com",
    "password": "e10adc3949ba59abbe56e057f20f883e",
    "avatar": null,
    "_id": "61b70d63a21d367918980ea8",
    "createdAt": "2021-12-13T09:07:47.428Z",
    "updatedAt": "2021-12-13T09:07:47.428Z",
    "__v": 0
  }
}
```

### 登录
* POST
* 接口 /login
* 参数
```js
{
  "email": "test@163.com",
  "password": "123456"
}
```

* result 
```js
{
  "user": {
    "_id": "61b70d63a21d367918980ea8",
    "name": "test",
    "email": "test@163.com",
    "avatar": null
  }
}
```


![avatar](/img/login.png)

###  根据名字查询用户
* GET
* /getUserByName/:name
* 参数 none

![avatar](/img/name.png)



