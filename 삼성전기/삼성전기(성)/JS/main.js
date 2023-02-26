// main.js


const lis = document.querySelectorAll(".gnb>ul>li")
const div = document.querySelectorAll(".gnb>ul>li>div")

const a = document.querySelector("div.btn_srch>a")

const wrap = document.querySelector(".srch_wrap")
console.log(wrap)
const close = document.querySelector("a.btn_srch_close")
console.log(close)



/* 주메뉴 */
// 각 li에 마우스를 올리면 (높이값 가져와서) 풀다운 메뉴 내려오고 보여야 됨,
// 키보드 탭으로 움직여야 됨.

for(let k=0;k<lis.length;k++){
  lis[k].addEventListener("click",e => {
    e.preventDefault();
    activation(k,div);
  });
  }

function activation(index,list){
  for(let el of list){
    el.classList.remove("on")
  }
  list[index].classList.add("on")
}

/* 검색박스 */
// 검색버튼 누르면 검색박스 보이고
// 닫기버튼 누르면 검색박스 안 보이고



  a.addEventListener("click",e => {
    e.preventDefault();
    activation2(wrap);
  });


close.addEventListener("click", e => {
  wrap.classList.remove("on")
})







