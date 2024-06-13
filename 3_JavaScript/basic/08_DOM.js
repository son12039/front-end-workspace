function btn1() {
  console.log(document.head);
  console.log(document.body);

  // 동일한 태그가 여러개 존재할 수 있기 떄문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div);
  console.log(div[0]); // Hello, World!
  console.log(div[1]); // Hello, JavaScript!
}
function btn2() {
  const div = document.getElementById("testId");
  console.log(div);
}
function btn3() {
  // 동일한 class 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴

  const div = document.getElementsByClassName("testClass");
  console.log(div);
}
function btn4() {
  // 동일한 name 속성값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByName("testName");
  console.log(div);
}
function btn5() {
  let div = document.querySelector("#testId2");
  console.log(div);
  div = document.querySelectorAll("div");
  console.log(div);
  console.log(div[0]);
  console.log(div[1]);
}
function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요</span>";
  div[1].innerHTML = "<span>안녕하세요</span>";
  console.log(div[1].innerHTML);
}
function btn7() {
  const div = document.querySelector("#testId");
  div.setAttribute("dd11", "테스트3");
  div.setAttribute("dd11", "테스트5");
  console.log(div.getAttribute("dd11"));
}
function btn8() {
  const div = document.querySelector("#testId");
  div.style.color = "orange"; //0번div를 오렌지색으로
  div.style.backgroundColor = "yellow"; //0번div 배경색 노랭이
}

const div = document.querySelector("#testId2");

function btn9() {
  div.classList.add("black"); //스타일추가
}

function btn10() {
  div.classList.remove("black"); //스타일제거
}
function btn11() {
  const check = div.classList.contains("black");
  if (check) {
    div.classList.remove("black"); //있으면 지워
  } else {
    div.classList.add("black"); //없으면 넣어
  }
}
function btn12() {
  div.classList.toggle("black"); //있으면 지우고,없으면 넣어
}

function btn13() {
  const div = document.querySelector("testId2");

  // <p>Lorem Ipsum</p>
  const p = document.createElement("p"); //갖다넣을 p생성
  p.innerHTML = "Lorem Ipsum";

  // div에 만든 p태그 추가
  div.appendChild(p); //갖다넣기
}
function btn14() {
  const div = document.querySelector("testId2");
  // === p.parentNode
  const p = document.querySelector("p");
  //div.removeChild(p);
  p.parentNode.removeChild(p);
}
