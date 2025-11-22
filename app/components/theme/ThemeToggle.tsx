"use client";
console.log("[Application Info] Start loading <ThemeToggle.tsx>");
import React from 'react';
import { IconButton, Tooltip, Menu, MenuItem } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useThemeContext, ThemeMode } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { themeMode, setThemeMode } = useThemeContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    handleClose();
  };

  // 根据当前主题模式选择显示的图标
  const getDisplayIcon = () => {
    switch (themeMode) {
      case 'light':
        return <LightModeIcon fontSize="small" />;
      case 'dark':
        return <ModeNightIcon fontSize="small" />;  
      case 'system':
        return <AutoModeIcon fontSize="small" />;
      default:
        return <AutoModeIcon fontSize="small" />;
    }
  };

  return (
    <div>
      <Tooltip title="切换主题">
        <IconButton
          color="inherit"
          onClick={handleClick}
          aria-controls={open ? 'theme-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {getDisplayIcon()}
        </IconButton>
      </Tooltip>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'theme-toggle-button',
        }}
      >
        <MenuItem onClick={() => handleThemeChange('light')}>
          <LightModeIcon fontSize="small" sx={{ mr: 1 }} /> 亮色模式
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange('dark')}>
          <ModeNightIcon fontSize="small" sx={{ mr: 1 }} /> 暗色模式
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange('system')}>
          <AutoModeIcon fontSize="small" sx={{ mr: 1 }} /> 跟随系统
        </MenuItem>
      </Menu>
    </div>
  );
};

console.log("[Application Info] Finish loading <ThemeToggle.tsx>");
export default ThemeToggle;