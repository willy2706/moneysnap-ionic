angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MainCtrl', function ($scope, $state) {
    $scope.snap = function() {
      $state.go('snap');
    }
})
.controller('SnapCtrl', function($scope, $state, Camera, $window) {
    $scope.wd = {};
    $scope.url = 'img/snap.png';
    $scope.showinput = false;
    $scope.img = 'http://placekitten.com/g/250/300';
    $scope.getPhoto = function() {
      Camera.getPicture({
        quality: 75,
        targetWidth: 720,
        //targetHeight: 1024,
        correctOrientation: true,
        saveToPhotoAlbum: false
      }).then(function (imageURI) {
        $scope.url = imageURI;
        $scope.showinput = true;
        console.log(imageURI);
      }, function (err) {
        console.err(err);
      });
    };
  })

  .controller('CategoriesCtrl', function($scope, $state, Camera, $window) {
  });
