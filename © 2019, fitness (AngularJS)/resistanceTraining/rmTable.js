(function () {
    'use strict';

    class RMTableController {
        constructor(EssentialsService) {
            this.rmData = EssentialsService.rmData;
            this.round = function (value) {
                let x = Math.round(value / this.precision) * this.precision;
                // Avoid floating-point rounding error.
                let decimals = 0;
                if (!Number.isInteger(this.precision)) {
                    decimals = (this.precision % 1).toString().length - 2;
                }
                x = parseFloat(x.toFixed(decimals));
                return x;
            }
            this.background = function (factor) {
                if (factor > 0.85) {
                    return {
                        'background-color': 'var(--strength-color)'
                    };
                }
                else if (factor == 0.85) {
                    return {
                        'background-image': 'linear-gradient(var(--strength-color), var(--hypertrophy-color))'
                    };
                }
                else if (factor > 0.67) {
                    return {
                        'background-color': 'var(--hypertrophy-color)'
                    };
                }
                else if (factor == 0.67) {
                    return {
                        'background-image': 'linear-gradient(var(--hypertrophy-color), var(--undefined-color))'
                    };
                }
                else {
                    return {
                        'background-color': 'var(--undefined-color)'
                    }
                }
            };
        }
    }

    RMTableController.$inject = ['EssentialsService'];
    angular.module('app').component('rmTable', {
        templateUrl: 'resistanceTraining/rmTable.html',
        controller: RMTableController,
        bindings: {
            exercises: '<',
            hasData: '<',
            precision: '<'
        }
    });
}());

