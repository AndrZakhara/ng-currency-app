'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import converterFactory from './services/converter.factory';


validationTestDirective(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);
converterFactory(shared);

export default shared;
