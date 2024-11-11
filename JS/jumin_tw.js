// 주민 등록 번호를 입력 받아 성별, 나이 출력하기 (020222-3164414)
// 문자열을 자르는 함수는 jumin.substring(0,2) // 문자열에서 0번째에서 2번 인덱스 미만까지 자름
// 문자열에서 해당 인덱스의 문자를 추출 jumin.charAt(5); // 문자열에서 5번 인덱스의 문자 추출
// const date = new Date();
// date.getFullYear(); // 2024
let jumin = null;

const currentYear = new Date().getFullYear();
while (true) {
  jumin = prompt("주민 등록번호 입력 :", "");

  if (jumin.length === 14 && jumin.indexOf("-")) {
    document.write("<h3> 성공적으로 입력 되었습니다. <br></h3>");
    break;
  } else {
    alert("잘못된 입력입니다. 다시 입력하세요.");
  }
}
let birthYear = jumin.substring(0, 2);
if (Number(birthYear) > 0 && Number(birthYear) <= 24) {
  birthYear = 20 + birthYear;
} else birthYear = 19 + birthYear;
let age = Number(currentYear) - Number(birthYear) + 1;

let gender = jumin.charAt(7);
if (gender == 3 || gender == 1) {
  gender = "남성";
} else gender = "여성";

document.write("<h3> 나이 : " + age + "</h3>");
document.write("<h3> 성별 : " + gender + "</h3>");
