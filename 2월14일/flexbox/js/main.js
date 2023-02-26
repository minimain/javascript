// main.js
const span = document.querySelectorAll("figure>p>span");
const wrap = document.querySelector("#wrap");
const li = document.querySelectorAll("section li");
console.log(li);

  let timer = setInterval(()=>{
  let today = new Date();

  let nowHour = today.getHours();
  let nowMin = today.getMinutes();
  let nowSec = today.getSeconds();

  //0~9 -> 00~09
  if(nowHour<10){
    nowHour = "0" + nowHour;
  }
  if(nowMin<10){
      nowMin = "0" + nowMin;
  }
  if(nowSec<10){
      nowSec = "0" + nowSec;
  }
  
  span[0].innerText = nowHour;
  span[1].innerText = nowMin;
  span[2].innerText = nowSec;

},1000)

// 현재시간이 6시~11시 아침이미지, 11시~17시 점심이미지, 17시~20시 저녁이미지, 그외 시간은 한밤중
//현재시간을 가져와서
//현재시간이 6~11 이면 #wrap에 .morning이 붙어라.

let time = new Date();
let nowTime = time.getHours();

if(nowTime >= 6 && nowTime < 11){
  //아침이미지
  wrap.className = '';
  wrap.classList.add("morning");
  li[0].classList.add("on");
}else if(nowTime >= 11 && nowTime < 17){
  //점심이미지
  wrap.className = '';
  wrap.classList.add("afternoon");
  li[1].classList.add("on");
}else if(nowTime >= 17 && nowTime < 20){
  //저녁이미지
  wrap.className = '';
  wrap.classList.add("evening");
  li[2].classList.add("on");
}else{
  //그외 시간은 한밤중
  wrap.className = '';
  wrap.classList.add("night");
  li[3].classList.add("on");
}

//section li 클릭하면 
//클릭한 li에 .on 붙이기
//클릭한 li의 텍스트를 가져와서 wrap의 클래스이름으로 지정해준다.

for(let i=0; i<li.length; i++){
  li[i].addEventListener("click", e => {
    e.preventDefault();
    activation(i, li);
  });
}

let activation = (index, list) => {
  for(let el of list){
    el.classList.remove("on");
    wrap.className = '';
  }
  list[index].classList.add("on");
  let text = li[index].innerText;
  wrap.classList.add(text);
}