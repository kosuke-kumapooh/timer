var lunchStart = 12 * 60 + 15;
var lunchEnd = 13 * 60;
var lunchTime = (lunchEnd - lunchStart) / 60;

function clearNumber(formnum) {
  formnum.reset();
  calcSum();
}

function calcTime(formnum) {
  var t1 = eval(formnum.hour1.value) * 60 +
    eval(formnum.minute1.value);
  var t2 = eval(formnum.hour2.value) * 60 +
    eval(formnum.minute2.value);
  if (t1 < lunchStart && t2 > lunchEnd) {
    // お昼休み補正
    formnum.result.value = (t2 - t1) / 60.0 - lunchTime;
  } else {
    formnum.result.value = (t2 - t1) / 60.0;
  }
  calcSum();
}

function calcSum() {
  sumForm.sum.value = eval(timerForm1.result.value) +
    eval(timerForm2.result.value) +
    eval(timerForm3.result.value);
}