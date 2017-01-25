import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    bookFormShow() {
      this.set('addNewBook', true);
    },

    saveBook1() {
      var params = {
        heading: this.get('heading'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNewBook', false);
      this.sendAction('saveBook2', params);
    }
  }
});
