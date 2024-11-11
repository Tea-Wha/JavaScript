const currentYear = new Date().getFullYear(); // 현재 년도 가져오기, 값 변경이 없으므로 const 선언
let birthYear;
let age;

// prompt() 함수는 사용자에게 입력창을 띄워 입력할 수 있도록 함, 문자열로 입력 됨
birthYear = prompt("태어난 연도를 입력 하세요 : (YYYY)", "");
age = currentYear - birthYear + 1;
// 웹 화면에 출력
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");
