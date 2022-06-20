const express = require('express')
const { default: axios } = require('axios');
const FormData = require('form-data');
require('dotenv').config()
const app = express()
const port = 3000

app.use(express.json())

const sendFileToWebhook = async (url) => {
  const filename = url.split('/')
    .at(-1)
    .split('.')
    .slice(0, 2)
    .join('.')
  const getResponse = await axios.get(url, {
    responseType: 'stream'
  })
  const form = new FormData()
  form.append('files[0]', getResponse.data, filename)
  // console.log(form)
  axios.post(process.env.DISCORD_WEBHOOK, form)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/test', (req, res) => {
  const params = req.body
  sendFileToWebhook(params.url)
  // format { url: '' }
  res.send(params)
})

app.post('/groupme', (req, res) => {
  // console.log(req.body.attachments)
  req.body.attachments.filter(elem => elem.type === 'image')
    .forEach((elem) => {
      sendFileToWebhook(elem.url)
    })
  res.send('groupme route received post ping')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})