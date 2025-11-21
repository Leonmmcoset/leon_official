import type { Metadata } from "next";
import "./globals.css";

// 禁用Google字体加载，避免构建错误

// 导出元数据
export const metadata: Metadata = {
  title: "LeonCloud官网",
  description: "LeonCloud（原LeonWeb）官网",
};

// 导入客户端组件
import ClientLayout from './components/ClientLayout';
import LanguageProvider from './components/language/LanguageContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
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
