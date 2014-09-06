App = Ember.Application.create();

App.ApplicationView = Em.View.extend({
	initFoundation: function(){
		this.$(document).foundation()
 	}.on('didInsertElement')
 });
