//재료
const wrap = document.querySelector("#wrap");
const span = document.querySelectorAll("figure>p>span");
const li = document.querySelectorAll("section li")

//시간 두자리
//0~9 -> 00~09

let timer = setInterval(() => {
  let today = new Date();

  let timeH = today.getHours();
  let timeM = today.getMinutes();
  let timeS = today.getSeconds();

  if(timeH<10){
    timeH = "0" + timeH;
  }
  if(timeM<10){
    timeM = "0" + timeM;
  }
  if(timeS<10){
    timeS = "0" + timeS;
  }

  span[0].innerText = timeH;
  span[1].innerText = timeM;
  span[2].innerText = timeS;

},1000)

// 현재시간이 6시~11시 아침이미지, 11시~17시 점심이미지, 17시~20시 저녁이미지, 그외 시간은 한밤중
//현재시간을 가져와서
//현재시간이 6~11 이면 #wrap에 .morning이 붙어라.

let time = new Date();
let Hour = time.getHours();

if(Hour >= 6 && Hour < 11){
  wrap.className='';
  wrap.classList.add("morning");
  li[0].classList.add("on");
}else if(Hour >= 11 && Hour < 17){
  wrap.className = '';
  wrap.classList.add("afternoon");
  li[1].classList.add("on");
}else if(Hour >=17 && Hour < 20){
  wrap.className='';
  wrap.classList.add("evening");
  li[2].classList.add("on");
}else{
  wrap.className='';
  wrap.classList.add("night");
  li[3].classList.add("on");
}

//section li 클릭하면 
//클릭한 li에 .on 붙이기
//클릭한 li의 텍스트를 가져와서 wrap의 클래스이름으로 지정해준다.

let change = (index, list) =>{
  for(let el of list){
  el.classList.remove("on");
  wrap.className ='';
  }
  list[index].classList.add("on");
  let text = li[index].innerText;
  wrap.classList.add(text);
} //조금더 생각해보기 복습 다시

for(let i=0;i<li.length;i++){
  li[i].addEventListener("click", e =>{
    e.preventDefault();
    change(i,li);
  });
}

