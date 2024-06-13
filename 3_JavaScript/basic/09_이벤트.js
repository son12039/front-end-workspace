// DOMContentLoaded : DOM 구조가 로드되고 실행!
// 굳이 script를 헤드에 넣고 싶을 때
// window.addEventListener("DOMContentLoaded", function () {});
const h1 = document.querySelector("h1");
h1.onmouseenter = function () //마우스올라갔을 때 기능들이 실행
{
  h1.style.backgroundColor = "purple"; //이벤트 백그라인드 보라
};
h1.onmouseleave = function () //마우스가 떠났을 때
{
  h1.style.backgroundColor = "pink";
};
// h1.addEventListener(이벤트명, 이벤트 객체)
// addEventListner만 기억해도 무방!
h1.addEventListener("click", function () //클릭하면 이벤트발생
{
  h1.style.backgroundColor = "skyblue";
});

/* const body = document.querySelector("body");

const img = document.querySelectorAll(".container img");

for (let i = 0; i < 5; i++) {
  let val = Math.random() * 255;
  img[i].addEventListener("click", function () {
    img[i].style.display = "none";
    body.style.backgroundColor = "rgb(val)";
  });
}

const h2 = document.querySelector("h2");

h2.addEventListener("click", function () {
  for (let i = 0; i < 5; i++) {
    img[i].style.display = "block";
  }
}); */
//
//

const container = document.querySelector(".container");

function removeHandler(e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
    console.log(e.target);
  }
}
container.addEventListener("click", removeHandler);
//console.log(e.target); //클릭한 이미지 단일개체 한개만
// console.log(e.currentTarget); //해당하는 개체 전부
//
//
//
//
/*
const nth1 = document.querySelector(".container img:nth-child(1)");
nth1.addEventListener("click", function () {
  nth1.style.width = "0px";
  body.style.backgroundColor = "skyblue";
});
const nth2 = document.querySelector(".container img:nth-child(2)");
nth2.addEventListener("click", function () {
  nth2.style.width = "0px";
  body.style.backgroundColor = "yellow";
});
const nth3 = document.querySelector(".container img:nth-child(3)");
nth3.addEventListener("click", function () {
  nth3.style.width = "0px";
  body.style.backgroundColor = "red";
});
const nth4 = document.querySelector(".container img:nth-child(4)");
nth4.addEventListener("click", function () {
  nth4.style.width = "0px";
  body.style.backgroundColor = "green";
});
const nth5 = document.querySelector(".container img:nth-child(5)");
nth5.addEventListener("click", function () {
  nth5.style.width = "0px";
  body.style.backgroundColor = "red";
});
const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  for
  body.style.backgroundColor = "white";
});*/
