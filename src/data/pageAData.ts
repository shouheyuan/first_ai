/**
 * 页面A Data配置 - 企业版
 * 用于 SchemaRenderer 渲染页面
 */

export const pageAData = {
  "namespace": "pageA",
  "metadata": {
    "title": "CreatiAds Enterprise",
    "description": "Enterprise-grade AI advertising platform for marketing teams"
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
        "cat": {
          "href": "/pricing"
        },
        "secondaryCTA": {
          "href": "/tools/ai-image-generator"
        }
      }
    },
    {
      "type": "features"
    }
  ]
};
