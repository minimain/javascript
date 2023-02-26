// main.js

// 윈도우 높이값을 가져와서 #container > div 높이값으로 지정
// 윈도우 resize가 되도 동일하게 적용

const content = document.querySelectorAll("#container>div");
const quick = document.querySelectorAll("#quick li");
const section = document.querySelectorAll("section");

let devHeight = window.innerHeight;

window.addEventListener("resize",e => {
  devHeight = window.innerHeight;
  content.forEach((content) => {
    content.style.height = `${devHeight}px`;
  });
  console.log(devHeight);
});


content.forEach((div,index) => {

  div.style.height = `${devHeight}px`;

  div.addEventListener("wheel", e => {
    if (e.deltaY < 0) { //스크롤업
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      window.scroll({
        top: prev,
        left: 0,
        behavior:"smooth"
      });
      for(let i=0; i<section.length; i++){
        if(prev>=i*devHeight && prev<(i+1)*devHeight){
          activation(i,section);
        }
      }
    }
    else if (e.deltaY > 0) { //스크롤다운
      let next = e.currentTarget.nextElementSibling.offsetTop;
      window.scroll({
        top: next,
        left: 0,
        behavior : "smooth"
      })
      for(let i=0; i<section.length; i++){
        if(next>=i*devHeight && next<(i+1)*devHeight){
          activation(i,section);
        }
      }
    }
  });
});

// .quick li를 클릭할때 스크롤이 content(윈도우) 높이값 만큼씩 움직이게

quick.forEach((menu,index) => {
  menu.addEventListener("click", e => {
    e.preventDefault();
    // window.scroll({
    //   top: index * devHeight,
    //   left: 0,
    //   behavior:"smooth"
    // });
    // for(let i=0; i<section.length; i++){
    //   if(devHeight*index>=i*devHeight && devHeight*index<(i+1)*devHeight){
    //     activation(i,section);
    //   }
    // }
    activation2(devHeight*index);
  });
});

// content에서 마우스 휠을 움직였을때, 위로 움직일때, 아래로 움직일때 content로 이동, 아래로 움직일때 뒤에 content로 이동 
// 이동하고 나서 section.on이 붙어라 =>> 20번째줄




function activation(i,list) {
  for(el of list) {
    el.classList.remove("on");
  }
  list[i].classList.add("on");
}

let activation2= (scrTop) => {
  window.scroll({
    top: scrTop,
    left: 0,
    behavior:"smooth"
  });
  for(let i=0; i<section.length; i++){
    if(scrTop>=i*devHeight && scrTop<(i+1)*devHeight) {
      activation(i,section);
      activation(index,quick);
    }
  }
}


// content1의 section은 0.5초 후에 .on이 붙어라
// settimeout 사용해서

let start = setTimeout(() => {
  section[0].classList.add("on");
}, 500)


