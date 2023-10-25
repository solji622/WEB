var weight = prompt("몸무게?")
var height = prompt("키?")

var bmi = weight / (height * height);

if (bmi < 18.5) {
    document.write("weight: " + weight, "<br>")
    document.write("height: " + height, "<br>")
    document.write("bmi: " + bmi, "<br>")
    document.write("저체중", "<br>")
} else if (bmi < 25) {
    document.write("weight: " + weight, "<br>")
    document.write("height: " + height, "<br>")
    document.write("bmi: " + bmi, "<br>")
    document.write("건강", "<br>")
} else if (bmi < 30) {
    document.write("weight: " + weight, "<br>")
    document.write("height: " + height, "<br>")
    document.write("bmi: " + bmi, "<br>")
    document.write("과체중", "<br>")
} else if (bmi >= 30) {
    document.write("weight: " + weight, "<br>")
    document.write("height: " + height, "<br>")
    document.write("bmi: " + bmi, "<br>")
    document.write("비만", "<br>")
}

