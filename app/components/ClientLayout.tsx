"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import ListSubheader from "@mui/material/ListSubheader";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function colorLog(message: string, color: 'reset' | 'red' | 'green' | 'yellow' | 'blue') {
    const colors = {
        reset: '\x1b[0m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m'
    };
    console.log(`${colors[color]}%s${colors.reset}`, message);
}

colorLog(`
 _____                      ______ __                 __ 
|     |_.-----.-----.-----.|      |  |.-----.--.--.--|  |
|       |  -__|  _  |     ||   ---|  ||  _  |  |  |  _  |
|_______|_____|_____|__|__||______|__||_____|_____|_____|
                                                         
`, 'blue')
colorLog('恭喜你发现了菜单！', 'red')
colorLog('LeonCloud是Leon突发奇想搞出来的 (=^ _ ^=)', 'green')

// 自定义内容标题样式
const StyledListHeader = styled(ListSubheader)({
  backgroundImage: "var(--Paper-overlay)",
});

// 创建MUI主题
const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

// 客户端组件负责MUI主题和UI组件
const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  // 将hooks移到组件内部
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children?: React.ReactElement<{ elevation?: number }>;
  }

  // function ElevationScroll(props: Props) {
  //   const { children, window } = props;
  //   // Note that you normally won't need to set the window ref as useScrollTrigger
  //   // will default to window.
  //   // This is only being set here because the demo is in an iframe.
  //   const trigger = useScrollTrigger({
  //     disableHysteresis: true,
  //     threshold: 0,
  //     target: window ? window() : undefined,
  //   });

  //   return children
  //     ? React.cloneElement(children, {
  //         elevation: trigger ? 4 : 0,
  //       })
  //     : null;
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* 左侧区域：Logo和项目按钮 */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ mr: 2, cursor: 'pointer' }}
                onClick={() => (window.location.href = "/")}
              >
                LeonCloud
              </Typography>
              <Button
                id="menu-appbar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography variant="body1" component="span">
                  项目
                </Typography>
              </Button>
            </Box>

            {/* 右侧区域留空，让左侧内容靠左 */}
            <Box sx={{ flexGrow: 1 }} />

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              // anchorOrigin={{
              //   vertical: 'top',
              //   horizontal: 'left',
              // }}
              keepMounted
              // transformOrigin={{
              //   vertical: 'top',
              //   horizontal: 'left',
              // }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledListHeader>Web</StyledListHeader>
              <MenuItem
                onClick={() => (window.location.href = "/project/leonpan")}
              >
                LeonPan
              </MenuItem>
              <MenuItem
                onClick={() => (window.location.href = "/project/leonapp")}
              >
                LeonAPP
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
              <StyledListHeader>其它</StyledListHeader>
              <MenuItem
                onClick={() => (window.location.href = "/project/leonbasic")}
              >
                LeonBasic
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
      
      {/* 页脚区域 */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 8, px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
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
    </ThemeProvider>
  );
};

export default ClientLayout;
