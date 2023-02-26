// main.js

let sections = document.querySelectorAll("section");
let lis =document.querySelectorAll(".gnb >li");


// 각각의 section에서 mousemove할때 이미지들이 움직이게

for(let el of sections){
  el.addEventListener("mousemove",e =>{

    let posX = e.pageX/20;
    let posY = e.pageY/20;

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
  
    // -+ 기준
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

// 1. 현재페이지의 높이값 지정
let devHeight;

devHeight = window.innerHeight; 
console.log(devHeight);

window.addEventListener('resize',()=>{
  devHeight = window.innerHeight;
  console.log(devHeight);
});

// 2. section의 인덱스마다 현재 화면 높이크기 지정
for(let i=0;i<sections.length;i++){
  sections[i].style.height = `${devHeight}px`;
 
}

// 3. 주메뉴 인덱스를 눌렀을때 윈도우 화면크기가 높이만큼 움직이게

for(let li of lis){
  console.log(li);
  li.addEventListener("click", e =>{
    e.preventDefault();
    window.scroll({
      top: li * devHeight, //인덱스번호 * 현재화면크기
      left: 0,
      behavior:'smooth'
    })
  })
}


// 4. section 화면그림
for(let section of sections){
  section.addEventListener("wheel", e =>{ 
    if(e.deltaY < 0){//scroll up (-)음의 숫자
     let prev = e.currentTarget.previousElementSibling.offsetTop;
   
    window.scroll({
      top: prev,
      left: 0,
      behavior: "smooth"
    })
    for(let section of sections){
      if(prev>=section*devHeight && prev<(section+1)*devHeight){
        box(section,lis);
      }
    }
    }else if(e.deltaY > 0){ //scroll down
      let next = e.currentTarget.nextElementSibling.offsetTop;
      window.scroll({
        top:next,
        left:0,
        behavior:"smooth"
      })
      for(let section of sections){
        if(next>=section*devHeight && next<(section+1)*devHeight){
          box(section,lis);
        }
      }
    }
  });
}

//공통
function box (index,list){
  for(let el of list){
  el.classList.remove("on");
  }
  list[index].classList.add("on");
}































// for(let i=0;i<sections.length;i++){
//   sections[i].style.height = `${devHeight}px`
// }

// for(let k =0; k<lis.length;k++){
//   lis[k].addEventListener("click", e =>{
//     e.preventDefault();
//     window.scroll(
//       {top: devHeight * k,
//       left: 0,
//     behavior:'smooth'}
//     )
//   });
// }

// window.addEventListener("scroll", e =>{
//   var scroll = document.querySelector("html").scrollTop;
//   console.log(scroll);

//   for(let i=0;i<sections.length;i++){
//     if(scroll>=i*devHeight && scroll<(i+1)*devHeight){
//       box(i,lis);
//     }

//     sections[i].addEventListener("wheel", e =>{
//       if(e.wheelDelta > 0){
//         let prev = e.currentTarget.previousElementSibling.offsetTop;
//         console.log(prev);

//         window.scroll({
//           top:prev,
//           left: 0,
//           behavior:'smooth'
//         })
//       }else if(e.wheelDelta < 0){
//         let next = e.currentTarget.nextElementSibling.offsetTop;
//         console.log(next);

//         window.scroll({
//           top:next,
//           left: 0,
//           behavior:'smooth'
//         })
//       }
//     });
//   }
// });

// // 공통
// function box (index,list){
//   for(let el of list){
//   el.classList.remove("on");
//   }
//   list[index].classList.add("on");
// }
