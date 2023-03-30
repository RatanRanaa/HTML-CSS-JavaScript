        // 1
        // let a=[]
        // let b=[]
        // console.warn(a==b)   // false
        // console.warn(a===b)  // false

        // 2
        // let a=[]
        // let b=a
        // console.log(a==b)   // true
        // console.log(a===b)  //  true

        // 3
        // let z = [1,2,3,4]
        // let a = {name: "anil"};
        // console.log(a)
        // console.warn(...z)
        
        // 4
        // console.log(typeof NaN)  // not a number

        // 5
        // let data = 10 - -10;
        // console.warn(data)  // 20

        // 6
        // const set = new Set([1, 1, 2, 3, 4])
        // console.log(set)  // only single one will show in console 1 2 3 4

        // 7
        // let data = { name: "Anil"}
        // console.warn(delete data.name) // property delete (ture)

        // 8
        // let data = { name: "Anil"}
        // console.warn( delete data)  // false
        
        // 9
        // const data = [ "petere", "Anil", "sam"]
        // const [y] = data
        // console.log(y) // petere 

        // 10
        // const data = [ "petere", "Anil", "sam"]
        // const [y,z] = data
        // console.log(y,z)  // petere Anil

        // 11
        // const data = [ "petere", "Anil", "sam"]
        // const [,y] = data
        // console.log(y)  //  Anil

        // 12
        // const data = { name: "Anil", age: 29, skill: "js" }
        // console.warn(data) // { Anil, age: 29, skill: js}
        // const {name,age}=data
        // console.log(name,age) // Anil 29

        // 13
        // let data = {name: "anil", age: 29, skill: "js"}
        // let info = { city: "Noida", mail: "anil@test.com"}
        // data = {...data,...info} // both data and info will come in console
        // console.warn(data)  // in case only on one come data

        // 14
        // let data = { name: "anil", age: 29, skill: "js"}
        // let info = {city: "Noida"}
        // data = {data, ...info }
        // console.warn(data)  // iner the obj will come data

        // 15
        // let data = { name: "anil", age: 29, skill: "js"}
        // let info = { city: "Noida", skill: "Node"}
        // data = { ...data, ...info }
        // console.warn(data)  //  first come anil 29 Node Noida (skill will take a below side)

        // 16
        // const name = "Anil";
        // console.log(name()) // () error name is not a function

        // 17
        // const result = false || {} || null;
        // console.warn(result)  // {}
        
        // 18
        // const result = false || 20 || null;
        //    if (20) {
        //     console.warn("yes") // it will be yes
        //    }
        // console.warn(result) // it will come same 20
        
        // 19
        // const result = null || false || "";
        // console.warn(result) 
        // last wale value lay ga

        // 20
        // const result = [] || 0 || true
        // console.warn(result)  // []

        // 21
        // console.warn(Promise.resolve(5))  // promise fulfil: 5

        // 22
        // console.log('1' === '1') // true

        // 23
        // JSON.parse()  // undefine is not a valid JSON
        // A: Parses JSON to a javaScript value  // json ko javascript m canvert ke dega

        // 24
        // let name = "sidhu";
        // function getName() {
        //         console.log(name)
        //         let name = "anil" // with let const can not use after console.log() (before can use)
        // }
        // getName()

        // 25
        // let name = "Anil"
        // function getName() {
        //     console.log(name) // let name = "Anil" use hear not use outside of function
        // }
        // // let is block level scope {scope}
        // getName()

        // 26
        // console.log(`${(x => x)('I love')} to program`)
        
        // 27
        // function sumValues( x, y, z) {
        //     return x + y + z
        // }
        // console.warn(sumValues(...[1,2,3]))  // 6

        // 28
        // const name = "code step by step"
        // console.log(!typeof name === 'object') // false
        // console.log(!typeof name === 'string') // false
        // console.log(!typeof name === false)    // true   

        // 29
        // const name = "Subscribe"
        // const age = 21;
        // console.log(isNaN(name))  // not a number  true
        // console.log(isNaN(age))   // false

        // 30
        // let person = { name: "Anil", age: 20}
        // Object.seal(person)
        // person.age = 29
        // person.name = "Rana"  // after seal only can change the number not any more
        // console.warn(person)

        // 31
        // let data = [2, 9, 0, 10]
        // data.shift()  // first number will be remove
        // console.warn(data)

        // 32
        // let data = [2, 9, 0, 10]
        // data.pop() // last number will be remove
        // console.warn(data)

        // 33
        // let a = 34
        // console.warn(a%2) // odd number chek number odd or even

        // 34
        // let data = {
        //     name: 'anil'
        // }
        // delete data.name;
        // console.log(data) // blank obj will come in console

        // 35
        // let data = true
        // console.warn(!data)  // show will be false ! !! it will come boolean type  

        // 36
        // difference between map and foreach function // map will create return but foreach nothing 

        // 37
        // let data = ["anil", "piter", "burce"]
        // delete data[1]
        // console.warn(data) // piter place will be empty

        // 38
        // let a = [1,2,3,4]
        // let b = [4,5,6,7]
        // let c = [...a, ...b] // = new Set no repeat duble time one word
        // console.warn(c)

        // 39
        //    let c = 3 ** 3
        //    console.warn(c) 

        // 40
        // let a = 2
        // setTimeout(() => {
        //     console.warn(a)
        // }, 0);
        // a = 100

        // 41
        // let a = 2
        // let A = 30
        // console.warn(A)

        // 42
        // let A10 = "Anil"
        // // let 10A = "okay"
        // console.log(A10)

        // 43
        // let a = "like"
        // let b = `like`
        // console.warn(a === b)

        // 44
        // let a = 1
        // let c = 2
        // console.warn(--c === a)

        // 45
        // let a = 1
        // let b = 1
        // let c = 2
        // console.warn(a === b === --c)

        // 46
        // function fruit() {
        // console.log(name) // undefine
        // console.log(price) //let first declear after then var is use(hosting)
        //     var name = "apple"
        //     let price = 20
        // }
        // fruit()

        // 47
        // for (let i = 0; i < 3; i++) {
        //     setTimeout(() =>console.log(i), 5000)
        // }  // it will give 0 1 2

        // 48
        // for (let i = 0; i < 3; i++) {
        //     setTimeout(() => {
        //         console.log(i)
        //     }, 3000);          
        // }  // it will give 0 1 2

        // 49
        // console.warn(!"anil")
        // console.warn(typeof("anil"))  // false string

        // 50
        // let data = "size"
        // const bird = {
        //     size: "small"
        // }
        // console.warn(bird[data])   // size
        // console.warn(bird["size"])   // size
        // console.warn(bird.size)         // size
        // console.warn(bird.data) // undefine

        // 51
        // let c = { name: 'peter'};
        // let d;
        // d = c;
        // c.name = "anil"
        // console.log(d.name)

        // 52
        // var x;
        // var x = 10
        // console.log(x)

        // 53
        // var x;
        // let x = 10
        // console.log(x)  // x has already decleard

        // 54
        // let a = 3
        // let b = new number(3)

        // 55
        // console.log( a == b)  // true
        // console.log( a === b)  // false

        // 56
        // let name
        // name = {}
        // console.log(name) // {}

        // 57
        // function fruit() {
        //     console.log("woof!")
        // }
        // fruit.name = "apple";  // it will not run/wrok
        // fruit()

        // 58
        // function sum(a, b) {
        //     return a + b;
        // }
        // console.warn(sum(1, "2"))

        // 59
        // let number = 0
        // console.log(number++)
        // console.log(++number)
        // console.log(number)

        // 60
        // function getAge(...args){
        //     console.log(typeof args)
        // }
        // getAge(21)
       
        // 61
        // function getAge() {
        //     // 'use strict'
        //     age = 21;
        //     console.log(age)
        // }
        // getAge()

        // 62
        // const sum = eval('1-*10+5')
        // console.warn(sum)

        // 63
        // const obj = { 1: "a", 2: "b", 3: "c"}
        // console.log(obj.hasOwnProperty('1'))
        // console.warn(obj.hasOwnProperty('1'))

        // 64
        // const obj = { a: "one", b: "two", a: 'repeat'} 
        // console.log(obj)

        // 65
        // for (let i = 1; i<5; i++){
        //     if( i === 3) continue;
        //     console.log(i)
        // }
        
        // 66
        // const foo = () => console.log('first')
        // const bar = () => setTimeout(() => console.log('second'))
        // const baz = () => console.log('Third')
        // bar()
        // foo()
        // baz()

        // 67
        // const person = { name: "anil"};
        // function sayHi(age) {
        //     return `${this.name} is ${age}`;
        // }
        // console.log(sayHi.call(person, 21))
        // console.log(sayHi.bind(person, 21)())

        // 68
        // function sayHi(){
        //     return(()=>0)()
        // }
        // console.log(typeof sayHi())

        // 69
        // function sayHi() {
        //     return () => 0
        // }
        // console.log(typeof sayHi()())

        // 70
        // const number = [1, 2, 3]
        // number[6] = 11
        // console.log(number)

        // 71
        // const number = [1, 2, 3]
        // number[9] = number
        // console.log(number)

        // 72
        // console.log(!!null) //false
        // console.log(!!"") //false
        // console.log(!!1) //true

        // 73
        // console.warn(setInterval(()=>console.log('hi'),1000))
        // console.warn(setInterval(()=>console.log('hi'),1000))
        // console.warn(setInterval(()=>console.log('hi'),1000))

        // 74
        // console.log([..."anil"])

        // 75
        // const firstPromise = new Promise((res, rej) =>{
        //     setTimeout(res, 500, "one")
        // })
        // const secondPromise = new Promise((res, rej) =>{
        //     setTimeout(res, 500, "one")
        // })
        // promise.race([firstPromise, secondPromise]).then(res=>console.log(res))

        // 76
        // let person = { name: "peter"}
        // const members = [person]
        // person = null;
        // console.log(members)

        // 77
        // const person = {
        //     name: "batman",
        //     age: 21,
        // }
        // for (const item in person) {
        //     console.log(item)
        // }

        // 78
        // let data = 3 + 4 + '5';
        // console.log(typeof data)

        // 79
        // console.log(typeof 3 + 4 + "5") //number 45

        // 80
        // console.log(typeof (3 + 4 + + '5')) //number

        // 81
        // console.log([]==[]) //false

        // 82
        // let data = [1, 2, 3].map(num => {
        //     if (typeof num === 'number') return;
        //     return num * 2
        // })
        // console.warn(data) // three undefine

        // 83
        // function getInfo(member) {
        //     member.name = "Anil"
        // }
        // const person = {name: 'Sarah'};
        // getInfo(person)
        // console.log(person) //{name: 'Anil'}

        // 84
        // function Car() {
        //     this.make = "tata";
        //     return { make: 'Kia'}
        // }
        // const myCar = new Car();
        // console.log(myCar.make)

        // 85
        // (()=>{
        //     let x = (y = 10)
        // })();
        // console.log(typeof x) //undefine

        // 86
        // (()=>{
        //     let x = y = 10;
        // })()
        // console.log(typeof y) //number

        // 87
        // (()=>{
        //     let x = 10
        // })();
        // (()=>{
        //     let x = 10
        // })();
        // console.log(typeof x) //undefine

        // 89
        // (()=>{
        //     let x = y = 10
        // })()
        // (()=>{
        //     let x = y = 10
        // })()
        // console.log(y) // 20

        // 90
        // let x = 100;
        // (()=>{
        //     var x = 20
        // })()
        // console.log(x) // 100

        // 91
        // console.warn(!true - true) -1

        // 92
        // console.warn(true + +"10") //11





        // Code with Harry

        // console.log('hello world')
        // console.warn('this is warning')
        // console.error("this is an error")
        // alert('alsdkj')

        // Two type of data type in javaScript
        // 1. Primitive data types: undefine, null, number, string, boolean, symbol
        // 2. Reference data types: Arrays and objects

        // var arr = [1,2, "Rana" , 3, 4]
        // console.log(arr)

        // Operators in javaScript

        // var  a = 39
        // var b = 49
        // console.log('The value of a + b is', a+b)

        // Assignment Operater  = - 8 / 
        
        // comparison Operater = == === <= >= < >

        // logical Operater it will be boolean && || ! value true and false

        // function in javaScript
        // function avg(a, b) {
        //         return (a + b)*2 
        // }
        // c1 = avg(4, 6)
        // c2 = avg(14, 16)
        // console.log(c1, c2)

        // if else condition
        // var age= 10;
        // if (age > 18) {
        //         console.log("I can drink the bear")
        // } else {
        //         console.log("I am less then 18 so i can not drink the bear")
        // }

        // else if condition
        // let age = 28
        // if (age > 30) {
        //         console.log('you can apply for css')
        // } else if ( age > 25) {
        //         console.log("you can apply for upsc")
        // } else if (age > 18) {
        //         console.log("now you can apply for private job")
        // }

        //Array

        // const arr = [1,2,3,4,5,6,7,8]
        // console.log(arr)
        
        //  //loop
        // const arr = [1,2,3,4,5,6,7,8]
        // for(let i = 0; i<arr.length; i++) {
        //         console.log(arr[i])
        // }

        // //forEach
        // const arr = [1,2,3,4,5,6,7,8]
        // arr.forEach(function(element){
        //         console.log(element)
        // })

        //while loop
        // const arr = [1,2,3,4,5,6,7,8]
        // let a = 0
        // while(a<arr.length){
        //         console.log(arr[a])
        //         a ++
        // }

        // do while loop
        // const arr = [1,2,3,4,5,6,7,8]
        // let a = 0
        // do{
        //         console.log(arr[a])
        //         a++;
        // } while (a < arr.length)

        // loop
        // const arr = [1,2,3,4,5,6,7,8]
        // for(var i=0; i<arr.length; i++){
        //         if (i==2) {
        //                 break
        //                 continue
        //         }
        // console.log(arr[i]) // only 1 and 2 will show in console
        // }

        // important .pop(), .shift(), .push(), .sort() it is for string

        // String
        // indexOf, lastIndexOf, slice(0,10), replace,

        // Date and Time Day
        // let myDate = new Date()
        // console.log(myDate)
        // console.log(myDate.getTime())
        // console.log(myDate.getFullYear())
        // console.log(myDate.getDay())
        // console.log(myDate.getMinutes())
        // console.log(myDate.getHourse())
        // console.log(myDate.getSeconds())

        // Events in javaScript
        // function clicked(){
        //         console.log("Click Event")
        // }




        // window.onload = function(){
        //         console.log('The document was loaded')
        // }

        // one.addEventListener('click', function(){
        //         console.log('Click on Home')
        // })

        // one.addEventListener('mouseover', function(){
        //         console.log('Click on mouseover')
        // })
        // one.addEventListener('mouseout', function(){
        //         console.log('Click on mouseover')
        // })
        // one.addEventListener('mouseup', function(){
        //         console.log('Click on mouseover')
        // })
        // one.addEventListener('mousedown', function(){
        //         console.log('Click on mouseover')
        // })


        // setTimeout & setInterval

        // first = () =>{
        //         setTimeout(() => {
        //                console.log("Don") 
        //         }, 2000);
        // }
        // first()  // it will repat one/single time

        // function first(){
        //         setInterval(() => {
        //            console.log("I am Rana")     
        //         }, 6000);
        // }
        // first() // it will repat continusly

        // most important   clr use for stoping settimeout/setInterval

        // javaScript localStorage
        // localStorage.setItem('name', "Rana")
        // localStorage
        // localStorage.getItem('name')
        // localStorage.removeItem('name')
        // localStorage.clear()

        // JSON

        // obj = {name: 'Rana', length:1, a: {this:'that'}}
        // jso = JSON.stringify(obj)
        // console.log(typeof jso)
        // console.log(jso)
        // parsed = JSON.parse(`{name: 'Rana', length:1, a: {this:'that'}}`)
        // console.log(parsed)

        // javaScript Clock

        // let a;
        // let date;
        // let time;
        // setInterval(() => {
        //         a = new Date()
        //         date = a.toLocaleDateString()
        //         time = `${a.getHours()} ${a.getMinutes()} ${a.getSeconds()}`
        //         console.log(a, time)
        // }, 1000);










        
        // Begner to advance
        // alert('hello world');

