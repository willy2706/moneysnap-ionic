// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services' , 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('m', {
    url: '/m',
    templateUrl: 'templates/m.html',
    controller: 'AppCtrl'
  })
  .state('expenses', {
    url: '/expenses',
    templateUrl: 'templates/expenses.html',
    controller: 'ExpensesCtrl'
  })
  .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
  })
  .state('snap', {
      url: '/snap',
      templateUrl: 'templates/snap.html',
      controller: 'SnapCtrl'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.html',
    controller: 'CategoriesCtrl'
  })
  .state('analyze', {
    url: '/analyze',
    templateUrl: 'templates/analyze.html',
    controller: 'AnalyzeCtrl'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'SettingsCtrl'
  })
  .state('wishlist', {
    url: '/wishlist',
    templateUrl: 'templates/wishlist.html',
    controller: 'WishlistCtrl'
  })
  .state('addwishlist', {
    url: '/addwishlist',
    templateUrl: 'templates/addwishlist.html',
    controller: 'AddWishlistCtrl'
  })
  .state('yourwishlist', {
    url: '/yourwishlist',
    templateUrl: 'templates/yourwishlist.html',
    controller: 'YourWishlistCtrl'
  })
  .state('reminder', {
    url: '/reminder',
    templateUrl: 'templates/reminder.html',
    controller: 'ReminderCtrl'
  })
  .state('budget', {
    url: '/budget',
    templateUrl: 'templates/budget.html',
    controller: 'BudgetCtrl'
  })
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })




  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
