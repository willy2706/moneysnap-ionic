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

    $scope.analyze = function() {
      $state.go('analyze');
    }
    $scope.expenses = function() {
      $state.go('expenses');
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

    $scope.budget = function() {
      $state.go('budget')
    }

    $scope.expenses = function() {
      $state.go('expenses')
    };

    $scope.analyze = function() {
      $state.go('analyze');
    };

    $scope.cb = function(){
      $state.go('categories')
    }
    //Camera.getPicture({
    //  quality: 75,
    //  targetWidth: 720,
    //  //targetHeight: 1024,
    //  correctOrientation: true,
    //  saveToPhotoAlbum: false
    //}).then(function (imageURI) {
    //  $scope.url = imageURI;
    //  $scope.showinput = true;
    //  console.log(imageURI);
    //}, function (err) {
    //  console.err(err);
    //});
  })

.controller('CategoriesCtrl', function($scope, $state, Camera, $window) {
  $scope.reminder = function() {
    $state.go('reminder')
  }
})
.controller('ReminderCtrl', function($scope, $state, Camera, $window) {
  $scope.snap = function() {
    console.log("asdf")

    $state.go('snap');
  }
    console.log("asdf")
})
.controller('BudgetCtrl', function($scope, $state, Camera, $window) {
    $scope.snap = function() {
      $state.go('snap');
    }
})
.controller('AnalyzeCtrl', function($scope, $state, $ionicPopover) {
    $scope.snap = function () {
      $state.go('snap');
    };
    $ionicPopover.fromTemplateUrl('templates/popover.html', {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.settings = function() {
      $state.go('settings');
    }
    $scope.wishlist = function() {
      $state.go('wishlist');
    }
})
.controller('SettingsCtrl', function ($scope, $state) {
  $scope.onSwipeRightSettings = function(){

  }
})

.controller('WishlistCtrl', function ($scope, $state) {
  $scope.show1 = false;
  $scope.expand = function(field) {
    if ($('#'+field).css('display') == 'none') {
      //$('#'+field).hide();
      $('#'+field).show();
    } else {
      $('#'+field).hide();
    }
  }
  $scope.insert = function(id) {
    if ($('#'+id).next().is('img')) {
      $('#'+id).next().remove()
    } else {
      $('<img src="img/detailwishlist.png" class="wishlistdetail">').insertAfter($('#'+id));
    }
  }

  $scope.expenses = function(){
    $state.go('expenses');
  }

  $scope.analyze = function() {
    $state.go('analyze');
  }

  $scope.addwishlist = function() {
    $state.go('addwishlist')
  }
})
.controller('AddWishlistCtrl', function ($scope, $state,$ionicPopover) {
  $scope.cancel = function() {
    $state.go('wishlist');
  }
  $scope.ok = function() {
    $state.go('wishlist')
  }
})
.controller('YourWishlistCtrl', function($scope, $state) {

})
.controller('ExpensesCtrl', function($scope, $state) {
    $scope.snap = function() {
      $state.go('snap');
    }

    $scope.wishlist = function() {
      $state.go('wishlist');
    }

    $scope.expand = function(id) {
      //console.log("sdf")
      if ($('#'+id).children().length <= 2) {
        $('#'+id).append('<img class="expensesdetail" src="img/detailexpenses.png"/>');
      } else {
        $('#'+id).children().last().remove()
      }
    }
})
.controller('AppCtrl', function ($scope, $state, $ionicModal, $timeout, $q) {
  $scope.jsBuffer = {
    Image: undefined
  };
  $scope.tt = 'b';
  $scope.formControls =
  {
    captureEnabled : true,
    liveRefreshEnabled : true
  };
  $scope.cameraPlus = null;
  $scope.cameraPlus = ( cordova && cordova.plugins && cordova.plugins.CameraPlus ) ? cordova.plugins.CameraPlus : null;


  window.ionic.Platform.ready(function() {
    console.log('Ionic ready... Loading plugins.');
    $scope.tt = 'a';
    $scope.cameraPlus = ( cordova && cordova.plugins && cordova.plugins.CameraPlus ) ? cordova.plugins.CameraPlus : null;
    $scope.switchCapture(true);
  });


  $scope.switchCapture = function (enabled)
  {
    if (enabled)
    {
      $scope.startCapture();
    }
    else
    {
      $scope.stopCapture();
    }
  };

  $scope.startCapture = function() {
    if ( $scope.cameraPlus ) {
      // call this API to stop web server
      $scope.cameraPlus.startCamera(function(){
        console.log('Capture Started');
        $scope.tt = 'ok';
        // already call once to fill the buffer since it's always delayed of 1 frame...
        $scope.refreshPreview();
      },function( error ){
        console.log('CameraServer StartCapture failed: ' + error);
        $scope.tt = 'CameraServer StartCapture failed: ' + error;
      });
    } else {
      $scope.tt = 'err1';
      console.log('CameraServer StartCapture: CameraPlus plugin not available/ready.');
    }
  };

  $scope.stopCapture = function() {

    if ( $scope.cameraPlus ) {
      // call this API to stop web server
      $scope.cameraPlus.stopCamera(function(){
        console.log('Capture Stopped');
      },function( error ){
        console.log('CameraServer StopCapture failed: ' + error);
      });
    } else {
      console.log('CameraServer StopCapture: CameraPlus plugin not available/ready.');
    }
  };

  $scope.switchLiveRefresh = function (enabled)
  {
    //if (enabled)
    //{
    $scope.asyncGetImage().then();
    //}
    //else
    //{
    //  // stops automatically when !$scope.formControls.liveRefreshEnabled
    //}
  };
  $scope.asyncGetImage = function() {
    return $q(function(resolve, reject) {

      $scope.cameraPlus.getJpegImage(function(jpgData)
      {
        $scope.jsBuffer.Image = jpgData;
        //if ($scope.jsBuffer.Image != jpgData)
        //{
        //  $scope.jsBuffer.Image = jpgData;
        //}
        //else
        //{
        //  // it's the same image, we trig the refresh manually.
        //  $scope.refreshPreview();
        //}

        resolve(true);

      }, function()
      {
        console.log('getImage failed');
        reject('getImage failed');
      });
    });
  };

  $scope.getImage = function() {
    $scope.tt = 'called';
    $scope.asyncGetImage().then(function()
    {
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    });
  };

  $scope.refreshPreview = function () {
    //console.log("refreshPreview");
    if ($scope.formControls.liveRefreshEnabled) {
      setTimeout(function () {
        $scope.$apply(function () {
          $scope.asyncGetImage().then();
        });
      }, 40);
    }
  };
  $scope.switchCapture(true);

})

;
