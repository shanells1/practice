// 2.variable(변수) : 변할 수 있는 값이란 뜻으로 변수로 설정된 값들은 그 내용들 바꿔줄 수 있다.


// let name = 'hamin'
// console.log(name);
// name = 'hello';
// console.log(name);

// block scope, global scope
// block scrope는 중괄호 안에 선언하는 것으로 설정한 값이 중괄호 안에서만 적용이 되고 global scope는 중괄호 밖에 선언하는 방식으로 밖에다 선언을 하면 중괄호 안이든 밖이든
// 전부 적용이 된다. globalscope로 선언한 변수들은 어플리케이션이 실행되는 순간부터 메모리를 사용하기 때문에 가능한 적게 사용하는 것이 좋다.

let globalname = 'global name'
{
let name = 'hamin'
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name)

// let : 변수를 선언할 때 쓰는 키워드
// var : 예전에는 let 대신에 var라는 키워드를 사용했는데 var는 어디에 선언하든 항상 제일위로 선언을 끌어올려주는 hoisting현상이 발생하는 문제점과
// block scope를 무시하는 단점이 있다. block scope를 무시한다는 건 중괄호안에 var를 선언해도 global scope처럼 밖에서도 해석이 가능하다는 건데 예전에는
// 이런 유연함을 이용해서 금방금방 프로그램을 만들었지만 규모있는 프로젝트를 하게됐을 경우 선언하지 않은 값들이 할당되는 등 여러문제가 발생하는 단점이 있어 es6부터는
// let이라는 키워드로 대체되었다.

age = 4;
var age;
{
    var name2 = 'ellie';
}
console.log(name2);

// 위에서 보는 것과 같이 var를 사용하면 age라는 변수 선언을 나중에 사용해도 정상적으로 작동한다.  또한 block scope 안에 선언한 변수값도 밖에서 정상적으로 작동한다.

// 3. constat(상수) : 상수값은 바꿔줄 수 없는 값을 의미한다. 그래서 값을 할당하고 선언한 뒤에는 절대 바꿀 수 없다.
// 변수값을 하는 것보다 상수값을 할당하면 좋은 점은 보안상의 이유인데 변수값과는 달리 상수값은 변하지 않기 때문에 해커들이 코드를 바꾸려해도 바꿀 수 없기 때문이다. 그렇기 때문에 값을
// 바꿔야할 이유가 없다면 상수값을 쓰는게 좋다.

const daysInWeek = 7;
const maxNumber =  5;

// const : 상수를 선언할 때 쓰는 키워드
// note. 
// Immutable date type(바뀌지 않는 데이터 타입) : primitive type, frozen Object
// Mutable date type(바꿀 수 있는 데이터 타입) : Object
// 4. variable types 
//primitive type : number, string, boolean, null, undefiedn, sumbol
//object: primitive type을 묶어서 한 박스로 관리할 수 있게 해주는 것

//number : 자바스크립트에서는 다른 언어와 달리 숫자면 정수든 소숫점이든 number하나로 통일된다. 더군다나 굳이 number라는 데이터타입을 적어주지 않아도 된다.
const count = 17; 
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`)
//특별한 숫자값 : infinity, negativeinfinity, nAn
const infinity = 1/0;
const negativeinfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);
// infinity는 플러스값을 0으로 나눴을 때 나오고 negativeinfinity는 마이너스값을 0으로 나눴을 때 나온다 nAn는 숫자가 아닌것을 나눴을 때 나오는 값이다.
//이런 부분을 확인하지 않고 만들었을 경우 사용자에게 에러가 발생할 수 있으니 주의해야한다.

//bigint : 자바스크립트에서 number는 -2의 53승 부터 2의 53승까지 표현가능한데 더 큰 숫자를 표현할 때 bigint를 사용한다. 값 뒤에 n만 붙이면 적용된다.

//string: 문자열을 의미한다.
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//template literals (string) : `(백틱)기호와 ${}기호를 이용해서 문자열과 변수값을 +기호를 사용해야 하는 번거로움을 줄여줄 수 있다.

//Boolean : 참 과 거짓을 의미한다.
//false : 0, null, undefined, NaN, ''
//true : 다른 모든 값
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
// 위에 예시처럼 바로 true나 false값을 지정해도 되고 거짓 참을 어떤 조건에 따라 만들어 주어도 된다.

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// null과 undefined의 차이점 : null은 명학하게 아무것도 없는 상태라는 값을 할당해주는 것을 말하고 undefined는 선언은 되었는데 값이 지정되어있지 않은 경우를 말한다.

//symbol: 고유한 식별자가 필여하거나 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 사용한다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1);
console.log(symbol1 === symbol2); // 같은 문자열로 만들어도 다른 심볼로 만들어진다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); /// for를 사용하면 같은 심볼로 만들 수 있다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

//object(객체)
const ellie =  {name: 'ellie', age: 20};
ellie.age = 21;
console.log(ellie) // const로 상수값을 지정하면 바꿀 수 없지만 객체를 const로 선언할 경우 안에 있는 값들을 바로 가르키는 것이 아닌 값 전체는 포함하고 있는 주소를 
// 가르키는 것이기 때문에 그 주소를 변경하는 것이 아닌 안에 있는 값들은 변경이 가능하다.

// 5. dynamic typing: dynamically typed language: 타입을 따로 지정하지 않고 프로그램이 동작할 때 할당된 값에 따라 변경될 수 있다는 것을 의미
let text = 'hello'
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5
console.log(`value: ${text} type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text} type: ${typeof text}`);
