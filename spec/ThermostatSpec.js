'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat._temperature).toEqual(20);
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increase in temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i=0; i < 11; i++) {
    thermostat.down();
    };
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a powersaving mode by default', function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });
  
  it('can turn off the powersaving mode', function() {
    thermostat.changeSavingMode();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('can turn off and on the powersaving mode', function() {
    thermostat.changeSavingMode();
    thermostat.changeSavingMode();
    expect(thermostat.powerSavingMode).toEqual(true);
  });

});