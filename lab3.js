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

///----------------------------22---------------------------////

// class shape{
//     constructor(x=0,y=0){
//         this.x=x;
//         this.y=y;
//     }
// }
// class rectangle extends shape{
//     constructor(x,y,z){
//         super(x,y);
//     }
//     area(){
//         return this.x * this.y;
//     }
//     perimeter(){
//         return (this.x + this.y)*2;
//     }
//     toString(){
//         return `area equals ${area()} and perimeter equals ${this.perimeter()}`;
//     }
// }

// class square extends shape{
//     constructor(x,y){
//         super(x,y);
//     }
//     area(){
//         return (this.x)**2;
//     }
//     perimeter(){
//         return (this.x)*4;
//     }
//     toString(){
//         return `area equals ${area()} and perimeter equals ${this.perimeter()}`;
//     }
// }

// class circle extends shape{
//     constructor(r){
//         this.r=r;
//     }
//     area(){
//         return Math.PI*(this.r**2);
//     }
//     perimeter(){
//         return 2*Math.sqrt(Math.PI*this.area());
//     }
//     toString(){
//         return `area equals ${area()} and perimeter equals ${this.perimeter()}`;
//     }
// }

///-----------------------------33---------------------------------////

//a

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


///b


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

///----------------44---------------------------------////
// let obj={
//     name:"marwa",
//     address:"giza",
//     age:22,
//     faculty:"FCAIH"
// }
// obj[Symbol.iterator]=function(){
//     let objKeys = Object.keys(this);
//     let index=0;
//     let userIndex=0;
//     return{
//         next: () => {
//             if(index>objKeys.length-1){
//                 return{
//                     value: undefined,
//                     done:true,
//                 };
//             }

//            let users=this[objKeys[index]];
//            let user =users[userIndex];

//            let last=userIndex >= users.length-1;
//            userIndex++;

//            if(last){
//             userIndex=0;
//             index++;
//            }
//            return{
//             done:false,
//             value:user,
//            };
//         },
//         };
//     };

// let iterator =obj[Symbol.iterator]();

// for(let i of obj){
//     console.log(i.name);
// }

///----------------------------55-------------------------//
// var fruits=["apple","strawberry", "banana", "orange", "mango"];
// //a
// let all = fruits.every(function(val,index,arr){
//     return typeof(val)=="string";
// });
// console.log(all);

// //b
// let some = fruits.some(function(val,index,arr){
//     return val[0]=="a";
// });
// console.log(some);

// //c
// let arr2=fruits.filter((val,index,arr) => {
//     return val[0]== "a" || val[0]=="s";
// });
// console.log(arr2)


