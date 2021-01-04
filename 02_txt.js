const fs = require('fs')
const path=require('path')
fs.readFile('./text/02_txt', 'utf-8', function (a, b) {
  const arr = b.replace(/=/g, ':').replace(/\s/g, '\n')
  fs.writeFile('./txt/1_txt', arr, (c) => {
    if (c) return console.log('文件写入失败！', c)
    fs.readFile('./txt/1_txt', 'utf8', (arra, data) => {
      if (arra) return console.log('文件读取失败！', arra)
      console.log(data)
    })
  })
})
