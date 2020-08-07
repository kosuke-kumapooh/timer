var lunchStart = 12 * 60 + 15;
var lunchEnd = 13 * 60;
var lunchTime = (lunchEnd - lunchStart) / 60;
function clearNumber1() {
  document.timerForm1.reset();
}
function calcTime1() {
  var t1 = eval(timerForm1.hour1.value) * 60 +
    eval(timerForm1.minute1.value);
  var t2 = eval(timerForm1.hour2.value) * 60 +
    eval(timerForm1.minute2.value);
  if (t1 < lunchStart && t2 > lunchEnd) {
    // お昼休み補正
    timerForm1.result.value = (t2 - t1) / 60.0 - lunchTime;
  } else {
    timerForm1.result.value = (t2 - t1) / 60.0;
  }
}

function clearNumber2() {
  document.timerForm2.reset();
}
function calcTime2() {
  var t1 = eval(timerForm2.hour1.value) * 60 +
    eval(timerForm2.minute1.value);
  var t2 = eval(timerForm2.hour2.value) * 60 +
    eval(timerForm2.minute2.value);
  if (t1 < lunchStart && t2 > lunchEnd) {
    // お昼休み補正
    timerForm2.result.value = (t2 - t1) / 60.0 - lunchTime;
  } else {
    timerForm2.result.value = (t2 - t1) / 60.0;
  }
}

function clearNumber3() {
  document.timerForm3.reset();
}
function calcTime3() {
  var t1 = eval(timerForm3.hour1.value) * 60 +
    eval(timerForm3.minute1.value);
  var t2 = eval(timerForm3.hour2.value) * 60 +
    eval(timerForm3.minute2.value);
  if (t1 < lunchStart && t2 > lunchEnd) {
    // お昼休み補正
    timerForm3.result.value = (t2 - t1) / 60.0 - lunchTime;
  } else {
    timerForm3.result.value = (t2 - t1) / 60.0;
  }
}
