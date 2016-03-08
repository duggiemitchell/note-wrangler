angular.module('NoteWrangler')
.directive('title', function($timeout) {
  return function(scope, element, attrs) {
    $timeout(function() {
      $(element).tooltip();
    });

    scope.$on('$destroy', function() {
      $(element).tooltip('destroy');
    })
  }
});

/*
bootstrap tooltip directive
$timeout prevents parsing DOM before data is available
$destroy method on scope cleans up after event listerners from the tooltip method
*/
