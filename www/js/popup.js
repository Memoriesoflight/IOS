angular.module('starter', ['ionic'])

.controller('PlaylistsCtrl', function($scope, $ionicPopup, $timeout) {
  $scope.data = {}

  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    var alertPopup = $ionicPopup.alert({
        title: 'Company Name',
        template: 'Graph'
      
    });
    alertPopup.then(function(res) {
      console.log('Company Details');
    });
  };
});