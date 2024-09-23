function btn1() {
  let id1 = `${id.value}`;
  //  let id11 = id1.split("");
  console.log(id1);

  // /^[(a-zA-Z)][^(a-zA-Z0-9]{3,11}$/
  // /^[!-~]{8,15}$/

  /*  
    idtext.innerHTML = `아이디 생성이 가능합니다`;
    idtext.style.color = "black";

    idtext.innerHTML = `첫글자는 반드시 영문자, 영문숫자포함 총 4~12자리로 입력하시오`;
    idtext.style.color = "red"; */

  //
  //
  let pass1 = `${pass.value}`;
  let pass11 = pass1.split("");
  let pass111 = pass11.length;
  let pass1text1 = /[(a-zA-Z)]/; //영문자포함
  let pass1text2 = /[(0-9)]/; // 숫자포함
  let pass1text3 = /([^(a-zA-Z)|\d])/; //특수기호 포함

  if (pass111 > 7 && pass111 < 16) {
    if (pass1text1.test(pass1)) {
      if (pass1text2.test(pass1)) {
        if (pass1text3.test(pass1)) {
          passtext.innerHTML = `비밀번호 생성이 가능합니다`;
          passtext.style.color = "green";
        } else {
          passtext.innerHTML = `반드시 영문자,특수기호,숫자하나씩 포함하여8~15글자`;
          passtext.style.color = "red";
        }
      } else {
        passtext.innerHTML = `반드시 영문자,특수기호,숫자하나씩 포함하여8~15글자`;
        passtext.style.color = "red";
      }
    } else {
      passtext.innerHTML = `반드시 영문자,특수기호,숫자하나씩 포함하여8~15글자`;
      passtext.style.color = "red";
    }
  } else {
    passtext.innerHTML = `반드시 영문자,특수기호,숫자하나씩 포함하여8~15글자`;
    passtext.style.color = "red";
  }

  let passcheck1 = `${passcheck.value}`;
  if (pass1 === passcheck1) {
    passtext2.innerHTML = `일치합니다`;
    passtext2.style.color = "green";
  } else {
    passtext2.innerHTML = `달라요`;
    passtext2.style.color = "red";
  }

  let name1aa = `${name1a.value}`;
  let nametext = /^[가-힣]{2,}/;
  let nametext1 = /[^(가-힣)]/;
  if (nametext.test(name1aa)) {
    if (nametext1.test(name1aa)) {
      namatext.innerHTML = `한글로 된 2~3글자 수로 작성하세요`;
      namatext.style.color = "red";
    } else {
      namatext.innerHTML = `맞심더`;
      namatext.style.color = "green";
    }
  } else {
    namatext.innerHTML = `한글로 된 2~3글자 수로 작성하세요`;
    namatext.style.color = "red";
  }

  let email1 = `${email.value}`;
  let email1text = /^[(a-zA-Z0-9]{1,}@[$(a-zA-Z0-9]{1,}/;
  if (email1text.test(email1)) {
    emailtext.innerHTML = `통과`;
    emailtext.style.color = "green";
  } else {
    emailtext.innerHTML = `양식에 맞춰주세요`;
    emailtext.style.color = "red";
  }
}

//passtext2
//   passtext.innerHTML = `비밀번호 생성이 가능합니다`;
//   passtext.style.color = "black";
/*


*/
