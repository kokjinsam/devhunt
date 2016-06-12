export default {
  login({ Meteor }) {
    Meteor.loginWithPassword('default@devhunt.io', 'default1234', (err) => {
      if (err) {
        console.log(err);
      }

      console.log(Meteor.userId());
    });
  },
};
