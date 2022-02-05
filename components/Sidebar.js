import React from "react";
import { Paper, IconButton,useMediaQuery,Drawer } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NavList from './NavList';

const styles = {
  logo: {
    p: 2,
    borderRadius: 0,
    backgroundColor: "#E52D2D",
    color: "white",
    width: "55px",
  },
  root:{
      height:"100%",
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
  },
  toggle:{
    justifyContent:'start',
    width:'40px',
    color:'black'
  },
  mobile:{
    root:{
      display:'flex',
      justifyContent:'space-between',
      width:'100%'
    },
  }
};

export default function Sidebae() {

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isSmall = useMediaQuery('(max-width:780px)')

  return (
    <nav style={isSmall ? styles.mobile.root : styles.root}>
        <Paper sx={styles.logo}>NX</Paper>
        { isSmall && <IconButton sx={styles.toggle} onClick={()=>setOpenDrawer(true)}>
          <MenuRoundedIcon/>
        </IconButton> }
        <Drawer
          open={openDrawer}
          onClose={()=>setOpenDrawer(false)}
          >
          <NavList/>
        </Drawer>
    </nav>
  );
}
