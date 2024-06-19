"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["fiza", "ayehsa", "habiba", "abu bakar ", "umar farooq"];
// print message 
console.log("unfortunaelythe new dinner table won't arrive so we can invite only two gests.");
//remove the guests from list;
while (guests.length > 2) {
    let removedGuest = guests.pop();
    if (removedGuest !== undefined) {
        console.log(`sorry${guests}, we cant invite to you`);
    }
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited for the dinner.`);
});
// remve last name from the list
guests.splice(0, guests.length);
console.log("updated list of guest:", guests);
