'use client';

import { Box, Container, Typography, Card, CardContent, CardMedia, Button, useMediaQuery, useTheme, Tabs, Tab } from '@mui/material';
import { Code, Star, Download, GitHub, Link, Monitor, Smartphone, Storage } from '@mui/icons-material';
import { useState } from 'react';

export default function LeonPan() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [currentTab, setCurrentTab] = useState(0);

  // 项目截图
  const screenshots = [
    '/projects/leonpan/img1.png',
    '/projects/leonpan/img2.png',
    '/projects/leonpan/img3.png'
  ];

  // 功能特点
  const features = [
    {
      icon: <Monitor color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
      title: "Web支持",
      description: "无需安装任何客户端就可以快速使用"
    },
    {
      icon: <Smartphone color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
      title: "PC客户端",
      description: "完美适配Windows 10以上的系统"
    },
    {
      icon: <Storage color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
      title: "精美设计",
      description: "提供简洁而专业的用户界面，操作方便"
    },
    {
      icon: <Code color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />,
      title: "开源可定制",
      description: "基于GPLv3协议开源，可自由修改和定制"
    }
  ];

  // 技术栈
  // const techStack = [
  //   { name: "Go", level: 90 },
  //   { name: "Vue.js", level: 85 },
  //   { name: "Element UI", level: 80 },
  //   { name: "MySQL", level: 75 },
  //   { name: "Redis", level: 70 }
  // ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* 项目头部 */}
      <Box sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: isMobile ? 8 : 12,
        px: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.1)',
        }
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant={isMobile ? "h3" : "h2"} component="h1" gutterBottom fontWeight="bold">
            LeonPan
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
            LeonPan是一个开源项目，改编自Cloudreve开源项目，使用GPLv3协议开源。提供强大的文件管理功能。
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size={isMobile ? "small" : "medium"}
              startIcon={<GitHub />}
              sx={{ px: 3 }}
              onClick={() => window.open('http://leonmmcoset.jjxmm.win:2000/leonmmcoset/leonpan', '_blank')}
            >
              Git仓库
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size={isMobile ? "small" : "medium"}
              startIcon={<Download />}
              sx={{ px: 3, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'rgba(255,255,255,0.8)' } }}
              onClick={() => window.open('http://leonmmcoset.jjxmm.win:5212/', '_blank')}
            >
              进入LeonAPP
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 项目概述 */}
      <Box sx={{ py: isMobile ? 6 : 10, px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 4 : 6, alignItems: 'center', width: '100%' }}>
            <Box sx={{ width: '100%' }}>
              <Typography variant={isMobile ? "h4" : "h3"} component="h2" gutterBottom fontWeight="bold">
                项目概述
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3, color: 'text.secondary' }}>
                LeonPan是基于Cloudreve开发的文件管理系统，提供了丰富的功能和友好的用户界面。
                它支持多种存储方式，包括本地存储、对象存储等，可以满足不同用户的需求。
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3, color: 'text.secondary' }}>
                项目致力于提供安全、稳定、高效的文件管理解决方案，适用于个人用户和团队协作场景。
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Star color="secondary" fontSize="small" style={{ fontSize: 16 }} />
                  <Typography variant="body2">开源免费</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Code color="primary" fontSize="small" style={{ fontSize: 16 }} />
                  <Typography variant="body2">GPLv3协议</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Card sx={{ boxShadow: 4, borderRadius: 2, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height={isMobile ? 200 : 300}
                  image={screenshots[0]}
                  alt="LeonPan 截图"
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
              </Box>
            </Box>
        </Container>
      </Box>

      {/* 功能特点 */}
      <Box sx={{ py: isMobile ? 6 : 10, px: 2, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant={isMobile ? "h4" : "h3"} component="h2" align="center" gutterBottom fontWeight="bold">
            功能特点
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 8, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
            LeonPan提供丰富的功能，满足您的文件管理需求
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: isMobile ? 3 : 4, width: '100%' }}>
            {features.map((feature, index) => (
              <Box sx={{ width: isMobile ? '100%' : 'calc(50% - 16px)', key: index }}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 3,
                  boxShadow: 2,
                  borderRadius: 2,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: 4,
                  }
                }}>
                  <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 60 }}>
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 截图展示 */}
      <Box sx={{ py: isMobile ? 6 : 10, px: 2 }}>
        <Container maxWidth="lg">
          <Typography variant={isMobile ? "h4" : "h3"} component="h2" align="center" gutterBottom fontWeight="bold">
            界面展示
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 8, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
            查看LeonPan的精美界面
          </Typography>

          {/* 截图切换标签 */}
          {!isMobile && (
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
              <Tabs
                value={currentTab}
                onChange={(_, newValue) => setCurrentTab(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor="primary"
                textColor="primary"
              >
                {screenshots.map((_, index) => (
                  <Tab key={index} label={`截图 ${index + 1}`} />
                ))}
              </Tabs>
            </Box>
          )}

          {/* 主要截图展示 */}
          <Box sx={{ textAlign: 'center' }}>
            <Card sx={{ display: 'inline-block', boxShadow: 5, borderRadius: 2, overflow: 'hidden', maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height={isMobile ? 250 : 400}
                image={screenshots[currentTab]}
                alt={`LeonPan 截图 ${currentTab + 1}`}
                sx={{ objectFit: 'contain', maxWidth: '100%' }}
              />
            </Card>
          </Box>

          {/* 移动端缩略图导航 */}
          {isMobile && (
            <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', overflowX: 'auto', pb: 2 }}>
              {screenshots.map((screenshot, index) => (
                <Button
                  key={index}
                  variant={currentTab === index ? "contained" : "outlined"}
                  size="small"
                  onClick={() => setCurrentTab(index)}
                  sx={{
                    minWidth: 60,
                    height: 60,
                    p: 1,
                    border: currentTab === index ? 0 : 1,
                  }}
                >
                  <img
                    src={screenshot}
                    alt={`缩略图 ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Button>
              ))}
            </Box>
          )}
        </Container>
      </Box>

      {/* 技术栈 */}
      {/* <Box sx={{ py: isMobile ? 6 : 10, px: 2, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant={isMobile ? "h4" : "h3"} component="h2" align="center" gutterBottom fontWeight="bold">
            技术栈
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 8, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
            LeonPan基于现代技术栈开发，保证系统的高性能和稳定性
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: isMobile ? 3 : 4, width: '100%' }}>
            {techStack.map((tech, index) => (
              <Box sx={{ width: isMobile ? '100%' : isTablet ? 'calc(50% - 16px)' : 'calc(33.333% - 20px)', key: index }}>
                <Card sx={{ 
                  height: '100%', 
                  boxShadow: 2,
                  borderRadius: 2,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: 4,
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                      {tech.name}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ minWidth: 40 }}>
                          熟练度
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {tech.level}%
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        width: '100%', 
                        height: 8, 
                        bgcolor: 'grey.200', 
                        borderRadius: 4,
                        overflow: 'hidden'
                      }}>
                        <Box sx={{
                          width: `${tech.level}%`,
                          height: '100%',
                          bgcolor: 'primary.main',
                          borderRadius: 4,
                          transition: 'width 0.5s ease-in-out'
                        }} />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box> */}

      {/* 行动号召 */}
      <Box sx={{ py: isMobile ? 8 : 12, px: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant={isMobile ? "h4" : "h3"} component="h2" gutterBottom fontWeight="bold">
            开始使用 LeonPan
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 6, opacity: 0.9 }}>
            立即体验LeonPan带来的高效文件管理体验，开源免费，功能强大
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size={isMobile ? "small" : "large"}
              startIcon={<GitHub />}
              sx={{ px: 4, py: 1.5 }}
              onClick={() => window.open('http://leonmmcoset.jjxmm.win:2000/leonmmcoset/leonpan', '_blank')}
            >
              访问Git仓库
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size={isMobile ? "small" : "large"}
              startIcon={<Download />}
              sx={{ px: 4, py: 1.5, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'rgba(255,255,255,0.8)' } }}
              onClick={() => window.open('http://leonmmcoset.jjxmm.win:5212/', '_blank')}
            >
              立即访问LeonAPP
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}