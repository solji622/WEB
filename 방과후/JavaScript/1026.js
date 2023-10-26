// 테이블 만들기
var str = "<table border = '1'>"
str += "<tr>"
str += "<td>1</td><td>2</td><td>3</td>"
str += "</tr>"
str += "</table>"
document.write(str)

// 증감연산자
var a = 1
document.write(a++) // 1(2) - 출력 -> 더하기
document.write(++a) // 3 - 더하기 -> 출력

// 적정 체중 판단기
var name = prompt("당신의 이름은?", "")
var height = prompt("당신의 신장은?", "0")
var weight = prompt("당신의 몸무게는?", "0")

var nomal_w = (height - 100) * 0.9
var result = weight >= nomal_w - 5 && weight <= nomal_w + 5
result = result ? "적정 체중입니다." : "적정 체중이 아닙니다."
document.write(name + "님은 " + result)
