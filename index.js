// console.log(1);
// alert('praj');
// let age= 13
// age=14
// console.log(age);
// const price=15;
// console.log(price);
// console.log(age + " " + price);  this is concatenation
// let email= 'heroe@gmail.com';
//  let result = email.slice(0,5);
//  let result=email.lastIndexOf('e');
// let result= email.replace('o', 'w');
// console.log(result);

// console.log(true, false, 'true','false');
// let email= 'heroe@gmail.com';
// let result=email.includes('@');          true false dekhauca
// console.log(result);

// console.log(true, false, 'true','false');
// let names=['Praj', 'AAYSUH', 'JENNY'];
// let result=names.includes('Praj');
// console.log(result);

// console.log(true, false, 'true','false');
// let age= 23;
// console.log(age==25);        False dekhhauna parxa, console le k age ko value 25 hora vanera check gareko. and console.log(age!=25); le chai isnt equal to vanera check garchha. age>23 age<23 age<=23 age>=23  sab true false check garna lai nai ho 

// let name ='Praj';
// console.log(name>'praj'); yo true aauna parxa coz P>p

// let age=23;
// console.log(age==25);  true aauxa-yo value snga check gareko
// console.log(age=='25')   true aauxa-yo string snga check gareko  Iniharu vaneko loose comparison

// console.log(age===25); true aauxa - strict comparison
// console.log(age==='25'); false aauca-strict comparison

// type converison
//  let  score=100;
//  score= Number(score);
// //  console.log(score + 1);        type converison nagareko vaye add navayera concatenate hunthyo i.e 101 ko satta 1001 aauthyo/

// console.log(score, typeof score);


// loop in java
// for(let i=0;i<5;i++){
//     console.log('in loop',i)
// }
// console.log('finished');

// const names=['ayush', 'praj', 'hero'];
// for(let i=0; i<names.length;i++){
//     console.log(i)
// }
// const names=['ayush', 'praj', 'hero'];
//  for(let i=0; i<names.length;i++){
//     console.log(names[i]);
//  }

// while loop 

// let i=0;
// while(i<5)
// {
//     console.log('in loop',i);
//     i++
// }


// do while loop

// let i=3
// do{
//     console.log('the value of i is ',i);
//     i++
// } while(i<5)            it prints "the value of i is 3"
//                                     "the value of i is 4"


// if else and else if statements
// const password="pass";
// if(password.length>=8){
//     console.log("the password is long enough");
// }
// else{
//     console.log('the password isnt long enough');
// }                   it prints"the password isnt long enough"

// const password="password";
//  if(password.length>=12){
//      console.log("the password is strong and long enough");
//      }
// else if(password.length>=8){
//      console.log('the password isnt strong but long enough');
// }
// else{
//     console.log('the password isnt long enough');
// }                   it prints the password isnt strong but long enough



// logocal operations
// and-&&
// or-||
// const password="password@123";
//  if(password.length>=12 && password.includes('@')){       yo vanya 2 tai condition meet hunai parchha.
//      console.log("the password is strong and long enough");
//      }
// else if(password.length>=8){
//      console.log('the password isnt strong but long enough');
// }
// else{
//     console.log('the password isnt long enough');
// }           it will print the password is strong and long enough

// const password="password@";
//  if(password.length>=12 || password.includes('@')){          yo vanya 2 ta condition maa euta jun vayeni true vayo vane Statement print hunchha.
//      console.log("the password is strong and long enough");
//      }
// else if(password.length>=8){
//      console.log('the password isnt strong but long enough');
// }
// else{
//     console.log('the password isnt long enough');
// }        it will print the password is strong and long enough


// logical not (!)
// console.log(!true);     it will print false
// console.log(!false);   it will print true
 

// break and continue

// const scores=[22,12,34,0,100];
// for(i=0;i<scores.length;i++){
//     if(scores[i]===0)
//     continue;
// console.log('your score is ',scores[i]);            it wil skip 0 and print all other scores.
// }

