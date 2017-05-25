angular.module('mainWindow', [])
.controller('MainController', 
	function MainController($scope) {
		// get last user from cookie and load data from DB
		$scope.active_profile = {
				name : 'Zoli',
				registrationDate: '2017-04-10 21:19:36',
				lastLesson: 0,
				lastExercise: 0
		};
		$scope.new_profile = {
				name : 'Új...',
				registrationDate: null,
				lastLesson: 0,
				lastExercise: 0
		};
		$scope.profiles = [$scope.active_profile, $scope.new_profile];
		$scope.profil = $scope.active_profile.name;
		
		$scope.selectProfile = function() {
			console.log("Profile selected: "+$scope.profil);
		};
	});