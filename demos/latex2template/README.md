# LaTeX Template Converter

## 产品介绍

LaTeX Template Converter 是一个自动化工具，用于将学术论文的 LaTeX 文档从一种期刊/会议模板转换为另一种期刊/会议模板格式。

## 功能特性

- 📤 **文件上传**: 支持拖拽或点击上传 LaTeX ZIP 文件
- 🔄 **模板转换**: 自动提取内容并应用新模板格式
- 📥 **结果下载**: 一键下载转换后的 LaTeX 文档
- 🎨 **友好界面**: 现代化的用户界面，简洁易用

## 技术栈

### 后端
- FastAPI - 现代化的 Python Web 框架
- Python 3.9+ - 编程语言
- Pydantic v2 - 数据验证和序列化

### 前端
- React 18 - UI 框架
- Vite 5 - 构建工具
- Axios - HTTP 客户端

## 使用说明

### 在线使用

访问: https://wanghongsheng01.github.io/demos/latex2template/

### 本地部署

#### 后端服务
```bash
cd backend
uv sync
uv run uvicorn src.app:app --host 0.0.0.0 --port 8001
```

#### 前端应用
```bash
cd frontend
npm install
npm run dev
```

## 转换示例

**输入**:
- 源 LaTeX 文档（ECCV 模板）: 27.6 MB
- 目标模板（Intelligence & Robotics）: 586 KB

**输出**:
- 转换后文档: 585 KB
- 转换时间: 3-5秒

## 项目亮点

1. **完全自动化**: 无需人工干预的 LaTeX 模板转换
2. **类型安全**: 通过 mypy 严格模式，减少运行时错误
3. **生产就绪**: 完整测试，可直接投入使用
4. **文档完善**: README、测试报告、项目总结一应俱全

## 源代码

GitHub: https://github.com/wanghongsheng01/latex2template

## 联系方式

- 作者: 王宏升
- 邮箱: whs1991@163.com
- 网站: https://wanghongsheng01.github.io/

---

**版本**: v1.0.0
**更新时间**: 2025-10-21
