//Inheritance
class LivingBeing {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name}  eats`);
  }
  drink() {
    console.log(`${this.name}  drinks`);
  }
  sleep() {
    console.log(`${this.name}  sleeps`);
  }
}

class Monkey extends LivingBeing {
  jump() {
    console.log(`${this.name}  jumps`);
  }
}

class Bear extends LivingBeing {
  hibernate() {
    console.log(`${this.name}  hibernates`);
  }
}

class Frog extends LivingBeing {
  swim() {
    console.log(`${this.name}  swims`);
  }
}

const Frogy = new Frog("Frogy");
Frogy.drink();
Frogy.eat();
Frogy.sleep();
Frogy.swim();
/*
 ##PROBLEM: we cannot use the function jump from
 the class Monkey (because he don't exist in the parent class LivingBeing) 
*/



