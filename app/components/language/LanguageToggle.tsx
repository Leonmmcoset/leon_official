"use client";
import React, { useState } from 'react';
import { IconButton, Tooltip, Menu, MenuItem } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import PublicIcon from '@mui/icons-material/Public';
import { useLanguage, Language } from './LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    handleClose();
  };

  // 根据当前语言选择显示的图标
  const getDisplayIcon = () => {
    // 保持使用统一的TranslateIcon，与主题切换保持一致的图标风格
    return <TranslateIcon fontSize="small" />;
  };

  const languages: { value: Language; label: string }[] = [
    { value: 'zh', label: t('languageChinese') },
    { value: 'en', label: t('languageEnglish') }
  ];

  return (
    <div>
      <Tooltip title="切换语言">
        <IconButton
          color="inherit"
          onClick={handleClick}
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {getDisplayIcon()}
        </IconButton>
      </Tooltip>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-toggle-button',
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.value}
            selected={language === lang.value}
            onClick={() => handleLanguageChange(lang.value)}
          >
            <PublicIcon fontSize="small" sx={{ mr: 1 }} />
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageToggle;