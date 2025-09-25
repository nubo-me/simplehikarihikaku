# シンプル光回線比較

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/nubo-me/simplehikarihikaku)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Firebase](https://img.shields.io/badge/Hosted%20on-Firebase-orange?logo=firebase)](https://hikari-simple-comparison.firebaseapp.com)

光回線プロバイダーを料金・速度・提供エリアで徹底比較できるWebサイトです。

## 🌐 ライブデモ

**🔗 [サイトを見る](https://hikari-simple-comparison.firebaseapp.com)**

## 🚀 特徴

- **シンプルな比較**: 料金・速度・エリアで簡単比較
- **レスポンシブデザイン**: スマートフォンからPC まで対応
- **SEO最適化**: 検索エンジンに最適化されたマークアップ
- **高速表示**: Vite による高速な開発・ビルド環境

## 🛠 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: CSS3 + CSS Modules
- **アイコン**: Lucide React
- **デプロイ**: Firebase Hosting

## 📦 インストール

```bash
npm install
```

## 🚀 開発サーバー起動

```bash
npm run dev
```

## 🏗 ビルド

```bash
npm run build
```

## 🌐 デプロイ

Firebase Hosting用の設定ファイルが含まれています。

### 初回デプロイの手順

1. Firebase CLI のインストール:
```bash
npm install -g firebase-tools
```

2. Firebase へログイン:
```bash
firebase login
```

3. デプロイ実行:
```bash
npm run deploy
```

## 🔧 アフィリエイト機能の設定と動作確認

### GA4イベント確認方法

1. **開発者ツールでの確認**:
   - ブラウザの開発者ツール（F12）を開く
   - Console タブで `gtag` イベントの送信を確認
   - アフィリエイトリンクをクリックすると `click_affiliate` イベントが発火

2. **GA4リアルタイムレポートでの確認**:
   - GA4の管理画面 > レポート > リアルタイム
   - イベント名「click_affiliate」が表示されることを確認
   - カスタムディメンション: `brand`, `location`, `device`, `page_path`

3. **デバッグモードでの確認**:
   ```js
   // ブラウザコンソールで実行してテスト
   gtag('event', 'click_affiliate', {
     brand: 'test-brand',
     location: 'test-location',
     device: 'desktop',
     page_path: '/'
   });
   ```

### JSON-LD構造化データの検証

1. **Google構造化データテストツール**:
   - [Rich Results Test](https://search.google.com/test/rich-results) にサイトURLを入力
   - パンくずナビとFAQの構造化データが正しく認識されることを確認

2. **ブラウザでの確認**:
   - ページのソースを表示（Ctrl+U）
   - `<script type="application/ld+json">` セクションを確認
   - JSON形式が正しいことを確認

### 機能の動作テスト

1. **プロバイダーカード**:
   - 各プロバイダーの「詳細を見る」ボタンが正しく動作することを確認
   - アフィリエイトリンクが正しく遷移することを確認

2. **モバイル用浮遊CTA**:
   - 画面幅768px以下で表示されることを確認
   - ボタンクリックでプロバイダーセクションにスムーズスクロールすることを確認

### トラッキング設定のテスト

各アフィリエイトリンクに正しい属性が設定されていることを確認:

```html
<!-- 正しい例 -->
<a href="[アフィリエイトURL]" 
   target="_blank" 
   rel="nofollow sponsored" 
   data-offer="[プロバイダーID]" 
   data-location="[配置場所]">
```

### パフォーマンス確認

1. **Core Web Vitals**:
   - [PageSpeed Insights](https://pagespeed.web.dev/) でサイトを測定
   - LCP、FID、CLSの値を確認

2. **モバイル表示**:
   - レスポンシブデザインの動作確認
   - タッチ操作の最適化確認

1. Firebase にログイン
```bash
npm run firebase:login
```

2. プロジェクトをビルド
```bash
npm run build
```

3. Firebase にデプロイ
```bash
firebase deploy
```

### 簡単デプロイ
```bash
npm run deploy
```

## 📊 Analytics

Firebase Analytics が組み込まれており、以下のイベントを追跡します：
- ページビュー
- アフィリエイトリンククリック
- プロバイダー別のクリック率

## 🔧 Firebase設定

`src/firebase/config.ts` にFirebaseの設定があります。
本番環境では環境変数を使用することを推奨します。

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
