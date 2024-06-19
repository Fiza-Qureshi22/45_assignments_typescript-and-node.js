"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Fiza", "Ayesha", "Habiba"]; // agr ame array mn ys kch nikalan ya dd karna ho to ha splice ko use karty hyn...
///// print the name that is nt invited fr dinnner
let unableAttend = guests.splice(0, 1)[0]; // yaani 0 mn sy 1 element remove kardo or 2nd element ko 0 ki jagah dedo 
console.log(`${unableAttend} you are not invited for dinner`);
//// push hamary array list k and mn aik name add kardeta hy
guests.push("Hina");
///aagar ham chchrahy k invitation hamara sabko jay jo hamary array k andar log hyn un sa ko jay or alag lag jay  to ham... foreach ka methoud use karty hyn
// print the message 
guests.forEach(guest => {
    console.log(`Dear ${guest}. you are invited for dinner`);
});
