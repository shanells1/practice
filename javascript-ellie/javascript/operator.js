// 1. string concatenation: + 표시로 문자열과 문자열을 합칠 수 있다.
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2} `);

// 2. Numeric operators : 숫자 연산
console.log(1 + 1); // 더하기
console.log(1 - 1); // 뺴기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나눈 나머지 값
console.log(2 ** 3); // 2의 3승

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 앞에 두개의 +를 붙이는 걸 preIncrement라 부른다 preIncrement를 사용하면 지정한 값의 1을 더한 값을 할당한다.
// counter = counter + 1;
// preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; // 뒤에 +를 붙이는 걸 postIncrement라 하는데 postIncrement 사용하면 1을 더하기 전에 값을 할당하고 다음에 1을 더한다는 뜻이다.
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
// postIncrement = counter;
// counter = counter + 1; 
const preDecrment = --counter; // 앞에 두개의 -를 붙이는 걸 preDecrment라 부른다 preIncrement와 반대로 지정한 값의 1을 뺀 값을 할당한다.
console.log(`preIncrement: ${preDecrment}, counter: ${counter}`);
const postDecrment = counter--; // postIncrement과 반대로 뒤에 -를 붙이는 걸 postDecrment라 부른다. 1을 빼기전에 값을 할당 하고 그 후에 1을 뺀다.
console.log(`preIncrement: ${postDecrment}, counter: ${counter}`);
//4. Assignment operators : 할당연산자로 오른쪽 값을 왼쪽 연산자로 할당한다.
let x = 3;
let y = 6;
x += y; // x = x+y 와 같은 뜻이다.
x -= y;
x *= y;
x /= y;
//5. Comparison operators: 비교연산자로 두 피연산자를 비교해 결과가 참인지 거짓인지에 따라 결과를 도출한다.
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);
//6, Logical operators: || (or), && (and), ! (not) 
const value1 = false;
const value2 = 4 < 2;
// || (or) : or은 안에 값들중 하나라도 true가 있으면 true로 계산되는 연산자이다. 처음 값이 true면 즉시 중지 되고 바로 true로 인식하기 때문에 코드가 복잡하거나 연산이
// 복잡한 함수를 앞에 넣는 것보다 값이 간단한 것을 앞에 배치하는 것이 좋다.
console.log(`or: ${value1 || value2 || check()}`);
// && (and) : and는 안에 있는 모든 값이 true일 때 true라고 생각한다. 처음 값이 false면 멈추고 false라고 인식한다.  그렇기 때문에 or과 마찬가지로 계산하기 어려운 것일수록
// 뒤에 배치하는 것이 좋다.
console.log(`or: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('😱');
    }
    return true;
}
// ! (not) : 가지고 있던 값을 반대로 바꿔주는 연산자이다.
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality : 두개가 타입이 달라도 타입을 변경해서 같은 지 확인한다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality : 타입까지 신경써서 같은 지 확인한다. 웬만하면 strict equality로 검사하는 게 좋다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name : 'ellie'};
const ellie2 = { name : 'ellie'};
const ellie3 = ellie1
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
// 8. Conditional operators: 삼항 조건 연산자는 if문을 사용하는데 처음 if 괄호안에 값이 참이라면 if 중괄호안에 있는 것이 실행되고 거짓이라면 else if로 넘어가
// 참이라면 그 안에 것을 실행하고 거짓이면 마지막 else를 실행한다.
//if, else if, else
 const name = 'ellie'
if(name === 'ellie') {
    console.log('welcome, ellie!');
} else if(name === 'coder') { 
    console.log('your are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: if문을 조금더 간단하게 사용할 수 있는 연산자 if 괄호 안에 값 다음에 ?표를 붙여 그것이 참이라면 : 왼쪽에 있는 걸 실행하고 거짓이라면 : 오른쪽에
// 있는 걸 실행한다. 이것을 계속 묶어서 길게 사용하면 코드의 가독성이 떨어져 좋지 않다.
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'welcome, ellie!' : 'your are amazing coder');

// 10. Switch statement : if문과 비슷한데 switch 괄호안에 값과 case의 값이 같은 것을 실행한다. if문에서 else, if를 많이 반복해야 한다면 switch를 사용하는 것이 좋다.

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    // Chrome과 Firefox의 값은 같은 것을 도출허기 때문에 묶을 수 있다.
    default:
        console.log('same all!');
        break;
}

// 11. Loops : 반복문은 while을 사용하는데 while은 괄호안에 값이 false가 될 때까지 반복한다.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// do while loop : while안에 값이 참인지 거짓인지 판단하지 전에 do 안에 있는 것을 먼저 실행하고 그 밑에 while이 거짓이면 멈춘다.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop : for는 begin, condition step 이렇게 나눠지는데 먼저 begin을 처음에 한번 호출을 하고 그 다음 블록을 실행하기 전 condition 맞는지 안맞는지 확인하고
// 블록이 실행이 되면 마지막 step을 실행한다. 이렇게 condition이 안맞을 때까지 무한히 실행하게 된다.

for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) { // for 안에 직접 변수를 등록해서 써도 좋다
    console.log(`inline variable for: ${i}`);
}
// nested loops : for문 안에 다시 for문을 사용하는 방식인데 이런식으로 작성하면 cpu에 좋지 않아 사용하지 않는 것이 좋다.
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and  print only even numbers(use continue)
for (i=0; i<11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`q1: ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
// for (i=0; i<10; i++) {
//     if(i>8) {
//         break;
//     }
//     console.log(`q2: ${i}`);
// }