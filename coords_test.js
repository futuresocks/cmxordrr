
let home = [55.9259648,-4.168544];
let work = {location: "work", coords: [55.8653864, -4.2600473]};
let codebase = {location: "codebase", coords: [55.9471549,-3.203891]};
let lenzieMeadow = {location: "lenzie meadow", coords: [55.9251532,-4.1660446]};

locations = [work, codebase]

function distance(start, end) {
  return Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2);
}

const closest = locations.reduce((min, location) => {
  if(distance(home, location.coords) < min.distance) min.location = location;
  return min;
}, {location: locations[0], distance: distance(home, locations[0].coords)}.location);


console.log(closest);
