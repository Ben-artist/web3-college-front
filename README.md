# Web3 College - SocialFi Platform

一个基于区块链的去中心化社交学习平台，专注于Web3教育。使用Next.js 14、Shadcn/UI和企业级工具构建。

## 🚀 项目特性

### 核心功能

- **🎓 互动学习**: 实践课程，包含真实项目、智能合约和DeFi协议
- **👥 社区驱动**: 与同行学习，分享知识，建立持久的Web3连接
- **🏆 奖励机制**: 完成课程和贡献获得代币、NFT和独家机会
- **🔒 去中心化**: 成就记录在链上，创建永久、可验证的学习记录
- **🌍 全球访问**: 随时随地访问世界级教育，无地理障碍
- **⭐ 专家讲师**: 向行业专家、成功企业家和顶级区块链开发者学习
- **👨‍🏫 成为讲师**: 专业的教育者可以申请成为平台讲师，分享知识并获得报酬
- **💱 代币兑换**: 一灯币与ETH之间的安全、快速兑换服务

### 技术特性

- **📱 PWA支持**: 离线缓存，移动端优化
- **🌙 主题切换**: 支持暗黑/白色模式
- **📊 性能监控**: Web Vitals性能指标监控
- **🐛 错误监控**: Sentry错误上报和监控
- **🤖 AI代码审查**: CodeRabbit集成
- **✅ 代码质量**: ESLint + Prettier + Husky
- **📱 响应式设计**: 完美支持移动端和桌面端

## 🛠️ 技术栈

### 前端框架

- **Next.js 14**: 最新的React框架，支持App Router
- **TypeScript**: 类型安全的JavaScript
- **React 18**: 最新的React版本

### UI和样式

- **Shadcn/UI**: 现代化、可访问的组件库
- **Tailwind CSS**: 实用优先的CSS框架
- **Lucide React**: 精美的图标库
- **next-themes**: 主题切换支持

### 监控和分析

- **Sentry**: 错误监控和性能分析
- **Web Vitals**: 核心性能指标监控
- **自定义分析**: 学习行为分析

### 开发工具

- **ESLint**: 代码质量检查
- **Prettier**: 代码格式化
- **Husky**: Git钩子管理
- **lint-staged**: 暂存文件检查
- **CodeRabbit**: AI代码审查

### PWA功能

- **Service Worker**: 离线缓存
- **Web App Manifest**: PWA配置
- **缓存策略**: Cache First策略

## 📁 项目结构

```
web3-college-front/
├── src/
│   ├── app/                    # Next.js App Router页面和布局
│   │   ├── about/              # 关于页面
│   │   ├── courses/            # 课程相关页面
│   │   ├── dao/                # DAO治理页面
│   │   ├── exchange/           # 代币兑换页面
│   │   ├── profile/            # 个人资料页面
│   │   ├── teacher/            # 成为讲师页面
│   │   ├── globals.css         # 全局样式
│   │   ├── layout.tsx          # 根布局
│   │   └── page.tsx            # 首页
│   ├── components/             # 可复用UI组件
│   │   ├── ui/                 # Shadcn/UI组件
│   │   ├── navigation.tsx      # 导航组件
│   │   ├── theme-provider.tsx  # 主题提供者
│   │   ├── theme-toggle.tsx    # 主题切换组件
│   │   ├── pwa-provider.tsx    # PWA提供者
│   │   └── web-vitals.tsx      # Web Vitals监控
│   ├── lib/                    # 工具函数和配置
│   │   └── utils.ts            # 通用工具函数
│   ├── hooks/                  # 自定义React钩子
│   ├── types/                  # TypeScript类型定义
│   └── utils/                  # 辅助函数
├── public/                     # 静态资源
│   ├── sw.js                   # Service Worker
│   ├── manifest.json           # PWA清单
│   └── icons/                  # PWA图标
├── .husky/                     # Git钩子
├── .cursor.mdc                 # Cursor配置文件
├── next.config.js              # Next.js配置
├── tailwind.config.ts          # Tailwind配置
├── tsconfig.json               # TypeScript配置
├── .eslintrc.js               # ESLint配置
├── .prettierrc                # Prettier配置
└── package.json               # 项目依赖
```

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm (推荐) 或 npm/yarn

### 安装依赖

```bash
# 使用pnpm (推荐)
pnpm install

# 或使用npm
npm install

# 或使用yarn
yarn install
```

### 环境配置

复制环境变量示例文件并配置：

```bash
cp env.example .env.local
```

编辑 `.env.local` 文件，配置以下变量：

