App = Ember.Application.create();

App.ApplicationView = Em.View.extend({
	initFoundation: function(){
		this.$(document).foundation()
 	}.on('didInsertElement')
 });

App.ApplicationController = Em.Controller.extend({
	breadCrumb: 'Home'
});

App.Router.map(function() {
	this.route('faa');
	this.resource('fcc', function() {
		this.route('licensed');
		this.route('unlicensed')
	})
});

App.FaaRoute = Ember.Route.extend({});
App.FccRoute = Ember.Route.extend({});
App.FccLicensedRoute = Ember.Route.extend({});
App.FccUnlicensedRoute = Ember.Route.extend({});