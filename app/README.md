# 十一维空间科技 - 企业官网

北京十一维空间科技有限公司官方网站。本项目基于 Vite + React + TypeScript 构建，采用 TailwindCSS 进行样式开发。

## 技术栈

- **框架**: React 19
- **构建工具**: Vite 7
- **语言**: TypeScript
- **样式**: TailwindCSS, Lucide React (图标)
- **动画**: Framer Motion / CSS Animations

## 开发环境启动

在开始之前，请确保您的开发环境中已安装了 [Node.js](https://nodejs.org/) (建议版本 v18+)。

1. **安装依赖**:
   ```bash
   cd app
   npm install
   ```

2. **启动开发服务器**:
   ```bash
   npm run dev
   ```
   启动后可在浏览器访问 `http://localhost:5173/`。

## 生产环境编译与部署

### 1. 编译打包

运行以下命令将项目编译为生产环境可用的静态文件：

```bash
npm run build
```

编译完成后，会在 `app` 目录下生成一个 `dist` 文件夹，其中包含了所有的静态资源（HTML, JS, CSS, 图片等）。

### 2. 本地预览

在部署之前，您可以使用以下命令在本地预览生产环境的构建结果：

```bash
npm run preview
```

### 3. 部署

由于本项目是纯静态前端应用，您可以将 `dist` 目录下的内容部署到任何静态资源服务器上。

#### 常见部署方案：

- **Nginx**: 将 `dist` 目录下的所有文件拷贝到 Nginx 的静态资源目录（如 `/var/www/html`），并配置好 Nginx 配置文件。
- **Vercel / Netlify**: 直接关联 Git 仓库或手动上传 `dist` 目录。
- **阿里云 / 腾讯云 OSS**: 将 `dist` 目录内容上传至对象存储，并开启静态网站托管功能。

## 注意事项

- **API 接口**: 如果后续需要对接后端 API，请在 `.env.production` 中配置环境变量。
- **静态资源**: 图片等大文件建议放在 `public` 目录下或进行压缩优化。
