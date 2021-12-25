import React from 'react';
import {Grid,Avatar,Typography,Button, Divider,useMediaQuery} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import NewsLetter from './NewsLetter';

const styles = {
    avatarBox:{
        borderRight:'solid 2px black',
    },
    channel:{
        fontSize:'16px'
    },
    heading:{
        fontSize:'1.8rem',
    },
    readMore:{
        borderRadius:0,
        color:'black',
        fontWeight:'bold',
        mb:1
    },
    stickyHeading:{
        position:'fixed',
        top:0,
        left:0,
        p:1,
        backgroundColor:'black',
        color:'white',
        margin:'4px 5px'
    }
}

export default function News() {

    const [isSticky,setIsSticky] = React.useState(false); 
    const isMd = useMediaQuery('(max-width:900px)')
    const isSm = useMediaQuery('(max-width:375px)')

    React.useEffect(()=>{
        const ele = document.getElementById('news-heading');
        function handleScroll(){
            if(ele.getBoundingClientRect().top <= 0){
                setIsSticky(true);
            }else setIsSticky(false); 
        }
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    },[])

    return(
        <Grid container sx={{pr:isMd ? 0 : 4}}>
          <Grid item xs={12} sx={isSticky ? styles.stickyHeading : {p:1}} container id="news-heading">
            <Grid item sx={styles.avatarBox}>
            <Avatar
            alt="Avatar"
            src="./"
            sx={{mr:1}}
            />
            </Grid >
            <Grid item sx={{ml:2}}>
            <Typography variant="caption">2020 DEC 2</Typography>
            <Typography variant="h4" sx={styles.channel}>BBC Media Channel</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{p:1}}>
           <Typography variant="h1" sx={styles.heading}>
            The Ajj tak coronovairus trajectores looks worst 
            than than other ocuntry
           </Typography>
           <Typography variant="subtitle2" sx={{mt:1,fontSize:'16px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente quibusdam fuga molestiae recusandae ratione repellat repudiandae! Minus accusantium at voluptatum, 
            consequuntur facilis harum nisi quasi, vero praesentium cupiditate quibusdam.
           </Typography>
           <Button sx={styles.readMore}>
               Read Story
               <ArrowForwardRoundedIcon sx={{fontSize:'20px',ml:2}}/>
            </Button><br/>
           <img src="https://picsum.photos/400/120?grayscale" alt="news" style={{width:'100%'}}/>
           <Divider sx={{mt:1,width:'100%'}} />
           {!isSm && <NewsLetter/>}
          </Grid>
        </Grid>
    )
}