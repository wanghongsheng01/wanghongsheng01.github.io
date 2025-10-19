# Frequently Asked Questions (FAQ)

常见问题解答

---

## 📋 目录

- [一般问题](#一般问题)
- [技术问题](#技术问题)
- [使用问题](#使用问题)
- [隐私与安全](#隐私与安全)
- [部署与集成](#部署与集成)
- [故障排除](#故障排除)
- [付费与授权](#付费与授权)

---

## 一般问题

### Q1: 这些工具完全免费吗？

**A**: 是的！所有工具100%免费，无隐藏费用。
- ✅ 无需注册
- ✅ 无使用限制
- ✅ 无付费功能
- ✅ 永久免费

---

### Q2: 需要注册账号吗？

**A**: 不需要！
- 打开网页即可使用
- 无需登录
- 无需提供个人信息
- 完全匿名使用

---

### Q3: 我的简历信息会被保存吗？

**A**: **绝对不会！**
- 所有处理在您的浏览器本地完成
- 不上传任何文件到服务器
- 不存储任何用户数据
- 关闭浏览器后数据自动清除

---

### Q4: 可以商业使用生成的网页吗？

**A**: 可以！
- 生成的HTML完全属于您
- 可用于任何目的（个人/商业）
- 可自由修改和分发
- 无需标注来源（但欢迎推荐）

---

### Q5: 支持哪些语言？

**A**: 当前版本:
- ✅ 中文（简体）
- ✅ 英文（部分）

未来计划:
- 日文
- 韩文
- 繁体中文

---

## 技术问题

### Q6: 支持哪些简历格式？

**A**: 目前支持4种格式:

| 格式 | 扩展名 | 支持度 |
|-----|--------|--------|
| PDF | .pdf | ✅ 完全支持 |
| Word | .doc, .docx | ✅ 完全支持 |
| LaTeX | .tex | ✅ 完全支持 |
| 纯文本 | .txt | ✅ 完全支持 |

---

### Q7: 为什么解析结果不准确？

**A**: 可能的原因:

1. **简历格式过于复杂**
   - 解决: 使用标准格式的简历
   - 或使用Pro版手动填写模式

2. **包含表格或图片**
   - 解决: 工具主要提取文本信息
   - 复杂布局建议手动调整

3. **非标准字段名称**
   - 解决: 使用常见标题（教育经历、工作经验等）

4. **文件损坏或加密**
   - 解决: 确保文件可正常打开
   - 移除PDF密码保护

**最佳实践**:
```
✅ 使用清晰的section标题
✅ 采用标准日期格式
✅ 避免过多装饰元素
✅ 使用常见字体
```

---

### Q8: 支持的浏览器有哪些？

**A**: 支持所有现代浏览器:

| 浏览器 | 最低版本 | 推荐版本 |
|-------|---------|---------|
| Chrome | 90+ | 最新版 |
| Firefox | 88+ | 最新版 |
| Safari | 14+ | 最新版 |
| Edge | 90+ | 最新版 |
| Opera | 76+ | 最新版 |

**不支持**:
- Internet Explorer（任何版本）
- 过旧的浏览器

---

### Q9: 为什么文件上传后没反应？

**A**: 可能的原因:

1. **文件太大**
   - 建议: < 10 MB
   - 解决: 压缩PDF或优化文件

2. **浏览器阻止了脚本**
   - 检查: 浏览器控制台是否有错误
   - 解决: 允许JavaScript运行

3. **CDN库加载失败**
   - 检查: 网络连接
   - 解决: 刷新页面重试

4. **文件格式不支持**
   - 确认: 文件扩展名正确
   - 解决: 转换为支持的格式

---

### Q10: 可以离线使用吗？

**A**: 部分可以:
- ❌ 首次访问需要网络（加载CDN库）
- ✅ 库加载后浏览器会缓存
- ❌ PDF和Word解析需要在线库
- ✅ 手动填写模式可离线使用

**未来计划**:
- Service Worker离线支持
- 本地库文件

---

## 使用问题

### Q11: 如何获得最佳解析效果？

**A**: 优化简历格式:

**✅ 推荐做法**:
```
1. 使用标准标题
   - 教育经历 / Education
   - 工作经验 / Work Experience
   - 项目经历 / Projects

2. 使用标准日期格式
   - 2020-2023
   - 2020.01 - 2023.12

3. 联系方式清晰
   - Email: xxx@example.com
   - Phone: 123-456-7890

4. 避免复杂排版
   - 减少表格使用
   - 避免多栏布局
```

**❌ 避免做法**:
```
- 过多图片和图标
- 非标准字段名
- 复杂的表格结构
- 加密的PDF文件
```

---

### Q12: 生成的网页如何部署？

**A**: 多种部署方式:

#### 1. GitHub Pages（推荐，免费）
```bash
# 创建仓库
git init
git add index.html
git commit -m "Add my homepage"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin master

# 访问: https://username.github.io/
```

#### 2. Netlify（免费）
1. 访问 netlify.com
2. 拖拽HTML文件
3. 获取域名: https://random-name.netlify.app

#### 3. Vercel（免费）
```bash
npm i -g vercel
vercel
```

#### 4. 自己的服务器
上传HTML文件到服务器的web目录

---

### Q13: 可以修改生成的网页吗？

**A**: 当然可以！完全自由修改:

1. **修改内容**
   ```html
   <!-- 打开HTML文件，找到对应的文字 -->
   <h1>张三</h1>  <!-- 改成你的名字 -->
   ```

2. **修改样式**
   ```html
   <!-- 找到<style>标签，修改CSS -->
   <style>
     body {
       background: #your-color;  /* 改成你喜欢的颜色 -->
     }
   </style>
   ```

3. **添加内容**
   ```html
   <!-- 在任意位置添加新section -->
   <section>
     <h2>个人博客</h2>
     <a href="https://myblog.com">访问我的博客</a>
   </section>
   ```

4. **使用AI助手**
   ```
   提示词：
   "请帮我修改这个HTML，把背景色改成蓝色系，
   并添加一个动画效果"
   ```

---

### Q14: 如何添加自己的照片？

**A**: 两种方法:

#### 方法1: 使用在线图床
```html
<!-- 1. 上传照片到 imgur.com 或其他图床 -->
<!-- 2. 获取图片链接 -->
<!-- 3. 在HTML中添加 -->
<img src="https://i.imgur.com/xxxxx.jpg" alt="My Photo"
     style="width: 150px; border-radius: 50%;">
```

#### 方法2: Base64编码
```html
<!-- 1. 将图片转为base64（使用在线工具） -->
<!-- 2. 在HTML中添加 -->
<img src="data:image/jpeg;base64,/9j/4AAQSkZJRg..." alt="My Photo">
```

---

### Q15: 如何添加社交媒体链接？

**A**: 在生成的HTML中添加:

```html
<!-- 找到联系方式部分，添加 -->
<div class="social-links" style="margin-top: 20px;">
  <a href="https://github.com/username"
     style="margin: 0 10px; color: #667eea;">
    GitHub
  </a>
  <a href="https://linkedin.com/in/username"
     style="margin: 0 10px; color: #667eea;">
    LinkedIn
  </a>
  <a href="https://twitter.com/username"
     style="margin: 0 10px; color: #667eea;">
    Twitter
  </a>
</div>
```

**使用图标**:
```html
<!-- 使用Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<a href="https://github.com/username">
  <i class="fab fa-github"></i>
</a>
```

---

## 隐私与安全

### Q16: 我的简历真的不会被上传吗？

**A**: **绝对不会！** 可以验证:

1. **打开浏览器开发者工具**
   - Chrome: F12
   - 查看Network标签
   - 上传文件并解析
   - 观察：没有文件上传请求

2. **查看源代码**
   - 所有工具代码开源
   - 没有任何上传API调用
   - 处理逻辑都在前端

3. **技术原理**
   ```javascript
   // 文件读取（本地）
   const file = event.target.files[0];
   const text = await file.text();  // 本地读取

   // 处理（本地）
   const data = parseResume(text);  // 本地解析

   // 生成（本地）
   const html = generateHTML(data);  // 本地生成
   ```

---

### Q17: HTTPS安全吗？

**A**: 是的，完全安全:
- ✅ GitHub Pages自动提供HTTPS
- ✅ 所有传输加密
- ✅ 没有服务器端处理
- ✅ 没有数据库存储

---

### Q18: 会收集我的使用数据吗？

**A**: **不会！**
- ❌ 没有Google Analytics
- ❌ 没有用户追踪
- ❌ 没有Cookie
- ❌ 没有日志记录

**完全匿名使用。**

---

## 部署与集成

### Q19: 如何绑定自定义域名？

**A**: 以GitHub Pages为例:

```bash
# 1. 在仓库根目录创建CNAME文件
echo "www.yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push

# 2. 在域名DNS设置中添加记录
# A记录指向GitHub Pages IP:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# 或CNAME记录指向:
# username.github.io

# 3. 等待DNS生效（几分钟到48小时）
```

---

### Q20: 可以嵌入到现有网站吗？

**A**: 可以！使用iframe:

```html
<!-- 在你的网站中添加 -->
<iframe src="https://wanghongsheng01.github.io/tools.html"
        width="100%"
        height="800px"
        frameborder="0">
</iframe>
```

---

## 故障排除

### Q21: 页面加载很慢怎么办？

**A**: 可能的原因和解决方案:

1. **CDN加载慢**
   - 原因: 网络连接问题
   - 解决: 使用VPN或换网络

2. **浏览器缓存问题**
   - 解决: 清除缓存后重新加载
   - Chrome: Ctrl+Shift+Delete

3. **浏览器扩展干扰**
   - 解决: 在隐私模式下尝试
   - Chrome: Ctrl+Shift+N

---

### Q22: 预览显示空白怎么办？

**A**: 故障排查步骤:

```
1. 检查浏览器控制台
   F12 -> Console标签
   查看是否有错误信息

2. 检查文件是否成功解析
   是否显示"解析成功"提示

3. 尝试重新生成
   刷新页面
   重新上传文件

4. 尝试手动填写模式
   切换到Pro版
   使用手动填写模式
```

---

### Q23: 下载的HTML打不开？

**A**: 检查以下几点:

1. **文件扩展名正确**
   - 确保是 `.html` 不是 `.txt`
   - 重命名: `resume.txt` → `resume.html`

2. **使用浏览器打开**
   - 右键 → 打开方式 → 浏览器
   - 或拖拽到浏览器窗口

3. **编码问题**
   - 确保文件保存为UTF-8编码

4. **杀毒软件拦截**
   - 添加信任
   - 或暂时禁用

---

## 付费与授权

### Q24: 真的永久免费吗？

**A**: 是的！承诺:
- ✅ 现有功能永久免费
- ✅ 未来功能也将免费
- ✅ 不会突然收费
- ✅ 开源项目，无法收费

**可能的变化**:
- 未来可能添加"高级功能"（可选）
- 但基础功能永远免费

---

### Q25: 可以用于商业项目吗？

**A**: 完全可以！

**允许**:
- ✅ 个人简历
- ✅ 公司简历
- ✅ 客户网站
- ✅ 商业产品
- ✅ 付费项目

**无需**:
- ❌ 无需付费
- ❌ 无需许可
- ❌ 无需标注来源

**欢迎**:
- 💚  推荐给朋友
- 💚 给项目加星
- 💚 提供反馈

---

### Q26: MIT许可证是什么意思？

**A**: 最宽松的开源许可:

**你可以**:
- ✅ 免费使用
- ✅ 自由修改
- ✅ 商业使用
- ✅ 私有使用
- ✅ 分发副本

**唯一要求**:
- 保留原许可证声明（如果分发源代码）

**不承担**:
- 不提供质量保证
- 不承担法律责任

---

## 其他问题

### Q27: 如何提供反馈？

**A**: 多种方式:

1. **GitHub Issues**（推荐）
   ```
   https://github.com/wanghongsheng01/wanghongsheng01.github.io/issues
   ```

2. **功能建议**
   - 创建Issue
   - 标签: Enhancement

3. **Bug报告**
   - 创建Issue
   - 标签: Bug
   - 包含: 浏览器、步骤、截图

---

### Q28: 可以贡献代码吗？

**A**: 非常欢迎！

1. **Fork项目**
2. **创建分支**
3. **提交改动**
4. **创建Pull Request**

详见: [CONTRIBUTING.md](CONTRIBUTING.md)

---

### Q29: 有移动App吗？

**A**: 暂时没有，但:
- ✅ 网页版完全支持移动端
- ✅ 响应式设计
- ✅ 可添加到主屏幕

**未来计划**:
- React Native App
- 或PWA版本

---

### Q30: 如何联系作者？

**A**: 联系方式:

- GitHub: [@wanghongsheng01](https://github.com/wanghongsheng01)
- Issues: [提交Issue](https://github.com/wanghongsheng01/wanghongsheng01.github.io/issues)
- Email: 查看主页

---

## 找不到答案？

如果以上FAQ没有回答您的问题:

1. **搜索已有Issues**
   https://github.com/wanghongsheng01/wanghongsheng01.github.io/issues

2. **创建新Issue**
   清楚描述您的问题

3. **查看文档**
   - README.md
   - QUICKSTART.md
   - CONTRIBUTING.md

---

**持续更新中...**

有新问题？欢迎提Issue！

---

*最后更新: 2025-10-19*
*版本: 1.0*
