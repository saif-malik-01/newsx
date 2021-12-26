import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import News from "./News";
import Highlights from "./Highlights";
import Section from "./Section";

export default function Home() {
  return (
    <Grid container sx={{ p: 1 }}>
      <Grid item xs={12} md={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={6}>
        <Navbar />
        <News />
      </Grid>
      <Grid item xs={12} md={5}>
        <Highlights />
      </Grid>
      <Grid item xs={12}>
        <Section/>
      </Grid>
    </Grid>
  );
}
