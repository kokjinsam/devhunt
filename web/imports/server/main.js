import { Meteor } from 'meteor/meteor';
import createDefaultUser from './configs/createDefaultUser';
import './methods/sign_up';

Meteor.startup(() => {
  createDefaultUser();
});
