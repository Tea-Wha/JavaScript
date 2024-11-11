// 자바스크립트의 조건문은 if, if ~ else, if ~ else if ~ else, switch ~ case
// 반복문은 while, do ~ while, for(초기값; 최종조건; 증감값), for ~ in(객체 반복)
// for ~ of (이터러블 객체를 순회할 때 사용)

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

const brands = ["애플", "구글", "엔비디아", "현대자동차", "테슬라", "아마존"];
// 기본적인 순회 방식
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}
// for ~ of
for (let e of brands) {
  console.log(e);
}

// for ~ in : 객체의 속성을 반복하는데 사용
const person = {
  name: "장원영",
  age: 20,
  addr: "서울시 강남구 역삼동",
};
for (const key in person) {
  console.log(person[key]);
  console.log(key);
}
