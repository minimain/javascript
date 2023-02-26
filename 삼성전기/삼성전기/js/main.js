// main.js

// 주메뉴
// 각li에 마우스를 올리면 높이값 가져와서 풀다운 메뉴 내려오고 보여야 됨
// 키보드 탭으로 움직여야함
// li에 마우스를 올리면 header wrap이 펼쳐지고 내용이 보여야함

let gnb = document.querySelectorAll("nav.gnb>ul>li");
let lis = document.querySelectorAll("nav.gnb>ul>li>div");
let header_wrap = document.querySelector("#header_wrap");
let gnb_hei = document.querySelectorAll(".gnb>ul>li>div>ul>li");
console.log(gnb_hei);
let gnb_button =document.querySelectorAll(".gnb_button")



for(let i =0;i<gnb.length;i++){
  gnb[i].addEventListener("mousemove", e=>{
    e.preventDefault();
   lis[i].style.display ="block"
   lis[i].style.backgroundColor = "#fff"
  })
  gnb[i].addEventListener("mouseleave", e=>{
    e.preventDefault();
    lis[i].style.display = "none"})
}






// .gnb>ul>li>ul
// 이제 여기서 높이까지...

// nav.gnb>ul>li:nth-of-type(1)>div{display: block;} /*메뉴 보이고 안보이고*/
   //nav.gnb>ul>li>div>ul 여기의 옾이 크기를 가져오면 될거같은데..




// 검색박스
// 검색버튼 누르면 검색박스 보이고
// 닫기버튼 누르면 검색박스 안보이고
