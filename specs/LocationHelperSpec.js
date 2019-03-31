const assert = require('assert');
const LocationHelper = require('../src/models/LocationHelper');

describe('Location Helper', () => {

  let central, queenStreet, falkirkHigh, edinburghWav;

  beforeEach(() => {
    central = {location: "Glasgow Central", coords: {lat: 55.8591118, lng: -4.2602975}};
    queenStreet = {location: "Glasgow Queen Street", coords: {lat: 55.8623761, lng: -4.2533142}};
    falkirkHigh = {location: "Falkirk High", coords: {lat: 55.9949117, lng: -3.8087573}};
    edinburghWav = {location: "Edinburgh Waverley", coords: {lat: 55.9519979, lng: -3.1921589}};
  })

  it('should calculate distance estimates', () => {
    const locator = new LocationHelper(central.coords);
    assert.strictEqual(locator.distanceEstimate(queenStreet.coords), 3614.735891467791);
  })

  it('should return the closest location', () => {
    const locations = [falkirkHigh, edinburghWav];
    const locator = new LocationHelper(queenStreet.coords, locations);
    assert.deepStrictEqual(locator.findNearest(), falkirkHigh);
  })

  it('should return the closest location regardless of compass direction', () => {
    const locations = [central, falkirkHigh, edinburghWav];
    const locator = new LocationHelper(queenStreet.coords, locations);
    assert.deepStrictEqual(locator.findNearest(), central);
  })

})
