// Code your solution in this file!


const returnFirstTwoDrivers = function (drivers) {
  array = []
  array.push(drivers[0])
  array.push(drivers[1])
  return array;
};

const returnLastTwoDrivers = function (drivers) {
  array = []
  array.push(drivers[drivers.length -2])
  array.push(drivers[drivers.length -1])
  return array;
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function (i) {
  return function (multiplier) {
  return i * multiplier;
  };
};

const fareDoubler = function (createFareMultiplier) {
  return createFareMultiplier * 2;
};

const fareTripler = function (createFareMultiplier) {
  return createFareMultiplier * 3;
};

const selectDifferentDrivers = function (drivers, fn) {
  return fn (drivers);
}
