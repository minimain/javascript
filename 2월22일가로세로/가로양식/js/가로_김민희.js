//main.js 가로복습

// 재료
let body = document.querySelector("body");
const sections = document.querySelectorAll("#container>div>section");
const contents = document.querySelectorAll("#container>div");
let container = document.querySelector("#container");

let character = document.querySelector(".character");
let lastScrollTop = 0;

// 바로 실행
let timer = setTimeout(()=>{
sections[0].classList.add("on");
},500);

//가로 값
let wt = window.innerWidth;

//화면 값 반복
for(let i=0;i<contents.length;i++){
  contents[i].style.width =`${wt}px`;
} 

//contents 각각의 화면값을 모두 더하여 나열?
let lenght = contents.length;
let containerWid = lenght * wt;
body.style.width = `${containerWid}px`

window.addEventListener("scroll", ()=>{
  let scroll = document.querySelector("html").scrollTop;

  let winW = window.innerWidth;
  let winH = window.innerHeight; //937

  let W = containerWid - winW; //14690-1469
  console.log(winW);
  let h = containerWid - winH; //14690 - 937
  let R = W/h; //0.9613175

  let scrollR = scroll * R;

  container.style.transform = `translateX${-scrollR}px`;
  console.log(-scrollR);
  //container이 왼쪽으로 나가야해서 -

  //on
  for(let i=0;i<sections.length;i++){
    if(scroll>=i*wt && scroll<(i+1)*wt){
      box(i, sections);
    }
  }

  // 캐릭터
if(scroll > lastScrollTop){
  character.classList.remove("left");
  character.classList.add("on");
  console.log(scroll);
}else{
  character.classList.add("on","left");
}
lastScrollTop = scroll;
}); //scroll

// 키보드
window.addEventListener("keydown",event =>{
  if(event.key === "ArrowRight"){
    document.querySelector("html").scrollTop +=50;
  }
  if(event.key ==="ArrowLeft"){
    document.querySelector("html").scrollTop -=50;
  }
})

// 공통
let box =(index,list) =>{
  for(let el of list){
    el.classList.remove("on");
  }list[index].classList.add("on");
};


