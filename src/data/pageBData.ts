/**
 * 页面B Data配置 - 创意工作室版
 * 用于 SchemaRenderer 渲染页面
 */

export const pageBData = {
  "namespace": "pageB",
  "metadata": {
    "title": "CreatiAds Studio",
    "description": "AI-powered creative studio for modern marketers"
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
      "type": "features",
      "namespace": "default",
      "props": {
        "namespace": "pageB",
        "showCheckmarks": false
      }
    }
  ]
};
