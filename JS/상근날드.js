// prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
// 햄버거 3개 중 가장 싼 가격을 선택하고 음료들 중 싼 음료의 가격을 합산하고 여기서 50원 할인
// 결과를 웹화면에 이쁘게 출력
// 번외 : input 태그로 변경해보기

let hambug_1 = Number(prompt("1번 햄버거 가격 : ", ""));
let hambug_2 = Number(prompt("2번 햄버거 가격 : ", ""));
let hambug_3 = Number(prompt("3번 햄버거 가격 : ", ""));
let bever_1 = Number(prompt("1번 음료 가격 : ", ""));
let bever_2 = Number(prompt("2번 음료 가격 : ", ""));

let hambug_Min = Math.min(hambug_1, hambug_2, hambug_3);
let bever_Min = Math.min(bever_1, bever_2);
let total = hambug_Min + bever_Min - 50;

let data1 = "치즈버거 가격<br>";
document.getElementById(
  "hambug_1"
).innerHTML = `<p>${data1} ${hambug_1}원 </p>`;

document.write("햄버거 세트 최소 가격 : " + total);
