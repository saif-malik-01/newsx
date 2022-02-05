import Head from 'next/head'
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import News from "../components/News";
import Highlights from "../components/Highlights";
import Section from "../components/Section";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>NewsX</title>
        <meta name="description" content="A light weight news web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container sx={{ p: 1 }}>
        <Grid item xs={12} md={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={6}>
          <Navbar />
          <main>
            <News />
          </main>
        </Grid>
        <Grid item xs={12} md={5}>
          <Highlights />
        </Grid>
        <Grid item xs={12} sx={{px:2}}>
          <Section/>
        </Grid>
        <Grid item xs={12} sx={{px:2,mt:4}}>
          <Footer/>
        </Grid>
      </Grid>
    </>
  )
}
