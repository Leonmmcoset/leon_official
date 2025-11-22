"use client";
console.log("[Application Info] Start loading <ThemeContext.tsx>");
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import GlobalStyles from './GlobalStyles';

// 定义主题模式类型
export type ThemeMode = 'light' | 'dark' | 'system';

// 创建主题模式上下文
const ThemeContext = createContext<{
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  isDarkMode: boolean;
}>({
  themeMode: 'system',
  setThemeMode: () => {},
  isDarkMode: false,
});

// 创建亮色主题
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

// 创建暗色主题
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

// 主题提供者组件
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 确保在客户端环境中使用localStorage
  const getInitialThemeMode = (): ThemeMode => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('themeMode');
      return (savedMode as ThemeMode) || 'system';
    }
    return 'system';
  };

  // 获取系统主题偏好
  const getSystemThemePreference = (): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // 服务端默认使用亮色模式
  };

  // 初始化状态，服务端渲染时使用默认值
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // 客户端挂载后初始化主题设置
  useEffect(() => {
    const initialMode = getInitialThemeMode();
    setThemeMode(initialMode);
    setIsDarkMode(initialMode === 'dark' || (initialMode === 'system' && getSystemThemePreference()));
  }, []);

  // 当主题模式改变时，更新isDarkMode状态
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (themeMode === 'system') {
      // 监听系统主题变化
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      setIsDarkMode(mediaQuery.matches);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setIsDarkMode(themeMode === 'dark');
    }
  }, [themeMode]);

  // 保存主题模式到localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', themeMode);
    }
  }, [themeMode]);

  // 应用当前主题
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, isDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// 自定义Hook，方便组件使用主题上下文
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
console.log("[Application Info] Finish loading <ThemeContext.tsx>");