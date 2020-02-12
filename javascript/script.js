
//TODO : 메모박스를 추가하는 함수 만들기

//TODO : 메모박스를 추가할때마다 이벤트 핸들러 추가하기
/*
이벤트 핸들러
마우스를 올렸을 때 -> 체크박스, 고정 핀 보이기
*/
function memoInit() {
  var tackImages = document.getElementsByClassName('tackImg');
  for (index in tackImages) { 
    tackImages[index].addEventHandler('mouseover', (event) => { 
      this.opacity = 1;
    });

    tackImages[index].addEventHandler('mouseout', (event) => { 
      this.opacity = 0;
    });
  }
}
memoInit()