import React from "react";
import { Grid, Paper } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import News from "./News";
import Highlights from "./Highlights";

export default function Home() {
  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={false} md={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={6}>
        <Navbar />
        <News />
      </Grid>
      <Grid item xs={12} md={5}>
        <Highlights />
      </Grid>
    </Grid>
  );
}
