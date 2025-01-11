// Calculate the Area of the Garden:
const PI = 3.14;
const radius = 5;
const area = PI * radius * radius;
console.log("Garden area is:", area, "square meters."); // 78.53 sq. meters


// Find the Maximum Capacity:
const plantSpace = 0.8;
const maxPlants = area / plantSpace;
console.log("Maximum plant capacity is:", maxPlants); // 98.17
                                            

// Predict Plant Growth:
let startingPlants = 100;
let week1Plants = startingPlants * 2; // Double the plants
let week2Plants = week1Plants * 2;
let week3Plants = week2Plants * 2;

console.log("Week 1 plants:", week1Plants); 
console.log("Week 2 plants:", week2Plants); 
console.log("Week 3 plants:", week3Plants); 



// Decide for Week 1: 40 plants
if (week1Plants > 0.8 * maxPlants) {
    console.log("Week 1: Pruned, too many plants.");
  } else if (week1Plants >= 0.5 * maxPlants) {
    console.log("Week 1: Monitored, growth is acceptable.");
  } else {
    console.log("Week 1: Planted, more room for plants.");
  }

  
// Decide for Week 2: 80 plants
if (week2Plants > 0.8 * maxPlants) {
    console.log("Week 2: Pruned, too many plants.");
  } else if (week2Plants >= 0.5 * maxPlants) {
    console.log("Week 2: Monitored, growth is acceptable.");
  } else {
    console.log("Week 2: Planted, more room for plants.");
  }


// Decide for Week 3: 160 plants
if (week3Plants > 0.8 * maxPlants) {
    console.log("Week 3: Pruned, too many plants.");
  } else if (week3Plants >= 0.5 * maxPlants) {
    console.log("Week 3: Monitored, growth is acceptable.");
  } else {
    console.log("Week 3: Planted, more room for plants.");
  }

// == Starter:20 ==                  == starter:15 ==            
// Week 1 plants: 40          Week 1 plants: 30 - Available room  
// Week 2 plants: 80          Week 2 plants: 60 - Acceptable          
// Week 3 plants: 160         Week 3 plants: 120 - Too many            


// == Starter:9 ==                               == Starter: 18 ==
// Week 1 plants: 18 - Available room          Week 1 plants: 36 - Available room  
// Week 2 plants: 36 - Available room          Week 2 plants: 72 - Acceptable  
// Week 3 plants: 72 - Acceptable              Week 3 plants: 144 - Too many   


// ==== PART 2: ====

// Starting values
startingPlants = 100;
let plantsAfter10Weeks = startingPlants;

// Double the plants 10 times (manually for simplicity)
plantsAfter10Weeks = plantsAfter10Weeks * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2;

// Calculate the total area required
let totalAreaRequired = plantsAfter10Weeks * plantSpace;

// Calculate the radius of the new garden
let newRadius = Math.sqrt(totalAreaRequired / PI);

console.log("Plants after 10 weeks:", plantsAfter10Weeks);
console.log("Total area required:", totalAreaRequired, "square meters");
console.log("Radius of the new garden:", newRadius, "meters");


try {
  // Double the plants 10 times
  plantsAfter10Weeks = plantsAfter10Weeks * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2;

  // Calculate the total area required
  let totalAreaRequired = plantsAfter10Weeks * plantSpace;

  // Check if the area exceeds the garden's capacity
  if (totalAreaRequired > area) {
    throw new Error(
      "The garden is too small! Required area: " +
        totalAreaRequired +
        " square meters, but available area is only " +
        area +
        " square meters."
    );
  }

  console.log("Plants after 10 weeks:", plantsAfter10Weeks);
  console.log("Total area required:", totalAreaRequired, "square meters");
  console.log("Garden capacity is sufficient.");
} catch (error) {
  console.error("Error:", error.message);
}

// script.js:109 Error: The garden is too small! 
// Required area: 83886080 square meters, but available area is only 78.5 square meters.

// === If starter is 20 ===

// Garden area is: 78.5 square meters.
// Maximum plant capacity is: 98.125
// Week 1 plants: 40
// Week 2 plants: 80
// Week 3 plants: 160
// Week 1: Planted, more room for plants.
// Week 2: Pruned, too many plants.
// Week 3: Pruned, too many plants.
// Plants after 10 weeks: 20480
// Total area required: 16384 square meters
// Radius of the new garden: 72.23457894183684 meters
// Error: The garden is too small! Required area: 16777216 square meters, but available area is only 78.5 square meters.


// === If starter is 100 ===

// Garden area is: 78.5 square meters.
// Maximum plant capacity is: 98.125
// Week 1 plants: 200
// Week 2 plants: 400
// Week 3 plants: 800
// Week 1: Pruned, too many plants.
// Week 2: Pruned, too many plants.
// Week 3: Pruned, too many plants.
// Plants after 10 weeks: 102400
// Total area required: 81920 square meters
// Radius of the new garden: 161.521428840022 meters
// Error: The garden is too small! Required area: 83886080 square meters, but available area is only 78.5 square meters.