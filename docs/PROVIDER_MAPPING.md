# プロバイダー対応表

## 新機能（診断・テーブル）と既存プロバイダーカードの対応関係

| 新機能ID | ブランド | プロバイダー | 既存カードID | アフィリエイトURL |
|----------|----------|-------------|-------------|------------------|
| `docomo-gmo` | ドコモ光 | GMOとくとくBB | `docomo-hikari` | `https://example.com/docomo-affiliate` |
| `auhikari-aun` | auひかり | アウンカンパニー | `au-hikari` | `https://example.com/au-affiliate` |
| `softbank-official` | ソフトバンク光 | 公式 | `softbank-hikari` | `https://example.com/softbank-affiliate` |
| `nuro-official` | NURO光 | 公式特設 | ※新規追加 | `https://www.nuro.jp/hikari/` |

## ボタンテキスト統一

### 変更前
- 診断機能: 「公式最安窓口へ」
- 料金テーブル: 「公式へ」
- 浮遊CTA: 「今の条件で最安をチェック」

### 変更後
- 診断機能: 「詳細はこちら」
- 料金テーブル: 「詳細はこちら」
- 浮遊CTA: 「最適なプランの詳細はこちら」

## アフィリエイト計測

すべてのボタンに以下が自動設定されます：
- `rel="nofollow sponsored"`
- `data-offer="[プロバイダーID]"`
- `data-location="[配置場所]"`
- GA4イベント `click_affiliate` の自動送信

## 注意事項

1. **既存プロバイダーカード**: 引き続き独自のアフィリエイトURLを使用
2. **新機能**: 対応するプロバイダーの既存アフィリエイトURLを統合使用
3. **NURO光**: 既存カードには無いため、新規にアフィリエイトURLを設定
