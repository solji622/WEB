// 일반 배열
let arr = [100, 80, 40, 85];
document.write(`국어: ${arr[0]}<br>`)
document.write(`영어: ${arr[1]}<br>`)
document.write(`수학: ${arr[2]}<br>`)
document.write(`과학: ${arr[3]}<br>`)


// 객체 리터럴(딕셔너리와 유사)
let ol = {
    '국어': 100,
    '영어': 80,
    '수학': 40,
    '과학': 85
}
// 배열이 아니기에 인덱스가 아닌 키(key)로
document.write(`국어: ${ol['국어']}<br>`)
document.write(`영어: ${ol['영어']}<br>`)
document.write(`수학: ${ol['수학']}<br>`)
document.write(`과학: ${ol['과학']}<br>`)

// 반복문 사용하여 출력
for (let i in ol) {
    document.write(`${i}: ${ol[i]}<br>`)
}


// 함수
const fun = function () {
    alert("함수 호출")
}
/* <input type="button" onclick="fun()"> */


// 객체
const person = {
    name: '솔지',
    age: 16,
    isAdult: false,

    f: function () {
        alert(person.name + "입니다")
    }
}

console.log(person.필드명) // 필드 출력
console.log(person.f()) // 함수 호출
