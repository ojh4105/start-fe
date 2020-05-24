console.log('app.js');

/* 1. 변수
var name = '오장훈';
var Name = '오장훈';
// 자바스크립트는 변수이름의 대소문자를 구분합니다.

console.log(name);
console.log(Name);

var var = 'test';
// 자바스크립트에서 예약어는 사용 불가
*/

/* 2. 데이터 타입
// 2-1) 숫자
var count = 1;
console.log(count);

// 2-2) String, Boolean
var isMan = true;   //boolean
var isMan = "true"; //String
console.log(isMan, true);

// 2-3) 함수 - Function   ==> 자바스크립에서 함수도 데이터 타입
function log(str){
    console.log(str);
}

log('hello');

var log = function(str){
    console.log(str);
}
log('hello');

// 2-4) 객체 - Object
var image = {
    width: 100,
    height: 100,
    name: '1.png',
};

// var imageWidth = 100;
// var imageHeight = 100;
// var imageName = '1.png';
console.log(image);

// 2-5) 배열 - Array
var image1 = [1, 2, 3, 4, 'a', {}];     // 배열에는 어떠한 데이터타입도 들어갈 수 있지만 한가지 데이터타입을 유지해주는게 좋다
image1[0] = 'a';
console.log(image, image1);

// 2-6) null == 아무런 값을 나타내지 않는 키워드
var data = null;    //아무런 값을 나타내지 않음
var data1 = '';     //빈 데이터 값

// 2-7) 정의되지 않음 - undefined
var data2;

console.log(data, data1, data2);

// (+) 프로퍼티란 속성을 나타냄
*/

/* 3. 주요 연산자
// 3-1) 더하기 연산자 (+)
console.log(1 + 2);
console.log('a' + 'b');
console.log(1 + '4');       // 다른 데이터 타입을 붙이는 것은 지양해야 함.

var count = 1;
var number = '2';
console.log(count + number);

// 3-2) 동등, 일치
// ==, !=는 단순한 값 비교를 통해 true/false를 리턴
// ===, !==는 데이터 타입까지 비교해줌

console.log(1 == 1);    //true
console.log(1 == 2);    //false
console.log('' == '0'); //false
console.log(0 == '');   //true  ==> 자동으로 0은 false로 빈값도 false로 변환이 되어 true가 나온다.
console.log(0 === '');  //위에 식에서 제대로 된 비교를 하기 위해 일치 연산자 사용
// 일치 연산자를 사용하는 쪽으로 습관 들이기!!

// 3-3) 논리곱 - and
if (true){
    console.log(1);
}
if (false){
    console.log(2);
}

if (isHero && isHulk){
    //둘 다 참일 경우 실행
}
// 3-4) 논리합 - or
if (isHero || isHulk){
    //하나라도 참일 경우 실행
}

// 3-5) 논리부정
var isHero = true;

if(!isHero){
    //영웅이 아닐 경우
    console.log('hero');
}
// 3-6) in ==> 해당 객체에 해당 속성(프로퍼티)이 있는지 검사할 때 사용
// 3-7) delete ==> 객체 연산에서 해당 프로퍼티를 지울 때 사용
               ==> var로 선언한 변수는 delete하지 못한다.

// 3-8) typeof
console.log(typeof 1);      //Number
console.log(typeof {});     //Object
console.log(typeof []);     //Object    ==> 배열도 object에 속함
console.log(typeof '1');    //String               

*/

