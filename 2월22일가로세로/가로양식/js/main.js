// main.js

// content1의 section은 0.5초 후에 .on이 붙어라 | 화면 키면 바로 시작
// setTimeout 사용해서
let body = document.querySelector("body");
const sections = document.querySelectorAll("#container>div>section");
const contents = document.querySelectorAll("#container>div");
let container = document.querySelector("#container");


let timeO = setTimeout(() =>{
  sections[0].classList.add("on");
},500); //section첫번째에 on을 붙여라 효과나옴 0.5초뒤 바로 시작

// 윈도우 가로값을 가져와서 #container > div 의 가로값으로 지정 innerWidth
let wt = window.innerWidth; //wt에 윈도우화면 가로값 저장


for(let i=0;i<contents.length;i++){
  contents[i].style.width = `${wt}px`;
}//글씨 전체 배열에 윈도우 화면값 저장
// console.log(contents[i]);를 안에다 하면 나오지만 밖에다가 쓰면 값을 알수없어서 밑에 가시 지정을 하는것

// #container >div의 개수 * 윈도우 가로값을 body의 높이값으로 지정
let length = contents.length; //lenght에 content배열 저장
let containerWid = length * wt; //containerWid에 content인덱스번호 화면값 곱하기
body.style.height = `${containerWid}px`
//body전체에 높이를 content의 수를 합친 길이만큼

// 윈도우에서 스크롤을 움직이면
// 현재스크롤값 가져와서 scroll
// #container의 translateX 값을 -scroll로 이동
let character = document.querySelector(".character") //캐릭터 가져옴
let lastScrollTop = 0; //마지막 스크롤값 0 저장



window.addEventListener("scroll", ()=>{ //윈도우를 기준으로 스크롤 이벤트
  let scroll = document.querySelector("html").scrollTop;
  //let  scroll = window.pageTOffset;
  //scroll에 html가져오고 위로 올리는 스크롤

  let winW = window.innerWidth; //winW에 윈도우 현재가로값 저장
  let winH = window.innerHeight; //winH에 윈도우 현재높이 저장

  //let containerWid = length * wt; body 전체 길이
  let W = containerWid - winW;  //w 에 바디전체 가로 길이에서 현재 가로길이 빼기
  console.log(containerWid);
  let H = containerWid - winH; //H에 바지전체 가로 길이에서 현재 높이길이 빼기
  console.log(innerHeight);
  let R = W/H; // 가로 세로 비율 | 전체가로에서 현재 가로세로를 뺀 값을 나누기
  console.log(scroll); //0.9
  let scrollR = scroll * R; //현재 스크롤값에 가로 세로 비율 곱하기

  container.style.transform = `translateX(${-scrollR}px)`; //가로세로 비율만큼 스크롤 이동
  console.log(-scrollR);
  //content1 ~ content10 까지 for문, if문 사용, section에 .on붙이기

  //section이 이동 배열값에서 현재화면만큼 이동 | 현재 스크롤이 구간에 해당하면 on을 더해라
  for(let i=0;i<sections.length;i++){
    if(scroll>=i*wt && scroll <(i+1)*wt){
      activation(i, sections);
    }
  }

  // 캐릭터 움직이기
  if(scroll > lastScrollTop){
    character.classList.remove("left");
    character.classList.add("on");
    console.log(scroll);
  }else{
    //스크롤 올릴때 왼쪽방향의 캐릭터
    character.classList.add("on","left");
  }
  lastScrollTop = scroll;
// 스크롤을 내리면 오른쪽 방향으로 캐릭터 |스크롤 위로 올리면 왼쪽으로 
})//scroll
// wheel이벤트를 쓰지않아서deltaY를 쓸필요가 없음

// 현재값 스크롤을 내린건 현재값이 이전값보다 큰것

window.addEventListener("keydown", event =>{
  console.log(event); //내가 무슨키를 눌렀는지 궁금하면 검사 들어가기 console해서 키이름은 정해져있다.
  if(event.key === "ArrowRight"){ //오른쪽 방향키
    document.querySelector("html").scrollTop +=50; //스크롤 값이 +
  }
  if(event.key === "ArrowLeft"){ //왼쪽 방향키
    console.log("왼쪽방향키");
    document.querySelector("html").scrollTop-=50;
  }
})

let activation = (index,list) => {
  for(let el of list){
      el.classList.remove("on");
  }
  list[index].classList.add("on");
}

