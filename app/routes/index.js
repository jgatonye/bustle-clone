import Ember from 'ember';

export default Ember.Route.extend({


actions: {
        saveFashion3(params) {
            var newFasion = this.store.createRecord('fashion', params);
            newFasion.save();
            this.transitionTo('index');
        }
    }

});
