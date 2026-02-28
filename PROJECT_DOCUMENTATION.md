# 项目说明文档

## 一、项目概述

**项目名称**: CreatiAds  
**项目类型**: AI 驱动的广告创意与营销活动自动化平台  
**主要功能**: AI 广告创意生成、跨平台广告投放（Meta、Google、TikTok）、智能优化  

---

## 二、技术栈

### 1. 前端框架
- **Next.js 16.1.6** - React 全栈框架，支持 SSR/SSG
- **React 19.2.3** - UI 组件库
- **TypeScript 5.x** - 类型安全

### 2. 样式方案
- **Tailwind CSS 4.x** - 原子化 CSS
- **tailwindcss-animate** - 动画支持
- **class-variance-authority** - 组件变体管理
- **clsx / tailwind-merge** - 类名合并

### 3. UI 组件库
- **shadcn/ui** 组件体系
  - Radix UI 基础（45+ 个 Radix 组件）
  - 内置组件：Button、Card、Dialog、Form、Tabs、Toast 等
  - 自定义组件：日历、轮播、图表、命令面板等

### 4. 动画与交互
- **Framer Motion 12.x** - 声明式动画
- **Lottie** - 复杂动画（可集成）

### 5. 国际化
- **next-intl 4.8.3** - Next.js 国际化方案
- 支持语言：英文 (en)、中文 (cn)
- 翻译文件：JSON 格式，位于 `src/i18n/messages/`

### 6. 图标库
- **Lucide React 0.575.0** - 现代化 SVG 图标

### 7. 表单与验证
- **React Hook Form 7.71.2** - 表单状态管理
- **Zod** - 表单验证（可集成）

### 8. 图表与数据可视化
- **Recharts 3.7.0** - React 图表库

### 9. 开发工具
- **ESLint 9.x** - 代码质量检查
- **Babel Plugin React Compiler** - React 编译优化

---

## 三、项目结构

```
my-app/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── [locale]/                 # 国际化路由
│   │   │   ├── page.tsx              # 首页
│   │   │   ├── layout.tsx            # 根布局
│   │   │   ├── pricing/              # 定价页面
│   │   │   ├── blog/                 # 博客页面
│   │   │   ├── free-tools/           # 免费工具页面
│   │   │   ├── solutions/            # 解决方案页面
│   │   │   └── tools/                # 工具页面
│   │   └── globals.css               # 全局样式
│   │
│   ├── components/                   # React 组件
│   │   ├── ui/                       # shadcn/ui 基础组件 (46+ 个)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   ├── layout/                   # 布局组件
│   │   │   ├── Navbar.tsx            # 导航栏
│   │   │   └── Footer.tsx            # 页脚
│   │   ├── home/                     # 首页区块组件 (14 个)
│   │   │   ├── HeroSection.tsx       # 首屏英雄区
│   │   │   ├── LogoCloud.tsx         # 品牌展示
│   │   │   ├── FeatureCards.tsx      # 功能卡片
│   │   │   ├── FeatureDeepDive.tsx   # 功能详情
│   │   │   ├── WorkflowSection.tsx   # 工作流展示
│   │   │   ├── ShowcaseSection.tsx   # 产品展示
│   │   │   ├── UseCasesSection.tsx   # 使用场景
│   │   │   ├── TestimonialsSection.tsx # 客户评价
│   │   │   ├── ComparisonSection.tsx # 竞品对比
│   │   │   ├── FAQSection.tsx        # 常见问题
│   │   │   ├── CTASection.tsx        # 行动召唤
│   │   │   └── ...
│   │   └── LanguageSwitcher.tsx      # 语言切换器
│   │
│   ├── i18n/                         # 国际化配置
│   │   ├── config.ts                 # 语言配置
│   │   ├── request.ts                # 请求处理
│   │   └── messages/                   # 翻译文件
│   │       ├── en.json               # 英文翻译
│   │       └── cn.json               # 中文翻译
│   │
│   ├── lib/                          # 工具函数
│   │   └── utils.ts                  # 通用工具 (cn 函数等)
│   │
│   └── middleware.ts                 # Next.js 中间件
│
├── public/                         # 静态资源
│   └── ...
│
├── next.config.js                  # Next.js 配置
├── tailwind.config.js              # Tailwind 配置
├── tsconfig.json                   # TypeScript 配置
└── package.json                    # 项目依赖
```

