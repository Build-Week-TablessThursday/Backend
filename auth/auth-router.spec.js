const request = require("supertest");
const db = require("../database/dbConfig");
const server = require("../api/server");

describe("server", function() {
  describe("GET /", function() {
    it("it should return 200 OK", function() {
      //run the server
      //make a GET request to /
      //see that the response coce is 200
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("it should return JSON formatted response", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});

describe("POST /api/auth/register", () => {
  beforeEach(() => db('users').truncate())
  it('register return a status of 200', async() => {
    let res = await request(server).post('/api/auth/register')
    .send({username: 'jordan', password: "1234"})
    expect(res.status).toBe(200)
  })

  it('register returns a token', async() => {
    let res = await request(server).post('/api/auth/register')
    .send({username: 'jordan', password: "1234"})
    expect(res.body).toHaveProperty('token')
  })
  it('should return invalid reqest if there is no user', async() => {
    let res = await request(server).post('/api/auth/register')
    .send({no: "user"})
    expect(res.status).toBe(401)
  })
})

describe("POST /api/auth/login", () => {
  beforeEach(async () => {
    await db('users').truncate()
    await request(server).post('/api/auth/register')
    .send({username: 'jordan', password: "1234"})
  })
  it('should return status code 200', async() => {
    let res = await request(server).post('/api/auth/login')
    .send({username: "jordan", password: "1234"})
    expect(res.status).toBe(200)
  })
  it('should return a token', async()=> {
    let res = await request(server).post('/api/auth/login')
    .send({username: "jordan", password: "1234"})
    expect(res.body).toHaveProperty('token')
  })
})
