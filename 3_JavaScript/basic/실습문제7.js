let imgspace1 = document.querySelector("#img1");
let imgspace2 = document.querySelector("#img2");
let imgspace3 = document.querySelector("#img3");
let btn11 = document.querySelector("#btm1");
let btn22 = document.querySelector("#btm2");

//
let img = document.querySelectorAll(".img");

function btm3() {
  console.log(img);
}

//
//
//코드압축

let valimg111 = [];
let fanaltext = document.querySelector("#fanaltext");
let count = 0;
let count1 = 0;
function btm1() {
  let valimg11 = Math.floor(Math.random() * 3 + 1);
  let valimg2 = [`/resources/family${valimg11}.jpg`];

  imgspace1.setAttribute("src", valimg2);

  let valimg22 = Math.floor(Math.random() * 3 + 1);
  let valimg3 = [`/resources/family${valimg22}.jpg`];

  imgspace2.setAttribute("src", valimg3);

  let valimg33 = Math.floor(Math.random() * 3 + 1);
  let valimg4 = [`/resources/family${valimg33}.jpg`];

  imgspace3.setAttribute("src", valimg4);
  count += 1;
  btn11.textContent = `click ${count}`;
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  if (valimg11 === valimg22 && valimg22 === valimg33) {
    fanaltext.textContent = "성공!  재도전하기 ↑↑↑";
    btn11.setAttribute("disabled", "disabled");
    btn22.removeAttribute("disabled");
  }
}
function btm2() {
  count1 += 1;
  fanaltext.textContent = [`재도전! 현재 ${count1}회 클리어`];
  imgspace1.setAttribute("src", `/resources/family1.jpg`);
  imgspace2.setAttribute("src", `/resources/family2.jpg`);
  imgspace3.setAttribute("src", `/resources/family3.jpg`);
  count = 0;
  btn11.textContent = `click`;
  btn11.removeAttribute("disabled");
  btn22.setAttribute("disabled", "disabled");
}
// disabled
