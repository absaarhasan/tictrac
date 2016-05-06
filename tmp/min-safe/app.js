'use strict';

(function() {

  angular.module('tt', ['ui.router', 'tt.tweets'])

      .config(['$urlRouterProvider' ,function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

      }])


})();


