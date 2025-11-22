"use client";
console.log("[Application Info] Start loading <GlobalStyles.tsx>");
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

// 全局样式组件，确保在不同主题下网站元素都能正确响应
export const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        // 全局背景色和文字颜色将自动继承自MUI主题
        // 这里可以添加一些自定义的全局样式，确保它们能响应主题切换
        body: {
          transition: 'background-color 0.3s ease',
          margin: 0,
          padding: 0,
        },
        // 确保所有链接在暗色模式下也有良好的可读性
        'a:link, a:visited': {
          color: 'inherit',
          textDecoration: 'none',
        },
        // 添加过渡动画，使主题切换更加平滑
        '*': {
          transitionProperty: 'background-color, color, border-color',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease-in-out',
        },
        // 确保图片等非文本内容不会受到过渡效果影响
        'img, video': {
          transitionProperty: 'none',
        },
      }}
    />
  );
};

console.log("[Application Info] Finish loading <GlobalStyles.tsx>");
export default GlobalStyles;