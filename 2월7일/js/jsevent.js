// 10이벤트

// a를 가져옴 하나를 첫번째꺼 (addEventListener :이벤트 할때는 항상 써줘야함) | 클릭이라는 이벤트를 할때 콜백함수 function | a링크를 누르면 원래 점핑함 위로 이동 | e를 넣어 이벤트 를 설정 그리고 매게변수에는 이름 아무거나 상관없음 |이벤트 객체 | preventDefault : 기본이벤트 성질을 없애줌 초기화 ( a 태그의 점핑 성질을) 반드시 넣어줘야함 | (매개변수)

// 이벤트가 실행이 되었을때
   const link =document.querySelector("a"); //첫번째 a
   link.addEventListener("click",function(e){
     e.preventDefault();
     console.log("링크를 클릭합니다");
   });
   
/*변수 link에 a를 불러옴 a는 이벤트객체? 이다. 이벤트 객체가 클릭을 했을때 변화를 준다는 것 | 변수 link에.addEventListener를 써준다. 이것은 이벤트 할때는 무조건 써줘야하는것이다. | a에 있는 "click"이라는 이벤트 클릭했을때 이벤트객체 메개변수(e)?가 발동? 된다. 이벤트 객체인 e에 preventDefault를 넣어 클릭했을때 맨 위로 이동 할수없게 해준다. ( 이벤트 성질을 없애줌 초기화) 그리고 클릭을 했을때 console 창에 링크를 클릭합니다  가 뜨게된다.  */

// 엔터이벤트
// const pink =document.querySelector("#box");
// pink.addEventListener("mouseenter",()=>{
//   pink.style.backgroundColor ="hotpink";
// });


const box = document.querySelector("#box");
box.addEventListener("mouseenter", ()=>{
  box.style.backgroundColor = "hotpink";
});
//mouseenter마우스가 들어가면 | 더 넓은 의미 ul이라면 밑에 li 까지
box.addEventListener("mouseleave", ()=>{
  box.style.backgroundColor = "aqua";
});
//mouseleave 마우스가 나가면

//ES5 이벤트 연결
/*box1.addEventListener("mouseenter",function(){
  this.style.backgroundColor = "hotpink"; 
  //this는 이벤트가 발생된 자기 자신 box | box1 =this
});
box1.addEventListener("mouseleave",function(){
  this.style.backgroundColor = "aqua";
});
*/

// ES6 인수 괄호 생략 버전 이벤트 연결
box1.addEventListener("mouseenter", e => {
  //this.style.backgroundColor = "hotpink";
  // es6 화살표함수 안쪽의 this는 window객체를 가리킨다.
  //그래서 밑에를 사용 | 
  e.currentTarget.style.backgroundColor = "hotpink"; 
});

box1.addEventListener("mouseleave", e => {
  e.currentTarget.style.backgroundColor = "aqua"; 
  //e.currentTarget는 이벤트가 발생한 대상(자기자신)을 가리킨다.
});


// ------------------------

// list중에 클릭한것이 무엇인지 아는것

const list =document.querySelectorAll(".list>li");
console.log(list);

for(let li of list){
  li.addEventListener("click",e=>{ //li하나하나 클릭을 했을때
    e.preventDefault();
    console.log(e.currentTarget.innerText)
  }); //e.currentTarget 내가 어떤 것을 클릭한지 알기위해 씀
}
// innerhtml :element까지 포함 (선택자 하위까지 포함?)
// currentTarget : 리스트가 있는데 내가 클릭한 것이 무엇인지 알기위해 this와 비슷
// e 는 이벤트 객체  파라미터 안에 들어온것

// -----------------

//class를 누르면 console창에 계속 더해질것이다. -를 누르면 빼질것이다.
//플러버튼과 마이너스 버튼을 가져오고 1씩 증가

const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0; //제어할 숫자 값 0으로 초기화

// ----------------------------
/*
// 1씩 증가|감소 예제

// 증가: btnPlus버튼을 클릭할 때 마다 num값을 1씩 증가 콘솔창에 num값 출력

btnPlus.addEventListener("click", e=>{
  e.preventDefault();
  num++;
  console.log(num);
});

//감소: btnMinus버튼을 클릭할때 마다 num값 1씩 감소 콘솔창에 num값 출력

btnMinus.addEventListener("click", e=>{
  e.preventDefault();
  num--; //num값 1씩 감소
  console.log(num);
});
*/

