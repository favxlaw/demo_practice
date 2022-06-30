// without async
/*let result=function(score){
    return new Promise(function(resolve,reject){
        console.log("Calculating result..")
if(score>50)
        resolve("Congratulations you passed")
   else
   reject("Oops you failed")
    })
}
let grade=function(response){
    return new Promise(function(resolve,reject){
        console.log("Calculating your grade")
    resolve("Your grade is A" + response)
    })
}
result(80).then(response=>{
    console.log("Results received")
    return grade(response)
}).then(finalgrade=>{
    console.log(finalgrade)
}).catch(err=>{
    console.log(err);
})
*/

//async 
let result=function(score){
    return new Promise(function(resolve,reject){
        console.log("Calculating result..")
if(score>50)
        resolve("Congratulations you passed")
   else
   reject("Oops you failed")
    })
}
let grade=function(response){
    return new Promise(function(resolve,reject){
        console.log("Calculating your grade")
    resolve("Your grade is A" + response)
    })
}

async function calculateResults(){
    try{
    const response=await result(69)
    console.log("result received")
    const finalgrade= await grade(response)
    console.log(finalgrade);
    }
    catch(err){
        calculateResults
    }
}