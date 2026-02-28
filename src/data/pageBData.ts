/**
 * 页面B Data配置 - 创意工作室版
 * 用于 SchemaRenderer 渲染页面
 */

export const pageBData = {
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
        "namespace": "pageB",
        "badgeKey": "hero.badge",
        "slogansKey": "hero.slogans",
        "descriptionKey": "hero.description",
        "primaryCTA": {
          "textKey": "hero.cta.primary",
          "href": "/start-creating"
        },
        "secondaryCTA": {
          "textKey": "hero.cta.secondary",
          "href": "/templates"
        },
        "trustBadgesKey": "hero.trustBadges"
      }
    },
    {
      "type": "features",
      "props": {
        "namespace": "pageB",
        "showCheckmarks": false
      }
    }
  ]
};
