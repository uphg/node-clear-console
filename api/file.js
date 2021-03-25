const fs = require('fs');
const filterLog = require('../filter-log.js')

const file = {
  dir(filePath) {
    return new Promise((resolve, reject)=>{
      fs.readdir(filePath, (error, fileList) => {
        if (error) return reject(error)
        resolve(fileList)
      })
    })
  },
  read(dir) {
    return new Promise((resolve, reject) => {
      fs.readFile(dir, 'utf-8', (e, content)=>{
        const result = filterLog(content)
        if (!result) return reject('文件内容为空')
        resolve(result)
      })
    })
  },
  write(dir, result) {
    return new Promise((resolve, reject) => {
      fs.writeFile(dir, result, 'utf8', (error)=>{
        if (error) return reject(error)
        resolve()
      })
    })
  }
}

module.exports = file

