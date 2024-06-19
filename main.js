// map aik new array banayga or usmn saari modifications karlega
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
// function to make to magiacians great through .map() it will modify the array
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
// define an array of magician names
let magician_names = ["Fiza", "Ayesha", "Habiba"];
// making a copy of origional arrray  through slice function 
let copy_magicians_names = magician_names.slice();
// modify the copyied array to include "the great with their names"
let copy_great_magicians = make_great(copy_magicians_names);
// show both arrays origional and copied .
// origional 
console.log("origional array ");
show_magician(magician_names);
// copied
console.log("copied arrayss");
show_magician(copy_great_magicians);
export {};
