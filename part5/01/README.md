# 简答题

## 简述 Node.js 的特点以及适用的场景。
### nodejs特点
  1. 一个JavaScript运行环境
  2. 依赖v8引擎
  3. 基于事件驱动的非阻塞I/O
### 使用场景
  1. nodejs 适用于高并发、I/O 密集、少量业务的适应场景
  2. 由于JavaScript是单线程不适合CPU密集计算与高内存的应用

## 简述 Buffer 的使用.包括多种创建方式。实例方法，静态方法。
* Buffer是用来专门存放二进制数据的缓存区，Buffer为弄得带来了一种储存原始数据的方法，可以让nodejs处理二进制数据。

``` javascript
  // 创建Buffer
  Buffer.from() //接收数据，创建 buffer
  Buffer.alloc() //创建指定字节大小的 buffer

  // 实例方法
  let b1 = Buffer.alloc(6)
  b1.toJSON()
  b1.fill()
  b1.toString()
  b1.slice(start, end)
  // 静态方法
  Buffer.isEncoding(encoding)
  Buffer.isBuffer(obj)
  Buffer.byteLength(string[, encoding])
```

## 写出5个以上文件操作的API，并且用文字说明其功能。
```js
  fs.open(path, option, cb) // 打开文本
  fs.stat(path, cb)// 获取文本信息
  fs.createReadStream(path) // 创建文件读取流
  fs.createWriteStream(path) // 创建文件写入流
  fs.watch(filename[, options][, listener]) // 创建文件监听对象
  fs.readFileSync(filename)// 同步读取文件
  fs.writeFileSync(filename)// 同步写入
  fs.readFile(filename[, options], cb) // 异步读取文件内容
  fs.writeFile(filename, data[, options], cb) // 异步写入文件内容
  fs.copyFile(filename, name, cb) // copy文件
```
## 4.简述使用流操作的优势，以及Node中流的分类。
  * 内存效率: 无需加载大量的数据到内存中即可进行处理。
  * 时间效率: 当获得数据之后即可立即开始处理数据，这样所需的时间更少，而不必等到整个数据有效负载可用才开始

  ### Readable 可读流
  * 可读流是数据可以被消费的源的抽象。一个例子就是 fs.createReadStream 方法。
  ### Writable 可写流
  * 可读流是数据可以被写入目标的抽象。一个例子就是 fs.createWriteStream 方法
  ### Duplex 双向流
  * 双向流即是可读的也是可写的。一个例子是 TCP socket。
  ### Transform 转换流
  * 转换流是基于双向流的，可以在读或者写的时候被用来更改或者转换数据。一个例子是 zlib.createGzip 使用 gzip 算法压缩数据。你可以将转换流想象成一个函数，它的输入是可写流，输出是可读流。你或许也听过将转换流成为“通过流（through streams）”。

## 在数据封装与解封装过程中，针对应用层、传输层、网络层、数据链路层、物理层5层分别做了什么事情？
* 在数据封装与解封装过程中，在TCP/IP五层协议中分别包含以下主要信息，即在不同的层架添加上网络传输过程中，寻找目标主机的必要信息，在找到目标主机后在层层解封装，获取到原始数据（应用层数据）；

### 应用层 ： 原始数据（应用层数据）；
### 传输层：目标端口 + 源端口 + 原始数据；
## 网络层：目标IP + 源IP + 目标端口 + 源端口 + 原始数据；
## 数据链路层：目标Mac + 源Mac + 目标IP + 源IP + 目标端口 + 源端口 + 原始数据；
## 物理层：转换成二进制数据表示的高低电压；


## 统计指定目录中文件总大小。要考虑目录中还有子目录的情况。可以同步编码,异步更好。
``` js
  const fs = require('fs')
  const path = require('path')

  const { promisify } = require('util')
  const stat = promisify(fs.stat)
  const readdir = promisify(fs.readdir)

  async function getFileSize(dirpath) {
    let size = 0
    const data = await stat(dirpath)
    if(data.isDirectory()) {
      const fileList = await(readdir(dirpath))
      const dirs = fileList.map(item => path.join(dirpath, item))
      for(let i = 0; i < dirs.length; i++) {
        size += await getFileSize(dirs[i])
      }
    } else {
      size += data.size
    }
    return size
  }
  // 测试
  // getFileSize(path.join(__dirname, '../../part5')).then(res => {
  //   console.log(res)
  // })

  module.exports = getFileSize
```

## 编写单向链表类并且实现队列的入列出列操作。
```js
/**
  单向链表
 */
class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}
class LinkedList {
  constructor() {
    this.size = 0
    this.head = null
  }
  _getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('越界了')
    }
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  add(...args) {
    let index = args[0], element = args[1]
    if(args.length === 1) {
      index = this.size
      element = args[0]
    }
    if(index < 0 || index > this.size) {
      throw new Error('超出边界')
    }
    if( index === 0){
      this.head = new Node(element, this.head)
    } else {
      let preNode = this._getNode(index - 1)
      preNode.next = new Node(element, preNode.next)
    }
    this.size ++
  }
  remove(index) {
    let rmNode = null 
    if (index == 0) {
      rmNode = this.head 
      if (!rmNode) {
        return undefined
      }
      this.head = rmNode.next
    } else {
      let preNode = this._getNode(index -1)
      rmNode = preNode.next
      preNode.next = rmNode.next
    }
    this.size--
    return rmNode
  }
  set(index, element) {
    let node = this._getNode(index)
    node.element = element
  }
  get(index) {
    return this._getNode(index)
  }
  clear() {
    this.head = null 
    this.size = 0 
  }
}


class Queue {
  constructor() {
    this.linkedList = new LinkedList()
  }
  enQueue(data) {
    this.linkedList.add(data)
  }
  deQueue() {
    return this.linkedList.remove(0)
  }
}

const queue = new Queue()

queue.enQueue('node1')
queue.enQueue('node2')
console.log(queue)
let data = queue.deQueue()
console.log(data)
module.exports = Queue
```

## 基于Node写出一静态服务器。接收请求并且响应特定目录(服务器目录)中的html、css、js、图片等资源。

```js
const http = require('http')
const url = require('url')
const path = require('path')
const mime = require('mime')
const fs = require('fs')


console.log(mime.getType(path.join(__dirname, '/public/index.html')))



function static(req, res) {
  let { pathname } = url.parse(req.url)
  console.log(pathname)
  pathname = decodeURIComponent(pathname)
  const abs = path.join(__dirname, pathname)
  fs.stat(abs, (err, data) => {
    if(err) {
      res.statusCode = 404
      return res.end(`Not Found ${ pathname }`)
    }
    if(data.isFile()) {
      fs.readFile(abs, (err, data) => {
        console.log('----',mime.getType(path.join(abs)))
        res.setHeader('Content-type', mime.getType(path.join(abs)) + ';charset=utf-8')
        return res.end(data)
      })
      return
    }
    fs.readFile(path.join(abs, 'index.html'), (err, data) => {
      if(err) {
        res.statusCode = 404
        return res.end(`Not Found ${ pathname }`)
      }
      console.log('----type-----',mime.getType(path.join(abs, 'index.html')))
      res.setHeader('Content-type', mime.getType(path.join(abs, 'index.html')) + ';charset=utf-8')
      res.end(data)
    })
  })
}

const server = http.createServer((req, res) => {
  static(req, res)
})


server.listen(3000, () => {
  console.log('server is start at port 3000.....')
})
```