// const scores=[22,12,34,0,100];
// for(i=0;i<scores.length;i++){
// //     if(scores[i]===0)
// //     break;
// // console.log('your score is ',scores[i]);            it will print 22,12,34 and will stop and wont print when reached 0.
// // }


// const scores=[22,12,34,0,100,110,120];
// for(i=0;i<scores.length;i++){
// console.log('your score is', socres[i]);
// }


// // switch statements

// const grade='A';
// switch(grade){
//     case 'A':
//     console.log('you got A!');
//     break;
//     case'B':
//     console.log('you got B!');
//     break;
//     case'C':
//     console.log('you got C!');           it will print you have got A!
//     break;
//     case'D':
//     console.log('you got D!');
//     break;
//     case'E':
//     console.log('you got E!');
//     break;
//     default:
//         console.log('invalid');
// }


// variables and block scope 

// let age=34;
// if(true){
//     console.log('inside the code , age is ', age );      this will print inside the code block, age is 34
                                                                //  outside the code block, age is 34
// }
// console.log('outside the code block, age is ', age );


// let age=34;
// if(true){
//     let age=23
//     console.log('inside the code , age is ', age );             this will print inside the code block, age is 23
// }                                                                  outside the code block , age is 34 becuse code block vitra variable redefine garna milxa.
// console.log('outside the code block, age is ', age );



// functions-function declaration
// function greet(){
//     console.log('hey bro');
// }
// greet();            it will print hey bro

// function expression
// const hero=function(){
//     console.log('hey hero');
// };
// hero();              it will also print hey hero

// function declaration
// const speak=function(){
//     console.log('whats up big boy');
// }                                            it will also print whats up big boy
// speak();
// we use function expression more than function declaration

// arguments and parameters
// const speak=function(name){                  ya arugument vaneko speak sanga joddeko praj ho ani parameter vaneko function snga joddeko name
//     console.log(`good morning ${name}`);
// };
// speak('praj');      it will print good morning praj.

// const speak=function(name,time){
//     console.log(`good ${time} ${name}`);
// };
//  speak('praj','night');      it will print good night praj.

// const calcArea=function(radius){
//     area=3.14*radius**2;
//     console.log(area);
// }
// calcArea(5); 

// returning values

// const calcArea=function(radius){
//     let area=3.14*radius**2;
//     return area;
// }
// const area=calcArea(5);
// console.log(area);

// better way-
// const calcArea=function(radius){
//     return 3.14*radius**2;
//   };
// const area=calcArea(5);
// console.log(area);

// arrow function
// const calcArea=(radius)=>{
//     return 3.14*radius**2;
// };
// const area=calcArea(5);
//  console.log(area);

// const bill=function(products, tax){
//     let total=0;
//     for(let i=0;i<products.length;i++){
//     total+=products[i]+products[i]*tax;
// }
// return total;
// }
// console.log(bill([20,30,40],0.2));
// converting this code into arrow function

// const bill=(products, tax) =>{
//     let total=0;
//     for(let i=0;i<products.length;i++){
//     total+=products[i]+products[i]*tax;
// }
// return total;
// }
// console.log(bill([20,30,40],0.2));

// const name=()=>'hello'
// let resultOne=name();
// console.log(resultOne);         it will print hello

// creating object literals
// let user= {
//     name:'praj',
//     age:19,
//     email:'rajbansi@gmail.com',
//     blogs:'whats up man',
// };
// console.log(user);       
// user.age=20;  user ko age edit gareko.
// console.log(user.age);

// console.log(user.name);     user ko name print hunchha.
// user.name="hero";
// console.log(user.name);  yo garda updated name print hunca.

// math objects

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.random);
// const number=7.5;
// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));

const random= Math.random();
console.log(random);
console.log(Math.round(random));
console.log(Math.round(random*100));






