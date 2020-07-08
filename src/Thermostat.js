'use strict';

class Thermostat{
  constructor() {
    this._temperature = 20;
  };
  getCurrentTemperature() {
    return this._temperature;
  };

  up() {
    this._temperature += 1 ;
  };
};