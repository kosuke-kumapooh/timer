window.onload = function () {
  setLunchTime()
}

function setLunchTime() {
  let [break1StartHour, break1StartMinute] = break1StartIn.value.split(':')
  break1Start = eval(break1StartHour) * 60 + eval(break1StartMinute);
  let [break1EndHour, break1EndMinute] = break1EndIn.value.split(':')
  break1End = eval(break1EndHour) * 60 + eval(break1EndMinute);
  break1Time = (break1End - break1Start) / 60;

  let [lunchStartHour, lunchStartMinute] = lunchStartIn.value.split(':')
  lunchStart = eval(lunchStartHour) * 60 + eval(lunchStartMinute);
  let [lunchEndHour, lunchEndMinute] = lunchEndIn.value.split(':')
  lunchEnd = eval(lunchEndHour) * 60 + eval(lunchEndMinute);
  lunchTime = (lunchEnd - lunchStart) / 60;

  let [break2StartHour, break2StartMinute] = break2StartIn.value.split(':')
  break2Start = eval(break2StartHour) * 60 + eval(break2StartMinute);
  let [break2EndHour, break2EndMinute] = break2EndIn.value.split(':')
  break2End = eval(break2EndHour) * 60 + eval(break2EndMinute);
  break2Time = (break2End - break2Start) / 60;
}

function clearNumber(formnum) {
  formnum.reset();
  calcSum();
}

function calcTime(formnum) {
  var t1 = NaN;
  var t2 = NaN;

  let [startHour, startMinute] = formnum.in1.value.split(':')
  t1 = eval(startHour) * 60 +
    eval(startMinute);
  let [endHour, endMinute] = formnum.in2.value.split(':')
  t2 = eval(endHour) * 60 +
    eval(endMinute);

  // 開始時刻 > 終了時刻
  // if (t1 > t2) {
  //   formnum.result.value = NaN;
  //   alert('Invalid time!');
  //   return false;
  // }

  if (t1 <= lunchStart && t2 >= lunchEnd) {
    // お昼休み補正
    formnum.result.value = (t2 - t1) / 60.0 - lunchTime;
  } else if (t1 <= break1Start && t2 >= break1End) {
    // 前休憩補正
    formnum.result.value = (t2 - t1) / 60.0 - break1Time;
  } else if (t1 <= break2Start && t2 >= break2End) {
    // 後休憩補正
    formnum.result.value = (t2 - t1) / 60.0 - break2Time;
  } else {
    formnum.result.value = (t2 - t1) / 60.0;
  }

  calcSum();
}

function calcSum() {
  sumForm.sum.value = eval(timerForm1.result.value) +
    eval(timerForm2.result.value) +
    eval(timerForm3.result.value) +
    eval(timerForm4.result.value);
}
