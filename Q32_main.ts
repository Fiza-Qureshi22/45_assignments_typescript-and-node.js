// array of current users

let current_Users :string [] = ["Fiza" ,"Ayesha","Habiba","Abu Bakar","Umar Faroq"]

// array of new users
let new_Users: string [] = ["Hani","Adeeba","Abu Bakar","Ayehsa","Habiba"]
//lopp through new usersto ceck for username avaialabilty

new_Users.forEach(new_one_user =>{
    // making a condition for username already exist and save in our condition variable
    let our_condition = current_Users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
// print diffrent maasages using if elsse statement
    if(our_condition){
        console.log(`Sorry,${new_one_user},is already taken!`);
        
    }else{
        console.log(`This UserName.${new_one_user} is available`);
        
    }
});