'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruit
// (1). for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//(2). for of
for(let fruit of fruits) {
    console.log(fruit);
}

//(3). foreEach
// fruits.forEach(function (fruit, index) {
//     console.log(fruit, index);
// });
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: 아이템을 뒤에다가 추가
fruits.push('🍓', '🍑');
console.log(fruits);
// pop: 뒤에 있는 아이템을 제거
fruits.pop();
const poped = fruits.pop();
console.log(poped);
console.log(fruits);
fruits.pop();
console.log(fruits);
// unshift: 아이템을 앞에다가 추가
fruits.unshift('🍓','🍑')
console.log(fruits);
// shift: 앞에 위치한 아이템을 삭제
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note: shift , unshift 는 pop, push 보다 느리다. 이유는 뒤에 추가하거나 제거할때는 바로 추가와 제거를 하면 되는데 앞에다 하는 경우 앞에 있던 값들을 뒤로 보내는 과정에서
// 시간이 발생한다. 그렇기 때문에 pop, push를 사용하는 것이 좋다.

// splice: 지정된 위치에 아이템을 지우기
fruits.push('🍎', '🍑', '🍋');
console.log(fruits);
fruits.splice(2,1);
console.log(fruits);
fruits.splice(2.1, '🍉', '🍇');
console.log(fruits);

// combine two arrays :  두 배열을 합쳐주는 역할을 한다.
const fruits2 = ['🍐', '🥥']
const newFruit = fruits.concat(fruits2);
console.log(newFruit);

// 5. Searching : 배열안에 어떤 값이 몇번째 index에 있는 지 알 수 있게 해준다.
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍌'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🍎'));

//  lastIndexOf
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

