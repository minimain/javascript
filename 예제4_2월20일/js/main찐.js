// main.js
// 보류 (스크롤이 이상함)
// 각각의 section에서 mousemove할때 이미지들이 움직이게

let sections = document.querySelectorAll("section");

for(let el of sections){
  el.addEventListener("mousemove", e=>{

    let posX = e.pageX/30;
      let posY = e.pageY/30;
    
      let obj11 = document.querySelector(".obj11");
      let obj12 = document.querySelector(".obj12");
      let obj13 = document.querySelector(".obj13");
      let obj21 = document.querySelector(".obj21");
      let obj22 = document.querySelector(".obj22");
      let obj31 = document.querySelector(".obj31");
      let obj32 = document.querySelector(".obj32");
      let obj33 = document.querySelector(".obj33");
      let obj41 = document.querySelector(".obj41");
      let obj42 = document.querySelector(".obj42");
    
      // -+ 기준,,,
      obj11.style.right = 20 +posX +"px";
      // obj11.style.right = 20 - (posX/30) +"px"; //각각 나눠줄수도 있다.
      obj11.style.bottom = 20 +posY +"px";
      obj12.style.right = 130 +posX +"px";
      obj12.style.bottom = -40 -posY +"px";
      obj13.style.right = 60 +posX +"px";
      obj13.style.top = 180 +posY +"px";
    
      obj21.style.bottom = -480 -posY +"px";
      obj21.style.right = -180 -posX +"px";
      obj22.style.bottom = -40 -posY +"px";
      obj22.style.right = 130 +posX +"px";
    
      obj31.style.bottom = 30 +posY +"px";
      obj31.style.right = 180 +posX +"px";
      obj32.style.bottom = -270 -posY +"px";
      obj32.style.right = 110 +posX +"px";
      obj33.style.bottom = -130 -posY +"px";
      obj33.style.right = -70 -posX +"px";
    
      obj41.style.bottom = -120 -posY +"px";
      obj41.style.right = 20 +posX +"px";
      obj42.style.bottom = -180 -posY +"px";
      obj42.style.right = 0 +posX +"px";
  });
}


//.gnb li를 클릭하면 scroll이 section(윈도우) 높이만큼씩 움직이게
let devHeight;
//let devHeight = document.body.offsetHeight;
devHeight = window.innerHeight; //윈도우의 높이값을 가져와서
console.log(devHeight);

window.addEventListener(`resize`,()=>{
  devHeight = window.innerHeight;
  console.log(devHeight);
}); //윈도우의 높이가 바뀔때마다 적용

for(let i=0;i<sections.length;i++){
  sections[i].style.height = `${devHeight}px`;
}



let lis = document.querySelectorAll(".gnb>li");
//let으로 써줘야하나봄.. const해서 안보였었음


for(let k=0;k<lis.length;k++){
  lis[k].addEventListener("click", e =>{
    e.preventDefault();
    window.scroll(
      {top:devHeight * k,
      left:0,
      behavior:'smooth'}
    )
  });
}

//윈도우에서 스크롤을 움직이면 스크롤 값에 따라서 .gnb li 에 .on이 붙어라
const articles = document.querySelectorAll("article");

window.addEventListener("scroll", e=>{
  var scroll = document.querySelector("html").scrollTop;

  console.log(scroll);
/* 내꺼임 틀림
  for(let i = 0;i<articles.length;i++){
     articles[i].style.transform = `translateY(${devHeight*i+scroll}px)`;

     if(i<scroll && scroll>=(i*devHeight)){
      box(i , articles);
      box(i , lis);
     }
  }*/

  // 선생님
  for(let i=0;i<sections.length;i++){
    if(scroll>=i*devHeight && scroll<(i+1)*devHeight){
      box(i,lis); //마지막이 안나옴;;
    }

     // 마우스 휠 원스크롤
     sections[i].addEventListener("wheel", e =>{
      if(e.wheelDelta > 0){ //scroll up | 0보다 값이 크면 scroll을 위로 올림 | 양수로 들어옴
        let prev = e.currentTarget.previousElementSibling.offsetTop; //?. 이용하면 오류는 안뜸
        console.log(prev);
//앞에 있는 형제 . 탑값을 알아내서
// 휠을 움직였을때 | 휠을 아래로 내리면 이벤트 객체에 음수가 들어옴 현재 섹션의 오프셋 탑값을 가져와 윈도우의 스크롤이 그 위치까지 이동해라
        window.scroll({
          top:prev,
          left: 0,
          behavior:"smooth"
        })

      }else if (e.wheelDelta < 0){ //scroll down | 음수로 들어옴
        let next = e.currentTarget.nextElementSibling.offsetTop;
        console.log(next);

        window.scroll({
          top:next,
          left:0,
          behavior:"smooth"
        })
      }
     });
  }
});
//
//공통
function box(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}


//원스크롤은 파일을 받아사용 마우스 휠
//주석과 줄바꿈을 없애면 용량크기가 줄어든다. 그래서 unminify라는 곳에 붙여넣기 하여 확인하기 /마우스 휠 플러그인