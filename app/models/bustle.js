import DS from 'ember-data';

export default DS.Model.extend({
	heading: DS.attr(),
	image: DS.attr(),
	content: DS.attr(),

});
