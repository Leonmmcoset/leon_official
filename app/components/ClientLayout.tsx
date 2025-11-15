"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import ListSubheader from "@mui/material/ListSubheader";
import useScrollTrigger from "@mui/material/useScrollTrigger";

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
              {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </ThemeProvider>
  );
};

export default ClientLayout;
