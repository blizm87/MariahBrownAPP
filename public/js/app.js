(function(){
  'use strict';
  console.log('I am mBrownApp module');
  angular
    .module('mBrownApp', ['ngRoute'])
    .config(routes)
    .controller('mainCtrl', ['$scope', '$http', '$timeout', '$window', mainCtrl])
    .controller('indexCtrl', indexCtrl)

    //  CONTROLLER FUNCTION HANDLER SECTION


    function indexCtrl(){
      console.log('Index Controller working')

    } // END INDEXCTRL - CONTROLLER

    function mainCtrl($scope, $http, $timeout, $window){
      console.log('Main Controller working')

      let $mainCont = $('#mainContainer')
      let $body = $('body')
      let $navbar = $('#navbar')
      let navbarHeight = $navbar.outerHeight();

      //  POSITIONS MAINCONTAINER DIRECTLY BENEATH NAVBAR
      $mainCont.css({
        'margin-top': navbarHeight + 'px'
      })

    } //  END MAINCTRL -  CONTROLLER

    //  ANGULAR ROUTE HANDLER SECTION
    function routes($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: '../partials/index.html',
          controller: 'indexCtrl'
        })

        .otherwise({
          rediretTo: '/'
        })
    }

})();
