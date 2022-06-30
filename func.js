//function declaration
/*function check_num(val){
    document.getElementById("demo").innerHTML=val*val

}
check_num(26);

// function expression

let x=function(){
    alert('Hello')
}
let y=x
document.getElementById("demo").innerHTML=y()
*/

//function constructor check this
/*let Numfunction= new function("a", "b", "return a+b")
let x =Numfunction(3,4)
document.getElementById("demo").innerHTML=x
*/

// self invoking functions
/*(function(){
    alert("fave")
})();
*/

// functions as values; new function isn't executing
/*function num(a,b){
    return a*b
}
let y=num(2,6)*5
document.getElementById("demo").innerHTML=y

let body="return Math.PI *rad *rad"
let circle=new function("rad",body);
alert(circle(5))
*/

//arrow function
const Myfunc=(a, b, c)=>{return a*b*c}
let product=Myfunc(3,4,6)
document.getElementById("demo").innerHTML=product

// generator function how and when can it be applied
/*function* generateFunc(){
    yield 1;
    yield 2;
    return 3;
}
let generator= generateFunc();
let one =generator.next();
let two =generator.next();
let three =generator.next();
alert(JSON.stringify(one));
alert(JSON.stringify(two));
alert(JSON.stringify(three));
*/

//predefined functions
// eval

let x=4;
let y=5;
let z=7;
console.log(eval("x+y"));
console.log(eval(z));


