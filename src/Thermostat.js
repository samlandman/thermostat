'use strict';

class Thermostat{
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this._temperature = 20;
    this.powerSavingMode = true;
  };
  getCurrentTemperature() {
    return this._temperature;
  };

  up() {
    this._temperature += 1 ;
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
      } {
      this._temperature -= 1;
    };
  };

  isMinimumTemperature() {
    return(this._temperature === this.MINIMUM_TEMPERATURE);
  };

  PowerSavingModeIsOn() {
    return this.powerSavingMode === true;
  };

  turnoffSavingMode() {
    this.powerSavingMode = false;
  };

  turnOnSavingMode() {
    this.powerSavingMode = true;
  };

};