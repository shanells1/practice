'use strict';
// Q1. make a string out of an array : 배열에서 문자열을 만들때는 join이라는 키워드를 사용하면 된다.
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits);
    const result = fruits.join(', ')
    console.log(result);
  }
  
  // Q2. make an array out of a string : 문자열을 배열로 바꿔줄 때는 split키워드를 사용한다.
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // console.log(fruits);
    const result = fruits.split(',')
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1] : 문자열의 순서를 거꾸로 바꿀 때는 reverse를 사용한다. 대신 이렇게 사용하면 기존의 함수또한 거꾸로 변경된다.
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements : 배열에서 원하는 인자만 모아서 다시 배열을 만들때는 slice를 사용한다.
 //    마지막에 들어가는 숫자는 인자에서 제외 되기 때문에 4번째 인자까지 빼고 싶다면 마지막 숫자는 5자고 적어야 한다. 
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90 : 배열에서 원하는 인자를 찾을 때는 find키워드를 사용한다. 콜백 함수로 이루어져 있고 함수의 매개변수를 정해준 후
 //   찾고자 하는 조건을 설정해주면 된다. 단 여러명이어도 조건에 맞는 인자를 찾으면 함수가 멈추고 바로 출력하기 때문에 하나의 인자를 찾을 때 사용한다.
  {
      const result = students.find((student) => student.score === 90);
      console.log(result);
  }
  
  // Q6. make an array of enrolled students : filter키워드는 참 거짓을 구분해 참인 인자를 출력한다.
  {
      const result = students.filter((student) => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores : 원하는 인자값들만 배열로 모아 가져올 땐 map키워드를 사용한다. 
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50 : some키워는 한명이라도 조건에 맞는 다면 true 값을 출력하고, every키워드는 모든 인자가
 // 조건의 맞아야 true값을 출력한다.
  {
      const result = students.some((student) => student.score < 50);
      console.log(result);
      const result2 = !students.every((student) => student.score >= 50);
      console.log(result2);

  }
  
  // Q9. compute students' average score : reduce키워드는 지정한 시작점 부터 모든 배열을 돌면서 어떠한 값을 누적할 때 사용한다.
  {
    const result = students.reduce((a, b) => a + b.score,0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores : 두 종류의 키워드를 섞어서 사용 할 수 있다.
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students.map((student) => student.score).join(', ');
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order : sort키워드는 배열의 인자값들을 순서대로 정렬하는데 사용한다. 
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.map((student) => student.score)
    .sort((a, b) => a-b)
    .join();
    console.log(result);
  }