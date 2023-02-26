// main.js

// 스크롤에 따라 이미지 나타남
const articles = document.querySelectorAll("section>article");
const snb = document.querySelectorAll(".snb > li");

window.addEventListener("scroll", ()=>{
  var scroll = document.querySelector("html").scrollTop;

  for(let i=0;i<articles.length;i++){
    articles[i].style.transform = `translateZ(${(-5000*i)+scroll}px)`;
 
//스크롤 값이 0~4999 이면 box1 보이고,box1에 on붙어라
//스크롤 값이 5000~9999 이면 box2보이고, box2에 on을 붙어라
    if(scroll>=(i*5000) && scroll<((i+1)*5000)){
      box(i,articles);
      box(i,snb);
    }

    for(let k=0;k<snb.length;k++){
      snb[k].addEventListener("click", e =>{
        e.preventDefault();
        window.scroll({
          top:5000*k,
          left:0,
          behavior:'smooth'
        });
      })
    }
  }
});

//공통
function box(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}


//마우스 움직일때
//  -반대방향 +같은방향
const section = document.querySelector("section"); //쌤은 body에 줌
section.addEventListener("mousemove", e=>{

  let posX = e.pageX/100;
  let posY = e.pageY/150;

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
  obj11.style.bottom = -100 -posY +"px";
  obj12.style.right = -593 -posX +"px";
  obj12.style.top = -85 -posY +"px";
  obj13.style.left = -100 +posX +"px";
  obj13.style.bottom = 20 +posY +"px";

  obj21.style.right = -710 -posX +"px";
  obj21.style.bottom = -420 -posY +"px";
  obj22.style.right = -50 +posX +"px";
  obj22.style.bottom = -100 +posY +"px";

  obj31.style.right = 110 -posX +"px";
  obj31.style.bottom = 70 -posY +"px";
  obj32.style.left = 100 +posX +"px";
  obj32.style.bottom = -160 +posY +"px";

  obj41.style.left = 350 -posX +"px";
  obj41.style.bottom = -150 -posY +"px";
  obj42.style.right = 167 -posX +"px";
  obj42.style.top = -255 -posY +"px";
  obj43.style.right = -100 +posX +"px";
  obj43.style.bottom = -120 +posY +"px";

  obj51.style.left = -100 -posX +"px";
  obj51.style.bottom = -290 -posY +"px";
  obj52.style.right = 30 -posX +"px";
  obj52.style.top = 170 -posY +"px";
  obj53.style.left = -30 -posX +"px";
  obj53.style.bottom = 0 -posY +"px";

});