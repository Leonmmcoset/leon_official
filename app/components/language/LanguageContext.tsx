"use client";
console.log("[Application Info] Start loading <LanguageContext.tsx>");
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { zhTranslations } from './zhTranslations';
import { enTranslations } from './enTranslations';

// 定义支持的语言类型
export type Language = 'zh' | 'en';

// 语言上下文接口
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// 创建语言上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 导入翻译文件
const translations: Record<Language, Record<string, string>> = {
  zh: zhTranslations,
  en: enTranslations
};

// 语言提供者组件接口
interface LanguageProviderProps {
  children: ReactNode;
}

// 语言提供者组件
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 初始语言设置（默认为中文）
  const [language, setLanguage] = useState<Language>('zh');

  // 检测用户设备语言的函数
  const detectDeviceLanguage = (): Language => {
    if (typeof window !== 'undefined' && navigator.language) {
      // 获取浏览器语言的前两位（如 'zh-CN' -> 'zh'）
      const deviceLang = navigator.language.split('-')[0].toLowerCase();
      // 检查是否支持该语言
      if (deviceLang === 'zh' || deviceLang === 'en') {
        return deviceLang;
      }
    }
    // 默认返回中文
    return 'zh';
  };

  // 组件挂载时的语言初始化
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      
      if (savedLanguage === 'zh' || savedLanguage === 'en') {
        // 如果localStorage中有保存的语言偏好，使用它
        setLanguage(savedLanguage);
      } else {
        // 否则检测设备语言并使用
        const deviceLanguage = detectDeviceLanguage();
        setLanguage(deviceLanguage);
        // 保存检测到的设备语言到localStorage
        localStorage.setItem('preferredLanguage', deviceLanguage);
      }
    }
  }, []);

  // 语言切换函数
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  };

  // 翻译函数
  const t = (key: string): string => {
    const translation = translations[language][key];
    if (!translation) {
      console.error(`[Translation Error] Missing translation for key '${key}' in ${language} language`);
      return key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义hook，用于在组件中访问语言上下文
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;
console.log("[Application Info] Finish loading <LanguageContext.tsx>");