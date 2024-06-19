// creating the function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in the  ${country}`);
}
// calling function
describe_city("karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
export {};
