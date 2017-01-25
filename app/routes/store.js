import Ember from 'ember';
	var products = [{
  title: "Sunlight",
  description: "San Francisco",
  cost: "Estate",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  title: "Sunlight",
  description: "San Francisco",
  cost: "Estate",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
}, {
title: "Sunlight",
  description: "San Francisco",
  cost: "Estate",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];
export default Ember.Route.extend({
	model(){
		return products;
	}
});
