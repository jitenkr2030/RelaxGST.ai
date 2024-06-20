const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const CRM = require('../models/CRM');

describe('CRM API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should create a new CRM record', async () => {
    const res = await request(app)
      .post('/api/crm')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should fetch all CRM records', async () => {
    const res = await request(app)
      .get('/api/crm')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
