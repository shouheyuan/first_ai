/**
 * 页面A Schema - 企业版首页
 * 页面A和页面B都只使用 HeroSection 组件，但配置不同
 * 
 * Schema 设计原则：
 * 1. 所有文本内容使用多语言 key，不硬编码
 * 2. 支持通过 props 传递配置给组件
 * 3. 组件内部使用默认值（当前值）作为后备
 */

export const pageASchema = {
  "metadata": {
    "titleKey": "pageA.metadata.title",
    "descriptionKey": "pageA.metadata.description"
  },
  "config": {
    "showNavbar": true,
    "showFooter": true,
    "className": "flex-1 w-full"
  },
  "sections": [
    {
      "type": "hero",
      "props": {
        // 所有文本都使用多语言 key
        "badgeKey": "pageA.hero.badge",
        "slogansKey": "pageA.hero.slogans",
        "descriptionKey": "pageA.hero.description",
        
        // CTA 按钮配置
        "primaryCTA": {
          "textKey": "pageA.hero.cta.primary",
          "href": "/contact-sales"
        },
        "secondaryCTA": {
          "textKey": "pageA.hero.cta.secondary",
          "href": "/demo"
        },
        
        // Trust badges
        "trustBadgesKey": "pageA.hero.trustBadges"
      }
    }
  ]
};