```env
# Sentry配置
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here

# 应用版本
NEXT_PUBLIC_APP_VERSION=1.0.0

# 环境
NODE_ENV=development

# CodeRabbit配置
CODERABBIT_API_KEY=your_coderabbit_api_key_here
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📜 可用脚本

| 脚本                | 描述                   |
| ------------------- | ---------------------- |
| `pnpm dev`          | 启动开发服务器         |
| `pnpm build`        | 构建生产版本           |
| `pnpm start`        | 启动生产服务器         |
| `pnpm lint`         | 运行ESLint检查         |
| `pnpm lint:fix`     | 修复ESLint问题         |
| `pnpm format`       | 使用Prettier格式化代码 |
| `pnpm format:check` | 检查代码格式           |
| `pnpm type-check`   | 运行TypeScript类型检查 |

## 🎨 UI组件

项目使用Shadcn/UI组件库，提供以下组件：

### 基础组件

- `Button` - 按钮组件
- `Card` - 卡片组件
- `Badge` - 徽章组件
- `Toaster` - 通知组件

### 主题组件

- `ThemeProvider` - 主题提供者
- `ThemeToggle` - 主题切换按钮

### 监控组件

- `WebVitals` - Web Vitals性能监控
- `PWAProvider` - PWA功能提供者

## 📄 页面功能说明

### 核心页面

- **首页** (`/`) - 平台概览和主要功能入口
- **课程** (`/courses`) - 课程浏览和学习
- **DAO** (`/dao`) - 去中心化治理和投票
- **关于** (`/about`) - 平台介绍和团队信息

### 新增功能页面

#### 成为讲师页面 (`/teacher`)

**功能描述**: 为专业的教育者提供申请成为平台讲师的完整流程

**主要特性**:
- 详细的申请要求和流程说明
- 讲师权益和收益介绍
- 成功案例展示
- 完整的在线申请表单
- 表单验证和提交功能

**申请表单字段**:
- **昵称** (必填): 申请者的显示名称
- **邮箱地址** (必填): 联系方式
- **专业领域** (必填): 多选下拉，包括区块链基础、智能合约开发、DeFi协议、NFT开发等15个领域
- **教学风格** (必填): 多选下拉，包括互动式教学、实践导向、理论为主等8种风格
- **教学经验** (必填): 详细描述教学经历
- **申请动机** (必填): 说明申请原因和价值主张
- **作品集/项目展示** (可选): GitHub链接、项目作品等
- **时间安排** (可选): 可用时间和时区信息
- **其他信息** (可选): 特殊技能、获奖经历等

**使用方法**:
1. 访问 `/teacher` 页面
2. 了解申请要求和流程
3. 点击"立即申请"按钮
4. 填写完整的申请表单
5. 提交申请并等待审核结果

**表单验证**:
- 必填字段验证
- 邮箱格式验证
- 实时表单状态检查
- 提交状态反馈

#### 代币兑换页面 (`/exchange`)

**功能描述**: 提供一灯币与ETH之间的安全兑换服务

**主要特性**:
- 实时汇率显示
- 安全的智能合约兑换
- 兑换历史记录
- 低手续费交易

**使用方法**:
1. 访问 `/exchange` 页面
2. 连接您的钱包
3. 选择兑换方向（ETH ↔ 一灯币）
4. 输入兑换数量
5. 确认交易并完成兑换

**汇率说明**:
- 当前汇率: 1 ETH = 2,500 一灯币
- 汇率会根据市场情况实时调整
- 仅收取少量Gas费用，无额外手续费

#### 个人资料页面 (`/profile`)

**功能描述**: 用户个人信息管理和功能入口

**新增功能**:
- 钱包余额显示（一灯币和ETH）
- 快速操作按钮（成为讲师、代币兑换）
- 学习统计和成就展示
- 课程进度跟踪

**快速操作**:
- 成为讲师: 直接跳转到讲师申请页面
- 代币兑换: 直接跳转到兑换页面
- 下载证书: 下载学习证书
- 分享成就: 分享学习成果

## 🔧 配置说明

### Next.js配置

- 启用App Router
- 配置图片域名
- 设置安全头

### Tailwind CSS配置

- 支持暗黑模式
- 自定义颜色系统
- 响应式断点
- 动画支持

### ESLint配置

- TypeScript支持
- Next.js规则
- 自定义规则

### Prettier配置

- 单引号
- 无分号
- 2空格缩进
- 尾随逗号

## 📱 PWA功能

### Service Worker

- 离线缓存策略
- 资源预缓存
- 更新通知

### Web App Manifest

- 应用元数据
- 图标配置
- 显示模式
- 主题颜色

### 移动端优化

- 响应式设计
- 触摸友好
- 快速加载
- 离线支持

## 📊 监控和分析

### 错误监控 (Sentry)

- 实时错误报告
- 性能监控
- 用户会话重放
- 发布跟踪

### 性能监控 (Web Vitals)

- CLS (累积布局偏移)
- FID (首次输入延迟)
- FCP (首次内容绘制)
- LCP (最大内容绘制)
- TTFB (首字节时间)

### 自定义分析

- 学习行为跟踪
- 用户参与度
- 功能使用统计

## 🚀 部署

### Vercel (推荐)

1. 连接GitHub仓库
2. 配置环境变量
3. 自动部署

### Netlify

1. 连接GitHub仓库
2. 配置构建命令
3. 设置环境变量

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 贡献指南

### 开发流程

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

### 代码规范

- 使用TypeScript
- 遵循ESLint规则
- 使用Prettier格式化
- 编写测试用例
- 更新文档

### Git提交规范

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 构建/工具
```

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React框架
- [Shadcn/UI](https://ui.shadcn.com/) - UI组件库
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Sentry](https://sentry.io/) - 错误监控
- [Vercel](https://vercel.com/) - 部署平台

## 📞 联系我们

- 项目主页: [https://web3-college.com](https://web3-college.com)
- 问题反馈: [GitHub Issues](https://github.com/web3-college/frontend/issues)
- 讨论区: [GitHub Discussions](https://github.com/web3-college/frontend/discussions)

---

**Web3 College** - 构建去中心化教育的未来 🚀
