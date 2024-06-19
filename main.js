//define a function to print each magician name from an array
//magicians: string , [] y array islia lagaya k y samajh jayga ka ab mujhy aik array milny wala hy
function show_magician(magicians) {
    magicians.forEach(name => console.log(name));
}
;
// define an array cntaing magician names
let magician_Names = ["Fiza", "Ayesha", "Habiba"];
// cal the function to print each magicioan name
show_magician(magician_Names);
export {};
