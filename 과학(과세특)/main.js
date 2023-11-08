function setDisplayAppreance(self){
    var body = document.querySelector('body'); 
    var btn = document.getElementById('btnDisplayMode'); 
    if(self.value === '🌗 다크모드로 보기'){  //다크모드로 전환 버튼을 누른 경우
      body.style.backgroundColor = 'black';  //배경색 변경
      body.style.color = 'white'; //css가 적용되지 않은 기본 텍스트 색상 변경
      btn.style.backgroundColor = "white"; //버튼의 배경색 변경
      btn.style.color = "black"; //버튼의 텍스트 색상 변경
      self.value = '🌝 라이트모드로 보기';
    } else { //라이트모드로 전환 버튼을 누른 경우
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
      self.value = '🌗 다크모드로 보기';
    }
}
