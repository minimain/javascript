//main.js _ 세로

//재료


let contents = document.querySelectorAll("#container>div");
let sections = document.querySelectorAll("#container>div>section");
let lis = document.querySelectorAll("aside>.quick>li");

// 윈도우 스크롤 값 저장
let hei = window.innerHeight;

window.addEventListener("resize", () =>{
  hei = window.innerHeight;
});

// content 각 화면 크기
for(let i=0;i<contents.length;i++){
  contents[i].style.height = `${hei}px`;
};

//공통
let box1 =(index,list) =>{
  for(let el of list){
    el.classList.remove("on");
  }list[index].classList.add("on");
};

let box2 = (srcTop)=>{
  window.scroll({
    top:srcTop,
    left:0,
    behavior:'smooth'
  });
  for(let i=0;i<sections.length;i++){
    if(srcTop>=i*hei && srcTop<(i+1)*hei){
      box1(i,sections);
    }
  }
};

// lis 클릭
for(let k=0;k<lis.length;k++){
  lis[k].addEventListener("click", e=>{
    e.preventDefault();

    box1(k,lis);
    box2(hei*k); 
  })
};

// contents
for(let content of contents){
  content.addEventListener("wheel", e =>{
  
  if(e.deltaY < 0){
    let prev = e.currentTarget.previousElementSibling.offsetTop;
    box2(prev);
  }
  else if(e.deltaY>0){
    let next = e.currentTarget.nextElementSibling.offsetTop;
    box2(next);
  }
  })
};

let start = setTimeout(() =>{
  sections[0].classList.add("on");
},500);



