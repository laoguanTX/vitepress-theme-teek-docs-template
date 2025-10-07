# Teek-sj Documentation

## 项目简介

Teek-sj 是一个基于 VitePress 的文档项目，旨在提供清晰的会议记录和接锅实录。该项目包含两个主要部分：例会周记和接锅实录，每个部分都有详细的目录和内容。

## 目录结构

```
Teek-sj
├── .vitepress
│   ├── config.ts          # VitePress 配置文件
│   └── theme
│       └── index.ts       # 自定义主题入口
├── docs
│   ├── meetings
│   │   ├── index.md       # 例会周记目录页
│   │   └── meetings
│   │       ├── week1.md   # 第一周例会周记
│   │       ├── week2.md   # 第二周例会周记
│   │       └── week3.md   # 第三周例会周记
│   ├── records
│   │   ├── index.md       # 接锅实录目录页
│   │   └── records
│   │       ├── record1.md  # 第一条接锅实录
│   │       ├── record2.md  # 第二条接锅实录
│   │       └── record3.md  # 第三条接锅实录
│   └── index.md           # 文档主页
├── package.json            # npm 配置文件
├── tsconfig.json           # TypeScript 配置文件
└── README.md               # 项目文档
```

## 安装与使用

1. 克隆项目：
   ```
   git clone <repository-url>
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动开发服务器：
   ```
   npm run dev
   ```

4. 打开浏览器访问 `http://localhost:3000` 查看文档。

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

该项目遵循 MIT 许可证。