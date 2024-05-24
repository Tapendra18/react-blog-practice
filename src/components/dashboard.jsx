import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Link } from "@mui/material";
import KanbanBoard from "./kanbanView";
import ListView from "./ListView";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState("card");
  const history = useNavigate();

  const handleLogout = () => {
    // Perform token removal logic here (example: clear localStorage)
    localStorage.removeItem("token");
    history("/");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open} style={{}}>
          <DrawerHeader>
            {!open === true ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 0,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            )}
          </DrawerHeader>
          <Divider />
          <List>
            {["dashboard", "Chat", "profile", "Logout"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                {text === "Logout" ? (
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "center",
                      px: 2.5,
                    }}
                    onClick={handleLogout}
                  >
                    <ListItemIcon
                      sx={{ minWidth: 0, mr: "auto", justifyContent: "center" }}
                    >
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{ minWidth: 0, mr: "auto", justifyContent: "center" }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "rgb(244 247 253)",
            height: "calc(100vh - 10px)",
          }}
        >
          <Box>
            <Button onClick={() => setView("card")}>Card View</Button>
            <Button onClick={() => setView("list")}>List View</Button>
          </Box>
          {view === "card" ? (
            <KanbanBoard />
          ) : (
            <div className="list-view">
              <ListView />
            </div>
          )}
        </Box>
      </Box>
    </>
  );
}
