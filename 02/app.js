console.log('app.js');

/* 1. 객체 - Object 
// JSON(제이슨, JavaScript Object Notation) : 서버와 프론트엔드가 서로 통신을 할 때 JSON형태를 사용
var person = {
    nick: 'FE',
    age: 28,
    area: 'jeju',
    hobby: ['js', 'html'],
  };

console.log(person);

// 1-1) 기본 프로퍼티, 메소드
//constructor : 생성자 함수를 가르킴
obj.constructor == Object; // true

// hasOwnProperty : 객체가 프로퍼티를 소유(상속이 아닌)하고 있는지 검사
console.log(obj.hasOwnProperty('nick'));

// toString() : 문자열로 반환, 그다지 유용하지 않는 정보 출력
alert(obj); // alert(obj.toString())

// 1-2) 내장 객체
*/

/* 2. 배열 - Array
var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
*/

/* 3. 배열 CRUD ==> Create(생성), Read(읽기), Update(갱신), Delete(삭제)

// 3-1) Create(생성)
var todos = ['운동'];
var todo = '게임';
todos.push(todo);   //push 메소드 : 배열 뒷부분에 값을 삽입
console.log(todos);

// 3-2) Read(읽기)
todos.forEach(function(todo){   //forEach 메소드 : 주어진 함수를 배열 요소 각각에 대해 실행
    console.log(todo);
});

// 3-3) Update(갱신)
// var arr = [1,2];
// arr[1] = 3;  ==> arr = 1,3

// 3-3-1) findIndex 메소드 사용
var todos = ['운동', '게임'];
var updateTodo = '게임';

var updateIndex = todos.findIndex(function(todo) {  //findIndex 메소드 : 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환
    return todo === updateTodo;
  });
todos[updateIndex] = '공부';
console.log(todos);

// 3-3-2) map 메소드 사용
var todos = ['운동', '게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo) { //map 메소드 : 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
  if (todo === updateTodo) {
    return '공부';      // 게임일 경우 해당 배열의 값을 공부로 반환
  }
  return todo;          // 아닐 경우 배열의 값을 그대로 반환
});

console.log(newTodos);

// 3-4) Delete(삭제)
// 3-4-1) splice 메소드 사용
var words = ['a', 'b', 'c'];
console.log(words.splice(0, 1));    //0번째 배열부터 하나만큼 잘라라
console.log(words);

var words = ['a', 'b', 'c'];
console.log(words.splice(1, 1));    //1번째 배열부터 하나만큼 잘라라
console.log(words);

var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);   //splice 메소드 : 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
console.log(todos);

// 3-4-2) filter 메소드 사용
var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(toods) {
  return todo !== delteTodo;
});
console.log(newTodo);
*/

/* 4. 타입 변환 (동적 타이핑)
 - 한 타입의 값이 다른 타입값을 요구하는 곳에서 사용될때 필요에 따라 알아서 변환
 - 자바스크립트에서는 타입을 따로 지정하지 않고 타입이 자동으로 변환이 되고 동적 타이핑이 된다.
 - if 구문에서 문자형이 들어가도 문자열이 자동으로 true로 변환됨.
*/

/* 5. 원시, 참조 타입
// 5-1) 원시 타입(Primitive Type) : 변수에 할당될 때 메모리 상에 고정된 크기로 저장되고 해당 변수가 원시 데이터의 값(value) 보관
// ==> Number, String, Boolean, null, undefined
var a = 1;
var b = a;
b = 2;
console.log(a, b);
// 5-2) 참조타입(Reference Type) : 변수에는 데이터에 대한 참조(reference)만 저장    ==> 값이 들어가는게 아니라 주소값이 들어감
// ==> Object, Array, Function
// 배열 형태
var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

// 객체 형태
var a = { x: 1 };
var b = a;
b.x = 2;
console.log(a, b);
*/

/* 6. 구문
// 6-1) if
var isMan = true;
if (isMan) {
    console.log('1');
}
else if (!isMan && isHero) {

}
else {
    console.log('2');
}

// 6-2) for, while
// 6-3) 함수
// 6-4) try / catch / finally   ==> 에러 발생하는 구문에서 사용
*/

/* 7. 주요 전역함수
// 7-1) 자주 사용

// 7-1-1) alert
// window.alert('1'); ==> 최상위가 윈도우 객체인데 현재는 윈도우 객체에서 사용중이므로 생략 가능하다.

alert('안녕하세요');    // alert을 만나면 모든 실행을 멈추고 alert창을 띄워준다.
alert('1');

// 7-1-2) prompt      ==> 자바스크립트에서 질문을 묻는 인풋과 확인/취소 버튼이 있는 UI 생성
var who = prompt('당신은 누구세요?');
console.log(who);   // 입력 값을 변수에 할당할 수 있음.

// 7-1-3) confirm 
var isDelete = confirm('정말 삭제하시겠습니까?');

console.log(isDelete);  //값이 true/false로 반환됨

// 7-1-4) isNAN  ==> 숫자가 아닌 경우만 true 반환
// 7-1-5) parseInt, parseFloat  ==> 문자열을 숫자형으로 바꿔줌

// 7-2) setTimeout, setInterval     ==> 자바스크립트에 코드를 특정 주기마다 반복
function test() {
    console.log('test()');
}

setTimeout(test, 1000);     // 1초 후에 딱 1번 실행하고 종료
setInterval(test, 1000);    // 1초마다 1번씩 실행
 */

/* 8. 스코프
// 8-1) 유효 범위
var nick = 'aji';

function test() {
    var age = 30; //지역변수
    console.log(nick, age);
  }

test();     //전역에 있는 것을 가지고 옴
console.log(age);   //전역에서는 함수 안에 있는 것은 못 가지고 온다. age는 함수 안에서만 동작함.

// 8-2) 호이스팅 - Hoisting
// ==> var 구문, function 선언문을 해당 Scope의 가장 처음으로 옮기는 것, 항상 상단에서 변수 선언 사용 권장
*/

/* 9. 함수 : 한 번 정의하면 몇 번이든 실행할 수 있고 호출 할 수 있는 javascript 코드블록
 - 메서드(method) : 어떤 객체의 속성으로 저장된 javascript 함수
 - javascript 함수는 다른 함수 내에 중첩되어 정의도 가능

// 9-1) 함수 호출
// 9-1-1) 일반 함수
function sum(a, b) {
    return a + b;       //return 문의 값이 있으면 그 값을 반환 아니면 undefined을 반환
  }
console.log(sum(1,2));

// 9-1-2) 멤버 변수
var car = {
    year: '2014',
    starting: function() {      //함수가 객체에 붙어있으면 메소드
      console.log('starting..');
    },
  };
  
  car.starting();

// 9-2) 여러가지 함수 모양
// 익명 즉시실행함수, 스코프 보호       ==> 함수의 이름이 없지만 만들자마자 바로 실행
// 캡슐화 효과 가능
(function() {
    var a = 'a';
    console.log(a);
})();

// 9-3) 생략 가능한 전달 인자
function sum(x, y) {
    if (!y) y = 1;
    console.log(x + y);
}
console.log(sum(3));    //4
console.log(sum(3,3));  //6
*/

/* 10. 정규 표현식 */
// 10-1) .test() : 해당 문자열이 있는지 없는지 검사
var text = 'abc def ghi jkl abc def'; // 대상 문자열
var testReg = /abc/; // 찾을 문자열
var result = testReg.test(text);

console.log(result); // true

// 10-2) .match() : 찾은 문자열을 배열로 리턴해서 배열의 해당 문자열을 다른 문자로 변환 가능
// 10-3) .replace() : 










  

