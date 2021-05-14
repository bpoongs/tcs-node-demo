const http = require('http')
const app = require('./app')

const PORT = 3000

const server = http.createServer(app)

server.listen(PORT, (err) => {
  if(!err) {
    console.log('Server Started :: ' + PORT)
  } else {
    console.log('Something went wrong', err)
  }
})