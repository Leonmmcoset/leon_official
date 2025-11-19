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
import GroupIcon from "@mui/icons-material/Group";
import CodeIcon from "@mui/icons-material/Code";
import MessageIcon from "@mui/icons-material/Chat";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ClientLayout from "../components/ClientLayout";

const Joinus: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleEmailClick = () => {
    window.location.href = 'mailto:leonmmcoset@outlook.com';
  };

  // 要求列表数据
  const requirements = [
    { text: "能会至少一种编程语言的开发人员", icon: <CodeIcon /> },
    { text: "有良好的沟通能力和团队合作精神", icon: <MessageIcon /> },
    { text: "无违法前科", icon: <CheckCircleIcon /> },
    { text: "拥有微信或QQ账号", icon: <GroupIcon /> }
  ];

  // 加入步骤数据
  const steps = [
    { 
      title: "发送申请", 
      description: "通过我们的邮箱发送你的申请意愿",
      icon: <MailIcon />
    },
    { 
      title: "等待回复", 
      description: "我们会在三天内回复你的申请",
      icon: <MessageIcon />
    },
    { 
      title: "加入群聊", 
      description: "获得微信/QQ内部群聊的邀请",
      icon: <GroupIcon />
    },
    { 
      title: "讨论技术", 
      description: "在群聊中讨论你的技术方向和项目",
      icon: <CodeIcon />
    }
  ];

  // 动画延迟函数
  const getDelay = (index: number) => {
    return `${index * 0.2}s`;
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      {/* 页面标题 */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          mb: { xs: 8, md: 12 },
          animation: 'fadeInUp 0.8s ease-out',
          '@keyframes fadeInUp': {
            'from': {
              opacity: 0,
              transform: 'translateY(30px)'
            },
            'to': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }
        }}
      >
        <Typography 
          variant={isMobile ? "h3" : "h2"} 
          component="h1" 
          gutterBottom 
          fontWeight="bold"
          sx={{ color: 'primary.main' }}
        >
          加入我们
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: 700, 
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.6
          }}
        >
          我们是一个致力于推动技术创新的团队，致力于为客户提供高质量的服务。
          加入我们，让我们的技术更上一层楼！
        </Typography>
      </Box>

      {/* 要求部分 */}
      <Box 
        sx={{ 
          mb: { xs: 10, md: 16 },
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
        }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 50,
              height: 3,
              backgroundColor: 'primary.main'
            }
          }}
        >
          我们需要
        </Typography>
        
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: '1fr 1fr', 
              md: '1fr 1fr 1fr 1fr' 
            },
            gap: { xs: 4, md: 6 }
          }}
        >
          {requirements.map((requirement, index) => (
            <Card 
              key={index}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                },
                animation: 'fadeInUp 0.6s ease-out both',
                animationDelay: getDelay(index)
              }}
              elevation={2}
            >
              <CardHeader
                avatar={
                  <Box sx={{ 
                    bgcolor: 'primary.light', 
                    width: 50, 
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'primary.dark'
                  }}>
                    {requirement.icon}
                  </Box>
                }
                title={
                  <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ fontWeight: 600 }}
                  >
                    {requirement.text}
                  </Typography>
                }
              />
            </Card>
          ))}
        </Box>
        
        <Box 
          sx={{ 
            mt: 8, 
            textAlign: 'center',
            animation: 'fadeInUp 0.8s ease-out 0.8s both',
          }}
        >
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              fontWeight: 600,
              color: 'white',
              backgroundColor: 'primary.light',
              py: 2,
              px: 4,
              display: 'inline-block',
              borderRadius: 2
            }}
          >
            你只要满足以上条件，就可以加入我们的团队！
          </Typography>
        </Box>
      </Box>

      {/* 加入步骤 - 使用Timeline组件 */}
      <Box 
        sx={{ 
          mb: { xs: 10, md: 16 },
          animation: 'fadeInUp 0.8s ease-out 0.4s both',
        }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 50,
              height: 3,
              backgroundColor: 'primary.main'
            }
          }}
        >
          加入我们的步骤
        </Typography>
        
        <Box sx={{ px: { xs: 1, md: 4 } }}>
          <Timeline position={isMobile ? "alternate" : "left"}>
            {steps.map((step, index) => (
              <TimelineItem key={index} sx={{ animation: 'fadeInUp 0.6s ease-out both', animationDelay: getDelay(index) }}>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      width: isMobile ? 48 : 56,
                      height: isMobile ? 48 : 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& .MuiSvgIcon-root': {
                        fontSize: isMobile ? 24 : 28
                      }
                    }}
                  >
                    {step.icon}
                  </TimelineDot>
                  {index < steps.length - 1 && <TimelineConnector sx={{ bgcolor: 'primary.light' }} />}
                </TimelineSeparator>
                <TimelineContent>
                  <Card 
                    sx={{
                      maxWidth: isMobile ? '100%' : 600,
                      ml: isMobile ? 0 : 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                      }
                    }}
                    elevation={3}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom 
                        fontWeight="bold"
                      >
                        步骤 {index + 1}：{step.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontSize: { xs: '1rem', md: '1.0625rem' },
                          lineHeight: 1.7
                        }}
                      >
                        {step.description}
                      </Typography>
                      {index === 0 && (
                        <Button 
                          variant="contained" 
                          color="primary" 
                          sx={{ mt: 3 }} 
                          startIcon={<MailIcon />}
                          onClick={handleEmailClick}
                        >
                          立即发送申请
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>

      {/* CTA 区域 */}
      <Box 
        sx={{
          textAlign: 'center',
          py: { xs: 8, md: 12 },
          bgcolor: 'primary.light',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          animation: 'fadeInUp 0.8s ease-out 0.6s both',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'primary.light',
            opacity: 0.2,
            zIndex: 0
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            fontWeight="bold"
            sx={{ color: 'white' }}
          >
            准备好加入我们了吗？
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 600, 
              mx: 'auto',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: 'white'
            }}
          >
            不要犹豫，立即发送邮件申请加入我们的团队！
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size={isMobile ? "large" : "medium"}
            sx={{ 
              px: { xs: 4, md: 5 }, 
              py: { xs: 1.5, md: 1 },
              fontWeight: 600,
              '&:hover': {
                transform: 'translateY(-2px)'
              }
            }}
            startIcon={<MailIcon />}
            onClick={handleEmailClick}
          >
            立即联系
          </Button>
        </Box>
      </Box>

      {/* 动画样式 */}
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
    </Container>
  );
};

export default Joinus;