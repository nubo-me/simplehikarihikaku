// GitHub Pages用の後処理スクリプト
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('GitHub Pages用の後処理を開始...');

// distディレクトリのパス
const distDir = path.join(__dirname, '..', 'dist');

// 不要な.tsx/.tsファイルを削除
const assetsDir = path.join(distDir, 'assets');
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const tsxFiles = files.filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
  
  tsxFiles.forEach(file => {
    const filePath = path.join(assetsDir, file);
    fs.unlinkSync(filePath);
    console.log(`✓ 不要なファイルを削除: ${file}`);
  });
}

// .nojekyllファイルを作成（Jekyll処理を無効化してMIMEタイプ問題を解決）
const nojekyllPath = path.join(distDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('✓ .nojekyllファイルを作成（Jekyll無効化）');

// 404.htmlファイルを作成（SPA用）
const html404Path = path.join(distDir, '404.html');
const indexHtmlPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  const indexContent = fs.readFileSync(indexHtmlPath, 'utf-8');
  fs.writeFileSync(html404Path, indexContent);
  console.log('✓ 404.htmlファイルを作成（SPA対応）');
}

// manifestファイルを置換
const manifestPath = path.join(distDir, 'site.webmanifest');
if (fs.existsSync(manifestPath)) {
  const githubManifest = {
    "name": "シンプル光回線比較",
    "short_name": "光回線比較",
    "description": "光回線プロバイダーを料金・速度・提供エリアで徹底比較",
    "start_url": "/simplehikarihikaku/",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff",
    "icons": [{
      "src": "favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }]
  };
  
  fs.writeFileSync(manifestPath, JSON.stringify(githubManifest, null, 2));
  console.log('✓ GitHub Pages用manifestを設置');
}

// index.htmlの基本的な修正
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf-8');
  
  // 相対パスの確認（すでにViteで処理済みのはず）
  if (indexContent.includes('="/assets/')) {
    indexContent = indexContent.replace(/="\/assets\//g, '="/simplehikarihikaku/assets/');
    console.log('✓ index.htmlのアセットパスを修正');
  }
  
  // GitHub Pages用のモジュール読み込み最適化
  if (indexContent.includes('type="module"') && indexContent.includes('crossorigin')) {
    // crossorigin属性を調整
    indexContent = indexContent.replace(/crossorigin\s+src/g, 'crossorigin="anonymous" src');
    console.log('✓ モジュールスクリプトのcrossorigin属性を調整');
  }
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✓ index.htmlの修正完了');
} else {
  console.log('⚠ index.htmlが見つかりません');
}

console.log('GitHub Pages用の後処理が完了しました！');

// 追加: 誤った modulepreload (data: スキームや .tsx) を除去
try {
  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf-8');
    html = html.replace(/\n?\s*<link\s+rel=["']modulepreload["']\s+href=["']data:[^"']+["']\s*\/>\s*/g, '');
    html = html.replace(/\n?\s*<link\s+rel=["']modulepreload["']\s+href=["'][^"']+\.tsx["']\s*\/>\s*/g, '');
    fs.writeFileSync(indexPath, html);
    console.log('✓ 誤った modulepreload を除去');
  }
} catch (e) {
  console.warn('modulepreload 除去中にエラー:', e);
}