// variable, const, var, and reserved words
// variable cant start from Number, and also any reserved word
// let age = 25;
// let year = 2020;

// log things to console
// console.log(age, year);

// age = 30;
// console.log(age);

// var point = 25;
// point = 27;
// console.log(point);

// const hello = 32;
// hello = 56;
// console.log(hello);  now we can not use agan hello

// strings
// console.log("hello, world");

// let email = "msingh8318@gmail.com";

// console.log(email);

// string concatenation
// let firstname = "ramn";
// let lastname = "singh";
// let fullname = firstname + " " + lastname;
// console.log(fullname);

// string characters
// console.log(fullname[2]);

// string length
// console.log(fullname.length);

// string methods

// console.log(fullname.toUpperCase());
// let result = fullname.toLowerCase();
// console.log(result);

// let index = email.indexOf("@");
// console.log(index);

// common string methods

// let email = "msingh@8324.con";

// let result = email.lastIndexOf('n');
// console.log(result)

// let result = email.slice(0,6);
// console.log(result)

// let result = email.substr(2,8);
// console.log(result)

// let result = email.replace('m', 's');
// console.log(result);


// data types - numbers

// let radius = 10;
// let pi = 3.14;
// console.log(radius,pi);

// math operators + - * / % **
// console.log(10/2);

