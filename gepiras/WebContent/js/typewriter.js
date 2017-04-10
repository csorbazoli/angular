angular.module('mainWindow', []).controller('MainController', 
function MainController($scope) {
	// get last user from cookie and load data from DB
	this.active_profile = {
			name : 'Zoli',
			registrationDate: '2017-04-10 21:19:36',
			lastLesson: 0,
			lastExercise: 0
	};
	this.new_profile = {
			name : 'Új...',
			registrationDate: null,
			lastLesson: 0,
			lastExercise: 0
	};
	this.profiles = [this.active_profile, this.new_profile];
	$scope.profil = this.active_profile.name;
	
	this.selectProfile = function() {
		console.log("Profile selected: "+$scope.profil);
	};
});