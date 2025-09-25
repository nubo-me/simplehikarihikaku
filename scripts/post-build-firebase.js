// Firebase用の後処理スクリプト
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Firebase用の後処理を開始...');

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

console.log('Firebase用の後処理が完了しました！');

// 追加: index.html の健全化（誤った modulepreload とベースURLの是正）
try {
  const indexPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf-8');

    // もし GitHub Pages 用のベースが混入していたら Firebase 用に修正
    html = html.replaceAll('/simplehikarihikaku/', '/');

    // 誤った modulepreload の除去: data: スキーム と .tsx 参照は削除
    html = html.replace(/\n?\s*<link\s+rel=["']modulepreload["']\s+href=["']data:[^"']+["']\s*\/>\s*/g, '');
    html = html.replace(/\n?\s*<link\s+rel=["']modulepreload["']\s+href=["'][^"']+\.tsx["']\s*\/>\s*/g, '');

    fs.writeFileSync(indexPath, html);
    console.log('✓ index.html をサニタイズ（modulepreload/ベースURL修正）');
  }
} catch (e) {
  console.warn('index.html サニタイズ中にエラー:', e);
}
