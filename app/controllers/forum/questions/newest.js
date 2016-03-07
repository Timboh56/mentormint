import Ember from 'ember';

export default Ember.Controller.extend({
  sortedList: function() {
    return Ember.ArrayProxy.create({
      content: this.get('model')
    }).sortBy('createdAt').reverse();
  }.property('model')
});
