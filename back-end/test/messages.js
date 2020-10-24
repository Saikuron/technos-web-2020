
const supertest = require('supertest')
const app = require('../lib/app')
const db = require('../lib/db')

describe('messages', () => {

  beforeEach( async () => {
    await db.admin.clear()
  })

  it('list empty', async () => {
    // Create a channel
    const {body: channel} = await supertest(app)
    .post('/channels')
    .send({name: 'channel 1'})
    // Get messages
    const {body: messages} = await supertest(app)
    .get(`/channels/${channel.id}/messages`)
    .expect(200)
    messages.should.match([])
  })

  it('list one message', async () => {
    // Create a channel
    const {body: channel} = await supertest(app)
    .post('/channels')
    .send({name: 'channel 1'})
    // and a message inside it
    await supertest(app)
    .post(`/channels/${channel.id}/messages`)
    .send({content: 'Hello ECE'})
    // Get messages
    const {body: messages} = await supertest(app)
    .get(`/channels/${channel.id}/messages`)
    .expect(200)
    messages.should.match([{
      creation: (it) => it.should.be.approximately(Date.now(), 1000),
      content: 'Hello ECE'
    }])
  })

  it('add one element', async () => {
    // Create a channel
    const {body: channel} = await supertest(app)
    .post('/channels')
    .send({name: 'channel 1'})
    // Create a message inside it
    const {body: message} = await supertest(app)
    .post(`/channels/${channel.id}/messages`)
    .send({content: 'Hello ECE'})
    .expect(201)
    message.should.match({
      creation: (it) => it.should.be.approximately(Date.now(), 1000),
      content: 'Hello ECE'
    })
    // Check it was correctly inserted
    const {body: messages} = await supertest(app)
    .get(`/channels/${channel.id}/messages`)
    messages.length.should.eql(1)
  })

  // it('two messages, two channels', async () => {
  //   const {body: channel1} = await supertest(app)
  //   .post('/channels')
  //   .send({name: 'channel 1'})
  //   const {body: channel2} = await supertest(app)
  //   .post('/channels')
  //   .send({name: 'channel 2'})
  //
  //   await supertest(app)
  //   .post(`/channels/${channel1.id}/messages`)
  //   .send({content: '1st Message'})
  //   await supertest(app)
  //   .post(`/channels/${channel2.id}/messages`)
  //   .send({content: '2nd Message'})
  //
  //   const {body: messages1} = await supertest(app)
  //   .get(`/channels/${channel1.id}/messages`)
  //   .expect(200)
  //   const {body: messages2} = await supertest(app)
  //   .get(`/channels/${channel2.id}/messages`)
  //   .expect(200)
  //
  //   messages1.should.match([{
  //     channel_id: channel1.id
  //   }])
  //   messages2.should.match([{
  //     channel_id: channel2.id
  //   }])
  // })

})
