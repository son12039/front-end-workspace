const today = new Date("2025-01-01 00:00:00"); //기준시각
function count() {
  const now = new Date(); //현재시각

  times = (today - now) / 1000;
  timed = times / 86400;
  timed1 = Math.ceil(timed);
  timed11 = timed1 - 1; // 답 남은일

  timedd = 1 - (timed1 - timed);
  timeddd = timedd * 86400;
  timeh1 = Math.floor(timeddd / 3600); //답 남은시간

  timemm = timeddd / 3600 - Math.floor(timeddd / 3600);
  timemmmm = timemm * 60;
  timem1 = Math.floor(timemmmm); // 답 남은 분

  timess = (timemmmm - (Math.ceil(timemmmm) - 1)) * 60;
  times1 = Math.floor(timess); //답 남은초

  console.log(timed11, timeh1, timem1, times1);
  timelast = [timed11, timeh1, timem1, times1];
  console.log(timelast.join(","));
  timelast1 = timelast.join(",");

  // String(times1).padStart(2,"0")
  clock.innerHTML = timelast1; //답
}
count(); //1초딜레이없게 바로 배치하고 그 후 1초마다 실행
setInterval(count, 1000); //1초마다 실행
