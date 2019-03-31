const LocationHelper = function(startCoords, locations){
  this.startCoords = startCoords;
  this.locations = locations;
}

LocationHelper.prototype.distanceEstimate = function(locationCoords){
  return Math.pow(this.startCoords.lat - locationCoords.lat, 2) + Math.pow(this.startCoords.lng - locationCoords.lat, 2);
}

LocationHelper.prototype.findNearest = function(){
  return this.locations.reduce((min, location) => {
    if(this.distanceEstimate(location.coords) < min.distance) min.location = location;
    return min;
  }, {location: this.locations[0], distance: this.distanceEstimate(this.locations[0].coords)}.location);
};


module.exports = LocationHelper;
