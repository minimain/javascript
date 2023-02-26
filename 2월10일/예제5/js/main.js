// main.js
const span = document.querySelectorAll("figure>p>span");
console.log(span);

// let timer =setInterval(함수이름,100)
// 1초마다 계속 생성

let timer =setInterval(()=>{
  let today = new Date();

  let nowHour = today.getHours();
  let nowMin = today.getMinutes();
  let nowSec = today.getSeconds();

  // 0~9 -> 00~09

  if(nowHour<10){
    nowHour = "0" + nowHour; //문자 결합 연산자
  }
  if(nowMin<10){
    nowMin = "0" + nowMin;
  }if(nowSec<10){
    nowSec = "0" + nowSec;
  }

  // innerText : 글자만 넣어주는것 | 
  span[0].innerText = nowHour;
  span[1].innerText = nowMin;
  span[2].innerText = nowSec;
},100)
// 1초마다 반복해줌 | 1초 시간 가져와서 내보내고를 반복

// 현재시간이 6~11시 아침이미지, 11~17시 점심이미지, 17~20시 저녁이미지, 그외 시간은 한밤중
// 현재시간을 가져와서
// 현재시간이 6~11 이면 #wrap 에 .morning을 붙여줌

const wrap = document.querySelector("#wrap");
// wrap.className = '';



// let change 
// let today2 = new Date();

// let nowHour2 = today2.getHours();

// if(6<nowHour2<11){
 
// }else if(11<nowHour2<17){

// }else if(17<nowHour2<20){

// }else{

// }