---

## 四、页面说明

### 1. 首页 (`/`)
**路径**: `src/app/[locale]/page.tsx`

首页采用模块化区块设计，包含以下 12 个组件：

| 组件名 | 路径 | 功能描述 |
|--------|------|----------|
| HeroSection | `components/home/HeroSection.tsx` | 首屏英雄区，展示动态标语、CTA 按钮、统计数据卡片 |
| LogoCloud | `components/home/LogoCloud.tsx` | 品牌 logo 滚动展示 |
| FeatureCards | `components/home/FeatureCards.tsx` | 4 个核心功能卡片展示 |
| FeatureDeepDive | `components/home/FeatureDeepDive.tsx` | 功能深度介绍，图文混排 |
| WorkflowSection | `components/home/WorkflowSection.tsx` | 三步工作流程展示 |
| ShowcaseSection | `components/home/ShowcaseSection.tsx` | 产品界面展示 |
| UseCasesSection | `components/home/UseCasesSection.tsx` | 不同行业使用场景 |
| TestimonialsSection | `components/home/TestimonialsSection.tsx` | 客户评价轮播 |
| ComparisonSection | `components/home/ComparisonSection.tsx` | 与传统方式对比 |
| FAQSection | `components/home/FAQSection.tsx` | 常见问题折叠面板 |
| CTASection | `components/home/CTASection.tsx` | 最终行动召唤 |

### 2. 定价页面 (`/pricing`)
**路径**: `src/app/[locale]/pricing/page.tsx`

展示不同价格方案，包含功能对比表。

### 3. 博客页面 (`/blog`)
**路径**: `src/app/[locale]/blog/page.tsx`

博客文章列表，展示营销技巧和产品更新。

### 4. 免费工具页面 (`/free-tools`)
**路径**: `src/app/[locale]/free-tools/page.tsx`

免费营销工具集合。

### 5. 解决方案页面 (`/solutions/*`)
**路径**: `src/app/[locale]/solutions/[slug]/page.tsx`

动态路由，展示不同行业/目标的解决方案。

### 6. 工具页面 (`/tools/*`)
**路径**: `src/app/[locale]/tools/[slug]/page.tsx`

各类 AI 工具的详细介绍页面。

---

## 五、组件说明

### 1. 布局组件 (`components/layout/`)

#### Navbar 导航栏
**路径**: `src/components/layout/Navbar.tsx`

- **功能**: 响应式顶部导航栏
- **特性**:
  - 支持多级下拉菜单（鼠标悬停触发）
  - 移动端汉堡菜单
  - 平滑动画效果（Framer Motion）
  - 语言切换器集成
  - 路由变化时自动关闭菜单

**导航结构**:
```typescript
navItems: [
  { label: "Home", href: "/" },
  { 
    label: "AI Creative", 
    groups: [
      { heading: "Generators", items: [...] },
      { heading: "AI Models", items: [...] }
    ]
  },
  // ...
]
```

#### Footer 页脚
**路径**: `src/components/layout/Footer.tsx`

- **功能**: 页面底部信息展示
- **内容**: 版权信息、链接列表、社交媒体图标

### 2. UI 基础组件 (`components/ui/`)

项目基于 shadcn/ui 体系，包含 46+ 个基础 UI 组件：

| 类别 | 组件列表 |
|------|----------|
| **基础** | Button, Card, Badge, Avatar, Separator, Skeleton |
| **表单** | Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider, Calendar, DatePicker |
| **反馈** | Alert, Dialog, Toast, Sonner, Progress, Tooltip |
| **导航** | Tabs, Breadcrumb, Pagination, NavigationMenu, Command |
| **数据** | Table, Collapsible, Accordion, Tree |
| **高级** | DropdownMenu, ContextMenu, Menubar, HoverCard, Popover, Drawer, Sheet |

**组件特性**:
- 基于 Radix UI（无障碍支持）
- 完全可定制（Tailwind CSS）
- 支持深色模式
- TypeScript 类型安全

### 3. 功能组件示例

#### Button 按钮组件
**路径**: `src/components/ui/button.tsx`

