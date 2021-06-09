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

## client の起動手順

- npm package のインストールと開発用サーバ起動

```shell-session
cd client
npm install

# webpack-dev-server の起動
webpack serve --content-base src --mode development
```

