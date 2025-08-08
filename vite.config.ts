import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  build: {
    // パフォーマンス最適化
    target: 'es2015',
    minify: 'terser',
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2
      },
      mangle: true
    },
    
    rollupOptions: {
      output: {
        // アフィリエイト機能に必要なチャンク分割
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('firebase')) {
              return 'firebase';
            }
            if (id.includes('lucide')) {
              return 'icons';
            }
            return 'vendor';
          }
        },
        // SEO対策：ファイル名最適化
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // プリロード警告を解決
    modulePreload: false
  },
  
  // 開発サーバー設定
  server: {
    // プリロード警告を回避
    preTransformRequests: false
  },
  
  // CSS最適化（フォント読み込み改善）
  css: {
    devSourcemap: true,
    postcss: {
      plugins: []
    }
  },
  
  // 光回線比較サイト用の環境変数
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __SITE_URL__: JSON.stringify('https://hikari-simple-comparison.firebaseapp.com'),
  }
})
