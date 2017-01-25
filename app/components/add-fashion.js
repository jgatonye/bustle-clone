import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    fashionFormShow() {
      this.set('addNewFashion', true);
    },

    saveFashion1() {
      var params = {
        heading: this.get('heading'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNewFashion', false);
      this.sendAction('saveFashion2', params);
    }
  }
});
