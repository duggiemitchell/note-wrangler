//RESTful backend w/ $resource //
angular.module('NoteWrangler')
.controller('UsersIndexController',function(User, $scope) {
  // returns all note entries //
  $scope.users = User.query();
 });
