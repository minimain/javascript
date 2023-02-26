// 마우스를 가져다 대었을때 동영상 재생
// article 클릭 했을때 해당 내용 큰화면으로 나타남 내용 가져오기

const article = document.querySelectorAll("main > section > article");
const close = document.querySelector("main>aside>div>span");
const aside = document.querySelector("main > aside");

for(let el of article){
  el.addEventListener("mouseenter", e =>{
    e.currentTarget.querySelector("video").play();
  });
  el.addEventListener("mouseleave", e =>{
    e.currentTarget.querySelector("video").pause();
  });

  el.addEventListener("click", e=>{

    let text1 = e.currentTarget.querySelector("h2").innerText;
    aside.querySelector("h1").innerText = text1;

    let text2 = e.currentTarget.querySelector("p").innerText;
    aside.querySelector("p").innerText = text2;

    let text3 = e.currentTarget.querySelector("video").getAttribute("src");
    aside.querySelector("video").setAttribute("src",text3);
    
    aside.classList.add("on");
    aside.querySelector("video").play();
  });
}

close.addEventListener("click", e =>{
  aside.classList.remove("on");
  aside.querySelector("video").pause();
});





















// el.addEventListener("click", e=>{

//   let tit = e.currentTarget.querySelector("h2").innerText;
// aside.querySelector("h1").innerText = tit;

//   let txt2 = e.currentTarget.querySelector("p").innerText;
//   aside.querySelector("p").innerText = txt2;

//   let txt3 = e.currentTarget.querySelector("video").getAttribute("src");
//   aside.querySelector("video").setAttribute("src",txt3);

//   aside.classList.add("on");
//   aside.querySelector("video").play();
// });








// close눌렀을때 다시 들어감