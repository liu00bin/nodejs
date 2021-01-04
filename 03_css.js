const fs = require('fs')
const path = require('path')

const source = path.join(__dirname, './index.html')
fs.readFile(source, 'utf8', (arr, datas) => {
  if (arr) return console.log('读取失败')
  const regStyle = /<style>([\s\S]*)<\/style>/
  const regScript = /<script>([\s\S]*)<\/script>/
  resolveCss(datas, regStyle, regScript)
})
function resolveCss(str, css, js) {
  const newCss = css.exec(str)[1]
  const newJs = js.exec(str)[1]
  const newHtml = str.replace(css, '<link rel="stylesheet" href="./index.css">').replace(js, '<script src="./index.js"></script>')
  const targerCss = path.join(__dirname, './index/index.css')
  const targerJs = path.join(__dirname, './index/index.js')
  const targerHTML = path.join(__dirname, './index/index.html')
  fs.writeFile(targerCss, newCss, (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
  })
  fs.writeFile(targerJs, newJs, (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
  })
  fs.writeFile(targerHTML, newHtml, (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
  })
}
