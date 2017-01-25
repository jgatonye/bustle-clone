import Ember from 'ember';

export default Ember.Component.extend({
	items: [],
	actions: {
		addList: function(){
			var moreItems= this.get('addItem');

				// console.log(moreItems);

			this.get('items').pushObject(moreItems);	
		}
	}
});
