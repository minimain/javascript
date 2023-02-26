// main.js
let articles = document.querySelectorAll("section>article");
let h2s = document.querySelectorAll("article>h2");
let spans = document.querySelectorAll("article>span");
let section = document.querySelector("section");
let lis = document.querySelectorAll(".gnb>li");
let body = document.querySelector("body");

//아티클의 갯수를 알고
//총길이 = 200*아티클개수
//body의 height속성값 에 총길이 지정
//section의 width속성값 에 총길이+600 지정
let numAc = articles.length;
console.log(articles)
let widSec = numAc*200;
section.style.width = `${widSec+600}px`;
body.style.height = `${widSec}px`;

//h2를 클릭하면 부모인 article에 .on이 붙어라
for (let h2 of h2s) {
  h2.addEventListener("click", e => {
    e.preventDefault();
    for(let i=0;i<articles.length;i++){
      articles[i].classList.remove("on");
    }
    e.currentTarget.closest("article").classList.add("on");

    // <h2><a href="img/pic1.jpg">Art Work 01 </a></h2>
    // <p><img src="" alt=""/></p>
    //h2 a의 href속성값을 가져와서 p img의 src속성값으로 지정
    let newSrc = e.currentTarget.querySelector("a").getAttribute("href");
    e.currentTarget.closest("article").querySelector("p > img").setAttribute("src",newSrc);

  })
}

//span을 클릭하면 article에 .on이 없어져라
for (let span of spans) {
  span.addEventListener("click", e => {
      for(let i=0;i<articles.length;i++){
          articles[i].classList.remove("on");
      }
  })
}

// window 에서 scroll움직이면 현재scroll값을 가져와서 
//section의 left값을 -scroll값으로 지정.
window.addEventListener("scroll", e => {
  var scroll = document.querySelector('html').scrollTop;
  //var scroll = window.pageYOffset;
  section.style.left = `${-scroll}px`;
})

//.gnb li를 클릭하면 li의 index번호 곱하기 1000px씩 윈도우 스크롤이 이동한다.
// li에 .on이 붙어라
for(let i=0; i<lis.length; i++){
  lis[i].addEventListener("click", e => {
      e.preventDefault();
      window.scroll({
          top: `${i * 1000}`,
          left: 0,
          behavior: "smooth"
      })
      activation(i,lis)
  })
}

let activation = (idx,list) => {
  for(let el of list){
      el.classList.remove("on");
  }
  list[idx].classList.add("on");
}