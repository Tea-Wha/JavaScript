let hour;
let minuite;

while (true) {
  hour = parseInt(prompt("시간 입력 (0-23):", ""));
  minute = parseInt(prompt("분 입력 (0-59):", ""));

  if (hour >= 0 && hour <= 23 && minute >= 0 && minute < 60) {
    break;
  } else {
    alert("잘못된 입력입니다. 시간을 다시 입력하세요.");
  }
}
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
