// 제출

let articles = document.querySelectorAll("section>article");
let h2s = document.querySelectorAll("article>h2");
let spans = document.querySelectorAll("article>span");
let section = document.querySelector("section");
let lis = document.querySelectorAll(".gnb>li");
let body = document.querySelector("body");

let numAr = articles.length; //article 개수
let widSec = numAr*200; //하나의 article가로크기
section.style.width = `${widSec+600}px` //section에 가로값을 article개수보다 600px을 더 줘서 로고가 가리지 않게 설정함
body.style.height = `${widSec}px` //이걸 안하면 스크롤이 움지이지만 article은 안움직임

for(let h2 of h2s){
  h2.addEventListener("click", e =>{
    e.preventDefault();
    for(let i=0;i<articles.length;i++){
      articles[i].classList.remove("on");
    }
    e.currentTarget.closest("article").classList.add("on"); //h2를 선택하고 h2에서 가장 가까운 부모요소인 article을 가져와서 선택한 article에 on을 붙여라

    let newSrc = e.currentTarget.querySelector("a").getAttribute("href");
    //h2에서 가장가까운 a를 가져오고 href의 속성값을 가져와라
    e.currentTarget.closest("article").querySelector("p>img").setAttribute("src",newSrc);
    //h2를 클릭했을때 부모인 article을 가져오고 img도 가져와라 그리고 거기에 src 속성값에 newSrc를 넣어라
    // <h2><a href="img/pic1.jpg">Art Work 01 </a></h2>
    // <p><img src="" alt=""/></p>
    //h2 a의 href속성값을 가져와서 p img의 src속성값으로 지정
    
  })
}

//span을 클릭하면 article에 .on이 없어져라
for(let span of spans){
  span.addEventListener("click", e =>{
    for(let i= 0;i<articles.length;i++){
      articles[i].classList.remove("on");
    }
  })
}

window.addEventListener("scroll", e =>{
  var scroll = document.querySelector("html").scrollTop;
  section.style.left = `${-scroll}px` //스크롤을 했을때 왼쪽으로 들어가는거라 -

})

for(let li of lis){
  li.addEventListener("click", e=>{
    e.preventDefault();
    window.scroll({
      top: `${li *1000}px`, //하나의 article이 200 이니까 5개가 되면 1000
      left: 0,
      behavior: "smooth"
    })
    box(li, lis)
  })
}

function box(index,list){
  for(let el of list){
      el.classList.remove("on");
  }
  list[index].classList.add("on");
}

