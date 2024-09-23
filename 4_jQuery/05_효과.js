// 1. show, hide, toggle
$("#show").click(() => {
  $("#img").show(1000);
});
$("#hide").click(() => {
  $("#img").hide(1000);
});
$("#toggle").click(() => {
  $("#img").toggle(1000);
});

// 2. fadeIn, fadeOut, fadeToggle, fadeTo
$("#fadeIn").click(() => {
  $("#img").fadeIn(1000);
});
$("#fadeOut").click(() => {
  $("#img").fadeOut(1000);
});
$("#fadeToggle").click(() => {
  $("#img").fadeToggle(1000);
});
$("#img").hover(
  function () {
    $(this).fadeTo(500, 0.5);
  }, // mouseenter
  function () {
    $(this).fadeTo(500, 1);
  } // mouseleave
);

// 3. slideDown, slideUp, slideToggle
$(".menu").click((e) => {
  let content = $(e.target).next();
  //   if (content.css("display") === "none") {
  //     content.slideDown(500);
  //   } else {
  //     content.slideUp(500);
  //   }
  //   content.slideToggle(500);
  $(".contents").slideUp();
  if (content.css("display") === "none") {
    content.slideDown(500);
  }
});
