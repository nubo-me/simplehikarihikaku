import type { Provider } from '../types/provider';

// サンプル光回線プロバイダーデータ
export const providers: Provider[] = [
  {
    id: 'docomo-hikari',
    name: 'ドコモ光',
    logoUrl: '/logos/docomo.png',
    apartmentPrice: '4,400円〜',
    housePrice: '5,500円〜',
    initialCost: 3300,
    maxCashback: '120,580円',
    availableAreas: ['全国'],
    features: [
      'ドコモスマホ割引',
      'プロバイダー選択可能',
      '工事費無料キャンペーン',
      '24時間サポート'
    ],
    rating: 4.3,
    description: 'NTTドコモが提供する光回線サービス。ドコモユーザーならスマホとのセット割でお得に利用可能。',
    effectiveMonthly: '4,730円（ドコモスマホセット割適用時）',
    recommendedFor: 'ドコモスマホを家族で使っていて、通信とスマホ代をまとめて節約したいご家庭に最適です。',
    ctaLabel: 'ドコモ光の限定特典を確認する'
  },
  {
    id: 'au-hikari',
    name: 'auひかり',
    logoUrl: '/logos/au.png',
    apartmentPrice: '3,740円〜',
    housePrice: '5,100円〜',
    initialCost: 3300,
    maxCashback: '131,000円',
    availableAreas: ['関東', '関西', '東海', '九州'],
    features: [
      'auスマホ割引',
      '独自回線で高速',
      '工事費実質無料',
      'Wi-Fiルーター無料'
    ],
    rating: 4.6,
    description: 'KDDI独自の光回線で安定した高速通信を提供。auユーザーには特にお得な割引プランあり。',
    effectiveMonthly: '4,180円（ずっとギガ得プラン・キャンペーン適用時）',
    recommendedFor: 'FPSやMMORPGなどオンラインゲームのラグを避けたい、速度重視の方におすすめです。',
    ctaLabel: 'auひかりの高速回線を申し込む'
  },
  {
    id: 'softbank-hikari',
    name: 'SoftBank 光',
    logoUrl: '/logos/softbank.png',
    apartmentPrice: '4,180円〜',
    housePrice: '5,220円〜',
    initialCost: 3300,
    maxCashback: '75,000円',
    availableAreas: ['全国'],
    features: [
      'SoftBankスマホ割引',
      'IPv6高速通信',
      '他社違約金満額還元',
      'おうち割光セット'
    ],
    rating: 4.1,
    description: 'SoftBankが提供する光回線サービス。SoftBankユーザーには「おうち割」でお得。',
    effectiveMonthly: '4,180円（おうち割光セット適用時）',
    recommendedFor: 'SoftBankスマホを使っていて、乗り換えキャッシュバックで初期費用を抑えたい方に向いています。',
    ctaLabel: 'SoftBank光のキャンペーンを確認する'
  },
  {
    id: 'biglobe-hikari',
    name: 'ビッグローブ光',
    logoUrl: '/logos/biglobe.png',
    apartmentPrice: '3,058円〜',
    housePrice: '4,158円〜',
    initialCost: 3300,
    maxCashback: '40,000円',
    availableAreas: ['全国'],
    features: [
      'au・UQモバイル割引',
      'IPv6オプション無料',
      '無線LANルーター6ヶ月無料',
      'セキュリティセット・プレミアム'
    ],
    rating: 4.2,
    description: 'KDDIグループのビッグローブが提供する光回線。au・UQモバイルユーザーには割引あり。',
    effectiveMonthly: '2,970円（12ヶ月割引・キャッシュバック適用時）',
    recommendedFor: '一人暮らしでコスパをとことん重視したい方へ。初期費用を抑えつつ安定回線を確保できます。',
    ctaLabel: 'ビッグローブ光の割引をチェックする'
  },
  {
    id: 'commufa-hikari',
    name: 'コミュファ光',
    logoUrl: '/logos/commufa.png',
    apartmentPrice: '3,980円〜（キャンペーン時）',
    housePrice: '3,980円〜（キャンペーン時）',
    initialCost: 770,
    maxCashback: '35,670円',
    availableAreas: ['愛知', '岐阜', '三重', '静岡', '長野'],
    features: [
      'au・UQモバイル割引対応',
      '中部テレコミュニケーション独自回線',
      '高速・安定通信',
      '地域密着サポート'
    ],
    rating: 4.3,
    description: '中部地方限定の光回線サービス。独自回線による安定した高速通信とau・UQモバイル割引が魅力。',
    effectiveMonthly: '3,980円（中部エリア限定キャンペーン適用時）',
    recommendedFor: '愛知・岐阜など東海エリアで家族みんなが同時に使っても快適な回線を探している方に。',
    ctaLabel: 'コミュファ光の地域限定割引を見る'
  },
  {
    id: 'ahamo-hikari',
    name: 'ahamo光',
    logoUrl: '/logos/ahamo.png',
    apartmentPrice: '3,630円',
    housePrice: '4,950円',
    initialCost: 3300,
    maxCashback: '20,000円',
    availableAreas: ['全国'],
    features: [
      'ahamoユーザー専用プラン',
      'シンプルな料金体系',
      'dポイント還元',
      'IPv6対応'
    ],
    rating: 4.1,
    description: 'NTTドコモのahamoユーザー向け光回線サービス。シンプルな料金設定とdポイント還元が魅力。',
    effectiveMonthly: '3,630円（ahamoセット割適用時）',
    recommendedFor: 'スマホもネットもシンプルにまとめたい単身世帯にぴったり。dポイント還元で実質負担が軽くなります。',
    ctaLabel: 'ahamo光のシンプルプランを見る'
  },
  {
    id: 'nifty-hikari',
    name: '@nifty光',
    logoUrl: '/logos/nifty.png',
    apartmentPrice: '3,608円〜',
    housePrice: '4,378円〜',
    initialCost: 3300,
    maxCashback: '88,250円',
    availableAreas: ['全国'],
    features: [
      'au・UQモバイル割引対応',
      '老舗プロバイダーの安心感',
      'IPv6対応',
      '無線LANルーター最大25ヶ月無料'
    ],
    rating: 4.1,
    description: 'ニフティが提供する光回線サービス。老舗プロバイダーの信頼性とau・UQモバイル割引が特徴。',
    effectiveMonthly: '3,608円（キャッシュバック適用時）',
    recommendedFor: '老舗プロバイダーの安心感を重視しながら、au・UQモバイル割で通信費を抑えたい方に。',
    ctaLabel: '@nifty光のキャンペーンで申し込む'
  },
  {
    id: 'flets-hikari',
    name: 'フレッツ光',
    logoUrl: '/logos/flets.png',
    apartmentPrice: '6,270円〜',
    housePrice: '5,940円＋プロバイダ代',
    initialCost: 880,
    maxCashback: '79,000円',
    availableAreas: ['全国'],
    features: [
      'NTT東日本・西日本の基幹サービス',
      'プロバイダー選択の自由度',
      '全国幅広いエリア対応',
      '豊富なオプションサービス'
    ],
    rating: 4.0,
    description: 'NTT東日本・西日本が提供する光回線の基幹サービス。プロバイダーを自由に選択できる柔軟性が特徴。',
    effectiveMonthly: '5,280円（プロバイダー料込みの目安）',
    recommendedFor: '細かなオプションやプロバイダーを自分で選びたいこだわり派・法人利用にも対応します。',
    ctaLabel: 'フレッツ光の詳細を確認する'
  },
  {
    id: 'bizmo-hikari',
    name: 'ビジモ光',
    logoUrl: '/logos/bizmo.png',
    apartmentPrice: '4,620円',
    housePrice: '5,830円',
    initialCost: 3300,
    maxCashback: '30,000円',
    availableAreas: ['全国'],
    features: [
      '法人・SOHO向け光回線',
      '固定IPアドレス提供',
      '24時間365日サポート',
      'フレッツ光回線使用'
    ],
    rating: 4.2,
    description: '法人・SOHO向けに特化した光回線サービス。固定IPアドレスの提供と充実したサポート体制が特徴。',
    effectiveMonthly: '4,620円（固定IP1個付きプラン）',
    recommendedFor: '固定IPや法人向けサポートが必要なSOHO・スモールビジネスに最適なプランです。',
    ctaLabel: 'ビジモ光で固定IPを申し込む'
  }
];
