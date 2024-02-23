class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    get radiusCircle() {
      return this.radius;
    }
  
    set radiusCircle(radius) {
      this.radius = radius;
    }
  
    get colorCircle() {
      return this.color;
    }
  
    set colorCircle(color) {
      this.color = color;
    }
  
    get toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
  
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example usage
  const circle1 = new Circle(1.0, "red");
  
  console.log("Initial Radius:", circle1.radiusCircle);
  circle1.radiusCircle = 2.2;
  console.log("Updated Radius:", circle1.radiusCircle);
  
  console.log("Initial Color:", circle1.colorCircle);
  circle1.colorCircle = "blue";
  console.log("Updated Color:", circle1.colorCircle);
  
  console.log("String Representation:", circle1.toString);
  
  console.log("Area:", circle1.areaCircle);
  
  console.log("Circumference:", circle1.circumferenceCircle);
  