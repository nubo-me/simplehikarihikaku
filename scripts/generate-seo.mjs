import fs from 'fs';
import path from 'path';

// サイトマップを生成
const generateSitemap = () => {
  const baseUrl = 'https://hikari-simple-comparison.firebaseapp.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // publicディレクトリにsitemap.xmlを出力
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated at public/sitemap.xml');
};

// robots.txtも生成
const generateRobots = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://hikari-simple-comparison.firebaseapp.com/sitemap.xml

# クロール速度の制限
Crawl-delay: 1

# Google特有の設定
User-agent: Googlebot
Allow: /
Crawl-delay: 0`;

  const publicDir = path.join(process.cwd(), 'public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('✅ Robots.txt generated at public/robots.txt');
};

generateSitemap();
generateRobots();
