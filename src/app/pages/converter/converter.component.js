'use strict';

import ConverterController from './converter.controller';
import convTpl from './converter.html';

export default class MainComponent {
    constructor() {
        this.controller = ConverterController;
        this.templateUrl = convTpl;
    }
}