// let result = radius % 3;
// let result = pi * radius**2;
// console.log(result)

//  order of operation  B I D M A S

// let result = 5 * (10-3)**2;
// console.log(result);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// console.log(likes)

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes **= 2;
// likes /= 2;
// console.log(likes);

// NaN - not a number

// console.log(2/'hell');

// let result = 'the video has ' + likes + ' likes';

// template strings

// const title = 'best reads of 2019';
// const author = 'mario';
// const likes = 30;

// concatenation way
//  let result = 'the blog called ' + title + ' by' + ' author' + ' has ' + likes + ' likes';
// console.log(result);

// template string way(template literate)
// let result = `the blog called ${title} by ${author} has ${likes} likes.`
// console.log(result);

// creating html template
// let html = `
//   <h1>${title}</h1>
//   <p>hwello world ${author}</p>
// `;
// console.log(html);

// arrays

// let name = ['mandeep', 'ramu', 'yamu'];
// console.log(name);
// name[1] = 'samu';
// console.log(name[1]);

// let age = [12,23,43,43];
// console.log(age[2]);

// let differdatatype = ['sam', 'ram', 12, 42];
// console.log(differdatatype);

// console.log(name.length);

// array methods

// let result = name.join('-');
// let result = name.indexOf('ramu');
// let result = name.concat(['namu', 'zdzf']);
// let result = name.push('sam');
//  result = name.pop();

