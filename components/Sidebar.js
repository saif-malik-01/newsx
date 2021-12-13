import React from "react";
import { Grid, Paper, IconButton } from "@mui/material";

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
      alignItems:'center',
  }
};

export default function Sidebae() {
  return (
    <div style={styles.root}>
        <Paper sx={styles.logo}>NX</Paper>
        <IconButton>F</IconButton>
    </div>
  );
}
