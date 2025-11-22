

'use client';

import { Box, Container, Typography, Card, CardContent, CardMedia, Button, useMediaQuery, useTheme } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PublicIcon from '@mui/icons-material/Public';
import WindowIcon from '@mui/icons-material/Window';
import { useLanguage } from './components/language/LanguageContext';
import { useThemeContext } from './components/theme/ThemeContext';



export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLanguage();
  const { isDarkMode } = useThemeContext();

  // 功能数据
  const features = [
    {
      icon: <PublicIcon fontSize="large" color="primary" style={{ fontSize: isMobile ? 32 : 48 }} />,
      title: t('features.cloudAccess.title'),
      description: t('features.cloudAccess.description')
    },
    {
      icon: <WindowIcon fontSize="large" color="primary" style={{ fontSize: isMobile ? 32 : 48 }} />,
      title: t('features.responsiveDesign.title'),
      description: t('features.responsiveDesign.description')
    },
    {
      icon: <AttachFileIcon fontSize="large" color="primary" style={{ fontSize: isMobile ? 32 : 48 }} />,
      title: t('features.fileManagement.title'),
      description: t('features.fileManagement.description')
    }
  ];

  // 项目数据
  const projects = [
    {
      name: t('projects.leonpan.name'),
      description: t('projects.leonpan.description'),
      image: "/projects/leonpan/logo.png",
      href: "/project/leonpan"
    },
    {
      name: t('projects.leonbasic.name'),
      description: t('projects.leonbasic.description'),
      image: "/nologo.png",
      href: "/project/leonbasic"
    },
    {
      name: t('projects.leonapp.name'),
      description: t('projects.leonapp.description'),
      image: "/projects/leonapp/logo.jpeg",
      href: "/project/leonapp"
    },
  ];

  // 扩展服务类别数据
  const services = [
    {
      name: t('services.cloudStorage.name'),
      description: t('services.cloudStorage.description'),
      icon: <AttachFileIcon />
    },
    {
      name: t('services.communityForum.name'),
      description: t('services.communityForum.description'),
      icon: <PublicIcon />
    },
    {
      name: t('services.programmingLanguage.name'),
      description: t('services.programmingLanguage.description'),
      icon: <WindowIcon />
    },
    {
      name: t('services.operatingSystem.name'),
      description: t('services.operatingSystem.description'),
      icon: <WindowIcon />
    },
    {
      name: t('services.mcServer.name'),
      description: t('services.mcServer.description'),
      icon: <PublicIcon />
    },
    {
      name: t('services.encryptionLanguage.name'),
      description: t('services.encryptionLanguage.description'),
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
            {t('hero.title')}
          </Typography>
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            paragraph 
            sx={{ mb: 6, opacity: 0.9 }}
          >
            {t('hero.subtitle')}
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
            {t('hero.description')}
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
            {t('hero.motto')}
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
            {t('services.sectionTitle')}
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
        bgcolor: isDarkMode ? 'background.default' : 'grey.50'
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
            {t('projects.sectionTitle')}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            overflowX: 'auto',
            gap: 4,
            pb: 2,
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-track': {
              bgcolor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'rgba(0,0,0,0.2)',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb:hover': {
              bgcolor: 'rgba(0,0,0,0.3)',
            },
          }}>
            {projects.map((project, index) => (
              <Card 
                key={index} 
                sx={{
                  width: { xs: 280, sm: 340, md: 400 },
                  minWidth: { xs: 280, sm: 340, md: 400 },
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
                    {t('projects.viewDetails')}
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
            {t('advantages.sectionTitle')}
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
                {t('commitments.title')}
              </Typography>
              <Box sx={{ height: 2, bgcolor: 'white', opacity: 0.3, mb: 4 }}></Box>
              <ul style={{ paddingLeft: isMobile ? 0 : 20, margin: 0, listStyleType: isMobile ? 'none' : 'disc' }}>
                <li style={{ marginBottom: 16, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  {t('commitments.easyToUse')}
                </li>
                <li style={{ marginBottom: 16, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  {t('commitments.enterpriseSecurity')}
                </li>
                <li style={{ marginBottom: 16, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  {t('commitments.efficientPerformance')}
                </li>
                <li style={{ marginBottom: 16, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  {t('commitments.comprehensiveSupport')}
                </li>
                <li style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  {t('commitments.continuousInnovation')}
                </li>
              </ul>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}