/*main.js*/
// 재료 가져오기
const btnMenu = document.querySelector(".btnMenu");
const header = document.querySelector("header");
const content = document.querySelector("#content");
const gnb = document.querySelectorAll(".gnb li");
const section = document.querySelectorAll("#content>section");

// 햄버거 버튼 클릭 이벤트
btnMenu.addEventListener("click", e =>{
  e.preventDefault(); //a라서 이벤트 객체 로 하고 | 위로 안올라가게 
  btnMenu.classList.add("on");
  header.classList.add("on");
  content.classList.add("on");
});

// remove
for(i=0;i<gnb.length;i++){
  gnb[i].addEventListener("click", e =>{
  e.preventDefault();
  btnMenu.classList.remove("on");
  header.classList.remove("on");
  content.classList.remove("on");
  });
};
// -------------------------------------

// 주메뉴 클릭 이벤트
//호출
for(let i=0;i<gnb.length;i++){
  gnb[i].addEventListener("click", e =>{
    e.preventDefault();
    activation(i, gnb); //
    activation(i, section); //
  });
}
/* //선생님 버전
for(let i=0;i<gnb.length;i++){
  gnb[i].addEventListener("click", e =>{
    e.preventDefault();
    btnMenu.classList.remove("on");
    header.classList.remove("on");
    content.classList.remove("on");
    
    //모든 section on지워라
    //클릭한 li의 인덱스번호에 해당되는 section on 붙여라
    activation(i, section); //
  });
} 
*/

//공통
function activation(index, list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}

// ---------------------------------------
