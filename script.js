function litersToGallons(liters) {
    var result = liters * (0.504/2)
    var message = liters.toString() + " liters are " + result.toString() + " gallons.";
    console.log(message);
  }
litersToGallons(2)