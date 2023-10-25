var weight = prompt("몸무게?")
var height = prompt("키?") / 100 
// 미터로 환산

var bmi = weight / (height * height);

document.write("weight: " + weight, "<br>")
document.write("height: " + height, "<br>")
document.write("bmi: " + bmi, "<br>")

if (bmi < 18.5) {
    document.write("저체중", "<br>")
} else if (bmi < 25) {
    document.write("건강", "<br>")
} else if (bmi < 30) {
    document.write("과체중", "<br>")
} else if (bmi >= 30) {
    document.write("비만", "<br>")
}

