// 함수

// li를 3개 가져오고 for문 사용
const btns =document.querySelectorAll(".btns>li");
const boxs =document.querySelectorAll("section>article");

console.log(btns);
console.log(boxs);

for(let i=0;i<btns.length;i++){
  btns[i].addEventListener("click", e =>{
    e.preventDefault();
    activation(i, btns); //li
    activation(i, boxs); //article
  });
}
//호출

// 양념 만능장 함수
function activation(index, list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}


/*
for문을 사용했을경우
for(let i=0;i<btns.length;i++){
  btns[i].addEventListener("click", e =>{
    //li 모두 on을 지워 회색이 되라 | li 모두 remove on해라
    for(let k=0;k<btns.length;k++){
      btns[k].classList.remove("on");
    } 
    //클래스 리스트에서 on을 지워라 | li
    //클릭한것만 li만 on을 붙여 빨강색이 되라 
    e.currentTarget.classList.add("on");
// 아티클 모두 on을 지우고
    // 클릭한것만 on을 붙여라

  });
}
*/

/* 공통: 
    //li 모두 on을 지워 회색이 되라
    for(let k=0;k<btns.length;k++){
      btns[k].classList.remove("on");
    }
    //클릭한것만 li만 on을 붙여 빨강색이 되라
    e.currentTarget.classList.add("on");
// 아티클 모두 on을 지우고
    // 클릭한것만 on을 붙여라
*/ 

// activation 함수 두번 호출

// const lis =document.querySelectorAll('.btns>li');
// console.log(lis);

// lis.addEventListener("click", () => {
//   if(lis.classList.contains("on")){
//     lis.classList.remove("on");
//   }else{
//     lis.classList.add("on");
//   }
//   });

// -------------------------------------------
//getAttrubute 속성값을 가져와 저장을 해라 | 링크 가져온ㅁ
// 속성값을 변수 값으로 해라 setAttribute 지정해라
const link= document.querySelector("a");
const link_href = link.getAttribute("href");
console.log(link_href);

const new_href ="https://wwww.google.com";
link.setAttribute("href", new_href);
//href의 속성값을 new_href의 속성값으로 지정을 해준다.


