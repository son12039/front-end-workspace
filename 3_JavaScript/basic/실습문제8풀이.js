const id = document.querySelector("#id");
const idtext = document.querySelector("#idtext");
id.addEventListener("input", function () {
  const keydown = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/.test(id.value);
  if (keydown) {
    idtext.style.color = "green";
    idtext.innerHTML = "OK!";
    pass.removeAttribute("disabled");
  } else {
    idtext.style.color = "red";
    idtext.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
    pass.setAttribute("disabled", "disabled");
  }
});

const pass = document.querySelector("#pass");
const passtext = document.querySelector("#passtext");
pass.addEventListener("input", function () {
  const keydown = /^[!-~]{8,15}$/.test(pass.value);
  if (keydown) {
    passtext.style.color = "green";
    passtext.innerHTML = "OK!";
    passcheck.removeAttribute("disabled");
  } else {
    passtext.style.color = "red";
    passtext.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
    passcheck.setAttribute("disabled", "disabled");
  }
});
const passcheck = document.querySelector("#passcheck");
const passchecktext = document.querySelector("#passchecktext");
passcheck.addEventListener("input", function () {
  if (pass.value === passcheck.value) {
    passchecktext.style.color = "green";
    passchecktext.innerHTML = "OK!";
  } else {
    passchecktext.style.color = "red";
    passchecktext.innerHTML = "일치하지않습니다.";
  }
});

/* function btn1() {
  const pass1 = document.querySelector("#pass");
  const pass2 = pass1.value;
  console.log(pass2);

  
  
}
 */
