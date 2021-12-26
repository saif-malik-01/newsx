import React from 'react';
import {Box,Toolbar} from '@mui/material';


const styles = {
    root:{
        boxShadow:0
    },
    linksBox:{
        display: { xs: 'none', md: 'flex' },
        justifyContent:'space-between',
        flexGrow:0.2
    }
}

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <nav>
            <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={styles.linksBox}>
            <a>Blogs</a>
            <a>News</a>
            <a>Contact</a>
            </Box>
            </Toolbar>
        </nav>
    </Box>
  );
}
