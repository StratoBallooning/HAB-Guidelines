App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;

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
	});
	this.route('titles');
	this.route('parts');
	this.route('sections');
});

App.TitlesRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('title');
	}
});
App.PartsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('part');
	}
});
App.SectionsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('section');
	}
});

App.FaaRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('title', '14');
	}
});
App.FccRoute = Ember.Route.extend({});
App.FccLicensedRoute = Ember.Route.extend({});
App.FccUnlicensedRoute = Ember.Route.extend({});

App.Title = DS.Model.extend({
	name: DS.attr('string'),
	number: DS.attr('number'),
	parts: DS.hasMany('part')
});

App.Part = DS.Model.extend({
	title: DS.belongsTo('title'),
	name: DS.attr('string'),
	number: DS.attr('number'),
	sections: DS.hasMany('section')
});

App.Section = DS.Model.extend({
	part: DS.belongsTo('part'),
	name: DS.attr('string'),
	number: DS.attr('number'),
	body: DS.attr('string'),
	comments: DS.attr('string')
});

App.Title.FIXTURES = [
	{id: '14', name: 'Aeronautics and Space', number: 14}
];

App.Part.FIXTURES = [
	{id: '14.101', name: 'Moored balloons, kites, amateur rockets and unmanned free balloons', number: 101, title: '14'},
	{id: '14.71', name: 'Designation of Class A, B, C, D, and E airspace areas', number: 71, title: '14'}
];

App.Section.FIXTURES = [
	{id: '14.101.1', name: 'Applicability', number: 1, part: '14.101'}
];