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
// call makegreat function to modify magicians names
let great_magician = make_great(magician_names);
// call show magiacians function that show modifiesd list of magician
show_magician(great_magician);
export {};
