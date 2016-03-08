angular.module('NoteWrangler').controller('NotesEditController', function($scope, Note, Category, User, $routeParams, $location) {
  //for this id in our route
  $scope.note = Note.get({ id: $routeParams.id });
  $scope.isSubmitting = false;
  //call to categories object //
  $scope.categories = Category.query();
  $scope.users = User.query();

  $scope.saveNote = function(note) {
    $scope.isSubmitting = true;
//submit function to update note edit //
    note.$update().finally(function() {
      $scope.isSubmitting = false;
      $location.path('/notes/'+ note.id);
    });
  }
});
