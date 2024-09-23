// 1. 이벤트 연결
// one
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// on
// $("#area2").on("mouseenter", (event) => {
//   $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
// });
// 마우스 내려갈때 leave
// 배경색 beige 텍스트 마우스가 내려감
// $("#area2").on("mouseleave", (event) => {
//   $(event.target).css("background-color", "beige").text("마우스가 내려감");
// });

/*
$("#area2").on("mouseenter mouseleave", (event) => {
    if (event.type === "mouseenter") {
      $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
    } else if (event.type === "mouseleave") {
      $(event.target).css("background-color", "beige").text("마우스가 내려감");
    }
  event.type === "mouseenter"
    ? $(event.target).css("background-color", "hotpink").text("마우스가 올라감")
    : $(event.target).css("background-color", "beige").text("마우스가 내려감");
});
$("#area2").on("click", (event) => {
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave"); // mouseenter, mouseleave이벤트제거
});
*/
$("#area2").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2. 키보드 이벤트
// keydown, keypress, keyup
$("#textarea1").on({
  keydown: (e) => {
    // 키보드가 눌려질 때
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    // 글자가 입력될 때
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    // 키보드가 떼어질 때
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});
// $("#textarea2").on({
//   keyup: (e) => {
//     let a = $("#textarea2").val().length;
//     $("#counter").text($("#textarea2").val().length);
//     if (a > 100) {
//       $("#textarea2").val($("#textarea2").val().substr(0, 100));
//     } else {
//     }
//   },
// });
$("#textarea2").keyup((e) => {
  let t = $(e.target);
  let le = t.val().length;
  let maxl = parseInt($("#maxLength").text());
  if (le > maxl) {
    t.val(t.val().substr(0, maxl));
  } else {
    $("#counter").text(le);
  }
});
$("#userId").keyup((e) => {
  let id = $(e.target).val();
  a = /^[a-z][a-z0-9]{3,11}$/.test(id);
  $("#i")
    .text(id.length != 0 ? "사용 " + (a ? "" : "불") + "가능한 아이디" : "")
    .css({ backgroundColor: a ? "green" : "red" });
});

// 3. trigger() 메서드
let a = 0;
$("#area3, #btn").click(() => {
  $("#counter2").text(a++);
});
// $("#btn").click(() => {
//   $("#counter2").text(a++);
//   $("#area3").trigger("click");
// });
