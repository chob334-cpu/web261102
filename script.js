const titles = ["무서운 영화2", "레지던트 이블: 0번째 밤", "스트리트 파이터", "어벤져스: 엔드게임", "클레이페이스"];
const ratings = [6.4, 7.4, 7.6, 9.4, 7.9];
const years = [2001, 2026, 2026, 2019, 2026];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;

let count = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max += ratings[i];
        maxIndex += i;
    }
    if (ratings[i] >= 8) {
        count++;
    }
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

for (let i = 0; i < ratings.length; i++) {
    let label;
    if (ratings[i] > 8.5) {
        label = ("명작");
    }
    else if (ratings[i] > 7) {
        label = ("추천");
    } else {
        label = ("보통");
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);




// //document.write("외부 스크립트 방법");

// console.log("여기 남은 부분은 웹페이지가 아니라 콘솔에 출력이 됩니다");

// let dan = 3;

// console.log("** 엄청나다 구구단 3단!**");
// for(let i=1; i<=9; i++){
//     console.log(`${dan} x ${i} = ${dan*i}`);
// }

// if(dan === 3) {
//     console.log("3단이 맞습니다");
// } else {
//     console.log("틀렸습니다");
// }

// let arr = [ 80, 70, 90, 60];
// console.log(arr);
// console.log(arr[2]);

// let stdscore = {
//     korean: 80,
//     english: 70,
//     math: 90,
//     science: 60
// };
// console.log(stdscore);
// console.log(stdscore.math);
// stdscore.name = "홍길동";
// console.log(stdscore);