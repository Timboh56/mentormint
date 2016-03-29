import Ember from 'ember';

export default Ember.Mixin.create({
  start: function() {
    $('.loading-container').removeClass('hide');
  },

  stop: function() {
    $('.loading-container').addClass('hide')
  }
});