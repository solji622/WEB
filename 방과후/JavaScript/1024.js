// 알람 팝업
alert("ㅋㅋㅋ");


// 나이 판별하기
var age = prompt("당신의 나이는?", "0")
if (age >= 20) {
	document.write("당신은 성인입니다.");
} else {
	document.write("당신은 미성년자입니다.");
}


// 변수에 기존에 저장되어있는 값이 있더라도 새 값이 저장되면 새 값으로 저장된다.
// 변수를 선언할 때 별다른 자료형을 선언하지 않는다.
// html 태그도 사용이 가능하다.
// 변수명을 사용할 때는 대소문자를 구분해야 한다.
var name = "<h1>solji</h1>";
document.write(name);

var a = true;
var b = false;
var c = 10 > 5;
var d = Boolean(null);

document.write(a, "<br>");
document.write(b, "<br>");
document.write(c, "<br>"); // true
document.write(d, "<br>"); // false


// 계산기 만들기
var num1 = prompt("숫자 1 입력")
var num2 = prompt("숫자 2 입력");
var result;

// 문자열에서는 + 연산자가 가능하기에 Number로 자료형 변경
result = Number(num1) + Number(num2);
document.write(result, "<br>");
result = num1 - num2;
document.write(result, "<br>");
result = num1 * num2;
document.write(result, "<br>");
result = num1 / num2;
document.write(result, "<br>");
result = num1 % num2;
document.write(result, "<br>");
