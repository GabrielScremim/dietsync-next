'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Box,
  Avatar,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  Logout,
  Person,
  Home,
  Settings,
  BarChart
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const drawerWidthOpen = 220;
const drawerWidthClosed = 72;

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const userName = 'Gabriel';

  return (
    <Box sx={{ display: 'flex' }}>
      {/* HEADER */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: '#004C2F',
          boxShadow: 'none'
        }}
      >

        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon />
          </IconButton>

          <Typography sx={{ flexGrow: 1, ml: 2 }} variant="h6">
            Diet Sync
          </Typography>

          <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
            <Avatar sx={{ bgcolor: '#1db954' }}>
              {userName[0]}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => setMenuAnchor(null)}
            onClick={() => setMenuAnchor(null)}
          >
            <MenuItem>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              Perfil
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          width: sidebarOpen ? drawerWidthOpen : drawerWidthClosed,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sidebarOpen ? drawerWidthOpen : drawerWidthClosed,
            transition: 'width 0.3s',
            overflowX: 'hidden',
            backgroundColor: '#004C2F',
            color: '#fff'
          }
        }}
      >
        <Toolbar />

        <List>
          {[
            { text: 'Home', icon: <Home /> },
            { text: 'Registrar Dieta', icon: <BarChart /> },
            { text: 'Registrar Treino', icon: <Settings /> },
            { text: 'Registrar Receitas', icon: <Settings /> },
            { text: 'Dietas', icon: <RestaurantMenuIcon /> },
            { text: 'Treinos', icon: <FitnessCenterIcon /> },
            { text: 'Evolução', icon: <TrendingUpIcon /> },
            { text: 'Receitas', icon: <MenuBookIcon /> },
            { text: 'Agradecimentos', icon: <Diversity1Icon /> }
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: sidebarOpen ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: sidebarOpen ? 2 : 'auto',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: sidebarOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* CONTEÚDO */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: sidebarOpen && !isMobile ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
          transition: 'margin 0.3s'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
