// function 
// - 프로그램을 구성하는 가장 작은 단위
// - 서브프로그램이라고도 불리고 여러번 재사용 할 수 있다.
// - 한가지의 작업이나 어떠한 계산을 할 때 사용

// 1. 함수 선언
// 함수의 기본 구조 : function name(param1, param2) { body... return; }
// 한개의 함수는 한가지의 일만 하도록 만들어야함
// 함수의 이름을 작성할때는 동사형태로 이름을 지정해줘야함
// 자바스크립트에서 함수는 객체다.

function printHello(){
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello');

// 2. parameters
// primitive parameters : value값을 바로 전달
// object parameters : 객체의 reference 값을 전달 

function changName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changName(ellie);
console.log(ellie);

// 3. Default parameters :기본매개변수 변수값을 지정하지 않았을 때 기본적으로 나올 값을 지정해준다.
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('hi');

// 4. Rest parameters : 이름을 지정하지 않은 배열을 말한다. 앞에 닷(.) 세개를 붙여 지정해주면 값이 배열로 할당된다.
function printall(...args){
    for (let i =0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printall('dream', 'coding', 'ellie');

// 5. Local scope : 블록 내부에 선언된 경우를 말한다. 블록 내부에 선언된 변수들은 그 안에서만 작용한다.
let globalMessage = 'global'; 
function printMessage() {
    let message = 'hello'
    console.log(message);
    console.log(globalMessage);
}
printMessage();

// 6. Return a value : 함수 실행을 종료하고 그 값을 내보낸다. 모든 함수에는 return 이나 return undefined(생략가능) 이다.
function sum(a, b) {
    return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);
console.log(sum(4,5));

// 7. Early return, early exit
// bad
// function upgradeUser(user) {
//     if (user.point > 10) {
        //long upgrade logic...
//     }   
// }
// good
// function upgradeUser(user) {
//     if (user.point > 10) {
//         return;
//     }   
    // long upgrade logic...
// }

// 1. First-class Function : 프로그램 언어 
// 함수를 변수나 자료구조에 저장할 수 있다.
// 함수의 매개변수(인자)에 다른 함수를 인수로 전달할 수 있다.
// 함수의 반환 값(return 값)으로 함수를 전달할 수 있다.

const print = function() {
    console.log('print');    
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function() {
    console.log('yes!');    
};

const printNo = function() {
    console.log('No!');    
}
randomQuiz('wrong',printYes, printNo );
randomQuiz('love you', printYes, printNo);

// Arrow function : => 표시를 사용해 함수를 간단하게 만들 수 있다. 단 함수 이름을 지정하지 못한다.
// const simplePrint = function() {
//     console.log('simplePrint');
// }
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;

// IIEF : 작성한 함수를 간단하게 바로 확인할 수 있는 방법
(function hello() {
    console.log('IIEF');
})();