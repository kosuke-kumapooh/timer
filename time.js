var lunchStart = 12 * 60 + 15;
var lunchEnd = 13 * 60;
var lunchTime = (lunchEnd - lunchStart) / 60;

function creatTimerFormTest() {
  $('#start1').append('開始時刻 ');
  $('#start1').append(
    $('<input/>').attr({
      type: 'text',
      name: 'hour1',
      value: 8,
      onfocus: 'this.select()',
      onchange: 'calcTime(timerForm1)'
    }));
  $('#start1').append(': ');
  $('#start1').append(
    $('<input/>').attr({
      type: 'text',
      name: 'minute1',
      value: 45,
      onfocus: 'this.select()',
      onchange: 'calcTime(timerForm1)'
    })
  );
}

function memoForm() {
  $('.memo').append(
    $('<input/>').attr({
      type: 'text',
      placeholder: '作業内容メモ'
    })
  )
}

function clearNumber(formnum) {
  formnum.reset();
  calcSum();
}

function calcTime(formnum) {
  var t1 = eval(formnum.hour1.value) * 60 +
    eval(formnum.minute1.value);
  var t2 = eval(formnum.hour2.value) * 60 +
    eval(formnum.minute2.value);
  if (t1 <= lunchStart && t2 >= lunchEnd) {
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