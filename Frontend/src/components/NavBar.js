import { AppBar, styled, Toolbar, Typography, Box, Button, Drawer, List, ListItem, CssBaseline, ListItemIcon, ListItemText } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolIcon from '@mui/icons-material/School';
import React, {useContext} from "react";
import { theme } from "../Themes/Default-theme";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { AuthContext} from '../../src/context/AuthContext';
import Face6Icon from '@mui/icons-material/Face6';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const drawerWidth = 240;
const menuItems = [
    {
        title: "All students",
        path: '/students',
        icon: <Face6Icon/>
    },
    {
        title: "All teachers",
        path: '/teachers',
        icon: <Face6Icon/>
    },
    {
        title: "Calendar",
        path: '/calendar',
        icon: <CalendarMonthIcon/>
    }
]
const StyledToolbar = styled(Toolbar)({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px"
}));

const LogoutButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: "red"
      }    
}));




const NavBar = () => {
    const auth = useContext(AuthContext);

    const logoutHandler = () => {
        auth.logout();
    }
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

  return (
    <div>
        <CssBaseline/>
    <AppBar position = "sticky">
      <StyledToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Icons>
          <SchoolIcon />
          <Typography variant="h6">Apna School</Typography>
        </Icons>

        <LogoutButton variant="contained" onClick={logoutHandler}>
          <LogoutIcon />
        </LogoutButton>
      </StyledToolbar>

      
    </AppBar>

    <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
            {menuItems.map(item => (
                <ListItem button key={item.title} >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title}/>
                </ListItem>
            ))}
        </List>
        
      </Drawer>

    </div>
  );
};

export default NavBar;