// console.log(name);

// undefined
// let age;

// null
// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

// booleans & comparisons

// console.log(true, false, 'true', 'false');

// methods can return booleans

// let email = 'msingh8328@gmail.com';
// let name = ['man', 'ijad', 'nam'];
// let result = email.includes('@');
// let result = name.includes('man');
// console.log(name)
// console.log(result);

// comparison opeators
// let age = 23;
// console.log(age == 23);
// console.log(age == 24);
// console.log(age != 23);
// console.log(age != 30);
// console.log(age > 30);
// console.log(age < 30);
// console.log(age <= 23);

// let name = 'mandeep';

// console.log(name == 'mandeep');
// console.log(name == 'Mandeep');
// console.log(name > 'bandeep');
// console.log(name > 'Mandeep');
// console.log(name > 'Bandeep');

// loose comparison(different types can still be equal)

// let age = 25;
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison(different types cannot be eaqual)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// type conversion

// let score = '100 ';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(19);
// let result = Boolean('');

// console.log(result, typeof result);

// for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['mandeep', 'mand', 'add'];

// for(let i =  0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loop

// let i = 0;
// while(i < 5){
//     console.log('in loop:', i);
//     i++
// }

// let i = 0;
// while(i < 3){
//     let code = `div${names[i]}`;
//     console.log(code);
//     i++;
// }

