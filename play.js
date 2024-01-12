// let userName = "Jainil";
// const userEmail = "xxx@gmail.com";

// const sayHello = (message) => {
//     console.log("hi " + message);
// };

// const addOne = a => a + 1;

// sayHello(userEmail);
// sayHello(addOne(1))



// const person = {
//     name: "John",
//     age: "16",
//     sayHi: () => {
//         console.log(this.name);
//     },
//     greet() {
//         console.log(this.name);
//     },
//     sayHii: function () {
//         console.log(this.name);
//     }
// };

// person.sayHi();
// person.greet();
// person.sayHii();


// const hobbies = ['Cricket', 'Chess']

// const newHobbies = hobbies.map((hobbie) => {
//     return "Hobby : " + hobbie;
// });

// console.log(hobbies);
// console.log(newHobbies);

// // object array referece type

// hobbies.push('Programming')
// console.log(hobbies);



// // spread 
// const newHobbies2 = [...hobbies, "Shooting"];
// console.log(newHobbies2);


// const toArray1 = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// }

// const toArray2 = (...args) => {
//     return args;
// }
// console.log(toArray1(10, 20, 30));
// console.log(toArray2(10, 20, 30, 40));


// // destructructuring
// const printName1 = (person) => { console.log(person.name); }
// const printName2 = ({ name, age }) => { console.log(name, " ", age); }

// printName1(person)
// printName2(person)

// const { name, age } = person
// console.log(name, " ", age);

// const [hobby1, hobby2] = hobbies;
// console.log(hobbies);
// console.log(hobby1, "", hobby2);


// async
// setTimeout(() => {
//     console.log("Timer 2 seconds");
// }, 2000);

// console.log("wrote after timer but executed before");

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 2000);
    });
    return promise;
}

setTimeout(() => {
    console.log("Timer Starts");
    fetchData()
        .then((text) => {
            console.log(text, "1");
            return fetchData()
        })
        .then((text) => {
            console.log(text, "2");
        });

}, 2000);

//Template Literals
// const name = "Johhn";
// const age = 30;
// console.log(`My name is ${name} and I am ${age} years old.`);
