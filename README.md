# spa-boot-camp

## サーバのテスト手順

- サーバ起動

```
python server/server.py
```

- サーバにリクエストを送信

```
curl -i -H "Content-Type: application/json" -X POST -d '{"post_text": "hoge"}' http://localhost:5000/wakati
```

- 期待されるレスポンス

```
{
  "result": "hoge!"
}
```
