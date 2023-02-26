// 재료
const section = document.querySelector("section");
const article = section.querySelectorAll("article");
let i = 0;
const deg = 45;

//for문 - 이미지 
for(let el of article){
  let pic = el.querySelector(".pic");

  pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  i++;

//play버튼 클릭 시, 
  //아티클에 on이 있는 지 확인, 있으면
  //pic에 on 붙어라
  //audio 재생

  //재료
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  //play버튼 클릭 시, 
  //아티클에 on이 있는 지 확인, 있으면
  //pic에 on 붙어라
  //audio 재생
  play.addEventListener("click", e =>{
    if(el.classList.contains("on")){
      pic.classList.add("on");
      el.querySelector("audio").play();
    }
  });

  //pause버튼 클릭 시
  //아티클에 on이 있는 지 확인, 있으면
  //pic에 on 지우고
  //audio 멈춤

  pause.addEventListener("click",e =>{
    if(el.classList.contains("on")){
      pic.classList.remove("on");
      el.querySelector("audio").pause();
    }
  });
  load.addEventListener("click", e=>{
    let go = el.classList.contains("on");
    if(go){
      pic.classList.add("on");
      el.querySelector("audio").load();
      el.querySelector("audio").play();
    }
  });
}


//재료
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0;
const lastIdx = article.length-1;
let articleIdx = 0;
const audios = section.querySelectorAll("audio");

//아티클1번~8번까지
//.face1 {transform: rotate(0deg) translateY(-100vh);}  
//.face2 {transform: rotate(45deg) translateY(-100vh);} 
//next버튼 클릭하면 시계 반대방향으로 45도 회전
//prev버튼 클릭하면 시계 방향으로 45도 회전

prev.addEventListener("click", () => {
  num++;
  section.style.transform = `rotate(${deg*num}deg)`;

  (articleIdx == 0) ? articleIdx = lastIdx : articleIdx--;
  //articleIdx가 0일때 0으로 돌아가고 아니면 --로 감소해라
  
  activation(articleIdx, article);
  initMusic();
});

next.addEventListener("click", ()=>{
  num--;
  section.style.transform = `rotate(${deg*num}deg)`;

  (articleIdx == lastIdx) ? articleIdx=0 : articleIdx++;

  activation(articleIdx,article);
  initMusic();
});

//공통
function activation(index, lists){
  for(let el of lists){
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}

function initMusic(){
  for(let audio of audios){
    audio.pause();
    audio.closest("article").querySelector(".pic").classList.remove("on");
  }
}
