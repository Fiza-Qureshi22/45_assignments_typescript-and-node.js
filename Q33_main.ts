// creating aaray

let numbers: number [] = [1, 2, 3, 4, 5, 6,7,8,9]
// for loop == y bhi foreach ki tarha hota hy
// using for loop
// for( let oneNumber of numbers) y one Number temporary variabale hy y just loop k andar chalyga
for( let oneNumber of numbers){
    let ordinalEnding : string;
    if(oneNumber === 1){
        ordinalEnding = "st"
    }
    else if (oneNumber === 2){
        ordinalEnding = "nd"
    }
    else if(oneNumber === 3){
        ordinalEnding = "rd"
    }
    else{
        ordinalEnding = "th"
    }
console.log(`${oneNumber}${ordinalEnding}`);

};