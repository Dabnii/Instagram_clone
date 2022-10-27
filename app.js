//pseudocode

//삼항 연산자를 사용
//condition ? exprIfTrue : exprIfFalse
//이메일과 비밀번호 둘 중 하나 입력이 된다면 버튼이 활성화 되도록 하기 ㅎㅎ

// 트루 일 때 : 둘 중 하나라도 입력 되었을 때
// 거짓일 때 : 둘 중 하나라도 입력 되지 않았을 때
// 또는 ID가 1개라도 입력 되었거나 || PW가 1개라도 입력 되었다면 Btn on
// 만약 둘 중 하나라고 입력이 되었다면 ? 버튼 온 : 아니라면 버튼 스탠바이

// 박스 login-box
// 로그인 아이디 #id-input
// 비밀번호 아이디 #password-input
// 로그인 버튼 클래스 .login-btn

const thisIsId = document.querySelector("#id-input");
const thisIsPassword = document.querySelector("#password-input");
const thisIsLoginBtn = document.querySelector(".login-btn");

console.log(thisIsId);
console.log(thisIsPassword);
console.log(thisIsLoginBtn);

function handleClick(event) {
  const inputID = document.querySelector("#id-input").value;
  const inputPW = document.querySelector("#password-input").value;

  // console.log(inputID);
  // console.log(inputPW);

  // if (inputID.length > 1 && inputPW.length > 1) {
  //   console.log("hi");
  // }

  if (inputID.length >= 1 && inputPW.length >= 8) {
    thisIsLoginBtn.classList.remove("button_a");
    thisIsLoginBtn.classList.add("active");
    disabled = false;
  } else {
    thisIsLoginBtn.classList.remove("active");
    thisIsLoginBtn.classList.add("button_a");
    disabled = true;
  }
}

thisIsId.addEventListener("keyup", handleClick);

// thisIsLoginBtn.addEventListener("click", () => {
//   const inputID = document.querySelector("#id-input").value;
//   const inputPW = document.querySelector("#password-input").value;

//   if (inputID.length > 1 && inputPW.length > 1) {
//     console.log("hi");
//   }

// if (inputID.length >= 1 && inputPW.length >= 1) {
//   document.getElementsByClassName("login-btn").disabled = false;
// }
// });
// const thisIsLoginBtn =
