// 9선택자
/*selector.js */
/*
window.onload = function(){
  const frame = document.querySelector('#wrap');
  console.log(frame);
}
window.addEventListener("load",() => {
  const frame = document.querySelector("#wrap");
  console.log(frame);
})
위에 두개는 똑같은 window.onload , addEventListener 두개 이상 사용이 불가
이제 더 이상 이 두개를 쓰지 않고 파일을 따로 만들어 줄때는 
 <script defer src="js/selector.js"></script> 라는것을
 html파일에 적어서 링크 경로를 걸어준다. 저 defer 중요(저게 최신 자바스크립트 버전) defer을 쓰면 body내용 다 불러오는 거 가능
 */





//querySelector : css선택자 처럼 선택해주면 된다. #과.을 이용해 | 하나만 가져올수 있음 | 

   const frame = document.querySelector('#wrap');
   console.log(frame);
   
   const box1 = document.querySelector('.box1'); //#wrap>.box1
   console.log(box1);
   
// 요소 1개 선택하기 querySelector(1개만 찾아줌)
   const item =document.querySelectorAll('#wrap>article');
   console.log(item);
   //범위 저장 어디서 찾을지 document

// 요소를 여러개 선택하기 |배열로 들어감
   const items =document.querySelectorAll('#wrap>article');
   console.log(items);
   
for(let item of items){
     console.log(item);
   } 
//for반복문이니 items배열에 있는 값을 하나하나intem변수에 저장을 해준뒤 console창에 찍어주고 그리고 배열이 다끝날때까지 창에 찍어줌
   for(let i=0;i<items.length;i++){
     console.log(items[i]);
   }  
//이것보다 for - of문이 더 잘 사용된다.

// 실패작 //var index = items
// for(var indexs in index);
// console.log(index);


// 자식요소 선택하기
// 배열로 되어있음 (listItems) 배열 선택 후 console로 출력
   const list = document.querySelector(".list");
   const listItems = list.children;
// children : 자식요소

   console.log(listItems);
   console.log(listItems[0]);
   console.log(listItems[1]);
   console.log(listItems[2]);
   console.log(listItems[3]);

/*부모요소 선택하기 */
// li의 부모 ul : parentElement 선택자의 부모
   const item2 = document.querySelector(".item2");
   console.log(item2.parentElement);
   
//제일 가까운 상위 부모 요소 선택하기
   const li = document.querySelector(".li");
   console.log(li.closest("main"));
// closest(메소드) 내가 선택한 선택자의 가장가까운 부모중에 메소드에 적어 선택해라 | 내가 선택한 클래스li를 기준으로 main중에 가장 가까운것 선택

// 형제 요소 선택하기
   const item3 = document.querySelector(".item3");
   console.log(item3.previousElementSibling);
   console.log(item3.nextElementSibling);
/* 바로 앞에 있는 형제 element 선택 : previousElementSibling
 바로 뒤에 있는 형제 선택 : nextElementSibling 
 클래스 item3을 기준으로 형제 앞뒤 선택*/

//  css 설정
   const box = document.querySelector('#box');
// backgroundColor : 하이픈(-)이 있다면 대문자 사용 () | transform이 속성 ,rotate가 속성값 | "" 안에 속성값을 넣어주면 됨
   box.style.width ="10%";
   box.style.height ="300px";
   box.style.backgroundColor ="hotpink";
   box.style.border ="none";
   box.style.transform ="rotate(10deg)";






