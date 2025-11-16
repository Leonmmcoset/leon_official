'use client';

import React from 'react';
import { Container, Typography, Button, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import ClientLayout from './components/ClientLayout';

const NotFoundPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 16 }, textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* 404 大号数字 */}
        <Typography
          variant={isMobile ? 'h1' : 'h1'}
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? '5rem' : isMedium ? '8rem' : '10rem',
            color: theme.palette.primary.main,
            opacity: 0.8,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          404
        </Typography>

        {/* 错误标题 */}
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          component="h2"
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            mb: 2,
          }}
        >
          页面未找到
        </Typography>

        {/* 错误描述 */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: '600px',
            color: theme.palette.text.secondary,
            mb: 6,
            fontSize: isMobile ? '1rem' : '1.125rem',
          }}
        >
          抱歉，您访问的页面不存在或已被移除。请检查您的链接是否正确，或返回首页继续浏览。
        </Typography>

        {/* 返回首页按钮 */}
        <Button
          component={Link}
          href="/"
          variant="contained"
          startIcon={<ArrowBack />}
          sx={{
            px: { xs: 4, md: 6 },
            py: { xs: 1.5, md: 2 },
            borderRadius: '9999px',
            fontSize: { xs: '0.9rem', md: '1rem' },
            fontWeight: 600,
            textTransform: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            },
          }}
        >
          返回首页
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;