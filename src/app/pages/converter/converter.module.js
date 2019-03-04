'use strict';

import ConverterComponent from './converter.component';

const converterPageModule = angular.module('converter-module', [
    'ui.router'
])
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('converter', {
                url: '/',
                component: 'converter'
            });
    })
    .component('converter', new ConverterComponent());

export default converterPageModule;
