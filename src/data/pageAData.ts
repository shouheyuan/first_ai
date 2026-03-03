/**
 * 页面A Data配置 - 企业版
 * 用于 SchemaRenderer 渲染页面
 */

export const pageAData = {
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
      "namespace": "pageA",
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
      "namespace": "default"
    },
    {
      "type": "testimonials",
      "namespace": "default",
      "props": {
        "title": "客户好评",
        "subtitle": "来自全球500强企业的信任",
        "items": [
          {
            "quote": "CreatiAds彻底改变了我们的广告创意流程，效率提升了300%",
            "author": "张明",
            "role": "市场总监",
            "company": "阿里巴巴集团"
          },
          {
            "quote": "AI生成的广告素材质量超出预期，CTR提升了45%",
            "author": "Sarah Johnson",
            "role": "CMO",
            "company": "TechCorp Inc."
          }
        ]
      }
    }
  ]
};
