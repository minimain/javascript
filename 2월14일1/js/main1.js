// main.js

// 백그라운드이미지를 .pic에 member1.jpg 넣기
const pics = document.querySelectorAll(".face3 .pic");
console.log(pics);
/* 방법1
for(let i=0;i<pics.length;i++){
  pics[i].style.backgroundImage = `url(img/member${i+1}.jpg)`
};
*/
// 방법2
pics.forEach((pic,index) =>{
  pic.style.backgroundImage = `url('img/member${index + 1}.jpg')`;
})






// 45도씩 회전 | section을 기준으로 | 8각형
/*css 속성
애니메이션을 멈추게 하는것
animation-playState:running;
animation-playState:paused;
*/

const articles = document.querySelectorAll("article");
const section = document.querySelector("section");

for(let article of articles){
  article.addEventListener("mouseenter", e =>{
    section.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", e=>{
    section.style.animationPlayState = "running";
  });
}



