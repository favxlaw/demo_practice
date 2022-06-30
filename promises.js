//promises
/*let car= new Promise(function(resolve,reject){
   fuel_fulltank = true;
    if(fuel_fulltank)
    resolve()
    else
    reject()
});
car.then(function(){
    document.write("the fuel tank is full happy driving")
});
car.catch(function(){
    document.write("the fuel tank is empty bad driving")
})
*/

//nested promises
let empty_tank= function(){
    return new Promise(function(resolve,reject){
        resolve("the car does'ent have enough fuel")
    })
}
let engine= function(msg){
    return new Promise(function(resolve,reject){
        resolve( msg + "the  engine is overheated")
    })
}
let travel= function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg + "the car is not safe for tavel")
    })
}
empty_tank().then(function(result){
    return engine(result)
}).then(function(result){
    return travel(result)
}).then(function(result){
    console.log('done!' + result)
})

