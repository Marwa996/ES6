///----------------------11------------------//
// let target={
//     name:"marwa",
//     age:30,
//     address:"Giza"
// };

// let handler={
//     set: function(obj,prop,val){
//         if (obj.hasOwnProperty(prop)){
//             if(prop == "name"){
//                 if(typeof(val)=="string" && val.length>=7)
//                     obj[prop]=val;

//                 else throw "name must be string more than 7 characters";
//             }else if( prop == "age"){
//                 if (val > 25 && val<60)
//                     obj[prop]=val;
//                else
//                     throw "age mismatched";

//              }else if(prop == "address"){
//                 if (typeof(val)== "string")
//                     obj[prop]=val;
             
//                 else 
//                     throw "adress mismatched";
//             }
//         }else 
//              throw "property not found"
//     },
//     get:function(obj,prop){
//         if (prop in obj)
//             return obj[prop];
//         else
//             throw "Property can't be added";
//     }
// }

// let p=new Proxy(target,handler);

///----------------33---------------------------------////
//----------------------------a------------------

// function * fibonacci(num){
//     let [a,b]=[0,1];
//    for(let i=0;i<num;i++){
//         yield a;
//         [a,b]=[b,a+b];
//         console.log(a+b);
// }
// }
// let fib = fibonacci(10);
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
///----------------------------b-------------

// function * fibonacci(num){
//     let [a,b]=[0,1];
//     do{
//         yield a;
//         [a,b]=[b,a+b];
//         console.log(a+b);
//     }while((a+b)<=num) 
//         yield a;
//         yield b;
// }

// let fib = fibonacci(35);
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());
// console.log (fib.next());

