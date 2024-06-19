// alphabetica operatord ['a","b","c""d"]  siquance sy 
// slice mehoud alag lag array banadyga...
// sort ethoud sy hamari list alpahaetical operatorss mn convert hojayagi
//origional order: [ 'Saudia Arab', 'Turkey', 'Indoneshiya', 'Japan', 'China' ]....cmd
//Alphabetical operators [ 'China', 'Indoneshiya', 'Japan', 'Saudia Arab', 'Turkey' ]...cmd
// alphabetical or reverse dono aik doosry k oppsiite hyn


let placeForVisit : string [] = ["Saudia Arab" ,"Turkey","Indoneshiya" ,"Japan" ,"China"];

// print in origional order
console.log("origional order:", placeForVisit);

// ptint array in alphabetical operators

console.log("Alphabetical operators",placeForVisit.slice().sort());

// yaani a y print karwayn k apka array apni origional haalat mn hi hy...
// array is still in origona order
console.log("origional order after sorting:", placeForVisit);

// Print your array in reverse alphabetical order without changing the order of the original list.

// ab ham reverse karyngy slice sort alphabetical operators mn karny k bad

console.log(" Reverse Alphabetical operators",placeForVisit.slice().sort().reverse());

//• Show that your array is still in its original order by printing it again.

console.log("origional order after revers soting:", placeForVisit);

//Reverse the order of your list. Print the array to show that its order has changed.
placeForVisit.reverse();
console.log("Reverse order:", placeForVisit);     // yaani issy y hua k jo amari origional array thi to y reverse usky opposite aya

//Reverse the order of your list again. Print the list to show it’s back to its original order.

//yaani ham is reverse ko aggain revers karyngy to iska output origional order array ayag

placeForVisit.reverse();
console.log("Back to origional order:", placeForVisit); 

//Sort  array so it’s stored in alphabetical order.

console.log(" Sorted in alphabetical operators",placeForVisit.slice().sort()) ;

//Sort to change  array so it’s stored in reverse alphabetical order. 


console.log(" Stored in reverse alphabetical operators",placeForVisit.slice().sort().reverse());


