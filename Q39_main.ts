// creating a func with parameters which return a value in string
function city_country(city: string , country: string): string{
    return`${city}, ${country}`;

};
/// callng a function to print the retured value

city_country("Karachi","Pakistan");
console.log(
    city_country("Karachi","Pakistan"));

city_country("Tokyo","Japan");
console.log(city_country("Tokyo","Japan"));

city_country("Berlin","Germany")
console.log(city_country("Berlin","Germany"));

