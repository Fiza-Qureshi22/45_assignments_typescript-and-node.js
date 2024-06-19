// making function
// hamny y aisy banaya k agar kkoii bhi unct call karta or usmn vo value add nhi karta to usky andar ap bydefoult value add kardena
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// calling function ... with bydefoult values
make_shirt();
// calling  a function now medium size and defoult mesage
make_shirt("Medium");
// calling a function now with smalal size in different print on message
make_shirt("small", "I Love JavaScript");
export {};
