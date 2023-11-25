let salaries={
    John:100,
    Sowmi:200,
    Sindhu:300,
}
 for(var key in salaries ){
    console.log(key,"salary is",salaries[key])
 }
 //o/p John salary is 100
 //Sowmi salary is 200
 //Sindhu salary is 300

 //mixing datatypes in object
 let manoj={
    name:"Manojkumar",
    class:"B35WD",
    marks:[90,80,70],
    age:23
 };
 for(var key in manoj){
    console.log(key,"-",manoj[key])
 }

 //o/p name-Manojkumar
 //class-B35WD
 //marks-[90,80,70]
 //age-23