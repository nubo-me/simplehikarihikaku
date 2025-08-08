# 光回線比較サイト - セキュリティガイド

## 環境設定

### 1. 環境変数の設定

このプロジェクトを実行するには、Firebase設定用の環境変数が必要です。

1. `.env.example`をコピーして`.env`ファイルを作成
2. 実際のFirebase設定値を入力

```bash
# .envファイルの作成
cp .env.example .env
```

### 2. 必要な環境変数

- `VITE_FIREBASE_API_KEY`: FirebaseのAPIキー
- `VITE_FIREBASE_AUTH_DOMAIN`: Firebase認証ドメイン
- `VITE_FIREBASE_PROJECT_ID`: FirebaseプロジェクトID
- `VITE_FIREBASE_STORAGE_BUCKET`: Firebaseストレージバケット
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: Firebase Messaging送信者ID
- `VITE_FIREBASE_APP_ID`: FirebaseアプリID
- `VITE_FIREBASE_MEASUREMENT_ID`: Google Analytics測定ID

### セキュリティ注意事項

- `.env`ファイルには実際の設定値が含まれるため、GitHubにはアップロードされません
- 本番環境では、適切な環境変数管理システムを使用してください
- APIキーは公開されても問題ありませんが、Firebase Consoleでセキュリティルールを適切に設定してください

## 開発開始

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```
