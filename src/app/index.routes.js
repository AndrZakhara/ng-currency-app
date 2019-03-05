'use strict';


import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


    $stateProvider
        .state({
          name: 'contacts',
          url: '/contacts',
          template: '<h3>Contact page</h3>'
        })
        .state({
          name: 'about',
          url: '/about',
          template: '<h3>About page</h3>'
        })
        .state('async', {
          url: '/async',
          templateUrl: asyncTemplate,
          controller: 'asyncController',
          resolve: {
            asyncPreloading: resolverProvider.asyncPagePrealoading
          }
        });


  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

