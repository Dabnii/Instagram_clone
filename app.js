//pseudocode

// 이메일 인풋 박스를 가져오기 ✅
// 비밀번호 인풋 박스를 가져오기 ✅
// 로그인 하기 버튼 가져오기 ✅

//이메일 인풋박스를 할당해주기 ✅
//비밀번호 인풋 박스 할당하기 ✅
// 로그인 하기 버튼 할당하기 ✅

//삼항 연산자를 사용
//condition ? exprIfTrue : exprIfFalse
//이메일과 비밀번호 둘 중 하나 입력이 된다면 버튼이 활성화 되도록 하기

// 트루 일 때 : 둘 중 하나라도 입력 되었을 때
// 거짓일 때 : 둘 중 하나라도 입력 되지 않았을 때
// 또는 ID가 1개라도 입력 되었거나 || PW가 1개라도 입력 되었다면 Btn on!
// 만약 둘 중 하나라고 입력이 되었다면 ? 버튼 온 : 아니라면 버튼 스탠바이

const thisIsId = document.getElementById("text");
const thisIsPassword = document.getElementById("password");
const loginBtn = document.getElementsByClassName("login-btn");

//condition ? exprIfTrue : exprIfFalse
// if (thisIsId === 1 || thisIsPassword === 1 ){
//     // 1을 찾는게 아니라 길이를 찾아라
//     return
// }
// 버튼 속성을 써보자
// d로 시작하는거 disabled

function aa(event) {
  console.log(event);
}

thisIsId.addEventListener("keyup", aa);
// event.target.value
// ||input
// event.target.value
// length
