const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/User');

let api;

beforeAll(async () => {
  api = await beforeAction();
});

afterAll(() => {
  afterAction();
});

test('User | create', async () => {
  const res = await request(api)
    .post('/public/user')
    .set('Accept', /json/)
    .send({
      email: 'martin@mail.com',
      password: 'securepassword',
      password2: 'securepassword',
    })
    .expect(200);

  expect(res.body.user).toBeTruthy();

  const user = await User.findByPk(res.body.user.id);

  expect(user.id).toBe(res.body.user.id);
  expect(user.email).toBe(res.body.user.email);

  await user.destroy();
});

test('User | login', async () => {
  const user = await User.create({
    email: 'martin@mail.com',
    password: 'securepassword',
  });

  const res = await request(api)
    .post('/public/login')
    .set('Accept', /json/)
    .send({
      email: 'martin@mail.com',
      password: 'securepassword',
    })
    .expect(200);

  expect(res.body.token).toBeTruthy();

  expect(user).toBeTruthy();

  await user.destroy();
});

test('User | get all (auth)', async () => {
  const user = await User.create({
    email: 'martin@mail.com',
    password: 'securepassword',
  });

  const res = await request(api)
    .post('/public/login')
    .set('Accept', /json/)
    .send({
      email: 'martin@mail.com',
      password: 'securepassword',
    })
    .expect(200);

  expect(res.body.token).toBeTruthy();

  const res2 = await request(api)
    .get('/private/users')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.users).toBeTruthy();
  expect(res2.body.users.length).toBe(1);

  await user.destroy();
});
