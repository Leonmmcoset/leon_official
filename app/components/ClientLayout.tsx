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
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
colorLog('恭喜你发现了彩蛋！', 'red')
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
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  // 监听窗口大小变化，判断是否为移动设备
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px为移动端断点
    };
    
    // 初始化时判断
    handleResize();
    
    // 添加事件监听器
    window.addEventListener('resize', handleResize);
    
    // 清理函数
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // 定义顶栏导航项的类型
  interface NavItem {
    id: string;
    label: string;
    href: string;
    type: 'link' | 'menu';
    children?: NavItem[];
  }

  // 定义导航项目菜单的类型
  interface ProjectItem {
    id: string;
    label: string;
    href: string;
    category: string;
  }

  // 动态定义顶部导航链接
  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'LeonCloud',
      href: '/',
      type: 'link'
    },
    {
      id: 'project',
      label: '项目',
      href: '',
      type: 'menu'
    },
    {
      id: 'support',
      label: '技术支持',
      href: '/support',
      type: 'link'
    },
    {
      id: 'joinus',
      label: '加入我们',
      href: '/joinus',
      type: 'link'
    }
  ];

  // 动态定义项目列表
  const projectItems: ProjectItem[] = [
    {
      id: 'leonpan',
      label: 'LeonPan',
      href: '/project/leonpan',
      category: 'Web'
    },
    {
      id: 'leonapp',
      label: 'LeonAPP',
      href: '/project/leonapp',
      category: 'Web'
    },
    {
      id: 'leonbasic',
      label: 'LeonBasic',
      href: '/project/leonbasic',
      category: '其它'
    }
  ];

  // 按分类组织项目
  const projectsByCategory = projectItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ProjectItem[]>);

  // 侧边栏开关控制
  const toggleDrawer = (open: boolean) => () => {
    setMobileDrawerOpen(open);
  };

  // 侧边栏项目点击处理
  const handleDrawerItemClick = (href: string) => {
    window.location.href = href;
    setMobileDrawerOpen(false);
  };

  // 分类展开状态管理 - 现在在projectsByCategory定义之后初始化
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({
    // 直接初始化所有已知分类为展开状态
    'Web': true,
    '其它': true
  });
  
  // 项目部分的展开状态管理
  const [projectsExpanded, setProjectsExpanded] = React.useState(false);

  // 切换分类展开/收缩状态
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
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
        <AppBar position="fixed" sx={{ 
          zIndex: 1100, 
          backdropFilter: 'blur(12px)',
          // backgroundColor: 'rgba(30, 30, 30, 0.8)', // 添加半透明背景色以显示模糊效果
        }}>
          <Toolbar>
            {/* 响应式顶栏 - 移动端显示汉堡菜单，桌面端显示完整导航 */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              {/* 移动端：汉堡菜单按钮 */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="打开菜单"
                  edge="start"
                  onClick={toggleDrawer(true)}
                  sx={{ mr: 2 }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    width: 24, 
                    height: 18 
                  }}>
                    <Box sx={{ height: 2, bgcolor: 'white', width: '100%' }} />
                    <Box sx={{ height: 2, bgcolor: 'white', width: '100%' }} />
                    <Box sx={{ height: 2, bgcolor: 'white', width: '100%' }} />
                  </Box>
                </IconButton>
              )}

              {/* 首页链接（在所有设备上都显示） */}
              <Typography
                variant={isMobile ? "h6" : "h6"}
                component="div"
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.8
                  }
                }}
                onClick={() => (window.location.href = '/')}
              >
                LeonCloud
              </Typography>

              {/* 桌面端：完整导航链接 */}
              {!isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                  {navItems.filter(item => item.id !== 'home').map((item) => {
                    if (item.type === 'link') {
                      return (
                        <Typography
                          key={item.id}
                          variant="body1"
                          component="div"
                          sx={{ 
                            mr: 2, 
                            cursor: 'pointer',
                            '&:hover': {
                              opacity: 0.8
                            }
                          }}
                          onClick={() => (window.location.href = item.href)}
                        >
                          {item.label}
                        </Typography>
                      );
                    } else if (item.type === 'menu') {
                      return (
                        <Button
                          key={item.id}
                          id="menu-appbar"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="inherit"
                        >
                          <Typography variant="body1" component="span">
                            {item.label}
                          </Typography>
                        </Button>
                      );
                    }
                    return null;
                  })}
                </Box>
              )}
            </Box>

            {/* 桌面端：项目下拉菜单 */}
            {!isMobile && (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {Object.entries(projectsByCategory).map(([category, items]) => (
                  <React.Fragment key={category}>
                    <StyledListHeader>{category}</StyledListHeader>
                    {items.map((project) => (
                      <MenuItem
                        key={project.id}
                        onClick={() => {
                          window.location.href = project.href;
                          handleClose();
                        }}
                      >
                        {project.label}
                      </MenuItem>
                    ))}
                  </React.Fragment>
                ))}
              </Menu>
            )}
           </Toolbar>
          </AppBar>
      </Box>

      {/* 移动端侧边栏 */}
      <Drawer
        anchor="left"
        open={mobileDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          {/* 侧边栏头部 */}
          <Box sx={{ 
            bgcolor: 'primary.main', 
            color: 'white', 
            p: 2, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}>
            <Typography variant="h6">导航菜单</Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(false)}
              aria-label="关闭菜单"
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
          
          <Divider />
          
          {/* 侧边栏导航链接 */}
          <List>
            {navItems.filter(item => item.id !== 'home').map((item) => {
              if (item.type === 'link') {
                return (
                  <ListItem 
                    component="a"
                    href={item.href}
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDrawerItemClick(item.href);
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItem>
                );
              } else if (item.type === 'menu') {
                return (
                  <React.Fragment key={item.id}>
                    <ListItem 
                      component="div"
                      onClick={() => setProjectsExpanded(prev => !prev)}
                      sx={{ 
                        pl: 1, 
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.02)',
                        fontWeight: 'bold'
                      }}
                    >
                      <ChevronRightIcon 
                        fontSize="small" 
                        sx={{ 
                          mr: 1,
                          transform: projectsExpanded ? 'rotate(90deg)' : 'none',
                          transition: 'transform 0.2s ease-in-out'
                        }} 
                      />
                      <ListItemText 
                        primary={item.label} 
                      />
                    </ListItem>
                    {projectsExpanded && Object.entries(projectsByCategory).map(([category, projects]) => (
                      <React.Fragment key={category}>
                        <ListItem 
                          component="div"
                          onClick={() => toggleCategory(category)}
                          sx={{ 
                            pl: 2, 
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <ChevronRightIcon 
                            fontSize="small" 
                            sx={{ 
                              mr: 1,
                              transform: expandedCategories[category] ? 'rotate(90deg)' : 'none',
                              transition: 'transform 0.2s ease-in-out'
                            }} 
                          />
                          <ListItemText 
                            primary={category} 
                            primaryTypographyProps={{ fontSize: '0.7rem' }}
                          />
                        </ListItem>
                        {expandedCategories[category] && projects.map((project) => (
                          <ListItem 
                            component="a"
                            href={project.href}
                            key={project.id}
                            onClick={(e) => {
                              e.preventDefault();
                              handleDrawerItemClick(project.href);
                            }}
                            sx={{ pl: 6 }}
                          >
                            <ListItemText primary={project.label} />
                          </ListItem>
                        ))}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </List>
        </Box>
      </Drawer>

      {/* 为固定顶栏添加足够的顶部空间 */}
      <Box sx={{ pt: { xs: 8, sm: 6 } }}>
        {children}
      </Box>
      
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
