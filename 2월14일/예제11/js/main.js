// main.js

// 비디오 마우스를 가져다 대었을때 재생 땔때 멈춤
const articles = document.querySelectorAll("main>section>article");
const aside =document.querySelector("main>aside");
const close = document.querySelector("main>aside>div>span");


for(let el of articles){
  el.addEventListener("mouseenter", e =>{
   e.currentTarget.querySelector("video").play();
  });

  el.addEventListener("mouseleave", e => {
    e.currentTarget.querySelector("video").pause();
  });
  // 비디오 마우스를 가져다 대었을때 재생 땔때 멈춤

  el.addEventListener("click", e =>{
    aside.classList.add("on");
    aside.querySelector("video").play();
  });
  // 동영상 재생

  el.addEventListener("click", e =>{

  let tit = e.currentTarget.querySelector("h2").innerText;
  aside.querySelector("h1").innerText = tit;

  // 가져온 text를 지정

  let txt = e.currentTarget.querySelector("p").innerText;
  aside.querySelector("p").innerText = txt;

  let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
  aside.querySelector("video").setAttribute("src",vidSrc);

  aside.classList.add("on");
  aside.querySelector("video").play();
});

} //for문

close.addEventListener("click", () =>{
  aside.classList.remove("on");
  aside.querySelector("video").pause();
  
});


  // text가져오는것 innerText | 속성값 가져오는것 getAttribute







