// 新闻数据模型
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  imageUrl?: string;
  category: string;
  language: 'zh' | 'en';
}

// 模拟新闻数据
export const newsItems: NewsItem[] = [
  {
    id: 0,
    title: "2025-11-21 服务器故障报告",
    summary: "服务器出现故障，搭建在中心服务器的服务全部不可用...",
    content: `
# 服务器故障报告

## 事件概述
服务器出现故障，搭建在中心服务器的服务全部不可用。

## 时间线

- **13:00** - 服务器状态验证系统出现告警
- **13:10** - 确认服务器已出现故障，正在准备解决方案
- **14:13** - 开始修复
- **14:17** - 修复完成`,
    date: "2025-11-21",
    category: "服务器事故",
    language: 'zh'
  },
  {
    id: 1,
    title: "LeonPan发布PC客户端测试版",
    summary: "LeonPan今日发布PC客户端测试版，带来更强大的功能和更优的用户体验...",
    content: `
LeonPan今日发布PC客户端测试版，带来更强大的功能和更优的用户体验。

测试版包含了最新的功能，如快速启动等，让用户不用开浏览器即可使用LeonPan。

我们邀请用户体验并提供反馈，以帮助我们改进产品。`,
    date: "2025-10-20",
    category: "客户端发布",
    language: 'zh'
  }

  // {
  //   id: 0,
  //   title: "标题",
  //   summary: "总结",
  //   content: "内容",
  //   date: "1970-01-01",
  //   category: "分区"
  // }
];