// let i = 0;
// { console.log('the val of i is', i);
//     i++;
// }while(i < 3);


// conditionals
// if statements

// const age = 23;
// if(age > 20){
//     console.log('your age is over 20');
// }

// const name = ['man', 'nam', 'nab'];
// if(name.length > 3){
//     console.log('lname is mine');
// }

// const password = 'passsword';
// if(password.length > 8){
//     console.log('password is long emough');
// }

// if else  statement
// const password = 'password1';

// if(password.length > 8){
//     console.log('password is long emough');
// } else{
//     console.log('password is not long.');
// }


// else if  statement
// const password = 'password1';

// if(password.length >= 12){
//     console.log('password is very strong');
// }else if(password.length >= 8){
//     console.log('password is long emough');
// } else{
//     console.log('password is not long.');
// }

// logical operators OR || AND &&

// const password = 'mae@';

// if(password.length >= 12 && password.includes('@')){
//     console.log('password is very strong');
// }else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('password is strong');
// } else{
//     console.log('password is not strong.');
// }

// let user = false;

// if(!user){
//     console.log('you should log in');
// }

// console.log(!true);
// console.log(!false);


// breaks and continues

/*const scores = [23,43,34,0,34,100,23,4];
for(i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }
    console.log('your score is', scores[i]);
    if(scores[i] === 100){
        console.log('congrats, your reach on top level');
        break;
    }
}*/

