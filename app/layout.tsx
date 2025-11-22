import type { Metadata } from "next";
import React from 'react';
import "./globals.css";

// 禁用Google字体加载，避免构建错误
console.log("[Application Info] Start loading <layout.tsx>");
// 导入客户端组件
import ClientLayout from './components/ClientLayout';
import LanguageProvider from './components/language/LanguageContext';
import { useLanguage } from './components/language/LanguageContext';

// 动态元数据生成函数
export function generateMetadata(): Metadata {
  // 这是服务器端组件，我们需要一个默认值
  // 客户端会在运行时更新
  return {
    title: 'LeonCloud',
    description: '覆盖云盘、论坛、编程语言、操作系统、我的世界服务器、加密语言等各种服务'
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <LanguageProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
console.log("[Application Info] Finish loading <layout.tsx>");
