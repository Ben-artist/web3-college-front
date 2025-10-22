# Web3 College Frontend

Web3教育平台前端应用，基于Next.js 14构建。

## 🚀 GitHub Pages 部署

### 1. 设置GitHub Pages

1. 进入你的GitHub仓库
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分选择 **GitHub Actions**
4. 保存设置

### 2. 配置环境变量

在GitHub仓库中添加以下Secrets：

1. 进入 **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**
3. 添加以下secret：

```
WALLETCONNECT_PROJECT_ID=你的WalletConnect项目ID
```

### 3. 推送代码

将代码推送到 `main` 分支，GitHub Actions会自动：

1. 安装依赖
2. 构建项目
3. 部署到GitHub Pages

### 4. 访问网站

部署完成后，你的网站将在以下地址可用：
```
https://你的用户名.github.io/你的仓库名
```

## 📁 项目结构

```
src/
├── app/                 # Next.js App Router页面
│   ├── page.tsx        # 首页
│   ├── courses/        # 课程页面
│   ├── teacher/        # 讲师申请页面
│   ├── exchange/       # 代币兑换页面
│   ├── profile/        # 个人中心页面
│   └── create-course/  # 创建课程页面
├── components/         # 可复用组件
│   ├── ui/            # UI组件库
│   ├── navigation.tsx # 导航组件
│   └── wallet-connect.tsx # 钱包连接组件
└── lib/               # 工具库
    ├── utils.ts       # 工具函数
    └── wagmi.ts       # Wagmi配置
```

## 🛠️ 本地开发

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm dev
```

### 构建生产版本
```bash
pnpm build
```

## 🔧 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **UI组件**: Shadcn/UI + Radix UI
- **Web3**: Wagmi + Viem
- **状态管理**: TanStack Query
- **代码质量**: Biome
- **部署**: GitHub Pages

## 📝 功能特性

- ✅ 响应式设计
- ✅ 暗色/亮色主题切换
- ✅ 钱包连接 (WalletConnect)
- ✅ 课程浏览和筛选
- ✅ 讲师申请流程
- ✅ 代币兑换功能
- ✅ 个人中心管理
- ✅ PWA支持
- ✅ 静态站点生成 (SSG)

## 🔐 环境变量

创建 `.env.local` 文件：

```env
# WalletConnect Project ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=你的项目ID

# Sentry配置 (可选)
NEXT_PUBLIC_SENTRY_DSN=你的Sentry DSN
```

## 📄 许可证

MIT License
