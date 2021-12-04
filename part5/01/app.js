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