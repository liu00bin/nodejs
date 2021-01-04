const fs = require('fs')

fs.readFile('./text/01_txt', 'utf-8', function (a, b) {
  console.log(b, 'asasa')
  fs.writeFile('./text/02_txt', 'asdfghjkl', function () {
    fs.readFile('./text/02_txt', 'utf-8', function (c, d) {
      console.log(d)
    })
  })
})

// console.log(a, 'abc')
// // fs.writeFile('./text/03_txt','撒啊撒啊洒洒水',function(){})
