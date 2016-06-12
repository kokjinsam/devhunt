import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

const signUp = new ValidatedMethod({
  name: 'Users.methods.signUp',
  validate: null,
  run() {
    console.log('yay!');
    return 'hey';
  },
});

export default signUp;
