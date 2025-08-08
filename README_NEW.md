# 光回線比較ナビ

光回線プロバイダーの料金・速度・サービスを徹底比較できるWebサイトです。

## 🚀 特徴

- **プロバイダー比較**: 主要な光回線プロバイダーの詳細比較
- **フィルター機能**: 料金・エリア・速度による絞り込み
- **レスポンシブデザイン**: PC・タブレット・スマートフォン対応
- **SEO最適化**: 検索エンジン対応の構造化データ
- **アフィリエイト対応**: 収益化機能付き

## 🛠️ 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **ビルドツール**: Vite
- **ルーティング**: React Router DOM  
- **スタイリング**: CSS3 + CSS Modules
- **アイコン**: Lucide React
- **ホスティング**: Firebase Hosting

## 📦 インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プレビュー
npm run preview
```

## 🚀 デプロイ

### Firebase Hostingへのデプロイ

1. Firebase CLIのインストール（既にインストール済み）
```bash
npm install -g firebase-tools
```

2. Firebaseプロジェクトの初期化
```bash
firebase login
firebase init hosting
```

3. ビルドとデプロイ
```bash
npm run build
firebase deploy
```

## 📁 プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── ProviderCard.tsx    # プロバイダーカード
│   ├── ProviderCard.css
│   ├── ComparisonFilter.tsx # フィルター
│   └── ComparisonFilter.css
├── data/               # データファイル
│   └── providers.ts       # プロバイダー情報
├── types/              # TypeScript型定義
│   └── provider.ts        # Provider型
├── App.tsx             # メインアプリ
├── App.css
└── main.tsx           # エントリーポイント
```

## 🎯 主な機能

### プロバイダー比較
- 月額料金
- 初期費用
- 最大通信速度
- 提供エリア
- 主な特徴
- ユーザー評価

### フィルター機能
- 最大月額料金での絞り込み
- 提供エリアでの絞り込み
- 評価順・価格順・速度順でのソート

### アフィリエイト機能
- 各プロバイダーの申し込みリンク
- クリック追跡（Google Analytics対応）
- 適切なrel属性とターゲット設定

## 🔧 カスタマイズ

### プロバイダー情報の追加・編集
`src/data/providers.ts`でプロバイダー情報を編集できます。

### アフィリエイトリンクの設定
各プロバイダーの`affiliateUrl`を実際のアフィリエイトリンクに変更してください。

### Google Analytics設定
`index.html`の`GA_MEASUREMENT_ID`を実際のトラッキングIDに変更してください。

## 📱 レスポンシブ対応

- デスクトップ: 1200px以上
- タブレット: 768px - 1199px
- スマートフォン: 767px以下

## 🎨 デザイン

モダンで清潔感のあるデザインを採用：
- グラデーション背景
- カードベースのレイアウト
- アニメーション効果
- アクセシビリティ配慮

## 📈 SEO対策

- セマンティックHTML
- メタタグ最適化
- 構造化データ（JSON-LD）
- Open Graphタグ
- Twitter Cardタグ
- サイトマップ対応

## 🔒 注意事項

- アフィリエイトリンクは適切な開示を行ってください
- プロバイダー情報は定期的に更新してください
- 画像はプレースホルダーなので実際のロゴに差し替えてください

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します。
