"use strict";
// creating array
let userNames = ["fiza", "Ayesha", "Habiba", "Abu Bakar", "Umar Farooq"];
// creating foreach loop in array
userNames.forEach(oneUser => {
    if (oneUser === "Abu Bakar") {
        console.log(`Hello ${oneUser},would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser},thank you for logging in again`);
    }
});
