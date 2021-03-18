const fs = require('fs');
const filterLog = require('./filter-log.js')

function setFile(dir) {
  fs.readFile(dir, 'utf-8', (e, content)=>{

    const result = filterLog(content)
    if (!result) return false

    // writeFile 改写文件内容
    fs.writeFile(dir, result, 'utf8', (err)=>{
      if (err) return console.log(err)
    })
  })
}

module.exports = setFile