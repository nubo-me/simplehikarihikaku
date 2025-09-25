# アフィリエイトURL更新ガイド

## 手順概要
`src/data/offers.ts` のダミーURLを実際のアフィリエイトリンクに更新します。

## 更新対象のダミーURL

### 1. 申込リンク（url フィールド）

```typescript
// ドコモ光 × GMOとくとくBB
url: "#TODO-docomo-gmo",
// ↓ 実際のアフィリエイトURLに置換
url: "https://example.com/docomo-affiliate-link",

// NURO光 × 公式特設
url: "#TODO-nuro",
// ↓ 実際のアフィリエイトURLに置換  
url: "https://example.com/nuro-affiliate-link",

// auひかり × アウンカンパニー
url: "#TODO-auhikari-aun",
// ↓ 実際のアフィリエイトURLに置換
url: "https://example.com/au-affiliate-link",

// ソフトバンク光 × 公式
url: "#TODO-softbank",
// ↓ 実際のアフィリエイトURLに置換
url: "https://example.com/softbank-affiliate-link",
```

### 2. エリア確認リンク（area_link フィールド）

```typescript
// フレッツ光系（ドコモ光・ソフトバンク光）
area_link: "#TODO-area-flets",
// ↓ 実際のエリア確認URLに置換
area_link: "https://flets.com/area-check/",

// NURO光
area_link: "#TODO-area-nuro",
// ↓ 実際のエリア確認URLに置換
area_link: "https://www.nuro.jp/area/",

// auひかり
area_link: "#TODO-area-auhikari",
// ↓ 実際のエリア確認URLに置換
area_link: "https://au.com/area-check/",
```

## 更新後の検証手順

1. **構文チェック**
   ```bash
   npm run build
   ```

2. **リンク動作確認**
   - 開発サーバーで各リンクをクリック
   - 正しいページに遷移することを確認

3. **GA4計測確認**
   - ブラウザのデベロッパーツールでconsole.logを確認
   - `click_affiliate`イベントが正しく送信されることを確認

4. **デプロイ**
   ```bash
   npm run deploy        # Firebase
   npm run deploy:github # GitHub Pages
   ```

## 注意事項

- **rel属性は自動設定**: すべてのアフィリエイトリンクに`rel="nofollow sponsored"`が自動的に追加されます
- **計測タグ**: `data-offer`と`data-location`が自動的に設定されます  
- **UTMパラメータ**: 必要に応じてアフィリエイトURLにUTMパラメータを追加してください

## 一括置換用の検索・置換パターン

VSCodeの検索・置換機能を使用する場合：

```
検索: "#TODO-([^"]+)"
置換: "https://example.com/$1-affiliate-link"
```

※ 実際のURLは個別に設定してください。
