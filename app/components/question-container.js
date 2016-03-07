import Ember from 'ember';

export default Ember.Component.extend({
  questionIsBookmarked: Ember.computed('question.bookmarks.content.[]', function() {
    var currentUserId = this.get('current-user.model.id');
    return this.get('question.bookmarks.content.[]').filterBy('user_id', currentUserId);
  }),

  goToQuestionSet: (function() {
    return this.get('goToQuestion') != null;
  }).property('goToQuestion'),

  actions: {

    unbookmarkQuestion(question) {

    },

    goToQuestion(id) {
      this.sendAction('goToQuestion', id);
    },

    bookmarkQuestion(question) {
      var currentUser = this.get('current-user.model');
      var bookmark = this.store.createRecord('bookmark', {
        bookmarkable: question,
        user: currentUser
      });
      bookmark.save();
    },

    toggleAnswers() {
      this.toggleProperty('showAnswers');
    },

    getComments(commentableId, commentableType) {
      var comments = this.sendAction('getComments', commentableId, commentableType);
    },

    postComment(comment) {
      var comment = this.sendAction('postComment', comment);
    }
  }
});
