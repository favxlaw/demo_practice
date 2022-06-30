//closure; varaible scope
/*let x=20;
function Myfunction(){
    let b=30;
    document.write(x+b)
}
Myfunction()
*/


//closure; scope chain
let a=10;
function firstFunc(){
    let b=12;
    function secondFunc(){
        let c= 30 +a+b;
        return c
    }
    return secondFunc();
}
let sum=firstFunc()
document.write("The sum is" + " " + sum )