// switch statements

/*const grade = '50';
switch(grade){
    case '50':
        console.log('you get A grade.');
        break;
    case 'B':
        console.log('you get B grade.');
        break;
    case 'C':
        console.log('you get C grade.');
        break;  
    case 'D':
        console.log('you get D grade.'); 
        break;
    case 'E':
        console.log('you get E grade.'); 
        break;
    default:
        console.log('not a valid grade');
}
*/

// variables & global&block scope

// let age = 3;

// if(true){
//     let age = 4;
//     let name = 'mandeep';
//     age = 5;
//     console.log('inside code block', age, name);
//     if(true){
//         let age = 6;
//         console.log('inside 2nd code block', age,name)
//     }
// }
// console.log('outside code block', age);
 
// const age = 3;

// if(true){
//     const age = 4;
//     const name = 'mandeep';
//     console.log('inside code block', age, name);
//     if(true){
//         const age = 6;
//         console.log('inside 2nd code block', age,name)
//     }
// }
// console.log('outside code block', age);

// function declations

// function name(){
//     console.log('hello');
// }
// name();
// name();
// name();
// name();

// function expression
// const hello = function ram(){
//     console.log('yup');
// };
// hello();
// hello();
// hello();
// hello();


// arguments & parameters

// const speak = function(name ='mandeep', time = 'morning'){
//     console.log(`good ${time} ${name}`);
// }

// speak('ramu', 'night');

// returning values

// const calcArea = function (radius){
//     return 3.14*radius**2;
    
// };
// const areaa = calcArea(5.2);
// console.log(areaa);

// regular function

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function

// const calcArea =  radius  => 3.14 * radius**2;
// const area = calcArea(5,1);
// console.log(area);

// const greet = () => 'hello, world';
// const start = greet();
// console.log(start);

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// };
// console.log(bill([10,12,42], 0.2));


//  callbacks and foreach
// callbacks for functions and foreach for methods


// foreach

// let people = [`'sam`,'sa','sma']

// people.forEach((people) => {
// console.log(people);
// });
// const ul = document.querySelector('.people')


// const people = [`sandeep`, `sonu`];
//  let html = ``;
// people.forEach(function(person){
//     // create html template
//     html += `<li style=" color:blue;>${person}</li>`;
// });

// ul.innerHTML = html
    

// object - properties & methods

// object literals


// let user = {
//     name: 'mandeep',
//     age: 21,
//     email: 'msingh3828@gmail.com',
//     location: 'haryana',
//     blog: [ 
//         {title: 'hello i am mandeep', likes: 30 },
//         {title: 'hi world', likes: 34 }
//     ] ,
//     login: function (){
//         console.log('the user is logged in');
//     },
//     logout(){
//         console.log('the user is logged out');
//     },
//     logblogs(){
//         // console.log(this.blog);
//         console.log('this blog has written the following blogs:');
//         this.blog.forEach(blogs => {
//             console.log(blogs.title, blogs.likes);
//         })
       
