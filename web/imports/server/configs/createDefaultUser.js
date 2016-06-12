import { Meteor } from 'meteor/meteor';
import createAccount from '../libs/createAccount';

function createDefaultUser() {
  const email = 'default@devhunt.io';
  const isDefaultUserExist = Meteor.users.find({
    'emails.address': email,
  }).fetch().length !== 0;

  if (!isDefaultUserExist) {
    const defaultUser = {
      email,
      password: 'default1234',
    };

    createAccount(defaultUser);
  }
}

export default createDefaultUser;
