"use client";

import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import SupportIcon from "@mui/icons-material/SupportAgent";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ClientLayout from "../components/ClientLayout";
import { useLanguage } from "../components/language/LanguageContext";

export default function SupportPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLanguage();

  const handleEmailClick = () => {
    window.location.href = 'mailto:leonmmcoset@outlook.com';
  };

  return (
    <div>
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      {/* 页面标题 */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 8, md: 12 },
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2
            }}
          >
            {t('support.pageTitle')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '700px',
              margin: '0 auto',
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6
            }}
          >
            {t('support.pageDescription')}
          </Typography>
        </Box>

        {/* 服务介绍卡片 */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile 
              ? '1fr' 
              : isMedium 
                ? 'repeat(2, 1fr)' 
                : 'repeat(3, 1fr)',
            gap: { xs: 4, md: 6 },
            mb: { xs: 12, md: 16 },
            '& > *': {
              opacity: 0,
              transform: 'translateY(30px)',
              animation: 'fadeInUp 0.6s ease-out forwards'
            },
            '& > *:nth-child(1)': { animationDelay: '0.2s' },
            '& > *:nth-child(2)': { animationDelay: '0.4s' },
            '& > *:nth-child(3)': { animationDelay: '0.6s' }
          }}
        >
          {/* 支持介绍卡片 */}
          <Card 
            elevation={3} 
            sx={{
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                elevation: 5
              }
            }}
          >
            <CardHeader
              avatar={
                <Box sx={{ bgcolor: theme.palette.primary.light, p: 2, borderRadius: '50%' }}>
                  <SupportIcon fontSize="large" color="primary" />
                </Box>
              }
              title={t('support.card1Title')}
              titleTypographyProps={{
                variant: 'h6',
                fontWeight: 600
              }}
            />
            <CardContent>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                {t('support.card1Content1')}
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                {t('support.card1Content2')}
              </Typography>
            </CardContent>
          </Card>

          {/* 价格卡片 */}
          <Card 
            elevation={3} 
            sx={{
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                elevation: 5
              }
            }}
          >
            <CardHeader
              avatar={
                <Box sx={{ bgcolor: theme.palette.primary.light, p: 2, borderRadius: '50%' }}>
                  <CodeIcon fontSize="large" color="primary" />
                </Box>
              }
              title={t('support.card2Title')}
              titleTypographyProps={{
                variant: 'h6',
                fontWeight: 600
              }}
            />
            <CardContent>
              <Box sx={{ mb: 2, p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '8px' }}>
                <Typography variant="body1" paragraph sx={{ fontWeight: 600 }}>
                  {t('support.card2Regular')}
                </Typography>
              </Box>
              <Box sx={{ p: 2, bgcolor: 'primary.light', color: "white", borderRadius: '8px' }}>
                <Typography variant="body1" paragraph sx={{ fontWeight: 600 }}>
                  {t('support.card2Outsource')}
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* 联系卡片 */}
          <Card 
            elevation={3} 
            sx={{
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                elevation: 5
              }
            }}
          >
            <CardHeader
              avatar={
                <Box sx={{ bgcolor: theme.palette.primary.light, p: 2, borderRadius: '50%' }}>
                  <MailIcon fontSize="large" color="primary" />
                </Box>
              }
              title={t('support.card3Title')}
              titleTypographyProps={{
                variant: 'h6',
                fontWeight: 600
              }}
            />
            <CardContent>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, mb: 3 }}>
                {t('support.card3Content')}
              </Typography>
              <Button
                variant="contained"
                startIcon={<MailIcon />}
                onClick={handleEmailClick}
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: '8px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  }
                }}
              >
                {t('support.card3Button')}
              </Button>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                leonmmcoset@outlook.com
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* 服务流程部分 */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: { xs: 8, md: 12 }
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 8,
              color: theme.palette.primary.main
            }}
          >
            {t('support.processTitle')}
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-around',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: { xs: 6, md: 4 },
              '& > *': {
                opacity: 0,
                transform: 'translateY(30px)',
                animation: 'fadeInUp 0.6s ease-out forwards'
              },
              '& > *:nth-child(1)': { animationDelay: '0.2s' },
              '& > *:nth-child(2)': { animationDelay: '0.4s' },
              '& > *:nth-child(3)': { animationDelay: '0.6s' },
              '& > *:nth-child(4)': { animationDelay: '0.8s' }
            }}
          >
            {[1, 2, 3, 4].map((step) => {
              // 确保stepData始终有值
              const getStepData = (stepNum: number) => {
                const data = {
                  1: { title: t('support.step1Title'), icon: <MailIcon /> },
                  2: { title: t('support.step2Title'), icon: <CodeIcon /> },
                  3: { title: t('support.step3Title'), icon: <WorkIcon /> },
                  4: { title: t('support.step4Title'), icon: <SupportIcon /> }
                };
                return data[stepNum as keyof typeof data] || { title: '', icon: <SupportIcon /> };
              };
              
              const stepData = getStepData(step);
               
              return (
                <Box
                  key={step}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '200px',
                    textAlign: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: theme.palette.primary.light,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      position: 'relative',
                      '&::before': {
                        content: `"${step}"`,
                        position: 'absolute',
                        top: '-12px',
                        right: '-12px',
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }
                    }}
                  >
                    {React.cloneElement(stepData.icon as React.ReactElement<{ fontSize?: 'small' | 'medium' | 'large', color?: 'primary' | 'secondary' }>, { 
                      fontSize: "large", 
                      color: "primary" 
                    })}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {stepData.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step === 1 && t('support.step1Desc')}
                    {step === 2 && t('support.step2Desc')}
                    {step === 3 && t('support.step3Desc')}
                    {step === 4 && t('support.step4Desc')}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* CTA 区域 */}
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 6, md: 10 },
            bgcolor: theme.palette.primary.main,
            color: 'white',
            borderRadius: '16px',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: 'fadeInUp 0.8s ease-out 1s forwards'
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 4
            }}
          >
            {t('support.ctaTitle')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, fontSize: { xs: '1rem', md: '1.1rem' } }}>
            {t('support.ctaContent')}
          </Typography>
          <Button
            variant="contained"
            startIcon={<MailIcon />}
            onClick={handleEmailClick}
            sx={{
              bgcolor: 'white',
              color: theme.palette.primary.main,
              px: 6,
              py: 1.5,
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            {t('support.ctaButton')}
          </Button>
        </Box>
    </Container>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </div>
  );
}