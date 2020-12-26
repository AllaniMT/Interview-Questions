//Composition
function eat(name) {
  console.log(`${name}  eats`);
}
function drink(name) {
  console.log(`${name}  drinks`);
}
function sleep(name) {
  console.log(`${name}  sleeps`);
}

function swim(name) {
    console.log(`${name}  swims`);
  }

function hibernate(name) {
  console.log(`${name}  hibernates`);
}
function jump(name) {
  console.log(`${name}  jumps`);
}

function LivingBeingCreator(name) {
  return {
    drink: () => drink(name),
    eat: () => eat(name),
    sleep: () => sleep(name),
  };
}

function MonkeyCreator(name) {
  return {
    ...LivingBeingCreator(name),
    jump: () => jump(name),
  };
}

function BearCreator(name) {
  return {
    ...LivingBeingCreator(name),
    hibernate: () => hibernate(name),
  };
}

function FrogCreator(name) {
  return {
    ...LivingBeingCreator(name),
    hibernate: () => hibernate(name),
    jump: () => jump(name),
  };
}


const Frogy = FrogCreator("Frogy");
const George = MonkeyCreator("George");

Frogy.drink();
Frogy.eat();
Frogy.sleep();
Frogy.hibernate();
Frogy.jump();

George.drink();
George.eat();
George.sleep();
George.jump();