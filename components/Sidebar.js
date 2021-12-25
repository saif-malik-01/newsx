import React from "react";
import { Paper, IconButton,useMediaQuery } from "@mui/material";

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
    justifyContent:'start'
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

  const divQuery = useMediaQuery('(max-width:780px)')

  return (
    <div style={divQuery ? styles.mobile.root : styles.root}>
        <Paper sx={styles.logo}>NX</Paper>
        <IconButton sx={styles.toggle}>F</IconButton>
    </div>
  );
}
