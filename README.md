# notify_google_calendar_to_chatwork
Googleカレンダーの特定の予定をChatWorkに通知

## Summary
カレンダーの予定の中で、最初に【※重要】と書かれているものを、開始15分前にChatWorkへ通知<br>
通知する予定の条件と何分前に通知するかは変更可能

## Setup
#### ライブラリの読み込み
ChatWorkClientとdayjsを読み込み。それぞれ以下のIDにて検索
```
1nf253qsOnZ-RcdcFu1Y2v4pGwTuuDxN5EbuvKEZprBWg764tjwA5fLav
```
```
1ShsRhHc8tgPy5wGOzUvgEhOedJUQD53m-gd8lG2MOgs-dXC_aCZn9lFB
```
#### コードの書き換え
以下の3点を変更
- カレンダーID
- APIトークン
- ルームID
#### トリガー
時間主導型 > 分ベースのタイマー > 15分おき<br>
12:15や17:30など、00分,15分,30分,45分のいずれかのタイミングでトリガーを開始

## Note
通知のメッセージ内容は、21行目にて変更可能
