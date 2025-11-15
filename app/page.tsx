

'use client';

import { Box, Container, Typography, Card, CardContent, CardMedia, Button, useMediaQuery, useTheme } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PublicIcon from '@mui/icons-material/Public';
import WindowIcon from '@mui/icons-material/Window';



export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // 功能数据
  const features = [
    {
      icon: <PublicIcon fontSize="large" color="primary" style={{ fontSize: isMobile ? 32 : 48 }} />,
      title: "云端访问",
      description: "随时随地访问您的项目和文件，无需担心设备限制"
    },
    {
      icon: <WindowIcon fontSize="large" color="primary" style={{ fontSize: isMobile ? 32 : 48 }} />,
      title: "响应式设计",
      description: "完美适配各种设备，从手机到桌面电脑"
    },
    {
      icon: <AttachFileIcon fontSize="large" color="primary" style={{ fontSize: isMobile ? 32 : 48 }} />,
      title: "文件管理",
      description: "高效管理您的所有项目文件，支持多种格式"
    }
  ];

  // 项目数据
  const projects = [
    {
      name: "LeonPan",
      description: "个人项目展示平台",
      image: "/projects/leonpan/logo.png",
      href: "/project/leonpan"
    }
  ];

  // 扩展服务类别数据
  const services = [
    {
      name: "云盘服务",
      description: "安全可靠的云存储解决方案",
      icon: <AttachFileIcon />
    },
    {
      name: "社区论坛",
      description: "用户交流与分享的平台",
      icon: <PublicIcon />
    },
    {
      name: "编程语言",
      description: "创新的编程语言开发",
      icon: <WindowIcon />
    },
    {
      name: "操作系统",
      description: "轻量级操作系统解决方案",
      icon: <WindowIcon />
    },
    {
      name: "我的世界服务器",
      description: "稳定高效的游戏服务器",
      icon: <PublicIcon />
    },
    {
      name: "加密语言",
      description: "安全通信解决方案",
      icon: <AttachFileIcon />
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* 英雄区域 */}
      <Box sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: isMobile ? 10 : 16,
        px: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 1
        }
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant={isMobile ? "h3" : "h2"} 
            component="h1" 
            gutterBottom 
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            LeonCloud
          </Typography>
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            paragraph 
            sx={{ mb: 6, opacity: 0.9 }}
          >
            LeonMMcoset的所有产品的运营商
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              maxWidth: 600, 
              mx: 'auto', 
              opacity: 0.8, 
              mb: 8,
              fontSize: isMobile ? '1rem' : '1.1rem'
            }}
          >
            覆盖云盘、论坛、编程语言、操作系统、我的世界服务器、加密语言等各种服务
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontWeight: 'bold',
              fontSize: isMobile ? '1rem' : '1.1rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              py: 2,
              px: 4,
              borderRadius: 2,
              display: 'inline-block'
            }}
          >
            我们的宗旨是给用户提供简单、安全、高效、全方面的服务
          </Typography>
        </Container>
      </Box>

      {/* 服务介绍区域 */}
      <Box sx={{ py: isMobile ? 8 : 12, px: 2 }}>
        <Container maxWidth="lg">
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h2" 
            align="center" 
            gutterBottom 
            fontWeight="bold"
            sx={{ mb: 6 }}
          >
            我们的服务
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: { xs: 3, md: 4 }
          }}>
            {services.map((service, index) => (
              <Box 
                key={index} 
                sx={{
                  width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 16px)' },
                  maxWidth: { xs: '100%', sm: 400, md: 350 },
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: 2,
                  p: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Box sx={{ 
                  mb: 3, 
                  color: 'primary.main',
                  fontSize: isMobile ? 2.5 : 3
                }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 项目展示区域 */}
      <Box sx={{ 
        py: isMobile ? 8 : 12, 
        px: 2,
        bgcolor: 'grey.50'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h2" 
            align="center" 
            gutterBottom 
            fontWeight="bold"
            sx={{ mb: 6 }}
          >
            精选项目
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: 4
          }}>
            {projects.map((project, index) => (
              <Card 
                key={index} 
                sx={{
                  width: { xs: '100%', sm: 400, md: 500 },
                  maxWidth: '100%',
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height={200}
                  image={project.image}
                  alt={project.name}
                  sx={{ objectFit: 'contain', padding: 3, bgcolor: 'background.paper' }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    {project.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                    {project.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    href={project.href}
                    fullWidth
                    sx={{ py: 1.2 }}
                  >
                    查看详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 优势亮点 */}
      <Box sx={{ py: isMobile ? 8 : 12, px: 2 }}>
        <Container maxWidth="lg">
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h2" 
            align="center" 
            gutterBottom 
            fontWeight="bold"
            sx={{ mb: 6 }}
          >
            我们的优势
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: { xs: 4, md: 6 }
          }}>
            <Box sx={{ 
              width: { xs: '100%', md: '45%' },
              maxWidth: 500,
              textAlign: isMobile ? 'center' : 'left',
              mb: { xs: 4, md: 0 }
            }}>
              {features.map((feature, index) => (
                <Box 
                  key={index} 
                  sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    mb: 4,
                    gap: 3
                  }}
                >
                  <Box sx={{ color: 'primary.main' }}>
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            
            <Box sx={{ 
              width: { xs: '100%', md: '45%' },
              maxWidth: 500,
              bgcolor: 'primary.main',
              color: 'white',
              p: 6,
              borderRadius: 3,
              boxShadow: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant={isMobile ? "h5" : "h4"} gutterBottom fontWeight="bold">
                我们的承诺
              </Typography>
              <Box sx={{ height: 2, bgcolor: 'white', opacity: 0.3, mb: 4 }}></Box>
              <ul style={{ paddingLeft: isMobile ? 0 : 20, margin: 0, listStyleType: isMobile ? 'none' : 'disc' }}>
                <li style={{ marginBottom: 16, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  简单易用的界面设计
                </li>
                <li style={{ marginBottom: 16, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  企业级安全保障
                </li>
                <li style={{ marginBottom: 16, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  高效稳定的系统性能
                </li>
                <li style={{ marginBottom: 16, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  全方面的服务支持
                </li>
                <li style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  持续创新的技术研发
                </li>
              </ul>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 页脚区域 */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 8, px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 6
          }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              LeonCloud
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              LeonMMcoset的所有产品的运营商
            </Typography>
          </Box>
          
          <Box sx={{ 
            height: 1, 
            bgcolor: 'white', 
            opacity: 0.1, 
            mb: 6 
          }}></Box>
          
          <Typography variant="body2" align="center" paragraph>
            © {new Date().getFullYear()} LeonCloud. 保留所有权利。
          </Typography>
          <Typography variant="caption" align="center" color="rgba(255,255,255,0.7)">
            我们的宗旨是给用户提供简单、安全、高效、全方面的服务
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}