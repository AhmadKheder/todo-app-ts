import { makeStyles } from '@material-ui/core';
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Typography from '@mui/material/Typography';
import * as React from "react";
import './SideNav.css';


const drawerWidth:number = 280;
const useStyles = makeStyles({
  // CheckBoxSharpIcon: {
  //       position: "absolute",
  //            width: "40px",
  //           height: "40px",
  //           left: "4px",
  //           top: "24px",
  //           color: "#FFB520",
  //           borderRadius: "8px !important",
    
  // },
  // title: {
  //   // textDecoration: 'underline',
  //   // marginBottom: 20,
  // }
})
const SideNav =()=>{
  const classes = useStyles()

  const drawer : JSX.Element = (
    <div
      style={{
        position : 'static',
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CheckBoxSharpIcon
          sx={{
            
            position: "absolute",
            width: "40px",
            height: "40px",
            left: "4px",
            top: "24px",
            color: "#FFB520",
            borderRadius: "8px !important",
          }}
        />
        {/* <Typography style={{
          width: '89px',
          height: '17px',
          left: '48px',
          top: '14px',


          color:' #1B2A4E',

        }}>
        To Do App
        </Typography> */}
        <h1>
        To Do App

        </h1>
        {/* <Typography variant="h4" component="h1">To Do App</Typography> */}
      </div>

      <Divider />
      <List>
        {[
          ["Today", <EventAvailableIcon />],
          ["All Tasks", <DoneAllIcon />],
          ["To Do", <AssignmentTurnedInIcon />],
        ].map((text, index) => (
          <ListItem
      
          button
            key={index }
            sx={{
              borderRadius: "8px",
              margin: "10px",
              width: "232px",
              height: "40px",

              "&:hover ,:active": {
                borderRadius: "8px",
                margin: "10px",
                width: "232px",
                height: "40px",
                color:"#ffff",
                backgroundColor: "#FFB520",
              },
            }}
          >
            <ListItemIcon sx={{  "&:hover ,:active": {color:"#ffff"}}}>{text[1]}</ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    
    <Box sx={{ display: "flex"  }}>
      <CssBaseline />

      <Box>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

    

export default SideNav;
