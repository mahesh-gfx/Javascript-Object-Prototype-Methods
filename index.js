//Object Constructor
function car(type, make, model, variant, age, drive, color) {
  this.bodyType = type;
  this.manufacturer = make;
  this.model = model;
  this.variant = variant;
  this.age = age;
  this.driveTrain = drive;
  this.color = color;
}
car.prototype.mileage;
car.prototype.ncapRating;

const nexon = new car(
  "Compact SUV",
  "Tata",
  "Nexon",
  "Delta",
  1,
  "FWD",
  "blue"
);
nexon.ncapRating = 4.5;
console.log("Created Object 'nexon' based on Object Prototype 'car'");
console.log(nexon);

const xuv = new car(
  "Compact SUV",
  "Mahindra",
  "XUV 500",
  "X7",
  1,
  "FWD",
  "White"
);
console.log("Created Object 'xuv' based on Object Prototype 'car'");
console.log(xuv);

console.log(
  "---------------------------------------------------------------------------------------"
);

console.log("Lets try some built-in Object prototype methods...");
console.log(
  "---------------------------------------------------------------------------------------"
);

console.log(
  "Using hasOwnProperty() method to check if a key is present in the object"
);
console.log("'model' key in 'nexon'", nexon.hasOwnProperty("model"));
console.log("'model' key in 'xuv'", xuv.hasOwnProperty("model"));
console.log("'make' key in 'nexon'", nexon.hasOwnProperty("make"));
console.log("'make' key in 'xuv'", xuv.hasOwnProperty("make"));

console.log(
  "---------------------------------------------------------------------------------------"
);

console.log(
  "Using isPrototypeOf() method to check if 'car' is Prototype of 'nexon'"
);
console.log(car.prototype.isPrototypeOf(nexon));

console.log(
  "---------------------------------------------------------------------------------------"
);

console.log(
  "Using propertyIsEnumerable() method on object 'nexon' to check if 'ncapRating' is Enumerable"
);
console.log(nexon.propertyIsEnumerable("ncapRating"));

console.log(
  "---------------------------------------------------------------------------------------"
);

const date = new Date();
console.log(date);
console.log(
  "using toLocaleString() method on obejct 'date' to conver the date to Locale String"
);
console.log(date.toLocaleString());

console.log(
  "---------------------------------------------------------------------------------------"
);
console.log(
  "using toString() method to convert an element from an object to string"
);
console.log(nexon.manufacturer.toString());

console.log("using toString() method on an object");
console.log(nexon.toString());
console.log(
  "---------------------------------------------------------------------------------------"
);
