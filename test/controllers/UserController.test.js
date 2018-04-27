const test = require('ava');
const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/User');

let api;

test.before(async () => {
  api = await beforeAction();
});

test.after(() => {
  afterAction();
});

test.serial('User | create', async (t) => {
  let userId;

  await request(api)
    .post('/public/user')
    .set('Accept', /json/)
    .send({
      email: 'martin@mail.com',
      password: 'securepassword',
      password2: 'securepassword',
    })
    .expect(200)
    .then((res) => {
      t.truthy(res.body.user);
      userId = res.body.user.id;
      return userId;
    });

  await User.findById(userId).then((user) => {
    t.is(user.id, userId);
    t.is(user.email, 'martin@mail.com');
    return user.destroy();
  });
});

test.serial('User | login', async (t) => {
  let testUser;
  await User.create({
    email: 'martin@mail.com',
    password: 'securepassword',
  }).then((user) => {
    testUser = user;
    return testUser;
  });

  await request(api)
    .post('/public/login')
    .set('Accept', /json/)
    .send({
      email: 'martin@mail.com',
      password: 'securepassword',
    })
    .expect(200)
    .then((res) => t.truthy(res.body.token));

  t.truthy(testUser);

  await testUser.destroy();
});

test.serial('User | get all (auth)', async (t) => {
  let userToken;
  let testUser;
  await User.create({
    email: 'martin@mail.com',
    password: 'securepassword',
  }).then((user) => {
    testUser = user;
    return testUser;
  });

  await request(api)
    .post('/public/login')
    .set('Accept', /json/)
    .send({
      email: 'martin@mail.com',
      password: 'securepassword',
    })
    .expect(200)
    .then((res) => {
      t.truthy(res.body.token);
      userToken = res.body.token;
      return userToken;
    });

  await request(api)
    .get('/private/users')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${userToken}`)
    .set('Content-Type', 'application/json')
    .expect(200)
    .then((res) => {
      t.truthy(res.body.users);
      t.is(res.body.users.length, 1);
      return null;
    });

  await testUser.destroy();
});
