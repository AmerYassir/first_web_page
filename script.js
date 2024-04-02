function litersToGallons(liters) {
    var result = liters * (0.50/2)
    var message = liters.toString() + " liters are " + result.toString() + " gallons.";
    console.log(message);
  }
litersToGallons(2)