'use stirct';

// javascript is synchronous. : 
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration 
console.log('1');
setTimeout(() => console.log('2'),1000);
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'),2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);

    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    (user) => {
      userStorage.getRoles(
        user,
        (userWithRole) => {
          alert(
            `Hello! ${userWithRole.name}, you have a ${userWithRole.role}role`
          );
        },
        (error) => {
          console.log(error);
        }
      );
    },
    (error) => {
      console.log(err);
    }
  );

  // 콜백 체인의 문제점: 콜백함수 안에서 콜백을 이용하고 그 안에서 또 다른 콜백을 전달하고 이런식으로 콜백이 많아지면 가독성이 매우 떨어진다. 그리고 에러를 찾기가 힘들어지고
// 디버깅하고 문제를 분석하거나 유지보수 또한 어려워 진다.