let salaries={
    John:100,
    Sowmi:200,
    Sindhu:300,
};
//dot syntax
console.log(salaries.John);
//o/p 100

//box syntax
let salaries={
    John:100,
    Sowmi:200,
    Sindhu:300,
};
console.log(salaries["Sowmi"]);
//o/p 200

//object.keys
let salaries={
    John:100,
    Sowmi:200,
    Sindhu:300,
};
console.log(Object.keys(salaries));
//o/p John,Sowmi,Sindhu

//Object.values
let salaries={
    John:100,
    Sowmi:200,
    Sindhu:300,
};
console.log(Object.values(salaries));
//o/p 100,200,300
