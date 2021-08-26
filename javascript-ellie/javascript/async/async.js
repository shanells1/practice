//async & await
//무조건 써야 하는 것이 아닌 상황에 다라 사용해야한다.

// 1. async
async function fetchUser() {
    // return new Promise((resolve, reject) => {
    //     resolve('ellie');
    // })
    return 'ellie';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanan() {
    await delay(1000);
    return '🍌';
}

// function pickFruit() {     // Promise 콜백함수 처럼 많이 사용하게 되면 가독성이 떨어진다.
//     return getApple()
//     .then(apple => {
//         return getBanan().then(banana => `${apple} + ${banana}`);
//     })
// }

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanan();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. usefull Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanan()])
    .then(fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanan()]);
}
pickOnlyOne().then(console.log);