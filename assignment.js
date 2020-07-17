// problem #1; creating a function to convert from 'foot' to 'mile'

function feetToMile(n) {
  const oneMile = 5280;
  if (n < 0) {
    console.log("Please enter a positive number");
  } else {
    const convertFootToMile = n / oneMile;
    return convertFootToMile.toFixed(8);
  }
}
let result = feetToMile(1000);
console.log("Total: " + result + " Mile");

// problem #2; creating a function to calculate the total volume of a timber required for constructing multiple object

function woodCalculator(chair, table, bed) {
  const oneChair = 1;
  let totalChair = Math.abs(chair) * oneChair;
  const oneTable = 3;
  let totalTable = Math.abs(table) * oneTable;
  const oneBed = 5;
  let totalBed = Math.abs(bed) * oneBed;
  let totalVolume = totalChair + totalTable + totalBed;
  return totalVolume;
}
let orderQuantity = woodCalculator(10, 4, -10);
console.log("Total Wood Required: " + orderQuantity + " m3");

// problem #3; creating a function to calculate the total brick required for the building

function brickCalculator(numOfFloor) {
  let n = Math.abs(parseInt(numOfFloor));
  const perFloor_1to10 = 15000;
  const perFloor_11to20 = 12000;
  const perFloor_21above = 10000;

  if (n > 0 && n <= 10) {
    let totalBrick = perFloor_1to10 * n;
    return totalBrick;
  } else if (n > 10 && n <= 20) {
    let totalBrick = n - 10;
    totalBrick = totalBrick * perFloor_11to20 + perFloor_1to10 * 10;
    return totalBrick;
  } else {
    let totalBrick = n - 20;
    totalBrick =
      totalBrick * perFloor_21above +
      perFloor_11to20 * 10 +
      perFloor_1to10 * 10;
    return totalBrick;
  }
}
let buildingHeight = brickCalculator(-20);
console.log(
  "Total Brick: " + buildingHeight + " pcs required for construction."
);

// problem #4; create a function to find the shortest name in a given array

function tinyFriend(arr) {
  let shortest = "";

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (
        typeof arr[i] === "string" &&
        (shortest == "" || arr[i].length < shortest.length)
      ) {
        shortest = arr[i];
      }
    }
  }

  return shortest;
}

var shortName = tinyFriend(["Ali", "Joynal", 2, "Kuddus", "Akmalima"]);
console.log("'" + shortName + "'" + " - is the shortest name in the group.");
