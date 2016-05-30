angular.module('ngAppDemo', [])
.directive('remoteBoardControls', function() {
  return {
    restrict: 'E',
    scope: {
      deviceInformation: '=deviceInformation'
    },
    templateUrl: 'remote-board-controls.html'
  };
}).controller('ngAppDemoController', function($scope) {
});
