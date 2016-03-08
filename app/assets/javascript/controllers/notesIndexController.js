//RESTful backend w/ $resource //
angular.module('NoteWrangler')
.controller('NotesIndexController',['Note','$scope',function(Note, $scope) {
  // returns all note entries //
  $scope.notes = Note.query();
  window.sc = $scope;

}]);