//10씩 증가
btnPlus.addEventListener("click", e => {
  e.preventDefault();
  num += 10;
  console.log(num);
})
//10씩 감소
btnMinus.addEventListener("click", e => {
  e.preventDefault();
  num -= 10;
  console.log(num);
})


// ---------------------------
// 이건 그냥 문자열이 됨
// const myName ="홍길동"
// console.log("내이름은 \n myName입니다.");

/*문자 안에 변수 삽입하기
ES6 문자열 표기법
탬플릿 리터럴(Template Literal)
`백킷 안에 ${변수}로 넣기, 줄바꿈 됨` */
const myName = "홍길동";
console.log(`내이름은 ${myName}


입니다.`);


//-------------
// box2가 회전 | 시계방향 플러스 | 시계 반대방향 마이너스 | 45deg가 회전


const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const box2 = document.querySelector("#box2");
const Deg =45; //회전할 각도 값 저장 | 값이 바뀌지 않아서 const로
let Num = 0; //증가시킬 값 0 으로 초기화 | 값이 바뀌는

// btnLeft를 클릭할 때마다 45도 각도에 감소된 Num값을 계속 곱한 값을 rotate구문에 삽입
btnLeft.addEventListener("click", ()=>{
  Num--;
  box2.style.transform = `rotate(${Num * Deg}deg)`;
});
// `rotate(${Num * Deg}deg)` 여기에 원래는""이 었던걸 ``백킷으로 묶어준다.


// btnRight를 클릭할때 마다 45도 각도에 증가된 Num값을 계속 곱한 값을 rotate구문에 삽입
btnRight.addEventListener("click", ()=>{
  Num++;
  box2.style.transform = `rotate(${Num * Deg}deg)`;
});


// ------------------------------
// 이동 버튼 예제
const btnLeft2 = document.querySelector(".btnLeft2");
const btnRight2 = document.querySelector(".btnRight2");
const late =100;
let Num2 = 0;
// 왼쪽으로 이동
btnLeft2.addEventListener("click", ()=>{
  Num2--;
  box2.style.transform=`translate(${Num2 * late}px)`;
});
//오른쪽으로 이동
btnRight2.addEventListener("click", ()=>{
  Num2++;
  box2.style.transform=`translate(${Num2 * late}px)`;
});

// ----------------
// 클릭하면 색 이 바뀜
// flag 깃발 하나 전체메뉴였나 쓰인게
/*
const wrap = document.querySelector("#wrap");
const Abox =document.querySelector("#wrap>article");
let flag = true;

wrap.addEventListener("click", () =>{
  if(flag){
  // Abox.style.backgroundColor ="hotpink";  //전체메뉴
  wrap.classList.add("on");
  flag = false;
}else{
  // Abox.style.backgroundColor ="aqua";
  wrap.classList.remove("on");
  flag = true;
}
});
*/

// js에서 계속 css를 바꿔주고 있었음
// 더 간단한 방법
// 클래스리스트에 on이라는 클래스를 추가해줘라 | css에서 처리 방법
// (remove) 원래대로 돌아갈려면 on을 지워버리면 원래대로 됨




// flag도 없애는 방법ㅜ더 간단

/* wrap.addEventListener("click", () =>{
  //let isOn = wrap.classList.contains("on");
  //console.log(isOn);
 // if(isOn){
  // Abox.style.backgroundColor ="hotpink";

  if(wrap.classList.contains("on")){
  wrap.classList.remove("on");
}else{
  wrap.classList.add("on");
}
});
//.contains("on"); | on 이 있냐 없냐
*/

//   // Abox.style.backgroundColor ="aqua";
//   wrap.classList.remove("on");
  
// }
// });
//  if(!wrap.classList.contains("on")   - !부정 붙여서도 사용 가능 (반대로~~~)
// wrap을 클릭했을때 on이 붙어있니 처음에는 안붙어있음 그래서 if조건식까지는 false라서 else부분을 시작해서 on이 붙어있고 붙어있어서 true라서 참의 실행문 실행

// 더간단한거 ____________________
// toggle메소드가 on과 remove가 함께 있는것

wrap.addEventListener("click", () => {
  wrap.classList.toggle("on");
});

// #wrap.on>article{background: hotpink;}   -   css에서 .on을 해줌
// contains("on") on을 포함하고있냐
// .add("on") - 추가
// .remove("on"); - 삭제 지움

















