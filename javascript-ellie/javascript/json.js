'use strict'

//json
//1. 데이터를 주고받을 떄 쓸수있는 가장 간단한 파일포맷
//2. 텍스트를 기반으로하는 가볍고 사람 눈으로 읽기도 편하고 키와 벨류로 이루어져 있는 파일 포맷이다
//3. 데이터를 서버와 주고 받을 때 직렬화하여 전송할 때 쓰이고 프로그램 언어와 플랫폼의 상관없이 쓸 수 있다.

// 1. Object to JSON
// stringfy(obj)
let json =  JSON.stringify(true);

console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthdate: new Date(),
    // symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name','color', 'szie']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


//2. JSON to Object
// parse(json)
json  = JSON.stringify(rabbit)
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthdate' ? new Date() : value;
} );
console.log(obj);
rabbit.jump();
// obj.jump();
console.log(rabbit.birthdate.getDate());
console.log(obj.birthdate.getDate());
