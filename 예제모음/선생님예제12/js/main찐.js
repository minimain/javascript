// main.js
const section = document.querySelector("section");
const articles = section.querySelectorAll("article");
console.log(articles);
let i = 0; 
const deg = 45;

for(let el of articles){
  let pic = el.querySelector(".pic"); 

  pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;

  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  i++;

  //play버튼 클릭 시, 
  //아티클에 on이 있는 지 확인, 있으면
  //pic에 on 붙어라
  //audio 재생

  //pause버튼 클릭 시
  //아티클에 on이 있는 지 확인, 있으면
  //pic에 on 지우고
  //audio 멈춤

  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  play.addEventListener("click", e => {
    if(el.classList.contains("on")){ //e.currentTarget.closest("article").classList.contains("on")
      pic.classList.add("on");       //e.currentTarget.closest("article").querySelector(".pic")
      el.querySelector("audio").play(); 
    }
  });

  pause.addEventListener("click", e =>{
    if(el.classList.contains("on")){
      pic.classList.remove("on");
      el.querySelector("audio").pause(); 
    }
  });

  load.addEventListener("click", e =>{
    let isActive = el.classList.contains("on");
    if(isActive){
      pic.classList.add("on"); 
      el.querySelector("audio").load();
      el.querySelector("audio").play();
    }
  });
}
/*
articles.forEach((article,index) => {
  let pic = article.querySelector(".pic");
  pic.style.backgroundImage = `url('img/member${index+1}.jpg')`;
  article.style.transform = `rotate(${deg*index}deg) translateY(-100vh)`;
});

//또는

for(i=0; i<articles.length; i++){
  let pic = articles[i].querySelector(".pic");
  pic.style.backgroundImage = `url('img/member${i+1}.jpg')`;
  articles[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
}
*/

//아티클1번~8번까지
//.face1 {transform: rotate(0deg) translateY(-100vh);}  
//.face2 {transform: rotate(45deg) translateY(-100vh);} 


//next버튼 클릭하면 시계 반대방향으로 45도 회전
//prev버튼 클릭하면 시계 방향으로 45도 회전 

const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0; 
const lastIdx = articles.length-1; //7
let articleIdx = 0;
const audios = section.querySelectorAll("audio");

//prev 버튼 클릭 시
prev.addEventListener("click", () => {
  num++; //section을 회전시키기 위해서 0 -> 45 -> 90 -> 135 -> 180 -> 225 -> 270 -> 315 -> 360
         //num*deg                  0*45 ->1*45-> 2*45->3*45-> 4*45-> 5*45-> 6*45-> 7*45-> 8*45
  section.style.transform = `rotate(${deg*num}deg)`; 

  //아티클 인덱스 번호가 0 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0
  /*
  if(articleIdx == 0){


    articleIdx = lastIdx;
  }else{
    articleIdx--;
  }*/
  //삼항연산자
  (articleIdx == 0) ? articleIdx = lastIdx : articleIdx--;

  //모든 아티클에 on을 지우고 내가 클릭한 아티클만 on을 붙여라. 함수만들어서
  /*
  for(let el of articles){
    el.classList.remove("on");
  }
  articles[articleIdx].classList.add("on");
  */
  activation(articleIdx,articles);

  //모든 오디오 멈추고
  //모든 pic에 on 지우고
  /*
  for(let audio of audios){
    audio.pause();
    audio.closest("article").querySelector(".pic").classList.remove("on");
  }*/
  initMusic();
});

//next 버튼 클릭시
next.addEventListener("click",() => {
  num--;
  section.style.transform = `rotate(${deg*num}deg)`; 

  //아티클 인덱스 번호가 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 0
  (articleIdx==lastIdx) ? articleIdx=0 : articleIdx++;

  //모든 아티클에 on을 지우고 내가 클릭한 아티클만 on을 붙여라. 함수만들어서
   /*
  for(let el of articles){
    el.classList.remove("on");
  }
  articles[articleIdx].classList.add("on");
  */
  activation(articleIdx,articles);
  
  //모든 오디오 멈추고
  //모든 pic에 on 지우고
  /*
  for(let audio of audios){
    audio.pause();
    audio.closest("article").querySelector(".pic").classList.remove("on");
  }*/
  initMusic();
});

//공통
function activation(index,lists){
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