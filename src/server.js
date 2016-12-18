const bodyParser = require('body-parser')
const fs = require('fs')
const express = require('express')
const path = require('path')
const Promise = require('bluebird')

const dbPath = path.join(__dirname, '../db.json')

// Promisify all the things!!!11
Promise.promisifyAll(fs)

// Express instance
const app = express()

// Static files middleware
app.use(express.static(path.join(__dirname, '../build')))

app.get('/members', (req, res) => {
  fs.readFileAsync(dbPath, 'utf-8')
    .then(db => {
      console.log('db', typeof db, db)
      res.json(JSON.parse(db).members)
    })
    .catch(console.log)
})

app.put('/members', bodyParser.json(), function (req, res) {
  console.log('req.body', typeof req.body, req.body)
  fs.writeFileAsync(dbPath, JSON.stringify({members: req.body}))
    .then(() => res.end())
})

app.listen(process.env.PORT || 3000, () => console.log('Running'))
