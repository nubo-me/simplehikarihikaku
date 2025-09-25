# セキュリティ対策ドキュメント

## Firebase API キー漏洩への対処

### 現状の問題
- GitHub Pages デプロイ時に Firebase API キーが公開された
- `assets/index-DrvfiZlT.js` に API キーが含まれている

### 実施済み対策

1. **Firestore セキュリティルールの強化**
   - プロバイダー情報は読み取り専用に設定
   - 書き込み権限を制限
   - 期限切れルールを更新

2. **API キー設定の改善**
   - フォールバック値の設定
   - コメントでセキュリティ方針を明記

### 必要な追加対策

1. **Firebase Console での作業**
   - 現在の API キーを無効化/ローテーション
   - 新しい API キーを生成
   - HTTP リファラー制限の設定:
     - `https://nubo-me.github.io/*`
     - `https://simple-hikari.web.app/*`
     - `https://simple-hikari.firebaseapp.com/*`

2. **GitHub Pages での制限**
   - Firebase コンソールで Web アプリの設定を確認
   - 不正なドメインからのアクセスを制限

### Firebase Web API キーについて

Firebase の Web API キーは以下の理由で公開されても安全です：
- API キーは認証ではなく識別のためのもの
- セキュリティは Firebase Security Rules で制御
- HTTP リファラー制限でドメインを制限可能

### 今後の対策

1. 定期的なセキュリティルールの見直し
2. Firebase Console での不正アクセス監視
3. 環境変数の適切な管理
4. デプロイ前のセキュリティチェック

### 参考リンク
- [Firebase セキュリティルール](https://firebase.google.com/docs/rules)
- [Firebase API キーセキュリティ](https://firebase.google.com/docs/projects/api-keys)
