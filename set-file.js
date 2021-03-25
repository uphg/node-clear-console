const file = require('./api/file.js')

async function setFile(dir) {
  const result = await file.read(dir)
  await file.write(dir, result)
}

module.exports = setFile