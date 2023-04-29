function notify_google_calendar_to_chatwork() {
  let calendar=CalendarApp.getCalendarById('xxxx'); //カレンダーID
  let chatwork_api = 'xxxx'; //APIトークン
  let chatwork_room = 'xxxx'; //ルームID
  let alert_minute = 15;
  let initials_test = '【※重要】'

  let date = new Date();
  let events = calendar.getEventsForDay(date);

  for(let i in events){
    let title = events[i].getTitle();
    let start_time = events[i].getStartTime();
    let end_time = events[i].getEndTime();

    // 現在時刻と予定開始時間の差を取得
    let diff = dayjs.dayjs(new Date(start_time)).diff(date, 'minute');

    // ChatWorkに送信
    if (alert_minute-2 <= diff && diff <= alert_minute && title.startsWith(initials_test)) {
      let alert_body = HHmm(start_time) + '～' + HHmm(end_time) + '\n' + title; 

      let client = ChatWorkClient.factory({token: chatwork_api});
      client.sendMessage({
        room_id: chatwork_room,
        body: alert_body
      });
    }
  }
}

// 時刻のフォーマット
function HHmm(str){
  return Utilities.formatDate(str, 'Asia/Tokyo', 'HH:mm');
}