//     }
// };

// user.login();
// user.logout();
// user.logblogs();
// console.log(this);




// Math object

// console.log(Math);
// console.log(Math.PI);

//  const area = 7.6;

//  console.log(Math.round(area));
//  console.log(Math.floor(area));
//  console.log(Math.ceil(area));

// // random numbers

// const random = Math.random();
// console.log(Math.round(random*100));

// dom

// const heading = document.querySelector('h1');
// console.log(heading);

// const ul = document.querySelector('body > h1');
// console.log(ul);

// const par = document.querySelector('p');
// par.innerText = 'hello,my name is mandeep';

// par.forEach(para =>{
//    console.log(para);
// });
// console.log(par);
// const po = document.getElementsByClassName('people');
// console.log(po);


// const heading = document.querySelector('h1');

// const names = ['mandeep', 'sandeep', 'ramu'];

// names.forEach(person =>{
//     heading.innerHTML += `<p>${person}`;
// })


// const link = document.querySelector('a');

// link.setAttribute('href', 'https://www.google.com');
// // link.setAttribute('style', 'text-decoration:none;');

// link.style.margin = '20px';
// link.style.textDecoration = 'none';
// link.style.fontSize = '50px';

// console.log(link.classList);
// link.classList.add('link');
// link.classList.remove('link');

// const para = document.querySelectorAll('p');

// para.forEach(p=>{
//    if (p.textContent.includes('error')){
//        p.classList.add('error');
//    }
//    if (p.textContent.includes('success')){
//     p.classList.add('success');
// }
// });

// const heading = document.querySelector('h1');
// heading.classList.toggle('title');
// heading.classList.toggle('title');


// Parents,childs and siblings

// const heading = document.querySelector('h2');
// console.log(heading.parentElement);
// console.log(heading.nextElementSibling);
// console.log(heading.previousElementSibling);
// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//     console.log('clicked'); 
// });

// const ul = document.querySelector('ul');
// // ul.remove();

// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
// //   ul.innerHTML += '<li>something new</li>';
// const li = document.createElement('li');
// li.textContent = 'some new to do';
// // ul.append(li);
// ul.prepend(li);
// });

// const items = document.querySelectorAll('li'); 

 
// items.forEach(item => {
//     item.addEventListener('click', e => {
//     //    e.target.style.textDecoration = 'line-through';
//     e.stopPropagation();
//     e.target.remove();

// });
// });`

// ul.addEventListener('click', (e)=>{
// //   console.log(e);
// if(e.target.tagName ==='LI'){
//     e.target.remove();}
// });


// const copy = document.querySelector('.copyme');
// copy.addEventListener('copy', ()=>{
//     console.log('my content is copyrght');
// });

// const box  = document.querySelector('.box');
// box.addEventListener('mousemove', e =>{
//     // console.log(e);
//     box.textContent = `x-pos ${e.offsetX} & y-pos ${e.offsetY}`
// });


// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const popupclose = document.querySelector('.popup-close');


// button.addEventListener('click', ()=>{
//     popup.style.display = 'block';
// });

// popupclose.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// });
// popup.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// });

// const form = document.querySelector('.signup-form');
// const message = document.querySelector('.message')
// const checkpattern = /^[a-zA=Z]{6,10}$/;

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     // console.log(form.username.value);
// // validation
//     const username = form.username.value;

//     if(checkpattern.test(username)){
//     // valid info
//      message.textContent = 'username is valid';
//     }else {
//         message.textContent = 'username contains any letters between 6 to 10 letters longss '
//     }
// });

// // live validation
// form.username.addEventListener('keyup', e => {
//     // console.log(form.username.value, e.target.value);
//     if(checkpattern.test(e.target.value)){
//         form.username.setAttribute('class', 'success');
//    } else{
//     form.username.setAttribute('class', 'error');
//    }
// });

// Test regex

