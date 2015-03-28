var dropdown = $ionicDropdown.create({
  templateUrl: 'my-template.html',
  controller: 'MyCtrl'
})
dropdown.show(targetEl, { placement: 'left' });
dropdown.hide();
dropdown.show(); //show on same element as before
dropdown.remove(); //destroys & cleans up dropdown

$scope.dropdown = dropdown;