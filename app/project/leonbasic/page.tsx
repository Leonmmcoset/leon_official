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
import { Book } from '@mui/icons-material';

export default function LeonBasic() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  // 项目特点数据
  const features = [
    {
      icon: <CodeIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
      title: '简单易学',
      description: '语法简洁明了，适合编程初学者快速入门'
    },
    {
      icon: <TerminalIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
      title: '基于Rust',
      description: '底层使用Rust实现，保证高性能和内存安全'
    },
    {
      icon: <BookIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
      title: '混合语法',
      description: '融合了Python的简洁和Swift的现代语法特性'
    },
    {
      icon: <EmojiEventsIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
      title: '高性能',
      description: '编译型语言，运行效率高，资源占用少'
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
          LeonBasic
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          The LeonBasic Programming Language
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.1rem' } }}>
          一个简单易懂的编程语言，专为初学者设计，基于Rust实现，融合了Python的简洁和Swift的现代语法特性。
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
          项目概述
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              LeonBasic是一门专为编程初学者设计的编程语言，旨在降低编程学习的门槛，同时保持良好的性能和现代语言特性。
              该语言基于Rust实现，结合了Python的易读性和Swift的语法优雅，让初学者能够快速上手，同时也能接触到现代编程语言的核心概念。
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              无论是完全没有编程经验的新手，还是想要了解不同编程范式的开发者，都能从LeonBasic中获益。
              简单易学的语法设计让学习过程更加轻松愉快，同时Rust的底层实现又保证了程序的性能和安全性。
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                  语言特点
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
          语法示例
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
          相关资源
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardContent>
                <GitHubIcon sx={{ fontSize: 40, mb: 2, color: theme.palette.primary.main }} />
                <Typography variant="h6" gutterBottom>
                  GitHub 仓库
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  查看源码，参与贡献，提交问题反馈
                </Typography>
                <Button 
                  variant="outlined" 
                  fullWidth
                  href="https://github.com/LeonMMcoset/LeonLang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  访问仓库
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardContent>
                <PublicIcon sx={{ fontSize: 40, mb: 2, color: theme.palette.primary.main }} />
                <Typography variant="h6" gutterBottom>
                  官方网站
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  完整的文档，教程和示例
                </Typography>
                <Button 
                  variant="outlined" 
                  fullWidth
                  href="https://lb.jjmm.ink/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  访问官网
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardContent>
                <BookIcon sx={{ fontSize: 40, mb: 2, color: theme.palette.primary.main }} />
                <Typography variant="h6" gutterBottom>
                  学习资源
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  入门教程，示例代码和最佳实践
                </Typography>
                <Button 
                  variant="outlined" 
                  fullWidth
                  href="https://github.com/Leonmmcoset/LeonLang/tree/master/test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  查看文档
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 页脚 */}
      <Box sx={{ textAlign: 'center', mt: 12, pt: 4, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} LeonMMcoset
        </Typography>
      </Box>
    </Container>
  );
}