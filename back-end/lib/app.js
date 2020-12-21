
const db = require('./db')
const express = require('express')
const cors = require('cors')
const authenticator = require('./authenticator')

const app = express()
const authenticate = authenticator({
  jwks_uri: 'http://127.0.0.1:5556/dex/keys'
})

app.use(require('body-parser').json())
app.use(cors())

app.get('/', (req, res) => {
  res.send([
    '<h1>ECE DevOps Chat</h1>'
  ].join(''))
})

// Channels

app.get('/channels', authenticate, async (req, res) => {
// app.get('/channels', async (req, res) => {
  const channels = await db.channels.list(req)
  res.json(channels)
})

app.post('/channels', authenticate, async (req, res) => {
// app.post('/channels', async (req, res) => {
  const channel = await db.channels.create(req.body.data)
  res.status(201).json(channel)
})

// app.get('/channels/:id', authenticate, async (req, res) => {
app.get('/channels/:id', authenticate, async (req, res) => {
  const channel = await db.channels.get(req.params.id)
  res.json(channel)
})

app.put('/channels/:id', authenticate, async (req, res) => {
  const channel = await db.channels.update(req.body)
  res.json(channel)
})

// Messages

// app.get('/channels/:id/messages', authenticate, async (req, res) => {
app.get('/channels/:id/messages', authenticate, async (req, res) => {
  const messages = await db.messages.list(req.params.id)
  res.json(messages)
})

app.post('/channels/:id/messages', authenticate, async (req, res) => {
// app.post('/channels/:id/messages', async (req, res) => {
  const message = await db.messages.create(req.params.id, req.body.data)
  res.status(201).json(message)
})

app.delete('/channels/:id/messages/:messageCreation', authenticate, async (req, res) => {
  await db.messages.delete(req.params.id, req.params.messageCreation)
  res.status(200)
})

// Users

app.get('/users', authenticate, async (req, res) => {
// app.get('/users', async (req, res) => {
  const users = await db.users.list()
  res.json(users)
})

app.post('/users', authenticate, async (req, res) => {
// app.post('/users', async (req, res) => {
  const user = await db.users.create(req.body.data)
  res.status(201).json(user)
})

// app.get('/users/:id', authenticate, async (req, res) => {
app.get('/users/:id', authenticate, async (req, res) => {
  const user = await db.users.get(req.params.id)
  res.json(user)
})

app.put('/users/:id', authenticate, async (req, res) => {
  const user = await db.users.update(req.headers['userid'], req.body.data)
  res.json(user)
})

module.exports = app
