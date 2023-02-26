//main.js

// 스크롤에 따라 이미지 나타남
const articles = document.querySelectorAll("section>article")
const snb = document.querySelectorAll(".snb>li")

window.addEventListener("scroll",()=>{
  var scroll = document.querySelector("html").scrollTop; //위와 동일
console.log(scroll);

for(let i=0;i<articles.length;i++){
  articles[i].style.transform = `translateZ(${(-5000*i)+scroll}px)`; //forEach로도 가능

  if(scroll>=(i*5000) && scroll<(i+1)*5000){
    box(i,articles);
    box(i,snb);
  }
  for(let k=0;k<snb.length;k++){
    snb[k].addEventListener("click",e => {
      e.preventDefault()
      window.scroll({
        top:5000*k,
        left:0,
        behavior:'smooth'
    });
    var scroll = window.pageYOffset;
    console.log(scroll)
    });
  }
}
});

//마우스 움직일때
const body = document.querySelector("body");
body.addEventListener("mousemove", e=>{
  let posX = e.pageX/100;
  let posY = e.pageY/150; //왜 나눈건지
  console.log(posY);

  let obj11 =document.querySelector(".obj11");
  let obj12 =document.querySelector(".obj12");
  let obj13 =document.querySelector(".obj13");
  let obj21 =document.querySelector(".obj21");
  let obj22 =document.querySelector(".obj22");
  let obj31 =document.querySelector(".obj31");
  let obj32 =document.querySelector(".obj32");
  let obj41 =document.querySelector(".obj41");
  let obj42 =document.querySelector(".obj42");
  let obj43 =document.querySelector(".obj43");
  let obj51 =document.querySelector(".obj51");
  let obj52 =document.querySelector(".obj52");
  let obj53 =document.querySelector(".obj53");

  obj11.style.left = -270 -posX +"px";
  obj11.style.bottom = -270 -posX +"px";
  obj12.style.right = -270 -posX +"px";
  obj12.style.top = -270 -posX +"px";
  obj13.style.left = -270 -posX +"px";
  obj13.style.bottom = -270 -posX +"px";


  
});



//공통
function box(index, list){
  for(let el of list){
    el.classList.remove("on"); //list에 on을 다 지우고
  }
  list[index].classList.add("on"); //list배열에 선택된것에만 on을 붙여라
}
