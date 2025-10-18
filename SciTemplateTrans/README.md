# SciTemplateTrans - GitHub Pages部署

本目录包含GitHub Pages的静态演示页面。

## 实际用户需求分析

基于真实学术论文投稿场景的需求提炼:

### 原始需求场景
用户需要将ECCV 2024会议论文转换为Intelligence & Robotics期刊格式:
- **源文档**: P_BET___ECCV_2024__Copy3_7_submit1_/main.tex (llncs.cls模板)
- **源参考文献**: main.bib (ECCV BibTeX格式, 25条引用)
- **目标**: Intelligence & Robotics期刊LaTeX格式
- **关键要求**:
  1. 参考文献格式自动转换
  2. 保持所有引用位置不变
  3. 版本管理(v1.0.0语义化)

### 产品需求转化

1. **LaTeX模板智能切换**
   - 支持会议→期刊模板迁移
   - 自动适配不同模板的格式要求
   - 保留完整文档结构

2. **BibTeX格式转换引擎**
   - 识别主流引用格式(IEEE, ACM, Springer, Nature等)
   - 自动重新编号并保持引用一致性
   - 支持自定义引用样式

3. **版本管理系统**
   - 语义化版本控制(v1.0.0)
   - 版本信息追踪和变更记录
   - 快速回滚和版本对比

4. **学术场景优化**
   - 图表编号自动适配
   - 公式环境智能转换
   - 章节结构保持

## 部署到GitHub Pages

### 方法一: 直接推送到wanghongsheng01.github.io仓库

```bash
# 1. 克隆目标仓库
cd /path/to
git clone https://github.com/wanghongsheng01/wanghongsheng01.github.io

# 2. 创建SciTemplateTrans目录
cd wanghongsheng01.github.io
mkdir -p SciTemplateTrans
cp -r /Users/wanghongsheng/WorkSpace/SciTemplateTrans/gh-pages/* SciTemplateTrans/

# 3. 提交并推送
git add SciTemplateTrans
git commit -m "Add SciTemplateTrans academic paper format converter"
git push origin main

# 访问: https://wanghongsheng01.github.io/SciTemplateTrans/
```

### 方法二: 配置portfolio.html入口

在`portfolio.html`中添加项目卡片:

```html
<div class="project-card">
    <h3>SciTemplateTrans</h3>
    <p class="project-description">
        学术论文格式转换工具 - 支持Word↔LaTeX互转和LaTeX模板切换
    </p>
    <div class="project-tags">
        <span class="tag">React</span>
        <span class="tag">FastAPI</span>
        <span class="tag">LaTeX</span>
        <span class="tag">Academic</span>
    </div>
    <div class="project-links">
        <a href="./SciTemplateTrans/" class="btn-demo">演示</a>
        <a href="https://github.com/wanghongsheng01/SciTemplateTrans" class="btn-github">GitHub</a>
    </div>
</div>
```

## 测试场景

使用实际ECCV论文测试转换功能:

### 测试输入
- 源文件: main.tex (ECCV llncs模板)
- 参考文献: main.bib (25条BibTeX引用)
- 图表: 包含多个figure和table环境
- 公式: equation和align环境

### 预期输出
- 目标模板: Intelligence & Robotics期刊格式
- 参考文献: 自动转换为期刊要求格式
- 引用编号: 自动重新编号[1-25]
- 格式要求: 字体、页边距、行距自动适配

### 验收标准
- ✅ 文档结构完整保留
- ✅ 所有图表正常显示
- ✅ 公式编号正确
- ✅ 参考文献格式符合要求
- ✅ 引用位置与原文一致
- ✅ 版本信息正确记录

## 后续开发

基于实际需求场景，后续需要增强:

1. **参考文献高级处理**
   - 支持更多引用格式(APA, MLA, Chicago等)
   - 自动修复格式错误
   - 引用完整性检查

2. **模板库扩充**
   - 添加更多期刊模板
   - 支持自定义模板配置
   - 模板推荐系统

3. **批量转换**
   - 支持多文档同时转换
   - 批量参考文献管理
   - 转换任务调度

4. **协作功能**
   - 多人协作编辑
   - 评论和修订追踪
   - 版本合并
