// 구구단 출력
let num = prompt("단 출력");

for (let i = 1; i <= 9; i++) {
    document.write(`${num} * ${i} = ${num * i} <br>`)
}


// 표준 내장 객체
let a = "방과후"
// length
alert(a.length)

// replace
alert(a.replace("과후", "글방글"))

// round
let b = 18.1234567
document.write(Math.round(b))

// random
let rd = Math.random();
document.write(rd)
// 정수로 표현하고 싶은 경우
rd = Math.round(Math.random() * 10);


// 브라우저 내장 객체
// 브라우저 너비 반환
window.innerWidth()
window.innerHeight()

// 브라우저 열기, 닫기
open("http://youtube.com", "유튜브", "width=100, height=200")
close()


// 문서 객체 모델
// DOM 객체의 get 메서드
document.getElementsByTagName("p")[0]

document.getElementById('text').textContent
document.getElementById('text').innerText
document.getElementById('text').innerHTML

document.getElementsByClassName('a')[0].style.color = 'blue'
