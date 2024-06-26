
// var me hum stored in globalally scope he agr function ke andr decleare na ho
//var me hum reassign kr sakte he 
//var me hum redecleare kr sakte he
//var function scope he
// var hoisted he
//var block scope nh he






// let me hum stored in global nh he
//let me hum reassign kr sakte he 
//let me hum redecleare nh kr sakte he
//let block scope he
//let hoisted nh he





// const me hum stored in global nh he
// const me hum reassign nh kr sakte he 
// const me hum redecleare nh kr sakte he
// const block scope he
// const hoisted nh he





//Template literal k andr hum multiple line me string likh sakhte he 

// let para = `Lorem ipsum dolor sit amet consectetur
//  adipisicing elit. Facere dolores eos dolor accusantium 
//  natus necessitatibus voluptate consequuntur tempora.
//   Facere cupiditate saepe natus neque excepturi esse
//    doloribus maiores ratione quia dolorum?
// `
// console.log(para);


//Ternary Operator short hand he if else statement likhne ka

// let age = 19
// let studentCard = false

// age > 18
// ?console.log('Allow')
// :studentCard
// ?console.log('Allow student Card')
// :console.log('Not Allow')



//Circuits agr left wali value true hogi tou wo age jaega other wise nh jaega
// agr left wali value agr false hogi tou wo age nh jaega 

// let condition = true

// let a = condition && 'Abc'

// console.log(a);


//Sperad operator 2 array ko apas me merge krne k liye use krte 

// let arr = [1,2,3,4,5,6];

// let arr1 = [7,8,9,10];

// let merge = [...arr,...arr1]

// console.log(merge);


//Rest Operator me hum jo parmeter me value pass krte he jitni bhi paremeter me value hoti he usko hum ...rest sy get kr sakte he


// function foo(a,b,c,...rest) {
//     console.log(a,b,c,...rest);
// }
// foo(1,2,3,4,5,6,7,8,9,10)



//Destructuring of Array


// let a = ['kashif','asif','kaif'];

// let [user1,user2,user3] = a 

// console.log(user1,user2,user3);



//Destructuring of Object

// let obj = {
//     id: 1,
//     name: 'kashif',
//     inst: 'smit',
//     days: 'tts'
// }

// let {id,name,inst,days} = obj // ye pora object assign ho rha he or sab property ki value nikal kr de raha he

// console.log(id,name,inst,days);




//Pass By reference me hum puri array ko dusre variable assign kr dete he or jab hum usme changing krte he tou wo first wale me bhi update kr deta he or 
//uska first array sy reference bana rehta he


// let a = [1,2,3,4,5];

// let b = a

// b.push('e');

// console.log(a);



//Pass By value hame hum ...sy array k andr ki property utha kr k left wale variable ko assign kr dete or 

// phr uska first wale array sy koi taluq nh hota



// let a = [1,2,3,4,5];

// let b = [...a];

// b.push(6)

// console.log(b);






//object method

//keys object k andr sy keys niklal kr deta he

// id , name , inst, days

// let obj = {
//     id:1,
//     name:'kashif',
//     inst:'smit',
//     days:'tts'
// }
// let keys = Object.keys(obj);

// console.log(keys);


//values object k andr sy values niklal kr deta he

// 1, 'kashif' smit tts

// let obj = {
//     id:1,
//     name:'kashif',
//     inst:'smit',
//     days:'tts'
// }
// let values = Object.values(obj);

// console.log(values);


//Freeze ma na hum koi property add kr sakte he or na remove 

// let obj = {
//     id:1,
//     name:'kashif',
//     inst:'smit',
//     days:'tts'
// }
// Object.freeze(obj);
// obj.name = 'asif'
// console.log(obj); //id: 1,name: "kashif", inst:"smit", days:"tts"


//entries hume batata h k hamare pas kitni property he object k andr

// let obj = {
//     id:1,
//     name:'kashif',
//     inst:'smit',
//     days:'tts'
// }
// let entries = Object.entries(obj); //har index me to property pari hui he

// console.log(entries);




//Function


//Jo function apne parameter me dusre function ko call kry ussy hum higher order function kehte he

// jo function kisi dusre function k parameter me call ho ussy hum call back function kehte he


// function foo(a) {
//     return a
// }


// function abc(b) {
//     console.log(b);
// }


// foo(abc("This is a call back function :)"));



// Lexical scope k bahir jo variable bana he tou wo bahir accessable he function k andr accesable nh he

// let a = 'xyz'

// function foo() {
//     let a = 'abc'
//     console.log(a);
// }
// foo()





//Default parameter

// default parameter me hum arument me value set kr k rakh sakte he q agr parameter me value na aya tou undefined na show balke not provided show ho

// function abc(b = '') {
//     let a = 420;
//     console.log(a,b);
// }
// abc()




//Arrow function


// let abc = (a) => {
//     console.log(a);
// }

// abc("This is a arrow function")