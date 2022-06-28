//ways of creating object 1
/*let student ={
    name:"Fave",
    age: "23",
    studies: "catering",

};
document.getElementById("demo").innerHTML= student.name + " " + 'of' + " " + student.age + " " + 'studies' + " " + student.studies;
*/

//2
/*let student = new Object();
student.name ="fave",
student.age ="23"
student.studies = "catering"
document.getElementById("demo").innerHTML= student.name + " " + 'of' + " " + student.age + " " + 'studies' + " " + student.studies;
*/

//3

/*function stud( name, age, studies){
    this.name=name;
    this.age=age;
    this.studies=studies;
}
let student =stud("fave", "21", "catering");
document.getElementById("demo").innerHTML= student.name + " " + 'of' + " " + student.age + " " + 'studies' + " " + student.studies;
*/

//object properties
/*let student ={
    name:"Fave",
    age: "23",
    studies: "catering",

};
 x = student.age= 21
document.getElementById("demo").innerHTML= student.name + " " + 'of' + " " + x + " " + 'studies' + " " + student.studies;
*/

//object method
/*let user ={
    name: "fave",
    age: 23,
};
function sayHi(){
    alert("Hello!");
}
user.message = sayHi;
document.getElementById("demo").innerHTML="Hi" + user.name;
//document.getElementById("click me").innerHTML = user.message;
*/

// js object acessors
//get and set

/*let food ={
    contie: "carb",
    dura: "30 min",
    exam: "rice",
    get beans(){
        return this.contie
    },
};
document.getElementById("demo").innerHTML= food.beans;
*/

let food ={
    contie: "carb",
    dura: "30 min",
    exam: "rice",
    set beans(beans){
        this.contie =beans;
    },
};
document.getElementById("demo").innerHTML= food.contie;
