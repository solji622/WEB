// 국영수DB 성적 평균 내보기
let ko = 95;
let en = 75;
let math = 21;
let db = 100;
document.write(`국어 성적: ${ko} <br>`);
document.write(`영어 성적: ${en} <br>`);
document.write(`수학 성적: ${math} <br>`);
document.write(`데이터베이스 성적: ${db} <br>`);

let avg = (ko + en + math + db) / 4;
document.write("평균: " + avg);


// 배열 사용
let exam = [99, 99, 88, 77];
document.write(`국어 성적: ${exam[0]} <br>`);
document.write(`영어 성적: ${exam[1]} <br>`);
document.write(`수학 성적: ${exam[2]} <br>`);
document.write(`데이터베이스 성적: ${exam[3]} <br>`);

let avg2 = (exam[0] + exam[1] + exam[2] + exam[3]) / exam.length;
document.write("평균: " + avg2);


// 객체 사용
let exam2 = {
    ko: 99,
    en: 99,
    math: 88,
    db: 77
}
document.write(`국어 성적: ${exam2.ko} <br>`);
document.write(`영어 성적: ${exam2.en} <br>`);
document.write(`수학 성적: ${exam2.math} <br>`);
document.write(`데이터베이스 성적: ${exam2.db} <br>`);

let avg3 = (exam2.ko + exam2.en + exam2.math + exam2.db) / 4;
document.write("평균: " + avg3);


// 반복문 사용하여 출력
for (let i = 0; i < exam.length; i++) {
    document.write(`${i}: ${exam[i]}` + "<br>")
}
for (let i in exam) {
    document.write(`${i}: ${exam[i]}` + "<br>")
}
for (let i in exam2) {
    if (i == 'math') {
        break;
    }
    document.write(`${i}: ${exam2[i]}` + "<br>")
}


// 구구단 출력
document.write(`<h5>구구단 출력하기 (1~9단)</h5>`)
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        document.write(`${i} x ${j} = ${(i * j)}` + "<br>")
    }
    document.write("<br>")
}
