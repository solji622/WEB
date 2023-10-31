// 이름 입력 받고 출력하기
var username = prompt("이름을 입력해주세요.", "홍길동")
if (username) {
    document.write(username + "님 안녕하세요（＾－＾)")
} else {
    document.write("<h2>새로고침 후 이름을 재입력해주세요</h2>")
}

// confirm 사용해보기
if (confirm("확인하시겠습니까?")) {
    document.write("<h2>확인</h2>")
} else {
    document.write("<h2>취소</h2>")
}

// 아이디 비밀번호 맞추기
var id = "easy1234"
var pw = "1234"

var user_id = prompt("아이디 입력")
var user_pw = prompt("비밀번호 입력")

if (id == user_id) {
    if (pw == user_pw) {
        document.write(user_id + "님 반가워요 (•_•)")
    } else {
        alert("비밀번호가 일치하지 않습니다")
        location.reload(); // 브라우저 새로 고침
    }
} else {
    alert("아이디가 일치하지 않습니다")
    location.reload();
}

// 반복문 - while
var i = 20;
while (i >= 10) {
    if (i % 2 == 0) {
        document.write("<p class = 'blue'>" + i + "</p>")
    } else {
        document.write("<p class = 'red'>" + i + "</p>")
    }
    i--
}


// 반복문 - for(테이블 이용하여 출력)
var temp = 0;
var number = "<table border = '1'>"
for (var i = 1; i <= 5; i++) {
    number += "<tr>"
    for (var j = 1; j <= 5; j++) {
        number += "<td style = 'text-align:center'>" + (++temp) + "</td>"
    }
}
number += "</tr>"
number += "</table>"
document.write(number)
