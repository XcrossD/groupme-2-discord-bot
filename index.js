const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/groupme', (req, res) => {
  console.log(req)
  console.log(req.body)
  res.send('groupme route received post ping')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})