angular.module('ngAppDemo', [])
.component('remoteBoardControls', {
    bindings: {
      deviceInformation: '='
    },
    templateUrl: 'remote-board-controls.html'
  }).controller('ngAppDemoController', function($scope) {
});
