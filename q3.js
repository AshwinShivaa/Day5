class Person {
    constructor(firstname, lastname, Dob, location) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.Dob = Dob;
      this.location = location;
    }
  }
  
  // Updated instances of the Person class with new names
  const person1 = new Person("Alice", "Johnson", "2-06-1996", "New York");
  const person2 = new Person("Bob", "Smith", "1-1-1998", "Los Angeles");
  const person3 = new Person("Charlie", "Brown", "9-10-1995", "Chicago");
  const person4 = new Person("David", "Lee", "7-10-2001", "San Francisco");
  const person5 = new Person("Eva", "Williams", "8-7-1995", "Seattle");
  
  // Log individual person details
  console.log("Person 1:");
  console.log(person1.firstname);
  console.log(person1.lastname);
  console.log(person1.Dob);
  console.log(person1.location);
  
  console.log("Person 2:");
  console.log(person2.firstname);
  console.log(person2.lastname);
  console.log(person2.Dob);
  console.log(person2.location);
  
  console.log("Person 3:");
  console.log(person3.firstname);
  console.log(person3.lastname);
  console.log(person3.Dob);
  console.log(person3.location);
  
  console.log("Person 4:");
  console.log(person4.firstname);
  console.log(person4.lastname);
  console.log(person4.Dob);
  console.log(person4.location);
  
  console.log("Person 5:");
  console.log(person5.firstname);
  console.log(person5.lastname);
  console.log(person5.Dob);
  console.log(person5.location);
  
  // Log all person names using template string
  console.log(`All the Person Names are:
  "person1": ${person1.firstname}
  "person2": ${person2.firstname}
  "person3": ${person3.firstname}
  "person4": ${person4.firstname}
  "person5": ${person5.firstname}`);
  