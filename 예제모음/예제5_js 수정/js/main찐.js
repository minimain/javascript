// main.js
/*
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

*/

// main.js
// 선생님 ver
const span = document.querySelectorAll("figure>p>span"); //시간
const wrap = document.querySelector("#wrap"); //전체
const li = document.querySelectorAll("section li"); //하단 메뉴
console.log(li);
//setInterval : 시간 간격을 두고 어떤것을 실행
  let timer = setInterval(()=>{ //화살표 함수
  let today = new Date(); //new Date함수 생성

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

},1000) //여기까지는 시간이 00두자리로 나오게


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

// 공통
let activation = (index, list) => {
  for(let el of list){
    el.classList.remove("on");
    wrap.className = '';
  }
  list[index].classList.add("on");
  let text = li[index].innerText;
  wrap.classList.add(text);
}

//index와 list는 매개변수야 그래서 index와 list는 그냥 이름일뿐이야 그래서 for문에 list의 배열을 나타내는el을 만들고 el의 classList에서 on을 지워라 첫번째는 list가 써져있는 두번째에 들어오는것을 나타냄
//list안에 index라는 배열이 들어감 그럼 여기서 index의 위치는 두번째의 배열이 첫번째인것이다. 그래서 list의 배열이 indesx인것이다.

//클릭을 했을때 배열에 on클래스를 붙이고 값에는 on을 지운다. 

