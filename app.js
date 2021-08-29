//Averge 
johnAvgScore = (89 + 120 + 103) / 3;
mikeAvgScore = (116 + 94 + 123) / 3;
maryAvgScore = (97 + 134 + 105) / 3;


console.log("John's Average Score: " + johnAvgScore);
console.log("Mike's Average Score: " + mikeAvgScore);
console.log("Mary's average score: " + maryAvgScore);

//Comparing John and Mike
if (johnAvgScore > mikeAvgScore) {
    console.log("The winner is John, with a Average score of " + johnAvgScore);
} else if (johnAvgScore < mikeAvgScore) {
    console.log("The winner is Mike, with Average score of " + mikeAvgScore);
} else {
    console.log("The game is draw, both of them have Same Average Score");
}


//comparing John, Mike and Mary
switch (true) {
    case johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore:
        console.log("The winner is John, with a Average score of " + johnAvgScore);
        break;
    case mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore:
        console.log("The winner is Mike, with Average score of " + mikeAvgScore);
        break;
    case maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore:
        console.log("The winner is Mary, with Average score of " + maryAvgScore);
        break;
    default:
        console.log("The game is draw, 3 of them have Same Average Score");
}


