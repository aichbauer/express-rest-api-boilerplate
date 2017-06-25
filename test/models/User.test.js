const test = require('ava');
const User = require('../../api/models/User');

test.beforeEach(async (t) => {
  await User.create({ // eslint-disable-line
    email: 'martin@mail.com',
    password: 'securepassword',
  }).then((user) => {
    t.context.user = user; // eslint-disable-line
    return t.context.user;
  });
});

test.serial('User is created correctly', async (t) => {
  const sendUser = t.context.user.toJSON();
  // check if user is created
  t.is(t.context.user.email, 'martin@mail.com');
  // check if password is not send to browser
  t.falsy(sendUser.password);

  await t.context.user.destroy();
});

test.serial('User is updated correctly', async (t) => {
  await t.context.user.update({
    email: 'peter@mail.com',
  }).then((user) => {
    t.context.user = user; // eslint-disable-line
    return t.context.user;
  });

  t.is(t.context.user.email, 'peter@mail.com');

  await t.context.user.destroy();
});
