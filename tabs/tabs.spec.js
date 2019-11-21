const request = require('supertest');
const db = require('../database/dbConfig');
const server = require('../api/server');


describe('GET /api/tabs/:id', () => {
  let token;
  let id;
  beforeEach(async () => {
    await db('users').truncate();
    let res = await request(server).post('/api/auth/register')
    .send({username: "jordan", password: "1234"})
    token = res.body['token']
    id = res.body['id'];
  })
  it('should return 200 status with token', async() => {
    let res = await request(server)
    .get(`/api/tabs/${id}`)
    .set('authorization', token);
    expect(res.status).toBe(200)
  })
})