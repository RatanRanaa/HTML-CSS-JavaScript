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
        // let person = { name: "Anil"}
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
        //     setTimeout(() =>console.log(i), 1)
        // }  // it will give 0 1 2

        // 48
        // for (let i = 0; i < 3; i++) {
        //     setTimeout(() => {
        //         console.log(i)
        //     }, 1);          
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
        // for(let i = 0; i<arr.length; i++) {
        //         console.log(arr[i])
        // }

        // //forEach
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
        //                 // break
        //                 continue
        //         }
        //         console.log(arr[i]) // only 1 and 2 will show in console
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

         