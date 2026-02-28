/**
 * 页面B Schema - 创意工作室版首页
 * 页面A和页面B都只使用 HeroSection 组件，但配置不同
 * 
 * 与页面A的区别：
 * - 面向创意工作者而非企业
 * - 不同的文案和CTA
 * - 相同的组件，不同的配置
 */

export const pageBSchema = {
  "metadata": {
    "titleKey": "pageB.metadata.title",
    "descriptionKey": "pageB.metadata.description"
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
        "badgeKey": "pageB.hero.badge",
        "slogansKey": "pageB.hero.slogans",
        "descriptionKey": "pageB.hero.description",
        
        // CTA 按钮配置 - 与页面A不同
        "primaryCTA": {
          "textKey": "pageB.hero.cta.primary",
          "href": "/start-creating"
        },
        "secondaryCTA": {
          "textKey": "pageB.hero.cta.secondary",
          "href": "/templates"
        },
        
        // Trust badges - 与页面A不同
        "trustBadgesKey": "pageB.hero.trustBadges"
      }
    }
  ]
};
