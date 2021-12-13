import React from 'react';
import {Grid,Avatar,Typography,Button} from '@mui/material';

const styles = {
    avatarBox:{
        borderRight:'solid 2px black',
    },
    channel:{
        fontSize:'18px'
    },
    heading:{
        fontSize:'2rem',
        my:1
    },
    readMore:{
        borderBottom:'solid 1px black',
        borderRadius:0,
        color:'black',
        fontWeight:'2px',
        mb:1
    }
}

export default function News() {
    return(
        <Grid container>
          <Grid item xs={2} sx={{p:1}}>
            <div style={styles.avatarBox}>
            <Avatar
            alt="Avatar"
            src="./"
            sx={{ml:'auto',mr:1}}
            />
            </div>
          </Grid>
          <Grid item xs={10} sx={{p:1}}>
           <Typography variant="caption">2020 DEC 2</Typography>
           <Typography variant="h4" sx={styles.channel}>BBC Media Channel</Typography>
           <Typography variant="h1" sx={styles.heading}>
            The Ajj tak coronovairus trajectores looks worst 
            than than other ocuntry
           </Typography>
           <Typography variant="subtitle1" sx={{my:1}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente quibusdam fuga molestiae recusandae ratione repellat repudiandae! Minus accusantium at voluptatum, 
            consequuntur facilis harum nisi quasi, vero praesentium cupiditate quibusdam.
           </Typography>
           <Button sx={styles.readMore}>Read More</Button><br/>
           <img src="https://picsum.photos/400/150?grayscale" alt="news" />
          </Grid>
        </Grid>
    )
}