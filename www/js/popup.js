angular.module('mySuperApp', ['ionic'])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: [
       '<div class="row"><div class="col"><img src="img/man.jpg"></img></div><div  class="col"><input type="text" ng-model=""></div></div>',,'<input type="password" ng-model="">','<input type="password" ng-model="">',]
     title: 'Enter Credentilal',
     
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); 
   }, 30000);
     
   };
});