// main.js
// 윈도우 높이값을 가져와서 #container > div 높이값으로 지정
//윈도우 resize 가 되도 동일하게 적용


const contents = document.querySelectorAll("#container>div");
const lis = document.querySelectorAll("aside>.quick >li");
const sections = document.querySelectorAll("#container>div>section")
console.log(sections);

let devHeight = window.innerHeight;
console.log(devHeight);

window.addEventListener("resize", ()=>{
  devHeight = window.innerHeight;
})

for(let i=0;i<contents.length;i++){
  contents[i].style.height = `${devHeight}px`
}

// .quick li를 클릭할때 스크롤이 content(윈도우) 높이값 만큼씩 움직이게

// 공통
let activation =(index,list) =>{
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
};

// 2
let activation2 = (scrTop) =>{
  window.scroll({
    top:scrTop,
    left:0,
    behavior:'smooth'
  });
  for(let i=0;i<sections.length;i++){
    if(scrTop>=i*devHeight && scrTop<(i+1)*devHeight){
      //box1
      activation(i,sections);
    }
  }
}


for(let k=0;k<lis.length;k++){
 lis[k].addEventListener("click", e=>{
  e.preventDefault();

  activation(k,lis);
  activation2(devHeight*k);
  /*
  window.scroll({
    top:devHeight*k,
    left: 0,
    behavior:"smooth"
  });
  //함수로 설정
  for(let i=0;i<sections.length;i++){
    if(devHeight*k>=i*devHeight && devHeight*k<(i+1)*devHeight){
      activation(i,sections);
    }
  }
 });
};
*/
})}



// content에서 마우스 휠을 움직일때, 위로 움직일때 앞에 content로 이동, 아래로 움직일때 두에 content로 이동, 하고나서 section.on이 붙어라
for(let content of contents){
content.addEventListener("wheel", e =>{
  if(e.deltaY < 0){ //scroll up
    let prev = e.currentTarget.previousElementSibling.offsetTop;
    activation2(prev);
    /*
    window.scroll({ //윈도우의 스크롤을 이동
      top:prev,
      left:0,
      behavior:'smooth'
    })
    
    // section에 on붙이기
    for(let i=0;i<sections.length;i++){
      if(prev>=i*devHeight && prev<(i+1)*devHeight){
        activation(i, sections);
      }
    }*/
  }
  else if(e.deltaY>0){ //scroll down
    let next = e.currentTarget.nextElementSibling.offsetTop;
    activation2(next);
    /*
    window.scroll({ //윈도우의 스크롤을 이동
      top:next,
      left:0,
      behavior:'smooth'
    })
    // section에 on붙이기
    for(let i=0;i<sections.length;i++){
      if(next>=i*devHeight && next<(i+1)*devHeight){
        activation(i, sections);
      }
    }*/
  } 
}
)};

// content1의 section은 0.5초 후에 .on이 붙어라
// setTimeout 사용해서

let start = setTimeout(() =>{
  sections[0].classList.add("on");
},500);




 
