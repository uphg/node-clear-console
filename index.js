const fs = require('fs');
const path = require('path');

const setFile = require('./set-file.js') // 编辑文件内容

// 解析需要遍历的文件夹（以当前 src 目录为例）
const base = path.resolve('src');

function clearLog(filePath) {
  fs.readdir(filePath, (error, fileList)=>{
    if (error) return console.log(error)

    fileList.forEach((fileName)=>{
      const filedir = path.join(filePath, fileName)

      // stat 获取文件信息对象，包括文件大小、文件类型等。
      fs.stat(filedir, (err, state)=>{
        if (err) return console.log(err)

        const isFile = state.isFile()        // 是文件
        const isDir = state.isDirectory()    // 是目录

        if (isFile) setFile(filedir)
        if (isDir) clearLog(filedir)
      })
    })
  })
}

clearLog(base)
