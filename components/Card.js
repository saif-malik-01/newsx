import { Card as Container ,CardMedia,CardActions,CardContent, Typography,Button } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import React from 'react'

const styles = {
   root:{
     width:300,
     transition:'500ms',
     '&:hover':{
       border:'solid 1px',
       boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
     }
   }

}



export default function Card() {
    return (
        <Container sx={styles.root} variant="outlined">
          <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/400/120?grayscale"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{color:'black',fontWeight:'bold',p:1}}>
              Read More
              <ArrowForwardRoundedIcon sx={{fontSize:'20px',ml:2}}/>
            </Button>
          </CardActions>
        </Container>
    )
}