// const username = 'monusingh';
// const regpattern = /^[a-z]{6,}$/;
// let result = regpattern.test(username);
// // console.log(result);

// if(result){
//     console.log('pass');
// } else{
//     console.log('fail')
// }
// let result = username.search(regpattern);
// console.log(result);


// ninja quiz

// const correctanswers = ['B', 'B', 'B', 'B'];
// const form = document.querySelector('form');
// const result = document.querySelector('.result');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     let score = 0;
//   const useranswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

// // check answers
//    useranswers.forEach((answer, index) => {
//        if(answer === correctanswers[index]){
//            score += 25;
//        }
//    });

//    //show result on page  
//    scrollTo(0,0);
//    result.classList.remove('d-none');

//    let output = 0;
//    const timer = setInterval(() => {
//     result.querySelector('span').textContent = `${output}%`;
//     if(output === score){
//         clearInterval(timer);
//     } else{
//        output++;
//     }
//    }, 10); 

// });

//window object (global object)--every method, property and function store in window object.

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// console.log(alert('helloo'));
// console.log(window.alert('helloo'));

// setTimeout(() => {
// console.log(alert('hello'));
// }, 3000);

// array methods

// filter method

// const scores = [10,20,15,35,60,30,2];

// const newscore = scores.filter((score) =>{
//     return score > 20;
// });
// console.log(newscore);

// const users = [ 
//      {name: 'mandeep', premium: true},
//      {name: 'sandeep', premium: false},
//      {name: 'pandeep', premium: false},
//      {name: 'randeep', premium: true},
// ];

// const premiumuser = users.filter(user =>{
//     return user.premium;
// })
// console.log(premiumuser);

// map method

// const prices = [20,30,34,334,43,34,2,43];

// const saleprices = prices.map((price)=>{
//     return price*2;
// });

// console.log(saleprices);


// const products = [
//     {name: 'gold star', price:20},
//     {name: 'mushroom', price:40},
//     {name: 'butter', price:25},
//     {name: 'ice cream', price:30},
//     {name: 'gold star', price:50},
// ];
// const saleproducts = products.map((product) =>{
//     if(product.price > 30){
//          return {name: product.name, price: product.price/2};
//     }else{ 
//         return product;
//     }
// });
// console.log(saleproducts);


// reduce method

// const scores = [23,35,535,5,45,,56];
// const result = scores.reduce((increase, curr)=>{
//     if(curr > 50){
//         increase++;
//     }return increase; 
// }, 0);

// console.log(result);


// const products = [
//     {name: 'mandeep', price:20},
//     {name: 'mandeep', price:40},
//     {name: 'butter', price:25},
//     {name: 'mandeep', price:30},
//     {name: 'gold star', price:50},
// ];
// const mandeepprice = products.reduce((acc, curr)=>{
// if(curr.name === 'mandeep'){
//     acc += curr.price;
// }  return acc;
// },0);
// console.log(mandeepprice);


// find method

// const scores = [2,3,43,43,44,64,5,45];
// const firsthighscore = scores.find((score)=>{
//     return score > 20;
// });
// console.log(firsthighscore);

// sort method -- it is destructive  
// example 1 sorting string

// const  names = [' mand', 'san', 'adf', 'eef'];
// names.sort();
// names.reverse();
// console.log(names);




// const products = [
//     {name: 'mandeep', price:20},
//     {name: 'mandeep', price:40},
//     {name: 'butter', price:25},
//     {name: 'mandeep', price:30},
//     {name: 'gold star', price:50},
// ];

// products.sort((a,b)=> b.price - a.price);

//     console.log(products);

// chaining array methods


// const products = [
//     {name: 'mandeep', price:20},
//     {name: 'masep', price:40},
//     {name: 'butter', price:25},
//     {name: 'mddfdeep', price:30},
//     {name: 'gold star', price:50},
// ];

// const filtered = products.filter(product => product.price > 20);

// const newmap = filtered.map(product =>{
//     return `the ${product.name} is ${product.price} rs`;
// })
// console.log(newmap) 

// const chaining = products.filter(product => product.price > 20)
// .map(product => {
//         return `the ${product.name} is ${product.price} rs`;
// });
// console.log(chaining);  