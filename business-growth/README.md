# 企业增长健康度AI诊断系统

## 在线访问地址

**应用地址**: https://wanghongsheng01.github.io/business-growth/

## 项目说明

这是一个基于AI的企业增长健康度诊断系统，通过6个核心问题对企业进行三维度评估：
- 增长动力
- 模式韧性
- 组织活力

### 技术栈
- React 18.3.1 + TypeScript 5.6.2
- Material-UI v6.3.4
- Vite 7.1.12
- Recharts 2.15.0

### 后端API说明

⚠️ **重要提示**: 本应用需要后端API支持。目前后端API运行在本地环境。

**后端配置**:
- API地址: 配置在环境变量 `VITE_API_BASE_URL`
- 默认值: `http://localhost:3034/api`

如需完整体验，请：
1. 部署后端服务到云服务器
2. 更新前端环境变量指向正式API地址
3. 重新构建前端应用

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 源代码

完整源代码位于: `/Users/wanghongsheng/WorkSpace/引流产品-企业商业增长/versions/v1.0.0/code/`

---

© 2025 梅子老师团队 | BusinessGrowth AI Assistant v1.0.0
