# パフォーマンス最適化の実装

このプロジェクトでは、ページの読み込み速度とユーザー体験を向上させるために、以下のパフォーマンス最適化を実装しています。

## 実装済みの最適化機能

### 1. 遅延読み込み（Lazy Loading）
- 画像の遅延読み込みをIntersection Observer APIで実装
- ビューポートに入った時点で画像を読み込み
- 初期ページ読み込み時間を短縮

### 2. リソースプリロード
- 重要なフォントファイルの事前読み込み
- クリティカルなスタイルシートの優先読み込み
- DNS prefetchとpreconnectによる接続時間短縮

### 3. ビルド最適化（Vite設定）
- チャンクの最適化（vendor、firebase、lucideに分割）
- Terserによる圧縮とconsole.log除去
- バンドルサイズの最適化

### 4. パフォーマンス監視
- ページ読み込み時間の測定
- Google Analyticsへのパフォーマンスデータ送信
- ユーザー体験の定量的な分析

### 5. Critical CSS
- Above-the-foldコンテンツのスタイルを優先
- フォントの最適化（font-display: swap）
- GPU加速を利用したアニメーション

## 使用方法

これらの最適化は自動的に適用されます。特別な設定は不要です。

```bash
# ビルド時に自動的に最適化が適用されます
npm run build

# プリビューで最適化された状態を確認
npm run preview
```

## パフォーマンス指標

- **First Contentful Paint (FCP)**: < 1.5s 目標
- **Largest Contentful Paint (LCP)**: < 2.5s 目標
- **Cumulative Layout Shift (CLS)**: < 0.1 目標
- **First Input Delay (FID)**: < 100ms 目標

これらの指標は開発者ツールのLighthouseで確認できます。
