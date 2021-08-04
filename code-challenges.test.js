// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// Describe a function "jumbleArray", it has input of array and output of an array of the first item removed and the rest scrambled.
describe("jumbleArray", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    let colors1 = ["purple", "blue", "green", "yellow", "pink"]
    let colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    let output1 = jumbleArray(colors1)
    let output2 = jumbleArray(colors2)
    //Check that the output has the first string removed
    //Check that the output is contained in the original array.
    expect(colors1).toEqual(expect.arrayContaining(output1))
    expect(colors1).toHaveLength(4)
    expect(colors1).not.toContain("purple")
    expect(colors2).toEqual(expect.arrayContaining(output2))
    expect(colors2).toHaveLength(5)
    expect(colors2).not.toContain("chartreuse")
  })
})

// b) Create the function that makes the test pass.


//function takes array as parameter
//first you remove first item with .shift
//then use a for loop to iterate through index, create a random number called J, and swap the two indexes.
const jumbleArray = (arr) => {
  arr.shift()
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


//describe a function called minAndMAx- it takes an array and returns the highest and lowest number.
//Write expected output toEqual statements using the two test vars.
describe("minAndMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
    expect(minAndMax(nums1)).toEqual([-8, 90])
    expect(minAndMax(nums2)).toEqual([5, 109])
  })
})


// b) Create the function that makes the test pass.


//the array needs to be sorted from least to greatest and the first (lowest) number spliced off.
//Then when sorting greatest to least you can again splice the first (greatest) number and concat the two
const minAndMax = (arr) => {
  return arr.sort((a,b) => a - b).splice(0,1).concat(arr.sort((a,b) => b - a).splice(0,1))
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


//Describe function called "noDuplicates", it has a parameter of two arrays and outputs them combined with all duplicate values removed.
describe("noDuplicates", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
//Write expect.toEqual statement using the two test variables
    expect(noDuplicates(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// b) Create the function that makes the test pass.

//Function called noDuplicates has two arrays as input
//first concat the arrays
//to check for duplicates I can use .filter
//I can check the indexOf the current number as located in the array. If the indexOf is not the same as the current index at iteration you can filter out the value since it is repeated.
const noDuplicates = (arr1, arr2) => {
  return arr1.concat(arr2).filter((e,i,a) => a.indexOf(e) === i)
}
