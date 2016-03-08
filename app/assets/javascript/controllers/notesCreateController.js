angular.module('NoteWrangler').controller('NotesCreateController', function(Note, $scope, $location) {
  //creating a new resource //
  $scope.note = new Note();

  $scope.isSubmitting = false;

  $scope.saveNote = function(note) {
    $scope.isSubmitting = true;
    note.$save()
    .then(function() {
        $location.path('/notes');
    })
    .finally(function(note) {
      $scope.isSubmitting = false;
    });
  }
});
