// 3개의 수를 입력 받아서 가장 큰 수와 작은 수를 화면에 출력하기
// prompt로 입력 받은 값은 문자열이므로 숫자로 변경하기 위해서는
// Number() 함수로 형을 변경해야 함

let firstNumber;
let secondNumber;
let thirdNumber;

firstNumber = Number(prompt("첫번째 숫자를 입력", ""));
secondNumber = Number(prompt("두번째 숫자를 입력", ""));
thirdNumber = Number(prompt("세번째 숫자를 입력", ""));

let maxNumber = Math.max(firstNumber, secondNumber, thirdNumber);
let minNumber = Math.min(firstNumber, secondNumber, thirdNumber);

document.write("<h3>최대값 : " + maxNumber + "</h3>");
document.write("<h3>최소값 : " + minNumber + "</h3>");
