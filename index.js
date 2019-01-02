const express = require("express")
const app = express()
const port = 3000
app.use(express.static('public'))
app.listen(port)
console.log(`Listening on port ${3000}`)

const handleError = (err, response) => {
  response.status(500)
  response.send(
    "<html><head><title>Internal Server Error!</title></head><body><pre>"
    + JSON.stringify(err, null, 2) + "</pre></body></pre>"
  )
}

app.get("/", (request, response) => {
  try {
    response.sendFile(__dirname + '/index.html')
  } catch (err) {
    handleError(err, response)
  }
})


