const express = require('express')
const { WebhookClient } = require('discord.js');
require('dotenv').config()
const app = express()
const port = 3000

app.use(express.json())

const webhook = new WebhookClient({ url: process.env.DISCORD_WEBHOOK });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/groupme', (req, res) => {
  // console.log(req.body.attachments)
  req.body.attachments.filter(elem => elem.type === 'image')
    .forEach((elem) => {
      webhook.send({
        "embeds": [{
          "image": {
            "url": elem.url
          }
        }]
      })
        .then(console.log)
        .catch(console.error)
    })
  res.send('groupme route received post ping')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})