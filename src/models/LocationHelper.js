export const LocationHelper = function(startCoords, locations){
  this.startCoords = startCoords;
  this.locations = locations;
}

LocationHelper.prototype.distanceEstimate = function(locationCoords){
  return Math.pow(this.startCoords.lat - locationCoords.lat, 2) + Math.pow(this.startCoords.lng - locationCoords.lng, 2);
}

LocationHelper.prototype.findNearest = function(){
  return this.locations.map(location => {
    location.distance = this.distanceEstimate(location.coords)
    return location;
  }).sort((locationA, locationB) => locationA.distance - locationB.distance)[0];

  // const locationsWithDistances = this.locations.map(location => {
  //   location.distance = this.distanceEstimate(location.coords)
  //   return location;
  // })
  // const sortedLocations = locationsWithDistances.sort((locationA, locationB) => {
  //   locationA.distance - locationB.distance
  // });
  // const nearest = sortedLocations[0];
  // return nearest;
};
