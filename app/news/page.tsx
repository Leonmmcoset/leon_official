"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeReact from 'rehype-react';
import { useLanguage } from '../components/language/LanguageContext';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button, 
  Divider, 
  Chip,
  Modal,
  IconButton,
  Alert
} from '@mui/material';
import { Close } from '@mui/icons-material';
import ClientLayout from '../components/ClientLayout';
import { newsItems, NewsItem } from './newsData';

// 自定义Markdown组件映射到MUI组件
const MarkdownComponents = {
  // 标题组件
  h1: (props: any) => <Typography variant="h4" component="h1" gutterBottom {...props} />,
  h2: (props: any) => <Typography variant="h5" component="h2" gutterBottom {...props} />,
  h3: (props: any) => <Typography variant="h6" component="h3" gutterBottom {...props} />,
  h4: (props: any) => <Typography variant="subtitle1" component="h4" gutterBottom {...props} />,
  h5: (props: any) => <Typography variant="subtitle2" component="h5" gutterBottom {...props} />,
  h6: (props: any) => <Typography variant="caption" component="h6" gutterBottom {...props} />,
  
  // 段落组件
  p: (props: any) => <Typography variant="body1" paragraph {...props} />,
  
  // 列表组件
  ul: (props: any) => <ul style={{ paddingLeft: 20, marginBottom: 16 }} {...props} />,
  ol: (props: any) => <ol style={{ paddingLeft: 20, marginBottom: 16 }} {...props} />,
  li: (props: any) => <li style={{ marginBottom: 4 }} {...props} />,
  
  // 强调组件
  strong: (props: any) => <Typography variant="inherit" fontWeight="bold" {...props} />,
  em: (props: any) => <Typography variant="inherit" fontStyle="italic" {...props} />,
  
  // 水平线组件
  hr: (props: any) => <Divider sx={{ my: 2 }} {...props} />,
};

// 新闻页面组件
const NewsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLanguageAlert, setShowLanguageAlert] = useState(false);

  // 处理查看详情按钮点击
  const handleViewDetails = (news: NewsItem) => {
    setSelectedNews(news);
    setIsModalOpen(true);
    
    // 检查语言是否匹配，如果不匹配则显示Alert
    if (news.language !== language) {
      setShowLanguageAlert(true);
    }
  };

  // 关闭弹窗
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
    setShowLanguageAlert(false);
  };

  // 处理模态框外部点击关闭
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t('news.pageTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {t('news.pageDescription')}
          </Typography>

          {/* 新闻列表 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {newsItems.map((news) => (
              <Paper 
                key={news.id} 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  '&:hover': { 
                    boxShadow: 3,
                    transition: 'box-shadow 0.3s ease-in-out'
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {news.title}
                  </Typography>
                  <Chip 
                    label={news.category} 
                    size="small" 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      fontWeight: 500
                    }} 
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {news.date}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {news.summary}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => handleViewDetails(news)}
                    sx={{ textTransform: 'none' }}
                  >
                    {t('news.viewDetails')}
                  </Button>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="news-detail-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* 模态遮罩层 - 用于视觉聚焦和点击关闭功能 */}
          <Box 
            onClick={handleBackdropClick}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // bgcolor: 'rgba(0, 0, 0, 0.5)', // 半透明黑色背景
              zIndex: -1,
            }}
          />
          <Paper 
            elevation={5} 
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              borderRadius: 2,
              p: { xs: 3, sm: 4 },
              maxWidth: 800,
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              outline: 'none',
              zIndex: 1,
            }}
          >
          {selectedNews && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {selectedNews.title}
                </Typography>

                <IconButton 
                  onClick={handleCloseModal} 
                  size="small" 
                  sx={{ 
                    color: 'text.secondary',
                    '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }
                  }} 
                >
                  <Close />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  {selectedNews.date}
                </Typography>
                <Chip 
                  label={selectedNews.category} 
                  size="small" 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    fontWeight: 500
                  }} 
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {showLanguageAlert && (
                  <Alert severity="error" sx={{ mt: 2, mb: 3 }}>
                    {t('news.languageAlert')}
                  </Alert>
                )}
              </Box>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ py: 2 }}>
                <ReactMarkdown 
                  rehypePlugins={[[rehypeReact, { components: MarkdownComponents, createElement: React.createElement }]]}
                  components={MarkdownComponents}
                >
                  {selectedNews.content}
                </ReactMarkdown>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button 
                  variant="contained" 
                  onClick={handleCloseModal}
                  sx={{ textTransform: 'none' }}
                >
                  {t('news.close')}
                  </Button>
              </Box>
            </>
          )}
        </Paper>
        </Box>
      </Modal>
    </div>
  );
};

export default NewsPage;