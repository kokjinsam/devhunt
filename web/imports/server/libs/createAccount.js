import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

function createAccount({ email, password }) {
  const newAccountId = Accounts.createUser({
    email,
    password,
  });

  if (newAccountId) {
    return newAccountId;
  }

  const error = '[Function libs/createAccount] Unable to create account';
  throw new Meteor.Error(404, error);
}

export default createAccount;
