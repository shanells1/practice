
// Promise : 자바스크립트 안에 내장되어있는 객체다.  비동기적인 것을 시행할 때 콜백함수 대신에 유용하게 쓰일 수 있는 객체다.
// state: pending -> fulfillde or rejected
// Producer vs Consumer

//1. Producer
// 새로운 Promise가 만들어질 때는 executer 함수가 바로 시작된다.
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    },2000);
});


// 2. Consumers: than, catch, finally
promise
.then((value) => {
    console.log(value);    
})
.catch(error => {
    console.log(error);
})
.finally(() => {console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(1)}, 1000);
}) 

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    })
})
.then(num => console.log(num));

//4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error${hen} => 🥚`)), 1000);

    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
.then(getEgg)
.catch(error => {
    return '🥖'
})
.then(cook)
.then(console.log)
.catch(console.log);