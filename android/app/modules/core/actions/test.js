export default {
  meteorCall({ Meteor }) {
    console.log(Meteor);
    console.log('woohoo');

    Meteor.call('Users.methods.signUp', (err, res) => {
      console.log('hey');
      if (err) {
        console.log(err);
      }

      if (res) {
        console.log(res);
      }
    });
  },
};