```typescript
// 使用 class-variance-authority 管理变体
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive...",
        outline: "border border-input...",
        secondary: "bg-secondary...",
        ghost: "hover:bg-accent...",
        link: "text-primary underline...",
        hero: "bg-accent-gradient...",
        "hero-outline": "border-2 border-primary-foreground/30...",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
  }
);
```

#### HeroSection 首屏组件
**路径**: `src/components/home/HeroSection.tsx`

```typescript
"use client";

// 核心特性：
// 1. 自动轮播标语（4 秒切换）
// 2. Framer Motion 入场动画
// 3. 右侧展示 AI 创意生成器界面预览
// 4. 统计数据卡片（CTR、ROAS）
// 5. 动态浮动元素

const slogans = [
  { line1: "Your Ad Copilot", highlight: "in the AI Era" },
  { line1: "You Are Your Own", highlight: "Ad Expert" },
  { line1: "No Fear for", highlight: "Meta Ads" },
  { line1: "Create Stunning Ads", highlight: "10x Faster" },
];
```

---

## 六、国际化 (i18n)

### 配置
**路径**: `src/i18n/config.ts`

```typescript
export const locales = ['en', 'cn'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';
export const localePrefix = 'always' as const;
```

### 翻译文件结构
**路径**: `src/i18n/messages/en.json`

```json
{
  "metadata": {
    "title": "CreatiAds - AI-Powered Ad Creative...",
    "description": "Generate stunning ad creatives..."
  },
  "nav": {
    "home": "Home",
    "aiCreative": "AI Creative",
    "pricing": "Pricing"
  },
  "hero": {
    "badge": "AI-Powered Ad Creative Platform",
    "description": "Generate high-converting ad creatives...",
    "cta": {
      "primary": "Start Free Trial",
      "secondary": "Try AI Generator"
    }
  }
}
```

### 使用方式

```typescript
// 客户端组件
"use client";
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations("hero");
  return <h1>{t("title")}</h1>;
}

// 服务端组件
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("hero");
  return <h1>{t("title")}</h1>;
}
```

---

## 七、开发指南

### 1. 安装依赖

```bash
npm install
```

### 2. 开发服务器

```bash
npm run dev
```
访问 http://localhost:3000

### 3. 构建项目

```bash
npm run build
```

### 4. 代码检查

```bash
npm run lint
```

### 5. 添加 shadcn/ui 组件

```bash
npx shadcn add button
npx shadcn add card
```

### 6. 目录规范

```
src/
├── app/                    # Next.js App Router 页面
├── components/             # React 组件
│   ├── ui/                 # shadcn/ui 基础组件
│   ├── layout/             # 布局组件
│   └── home/               # 首页区块组件
├── i18n/                   # 国际化配置
├── lib/                    # 工具函数
└── middleware.ts           # 中间件
```

### 7. 命名规范

- **组件文件**: PascalCase (`HeroSection.tsx`)
- **工具函数**: camelCase (`useTranslations`)
- **样式类名**: kebab-case (`hero-section`)
- **常量**: UPPER_SNAKE_CASE (`DEFAULT_LOCALE`)

---

## 八、性能优化

### 已集成的优化

1. **Next.js 内置优化**
   - 图片优化 (`next/image`)
   - 字体优化 (`next/font`)
   - 代码分割

2. **动画性能**
   - Framer Motion 硬件加速
   - 使用 `transform` 和 `opacity`
   - `will-change` 属性

3. **CSS 优化**
   - Tailwind CSS 按需生成
   - 未使用样式自动移除

4. **国际化优化**
   - 消息文件按需加载
   - 服务端渲染支持

---

## 九、部署

### Vercel 部署（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

### 环境变量

```bashn# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_NAME=CreatiAds
```

---

## 十、技术栈版本汇总

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.1.6 | 全栈框架 |
| React | 19.2.3 | UI 库 |
| TypeScript | 5.x | 类型系统 |
| Tailwind CSS | 4.x | 样式 |
| shadcn/ui | latest | 组件库 |
| Framer Motion | 12.x | 动画 |
| next-intl | 4.8.3 | 国际化 |
| Lucide React | 0.575.0 | 图标 |

---

**文档版本**: v1.0  
**最后更新**: 2025年2月28日  
**维护者**: 开发团队
