"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Ayesha", "Habiba", "mehak"];
console.log("Great news! we found a bigger table");
// hamen start mn add karwana memebber ko and k lie ham push use karty to ham stat k lie hm unshift use karyngy ...
// unshift            // unshift sy array ki beginng mn aik new mwmber add hojata
guests.unshift("Adeeba");
// splice              // math.floor ka methoud round off karta k agar . mn bhi koi value ho to usy y roundoff karle
guests.splice(Math.floor(guests.length / 2), 0, "Hamna");
//hamny ismn y kia k yaani guestski jo lenght hy yaani jo array k names hyn unhyn 2 sy divide krdo k hamara nw name 2 or 2 ekemnts k center mn ay 
// push
guests.push("Meena");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are  invited for dinner`);
});
