// Object { key: value};

// 1. Literals and properties
// const obj1 = {}
// const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 20};
print(ellie);

ellie.hasjob = true;
console.log(ellie.hasjob);

delete ellie.hasjob;
console.log(ellie.hasjob);

// 2. computed properties
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasjob'] = true;
console.log(ellie.hasjob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property vlaue shorthand
const person1 ={name: 'bob', age: '2'};
const person2 ={name: 'steve', age: '3'};
const person3 ={name: 'dave', age: '4'};
const person4 = new Person('ellie', 5);
console.log(person4);

// 4. Constructor Fuction
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log("rnadom" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
for (key in ellie) {
    console.log(key);
}
const array = [1, 2, 3, 4];
for (value of array) {
    console.log(value);
}
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder'
console.log(user2.name);

// old way 
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = {}
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example : 뒤에 값이 앞에 값을 덮어 씌운다.
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
