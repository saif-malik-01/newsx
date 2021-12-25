import { Grid,Box,Avatar ,Toolbar, Typography,Button,useMediaQuery} from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import React from 'react'

const styles = {
    heading:{
        fontSize:'2.5rem',
        my:1
    },
    readMore:{
        borderRadius:0,
        color:'black',
        fontWeight:'bold',
        mb:1,
        color:'white'
    }
}

export default function Highlights() {

    const isMd = useMediaQuery('(max-width:780px)')

    return (
        <Grid container direction="column">
         <Grid item sx={{backgroundColor:'#D9B0B1'}} xs={12}>
            <Toolbar>
                <a>Contact</a>
                <Box sx={{ flexGrow: 1 }} />
                <Avatar  src="./" alt="ss" />
            </Toolbar> 
            <Box sx={{px: isMd ? 2 : 6,mt:2}}>
             <Typography variant="caption">
             6 Min Read | 2 May 2021
             </Typography> 
             <Typography variant="h1" sx={styles.heading}>
             The Ajj tak coronovairus trajectores looks worst 
            than than other ocuntry
             </Typography>
             <Typography variant="subtitle1" sx={{my:1}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente quibusdam fuga molestiae recusandae ratione repellat repudiandae! Minus accusantium at voluptatum, 
             </Typography>
             <Button sx={styles.readMore}>
                 Read Story
                 <ArrowForwardRoundedIcon sx={{fontSize:'20px',ml:2}}/>
             </Button>
            </Box>
         </Grid>
         <Grid item sx={{mt:1}}>
           <img src="https://picsum.photos/400/200?grayscale" alt="news" style={{width:'62%',height:'200px'}} />
           <img src="https://picsum.photos/150/200?grayscale" alt="news" style={{width:'35%',marginLeft:'0.6em',height:'200px'}} />
         </Grid>
        </Grid>
    )
}
