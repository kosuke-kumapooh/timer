$(function () {
  var formName = [{
    name: 'timerForm1',
  }, {
    name: 'timerForm2',
  }, {
    name: 'timerForm3',
  }];

  $('.row').append(
    $.map(formName, function (x) {
      return $('<div>').addClass('col-sm').append(
        $('<form>').attr('name', x.name).append(
          $('<p>').text('開始時刻').append(
            $('<input>').attr({
              type: 'text',
              name: 'hour1',
              value: '8',
              onfocus: 'this.select()',
              onchange: 'calcTime(' + x.name + ')',
            }),
            $('<text>').text(':'),
            $('<input>').attr({
              type: 'text',
              name: 'minute1',
              value: '45',
              onfocus: 'this.select()',
              onchange: 'calcTime(' + x.name + ')',
            })
          ),
          $('<p>').text('終了時刻').append(
            $('<input>').attr({
              type: 'text',
              name: 'hour2',
              value: '17',
              onfocus: 'this.select()',
              onchange: 'calcTime(' + x.name + ')',
            }),
            $('<text>').text(':'),
            $('<input>').attr({
              type: 'text',
              name: 'minute2',
              value: '15',
              onfocus: 'this.select()',
              onchange: 'calcTime(' + x.name + ')',
            })
          ),
          $('<p>').append(
            $('<button>').addClass('btn btn-primary').attr({
              type: 'button',
              onclick: 'calcTime(' + x.name + ')'
            }).text('作業時間計算'),
            $('<input>').attr({
              type: 'text',
              name: 'result',
              value: '0.0'
            })
          ),
          $('<p>').append(
            $('<input>').addClass('memo').attr({
              type: 'text',
              placeholder: '作業内容メモ'
            })
          ),
          $('<p>').append(
            $('<button>').addClass('btn btn-secondary').attr({
              type: 'reset',
              onclick: 'clearNumber(' + x.name + ')',
            }).text('Reset')
          )
        ).append(
          x.name == 'timerForm3' ?
            $('<form>').attr('name', 'sumForm').append(
              $('<p>').addClass('sum').text('作業時間合計(h)').append(
                $('<input>').attr({
                  type: 'text',
                  name: 'sum',
                  value: '0.0',
                })
              )
            ) : ''
        )
      )
    })
  );
});