# Public 目录

## 目录用途
存放静态资源文件，这些文件会被直接复制到构建输出目录，可以通过绝对路径访问。

## 适合放在 public 目录的文件
- favicon.ico
- robots.txt
- manifest.json
- sitemap.xml
- 社交媒体图片（Open Graph、Twitter Card）
- 不需要构建处理的第三方库
- 静态文档（PDF、协议文件等）

## 不适合放在 public 目录的文件
- 需要通过 import 引入的图片
- 需要优化的资源（图片压缩、代码压缩等）
- 组件中使用的 SVG 图标（应使用 import）

## 访问方式
```jsx
// ✅ 正确：使用绝对路径
<img src="/logo.png" alt="Logo" />

// ❌ 错误：不要使用相对路径
<img src="./logo.png" alt="Logo" />

// ❌ 错误：不要使用 import
import logo from '/logo.png'; // 不适用于 public 目录
```

## 文件结构示例
```
public/
  favicon.ico
  robots.txt
  manifest.json
  logo.png
  images/
    hero-bg.jpg
    default-avatar.png
  fonts/
    CustomFont.woff2
  docs/
    terms.pdf
    privacy.pdf
```

## 与 src/assets 的区别
- **public/** - 静态文件，不经过构建工具处理，使用绝对路径访问
- **src/assets/** - 需要构建处理的资源，通过 import 引入，会被优化和哈希化

## 最佳实践
- 文件名使用小写和连字符（如 `hero-image.jpg`）
- 大型文件考虑使用 CDN
- 图片优化后再放入（压缩、适当尺寸）
- 定期清理未使用的文件
