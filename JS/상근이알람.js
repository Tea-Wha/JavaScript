//시간과 분을 입력 45분 일찍 시간이 설정 되도록 변경하는 프로그램
// 시간은 24시간제로 하고, 00:30 => 23:45
// parseint() 함수는 정수로 형변환 해주는 함수

let hour;
let minuite;
hour = parseInt(prompt("시간 입력", ""));
minute = parseInt(prompt("분 입력", ""));

if (hour == 0 && minute < 45) {
  hour = 23;
  minute = minute + 15;
} else if (hour == 0 && minute >= 45) {
  hour = hour;
  minute = minute - 45;
} else if (hour != 0 && minute < 45) {
  hour = hour - 1;
  minute = minute + 15;
} else {
  hour = hour;
  minute = minute - 45;
}

document.write(
  "<h3>" + hour + "시 " + minute + "분에 알람이 설정되었습니다. </h3>"
);
