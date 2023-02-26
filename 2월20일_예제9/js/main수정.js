//main.js

// 스크롤에 따라 이미지 나타남
const articles = document.querySelectorAll("section>article")
const snb = document.querySelectorAll(".snb>li")

window.addEventListener("scroll",()=>{
   //var scroll = window.pageYOffset; //스크롤을 했을때 y값을 알수있음 | 맨위 0, 맨아래 23000
var scroll = document.querySelector("html").scrollTop; //위와 동일
console.log(scroll);

    // 스크롤을 내리면 뒤에 있던 article이 앞으로 나오는것
    // 아티클 하나하나 뒤에서 앞으로 스크롤 값만큼 이동
    /*section>article:nth-child(1){transform: translateZ(0px);}
    section>article:nth-child(2){transform: translateZ(-5000px);}
    section>article:nth-child(3){transform: translateZ(-10000px);}
    section>article:nth-child(4){transform: translateZ(-15000px);}
    section>article:nth-child(5){transform: translateZ(-20000px);}*/

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
    //스크롤 값이 0~4999 이면 box1 보이고,box1에 on붙어라
    //스크롤 값이 5000~9999 이면 box2보이고, box2에 on을 붙어라
    //스크롤 값이     0 ~  4999 이면 box 1
    //스크롤 값이  5000 ~  9999 이면 box 2
    //스크롤 값이 10000 ~ 14999 이면 box 3
    //스크롤 값이 14999 ~ 19999 이면 box 4
    //box5까지 적용
    //section > article.on{z-index:9;opacity:1;}
    //.snb li.on span{width:100%;}


/* 위에 더 간단 방법
    if(scroll>=0 && scroll<50000){
      box(0, articles);
      box(0, snb);
    }
    if(scroll>=5000 && scroll<9999){
      box(1, articles);
      box(1, snb);
    }
    if(scroll>=10000 && scroll<14999){
      box(2, articles);
      box(2, snb);
    }
    if(scroll>=15000 && scroll<19999){
      box(3, articles);
      box(3, snb);
    }
    if(scroll>=20000 && scroll<25000){
      box(4, articles);
      box(4, snb);
    }
    */
   
});


//마우스 움직일때
const body = document.querySelector("body");
body.addEventListener("mousemove", e=>{
  let posX = e.pageX/100;
  let posY = e.pageY/150; //왜 나눈건지
  console.log(posY);
  /*
  .obj11{position:absolute;left:-270px;bottom:-100px;}
  .obj12{position:absolute;right:-593px;top:-85px;}
  .obj13{position:absolute;left:-100px;bottom:20px;}
  */
//  -반대방향 +같은방향
 let obj11 = document.querySelector(".obj11");
 obj11.style.left = -270 -posX + "px";//다른방향
 obj11.style.bottom = -100 -posY +"px"; //같은방향
 let obj12 =document.querySelector(".obj12");
 obj12.style.right = -593 -posX + "px";//같은방향
 obj12.style.top = -85 -posY +"px"; //다른방향
 let obj13 =document.querySelector(".obj13");
 obj13.style.left = -100 +posX + "px";//같은방향
 obj13.style.bottom = +20 +posY +"px"; //다른방향

 let obj21 = document.querySelector("obj21");
 obj21.style.right = -710 -posX +"px";
 obj21.style.bottom = -420 -posY +"px";
 let obj22 = document.querySelector(".obj22");
 obj22.style.right = -50 -posX +"px";
 obj22.style.bottom = -100 -posY +"px";

 let obj31 = document.querySelector(".obj31");
 obj31.style.right = 110 +posX +"px";
 obj31.style.bottom = 70 +posY +"px";
 let obj32 = document.querySelector(".obj32");
 obj32.style.left = 100 +posX +"px";
 obj32.style.bottom = -160 -posY +"px";

 let obj
/*
let obj11 = document.querySelector(".obj11")
obj11.style.left = -270 - posX + "px"
obj11.style.bottom = -100 - posY + "px"
let obj12 = document.querySelector(".obj12")
obj12.style.right = -593 - posX + "px"
obj12.style.top = -85 - posY + "px"
let obj13 = document.querySelector(".obj13")
obj13.style.left = -100 + posX + "px"
obj13.style.bottom = 20 + posY + "px"
let obj21 = document.querySelector(".obj21")
obj21.style.right = -710 - posX + "px"
obj21.style.bottom = -420 - posY + "px"
let obj22 = document.querySelector(".obj22")
obj22.style.right = -50 + posX + "px"
obj22.style.bottom = -100 + posY + "px"
let obj31 = document.querySelector(".obj31")
obj31.style.right = 110 - posX + "px"
obj31.style.bottom = 70 - posY + "px"
let obj32 = document.querySelector(".obj32")
obj32.style.left = 100 + posX + "px"
obj32.style.bottom = -160 + posY + "px"
let obj41 = document.querySelector(".obj41")
obj41.style.left = 350 - posX + "px"
obj41.style.bottom = -150 - posY + "px"
let obj42 = document.querySelector(".obj42")
obj42.style.right = 167 - posX + "px"
obj42.style.top = -255 - posY + "px"
let obj43 = document.querySelector(".obj43")
obj43.style.right = -100 + posX + "px"
obj43.style.bottom = -120 + posY + "px"
let obj51 = document.querySelector(".obj51")
obj51.style.left = -100 - posX + "px"
obj51.style.bottom = -290 - posY + "px"
let obj52 = document.querySelector(".obj52")
obj52.style.right = 30 - posX + "px"
obj52.style.top = 170 - posY + "px"
let obj53 = document.querySelector(".obj53")
obj53.style.left = -30 - posX + "px"
obj53.style.bottom = 0 - posY + "px"*/
});



//공통
function box(index, list){
  for(let el of list){
    el.classList.remove("on"); //list에 on을 다 지우고
  }
  list[index].classList.add("on"); //list배열에 선택된것에만 on을 붙여라
}

