function create_car(manufacture:string , modelName: string , ...options:{ [key: string ]:any} [] )
:object{
    const carInfo ={
        manufacture,
        modelName,
        ...Object.assign({},...options)
    }
return carInfo

};
let cars = create_car('Honda','Civic',{color:"black"},{features: ['navigation','power window']});
console.log(cars);
