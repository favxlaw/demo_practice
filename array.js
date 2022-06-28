// array operations
let car=["bmw", 'range rover', "corolla", "lamborghini"]
document.getElementById("demo").innerHTML=car;

//acess array operations
let bmw= car[0];
document.getElementById("demo").innerHTML=bmw;

//array length property
let len= car.length;
document.getElementById("demo").innerHTML=len;

//acess last array element
let last= car[car.length-2];
document.getElementById("demo").innerHTML=last;

//loop over an array item
car.forEach((item, index, array) =>{console.log(item,index);})

//toString()-- to convert an array into string

document.getElementById("demo").innerHTML=car.toString();


//pop(); removes the last element from an array

let last1= car.pop();
document.getElementById("demo").innerHTML=last1;
let last2= car[car.length-2];
console.log(last2);

//push(); used to add new element to the array
car.push("toyota")
document.getElementById("demo").innerHTML=car;

//shift(); used to remove the first element from an array
car.shift();
document.getElementById("demo").innerHTML=car;

//unshift() increases the array by 1 at the beginning
car.unshift("taxi");
document.getElementById("demo").innerHTML=car;

// concat(); create new arrays by merging existing arrays

let food=["rice", "beans", "garri"];
let enjoy= car.concat(food); 
document.getElementById("demo").innerHTML=enjoy;

//sort() to arrange an array in ascending order
enjoy.sort();
document.getElementById("demo").innerHTML=enjoy;

//reverse() desecending order
enjoy.reverse();
document.getElementById("demo").innerHTML=enjoy;

// map,reduce and filter
//Array.map(); create new array and performs a function on each array element
let num1=[1, 2, 3, 4, 5]
let num2 = num1.map(multiply);
function multiply(value){
    return value *3;
}
document.getElementById("demo").innerHTML=num2;

//Array.filter();takes each element in an array and applies a conditional statement against it
let num3 = num1.filter(comp);
function comp(value){ 
return value>3;
}
document.getElementById("demo").innerHTML=num3;

//Array.reduce();reduces an array of values down to just one value using a function
let num4= num2.reduce(sum);
function sum(total,value){
    return total+value
}
document.getElementById("demo").innerHTML=num4;


