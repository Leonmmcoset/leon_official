"use client";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  ImageList,
  ImageListItem,
  Link as MuiLink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import CodeIcon from "@mui/icons-material/Code";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import RefreshIcon from "@mui/icons-material/Refresh";
import LinkIcon from "@mui/icons-material/Link";

export default function LeonAPP() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  // 项目特点
  const features = [
    {
      icon: (
        <ShoppingCartIcon
          color="primary"
          style={{ fontSize: isMobile ? 24 : 32 }}
        />
      ),
      title: "应用商城",
      description: "提供各类应用和工具的展示与下载服务",
    },
    {
      icon: (
        <SmartphoneIcon
          color="primary"
          style={{ fontSize: isMobile ? 24 : 32 }}
        />
      ),
      title: "移动友好",
      description: "完全适配移动设备，提供流畅的用户体验",
    },
    {
      icon: (
        <RefreshIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />
      ),
      title: "持续更新",
      description: "v2版本正在开发中，将带来全新的设计和实现",
    },
    {
      icon: (
        <CodeIcon color="primary" style={{ fontSize: isMobile ? 24 : 32 }} />
      ),
      title: "开源项目",
      description: "采用MIT开源协议，鼓励社区参与和贡献",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* 英雄区域 */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 6, md: 10 },
          p: { xs: 4, md: 8 },
          borderRadius: 4,
          background:
            "linear-gradient(135deg, rgba(63,81,181,0.05) 0%, rgba(63,81,181,0.1) 100%)",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, mb: 3 }}
        >
          LeonAPP
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          开源应用商城平台
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          一个简单而强大的应用商城系统，由LeonCloud和武汉喵星创想互联网科技有限公司开发维护，致力于提供优质的应用分发服务。
        </Typography>
        <Box
          sx={{
            mt: 6,
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            startIcon={<PublicIcon />}
            href="https://leon.miaostars.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 3, py: 1.2 }}
          >
            访问官网
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="http://leonmmcoset.jjxmm.win:2000/LeonMMcoset/leonapp"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 3, py: 1.2 }}
          >
            开源仓库
          </Button>
        </Box>
      </Box>

      {/* 项目概述 */}
      <Box sx={{ mb: { xs: 8, md: 12 } }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 4, fontWeight: 600 }}
        >
          项目概述
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              LeonAPP是一个开源的应用商城项目，旨在为开发者提供一个简单易用的应用分发平台。
              项目由LeonCloud和武汉喵星创想互联网科技有限公司共同拥有和维护，致力于打造一个开放、透明的应用生态系统。
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              目前LeonAPP
              v1版本已发布，基于PHP和HTML5技术栈实现。同时，我们正在开发LeonAPP
              v2版本，
              该版本将完全重写，采用现代化的技术架构，提供更好的用户体验和更强大的功能。
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              项目采用MIT开源协议（PC客户端使用GPLv3开源），欢迎社区开发者参与贡献和改进。
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  平台特点
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <Box sx={{ color: theme.palette.primary.main, mt: 0.5 }}>
                        {feature.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
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

      {/* 版本信息 */}
      <Box sx={{ mb: { xs: 8, md: 12 } }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 4, fontWeight: 600 }}
        >
          版本信息
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", boxShadow: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  LeonAPP v1
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  当前稳定版本
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  基于PHP和HTML5技术栈实现的应用商城系统，提供基本的应用展示和下载功能。
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon />}
                  href="http://leonmmcoset.jjxmm.win:2000/LeonMMcoset/leonapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  查看源码
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                boxShadow: 2,
                borderRadius: 2,
                borderLeft: `4px solid ${theme.palette.primary.main}`,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  LeonAPP v2
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  开发中
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  全新重写的版本，将抛弃原有所有代码，采用现代化技术栈重新设计和实现，提供更优质的用户体验。
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  disabled
                  startIcon={<RefreshIcon />}
                >
                  开发中
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 截图展示 */}
      <Box sx={{ mb: { xs: 8, md: 12 } }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 4, fontWeight: 600 }}
        >
          截图展示
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          LeonAPP v1界面预览
        </Typography>
        <ImageList
          sx={{ width: "100%", height: "auto" }}
          cols={isMobile ? 1 : isMedium ? 2 : 3}
          rowHeight={250}
        >
          <ImageListItem>
            <img
              src="/projects/leonapp/img1.png"
              alt="LeonAPP v1截图1"
              loading="lazy"
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="/projects/leonapp/img2.png"
              alt="LeonAPP v1截图2"
              loading="lazy"
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="/projects/leonapp/img3.png"
              alt="LeonAPP v1截图3"
              loading="lazy"
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
        </ImageList>
      </Box>

      {/* 资源链接 */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 4, fontWeight: 600 }}
        >
          相关资源
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <LinkIcon
                  sx={{
                    fontSize: 40,
                    mb: 2,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  官方网站
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  访问LeonAPP官方网站，体验完整功能
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  href="https://leon.miaostars.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  立即访问
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <GitHubIcon
                  sx={{
                    fontSize: 40,
                    mb: 2,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  开源仓库
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  查看源码，参与贡献，了解项目技术细节
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  href="http://leonmmcoset.jjxmm.win:2000/LeonMMcoset/leonapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  前往仓库
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <CodeIcon
                  sx={{
                    fontSize: 40,
                    mb: 2,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  技术栈
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  v1: PHP + HTML5
                  <br />
                  v2: 开发中...
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  href="http://leonmmcoset.jjxmm.win:2000/LeonMMcoset/leonapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  了解更多
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 页脚 */}
      <Box
        sx={{
          mt: 12,
          pt: 6,
          borderTop: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} LeonCloud &
          武汉喵星创想互联网科技有限公司
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          LeonAPP - 开源应用商城平台
        </Typography>
      </Box>
    </Container>
  );
}
