// Calculate the Area of the Garden:
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log("Garden area is:", area, "square meters."); // 78.53 sq. meters


// Find the Maximum Capacity:
const plantSpace = 0.8;
const maxPlants = area / plantSpace;
console.log("Maximum plant capacity is:", maxPlants);


// Predict Plant Growth:
const startingPlants = 20;
let week1Plants = startingPlants * 2; // Double the plants
let week2Plants = week1Plants * 2;
let week3Plants = week2Plants * 2;

console.log("Week 1 plants:", week1Plants);
console.log("Week 2 plants:", week2Plants);
console.log("Week 3 plants:", week3Plants);



// Decide for Week 1:
if (week1Plants > 0.8 * maxPlants) {
    console.log("Week 1: Pruned, too many plants.");
  } else if (week1Plants >= 0.5 * maxPlants) {
    console.log("Week 1: Monitored, growth is acceptable.");
  } else {
    console.log("Week 1: Planted, more room for plants.");
  }

  
// Decide for Week 2:
if (week2Plants > 0.8 * maxPlants) {
    console.log("Week 2: Pruned, too many plants.");
  } else if (week2Plants >= 0.5 * maxPlants) {
    console.log("Week 2: Monitored, growth is acceptable.");
  } else {
    console.log("Week 2: Planted, more room for plants.");
  }


// Decide for Week 3:
if (week3Plants > 0.8 * maxPlants) {
    console.log("Week 3: Pruned, too many plants.");
  } else if (week3Plants >= 0.5 * maxPlants) {
    console.log("Week 3: Monitored, growth is acceptable.");
  } else {
    console.log("Week 3: Planted, more room for plants.");
  }