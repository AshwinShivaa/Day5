class UberPriceCalculator {
    constructor() {
      // Professionally refined values for pricing parameters
      this.baseFare = 75;
      this.costPerKilometer = 17;
      this.costPerMinute = 3.2;
      this.bookingFee = 35;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the cost based on distance and time
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      // Calculate the total price including base fare and booking fee
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 6.0; // Distance in kilometers
  const timeInMinutes = 10; // Time in minutes
  
  // Calculate and log the professionally refined estimated Uber price in INR
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Uber price in INR: ₹${estimatedPriceINR}`);
  