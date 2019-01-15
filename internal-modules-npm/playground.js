const fs = require('fs')
const file = fs.readFileSync('./app.js', {encoding: 'utf-8'}).toString()

console.log(file)

fs.writeFileSync('./apoid.js', 'let me = "me"')
