const pics = document.querySelectorAll(".face3 .pic")
console.log(pics)

for(i=0;i<pics.length;i++){
  pics[i].style.backgroundImage =`url(img/member${i + 1}.jpg)`
}

// 애니메이션 멈춤

const section = document.querySelector("section");
const articles = document.querySelectorAll("article");
console.log(articles); //확인용

for(let article of articles){
  article.addEventListener("mouseenter", e=>{
  section.style.animationPlayState = "paused"
});
  article.addEventListener("mouseleave", e =>{
  section.style.animationPlayState = "running"
});

}

// 애니메이션을 멈추게 하는것
// animation-playState:running;
// animation-playState:paused;