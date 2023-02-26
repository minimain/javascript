//autoBanner.js
function galleryLoad(){
// 먼저 재료를 가져올것 |이거 다시 보기
 var myList =document.getElementById("galleryList"); //ul
 var theAtag =myList.getElementsByTagName("a"); //li a 4개
 var myImg =myList.getElementsByTagName("img"); //작은 img 4개
 var theGallery = document.getElementById("gallery"); //큰 img
 var aGallery = document.getElementById("aGallery")//큰 img a

// a에 올렸을때 바뀌어라
for(var i=0; i<theAtag.length;i++){
  theAtag[i].onfocus = theAtag[i].onmouseover = function(){
    // 작은이미지 바뀌고
  for(var k=0;k<myImg.length;k++){
  myImg[k].src = myImg[k].src.replace("over.jpg","out.jpg");
  }
  this.children[0].src = this.children[0].src.replace("out.jpg","over.jpg");

  // 큰이미지 바뀌고
  theGallery.src =this.href;

  clearTimeout(myAuto); //a에 마우스 올렸을때 auto배너 정지
  addNum = this.children[0].alt.charAt(2)-1;
    } //onmouseover
  
} //for문


// 작은 이미지와 같은 효과를 보여라
var addNum = 0; //배너번호
function autoBanner(){
  addNum++;
  if(addNum>=theAtag.length){
    addNum = 0;
  }
  theAtag[addNum].onmouseover();
  myAuto = setTimeout(autoBanner,1500); //재귀함수 
} //autoBanner 함수

var myAuto = setTimeout(autoBanner,1500); //이게 가장 간단함|최초 autoBanner 함수호출
//큰 img a에 mouseover 하면 멈춘다.
aGallery.onfocus = aGallery.onmouseover = function(){
  clearTimeout(myAuto);
}
// 큰 img a에 mouseout하면 다시오토배너 움직인다.
aGallery.onblur = aGallery.onmouseover = function(){
  myAuto = setTimeout(autoBanner,1500);
}

}//galleryLoad함수

window.addEventListener("load",galleryLoad,false);
// load 이벤트가 발생을 했을때 galletyLoad를 하나 더 실행하겠다.

