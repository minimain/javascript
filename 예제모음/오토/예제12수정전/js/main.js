// main.js
/*
const pic = document.querySelectorAll(".pic");

for(i=0;i<pic.length;i++){
  pic[i].style.backgroundImage = `url(img/member${i+1}.jpg)`
  pic[i].style.backgroundSize = "cover"
  pic[i].style.bakcgroundRepeat = `no-repeat`
}*/
// 이렇게 설정하고 css에서 no-repeat이랑 위치 설정하거나 여기서 하거나
// ------------------------
// 선생님 버전 | i=0으로 잡아줌
const section = document.querySelector("section");
const articles = section.querySelectorAll("article");
let i =0;
const deg = 45;

for(let el of articles){
  let pic = el.querySelector(".pic");

  pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;

  el.style.transform =`rotate(${deg*i}deg) translateY(-100vh)`;
  i++;
}

/* 아티클 1번~8번까지
article{transform:rotate(0deg) translateY(-100vh);}
article{transform:rotate(45deg) translateY(-100vh);}*/

// next버튼 클릭하면 시계반대방향으로 45도 회전
// prev버튼 클릭하면 시계 방향으로 45도 회전

const nextbtn = document.querySelector(".btnNext");
const prevbtn = document.querySelector(".btnPrev");





