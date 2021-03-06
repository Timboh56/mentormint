import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var currentUser = this.get('current-user.model');
    //return currentUser.get('answers');
    return this.store.query('answer', { user_id: currentUser.id });
  }
});
