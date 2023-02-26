// autoBanner.js
function galleryLoad(){
  var myList = document.getElementById("galleryList") // ul
  var theAtag = myList.getElementsByTagName("a") // li a 4개
  var myImg = myList.getElementsByTagName("img") // 작은 img 4개
  var theGallery = document.getElementById("gallery") // 큰 img
  var aGallery = document.getElementById("aGallery") // 큰 img a

  
  for(var i=0; i<theAtag.length; i++){
    theAtag[i].onfocus =  theAtag[i].onmouseover = function(){//a
      //작은이미지 바뀌고
      for(var k=0; k<myImg.length; k++){
         myImg[k].src = myImg[k].src.replace("over.jpg","out.jpg")
      }
      this.children[0].src = this.children[0].src.replace("out.jpg","over.jpg")
      //큰 이미지 바뀌고 this(a)
      theGallery.src = this.href;
      clearTimeout(myAuto);//a에 마우스 올렸을 때 auto배너 정지
      addNum=this.children[0].alt.charAt(2)-1; //alt 그림 글자 추출//
    }//onmouseover
    theAtag[i].onblur = theAtag[i].onmouseout = function(){
      myAuto = setTimeout(autoBanner,1500)
    }//onmouseover
  }//for문
  var addNum = 0; //배너 번호
  function autoBanner(){
    addNum++;
    if(addNum >= theAtag.length){
      addNum = 0;
    }
    theAtag[addNum].onmouseover();
    myAuto = setTimeout(autoBanner,1500);//재귀함수
  }// autoBanner함수
  var myAuto = setTimeout(autoBanner,1500);//최초 autoBanner함수호출
  //큰 img a에 mouseover 하면 멈춘다.
  aGallery.onfocus = aGallery.onmouseover = function(){
    clearTimeout(myAuto)
  }
  //큰 img a에 mouseout 하면 다시 오토배너 움직인다.
  aGallery.onblur = aGallery.onmouseout = function(){
    myAuto = setTimeout(autoBanner,1500)
  }
}//galleryLoad 함수
window.addEventListener("load",galleryLoad,false); //window.onload