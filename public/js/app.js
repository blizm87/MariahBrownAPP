(function(){
  'use strict';
  console.log('I am mBrownApp module');
  angular
    .module('mBrownApp', ['ngRoute'])
    .config(routes)
    .controller('mainCtrl', ['$scope', '$http', '$timeout', '$window', mainCtrl])


    //  CONTROLLER FUNCTION HANDLER SECTION


    function mainCtrl($scope, $http, $timeout, $window){
      console.log('Main Controller working')

    } //  END MAINCTRL -  CONTROLLER

    //  ANGULAR ROUTE HANDLER SECTION
    function routes($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: '../partials/index.html',
          controller: 'mainCtrl'
        })

        .otherwise({
          rediretTo: '/'
        })
    }

})();
