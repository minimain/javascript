// main.js
//각각의 section에서 mousemove할때 이미지들이 움직이게
let sections = document.querySelectorAll("section");
for(let el of sections){
  el.addEventListener("mousemove", e => {
    let posX = e.pageX;
    let posY = e.pageY;

    let obj11 = document.querySelector(".obj11");
    let obj12 = document.querySelector(".obj12");
    let obj13 = document.querySelector(".obj13");
    obj11.style.bottom = 20 - (posY/30) + "px";
    obj11.style.right = 20 - (posX/30) + "px";
    obj12.style.bottom = -40 + (posY/20) + "px";
    obj12.style.right = 130 + (posX/20) + "px";
    obj13.style.top = 180 + (posY/20) + "px";
    obj13.style.right = 60 + (posX/20) + "px";

    let obj21 = document.querySelector(".obj21");
    let obj22 = document.querySelector(".obj22");
    obj21.style.bottom = -480 - (posY/30) + "px";
    obj21.style.right = -180 - (posX/30) + "px";
    obj22.style.bottom = -40 + (posY/50) + "px";
    obj22.style.right = 130 + (posX/50) + "px";

    let obj31 = document.querySelector(".obj31");
    let obj32 = document.querySelector(".obj32");
    let obj33 = document.querySelector(".obj33");
    obj31.style.bottom = 30 - (posY/30) + "px";
    obj31.style.right = 180 - (posX/30) + "px";
    obj32.style.bottom = -270 + (posY/20) + "px";
    obj32.style.right = 110 + (posX/20) + "px";
    obj33.style.bottom = -130 + (posY/20) + "px";
    obj33.style.right = -70 + (posX/20) + "px";

    let obj41 = document.querySelector(".obj41");
    let obj42 = document.querySelector(".obj42");
    obj41.style.bottom = -120 - (posY/30) + "px";
    obj41.style.right = 20 - (posX/30) + "px";
    obj42.style.bottom = -180 + (posY/20) + "px";
    obj42.style.right = 0 + (posX/20) + "px";
  });
}

let devHeight;

devHeight = window.innerHeight;
console.log(devHeight);

window.addEventListener('resize',() => {
  devHeight = window.innerHeight;
  console.log(devHeight);
});

for(let i=0; i<sections.length;i++){
  sections[i].style.height = `${devHeight}px`;
}


// .gnb li를 클릭할때 스크롤이 section(윈도우) 높이값만큼씩 움직이게 
let lis = document.querySelectorAll(".gnb>li");

for(let k=0; k<lis.length; k++){
    lis[k].addEventListener("click", e => {
        e.preventDefault();
        window.scroll({
            top: k * devHeight,
            left: 0,
            behavior: "smooth"
        })
    })
}
//윈도우에서 스크롤을 움직이면 스크롤 값에 따라서 .gnb li에 .on이 붙어라.
// window.addEventListener("scroll", e => {
//   var scroll = window.pageYOffset;
//   //var scroll = document.querySelector('html').scrollTop;
//   console.log(scroll);

//   for(let i=0; i<sections.length; i++){
//     if(scroll>=i*devHeight && scroll<(i+1)*devHeight){
//       //box1
//       activation(i,lis);
//     }
//   }
// });

for(let i=0; i<sections.length; i++){
  sections[i].addEventListener('wheel', function(e){
    //console.log(e.deltaY);
    if (e.deltaY < 0) {// scroll up
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      //console.log(prev);
      window.scroll({
        top: prev,
        left: 0,
        behavior: "smooth"
      })
      for(let i=0; i<sections.length; i++){
        if(prev>=i*devHeight && prev<(i+1)*devHeight){
          //box1
          activation(i,lis);
        }
      }
      
    }else if (e.deltaY > 0) {// scroll down
      let next = e.currentTarget.nextElementSibling.offsetTop;
      //console.log(next);
        window.scroll({
          top: next,
          left: 0,
          behavior: "smooth"
        })
        for(let i=0; i<sections.length; i++){
          if(next>=i*devHeight && next<(i+1)*devHeight){
            //box1
            activation(i,lis);
          }
        }
    }
    
  });
}

//윈도우에서 스크롤을 움직이면 스크롤 값에 따라서 .gnb li에 .on이 붙어라.
// window.addEventListener("scroll", e => {
//   var scroll = window.pageYOffset;
//   //var scroll = document.querySelector('html').scrollTop;
//   console.log(`scroll : ${scroll}`);

//   for(let i=0; i<sections.length; i++){
//     if(scroll>=i*devHeight && scroll<(i+1)*devHeight){
//       //box1
//       activation(i,lis);
//     }
//   }
// });

let activation = (index,list) => {
  for(let el of list){
      el.classList.remove("on");
  }
  list[index].classList.add("on");
}

/*
let idx = 0;
let wheelTimer;
window.addEventListener("wheel", function(e) {
  clearTimeout(wheelTimer);
  wheelTimer = setTimeout(function() {
    if(e.deltaY < 0) 	doScroll(++idx);
    else doScroll(--idx);
  }, 50);
});

function doScroll(sidx) {
  sidx = sidx < 0 ? 0 : sidx;
  sidx = sidx > sections.length - 1 ? sections.length - 1 : sidx;
  
  idx = sidx;
  
  sections[idx].scrollIntoView({ //scrollIntoView() 특정 element를 기준으로 스크롤을 이동
    block: "start", inline: "start", behavior: "smooth" 
    // block:수직 정렬, inline: 수평 정렬
  });  	
}
*/