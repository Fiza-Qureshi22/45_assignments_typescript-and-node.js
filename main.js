// define a function with rest parameters that accept items arguments representing the our sanwich
function make_sanwich(...items) {
    console.log("Making A Senwitch With The Follwing Items: \n");
    items.forEach(single_items => console.log(single_items));
    console.log("\nNow you Enjoy Sandwitch ");
}
// call the function three times wit three different numbers of arguments 
make_sanwich("chicken", "cheese", "mayo", "ketchup", "egg", "cucumber");
make_sanwich("Bread", "Butter");
make_sanwich("chicken", "tomato", "bread", "egg", "lettus", "mayo", "kethup", "cheese", "onion", "souce");
export {};
