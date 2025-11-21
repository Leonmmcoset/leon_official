'use client';

import { Card, CardContent, Typography, Button, Grid, Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import TerminalIcon from '@mui/icons-material/Terminal';
import BookIcon from '@mui/icons-material/Book';
import { useLanguage } from "../../components/language/LanguageContext";

export default function LeonBasic() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLanguage();

  // 项目特点数据
  const features = [
     {
       icon: <CodeIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
       title: t('leonbasic.features.easy.title'),
       description: t('leonbasic.features.easy.description')
     },
     {
       icon: <TerminalIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
       title: t('leonbasic.features.rustBased.title'),
       description: t('leonbasic.features.rustBased.description')
     },
     {
       icon: <BookIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
       title: t('leonbasic.features.hybridSyntax.title'),
       description: t('leonbasic.features.hybridSyntax.description')
     },
     {
       icon: <EmojiEventsIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
       title: t('leonbasic.features.highPerformance.title'),
       description: t('leonbasic.features.highPerformance.description')
     }
    ];

  // 示例代码
  const exampleCode = `// LeonBasic示例代码
require("basic");
var(input) = basic.input(string:"");
basic.print(string:"请输入一个数字:" + var(input));`;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* 标题部分 */}
      <Box 
        sx={{
          textAlign: 'center',
          mb: { xs: 6, md: 10 },
          p: { xs: 4, md: 8 },
          borderRadius: 4,
          background: 'linear-gradient(135deg, rgba(103,58,183,0.05) 0%, rgba(103,58,183,0.1) 100%)'
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          {t('leonbasic.title')}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {t('leonbasic.description')}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.1rem' } }}>
          {t('leonbasic.tagline')}
        </Typography>
        <Box sx={{ mt: 6, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/LeonMMcoset/LeonLang"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 3, py: 1.2 }}
          >
            项目仓库
          </Button>
          <Button
            variant="outlined"
            startIcon={<PublicIcon />}
            href="https://lb.jjmm.ink/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 3, py: 1.2 }}
          >
            官方网站
          </Button>
        </Box>
      </Box>

      {/* 项目概述 */}
      <Box sx={{ mb: { xs: 8, md: 12 } }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
            {t('leonbasic.overview.title')}
          </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                {t('leonbasic.overview.description1')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                {t('leonbasic.overview.description2')}
              </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                {t('leonbasic.features.title')}
              </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {features.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{ color: theme.palette.primary.main, mt: 0.5 }}>
                        {feature.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 语法示例 */}
      <Box sx={{ mb: { xs: 8, md: 12 } }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
            {t('leonbasic.examples.title')}
          </Typography>
        <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, overflow: 'hidden' }}>
          <Box 
            sx={{ 
              p: 3, 
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontFamily: 'monospace',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              color: '#333',
              maxHeight: 400,
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888',
                borderRadius: '3px',
              },
            }}
          >
            {exampleCode}
          </Box>
        </Card>
      </Box>

      {/* 资源链接 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
            {t('leonbasic.resources.title')}
          </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardContent>
                <GitHubIcon sx={{ fontSize: 40, mb: 2, color: theme.palette.primary.main }} />
                <Typography variant="h6" gutterBottom>
                  {t('leonbasic.resources.documentation')}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('leonbasic.resources.documentationDesc')}
                </Typography>
                <Button 
                  variant="outlined" 
                  fullWidth
                  href="https://github.com/LeonMMcoset/LeonLang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('leonbasic.viewSource')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardContent>
                <PublicIcon sx={{ fontSize: 40, mb: 2, color: theme.palette.primary.main }} />
                <Typography variant="h6" gutterBottom>
                  {t('leonbasic.resources.sourceCode')}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('leonbasic.resources.sourceCodeDesc')}
                </Typography>
                <Button 
                  variant="outlined" 
                  fullWidth
                  href="https://lb.jjmm.ink/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('leonbasic.tryNow')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardContent>
                <BookIcon sx={{ fontSize: 40, mb: 2, color: theme.palette.primary.main }} />
                <Typography variant="h6" gutterBottom>
                  {t('leonbasic.resources.learning.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('leonbasic.resources.learning.description')}
                </Typography>
                <Button 
                  variant="outlined" 
                  fullWidth
                  href="https://github.com/Leonmmcoset/LeonLang/tree/master/test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('leonbasic.resources.learning.button')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 页脚 */}
      <Box sx={{ textAlign: 'center', mt: 12, pt: 4, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} {t('leonbasic.copyright')}
        </Typography>
      </Box>
    </Container>
  );
}