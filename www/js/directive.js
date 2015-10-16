angular.module('starter.directives', [])
.directive('resize', function ($window) {
  return function (scope, element) {
    var w = angular.element($window);
    scope.getWindowDimensions = function () {
      return { 'h': w.height(), 'w': w.width() };
    };
    scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
      scope.windowHeight = newValue.h;
      scope.windowWidth = newValue.w;
      scope.top = newValue.h *0.85;
      scope.right = newValue.w*0.45;
      scope.style = function () {

      };

    }, true);

    w.bind('resize', function () {
      scope.$apply();
    });
  }
})
.directive('resizeGo', function ($window) {
  return function (scope, element) {
    var w = angular.element($window);
    scope.getWindowDimensions = function () {
      return { 'h': w.height(), 'w': w.width() };
    };
    scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
      scope.windowHeight = newValue.h;
      scope.windowWidth = newValue.w;
      scope.top1 = newValue.h *0.85;
      scope.right1 = newValue.w*0.1;
      scope.style = function () {

      };

    }, true);

    w.bind('resizeGo', function () {
      scope.$apply();
    });
  }
}).directive('backImg', function(){
    return function(scope, element, attrs){
      var url = attrs.backImg;
      element.css({
        'background-image': 'url(' + url +')',
        'background-size' : 'cover'
      });
    };
  }).directive('pukimak', function ($window) {
    return function (scope, element) {
      var w = angular.element(scope);
      scope.getWindowDimensions = function () {
        return { 'h': scope.url };
      };
      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
        scope.style = function () {

        };
        element.css({
          'background-image': 'url(' + scope.url +')',
          'background-size' : 'cover'
        });

      }, true);

      w.bind('pukimak', function () {
        scope.$apply();
      });
    }
  })
