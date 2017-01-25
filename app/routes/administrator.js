import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        saveBook3(params) {
            var newBook = this.store.createRecord('book', params);
            newBook.save();
            this.transitionTo('index');
        }
    }
});
