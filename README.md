# シンプル光回線比較

光回線プロバイダーを料金・速度・提供エリアで徹底比較できるWebサイトです。

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
