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
getFileSize(path.join(__dirname, '../../part5')).then(res => {
  console.log(res)
})

module.exports = getFileSize