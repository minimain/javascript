// 연습
const btnMenu = document.querySelector(".btnMenu");
const header = document.querySelector("header");
const gnb = document.querySelectorAll(".gnb li");
const content =document.querySelector("#content");
const section = document.querySelectorAll("#content section");

btnMenu.addEventListener("click", e =>{
  e.preventDefault();
  btnMenu.classList.add("on");
  content.classList.add("on");
  header.classList.add("on");
});

for(i=0;i<gnb.length;i++){
  gnb[i].addEventListener("click", e =>{
    btnMenu.classList.remove("on");
    content.classList.remove("on");
    header.classList.remove("on");
  })
}

// 공통 (약간 이해 덜 됨)
function listM (one ,lists){
  for(let list of lists){
    list.classList.remove("on");
  }
  lists[one].classList.add("on");
}
//호출
for(let i=0;i<gnb.length;i++){
  gnb[i].addEventListener("click", e =>{
    listM(i, gnb);
    listM(i, section);
  })
}