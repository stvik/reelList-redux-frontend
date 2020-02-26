import React, { Fragment } from 'react'
import { Link, Card, Button, CardActionArea, CardContent, CardActions, CardMedia, Typography, Modal, Fade, Backdrop, Paper } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import MovieModal from './MovieModal'


const MovieCard = (props) => {

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const pickImage = () => {
    if (props.movie.picture) {
      return props.movie.picture
    } else {
      return 'https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    }


  }


	return (
    <>
    	<Card onClick={handleOpen} className='movieCard'>
          <CardActionArea>
            <CardMedia
              image={pickImage()}
              title="Movie Image"
              component="img"
              className='movieImage'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" display='block'>
                {props.movie.title}
              </Typography>
              <Rating name='half-rating-read' value={props.movie.rating/2} precision={0.1} readOnly size='small' /> 
              <Typography variant="body2" noWrap color="textSecondary" component="p">
              	{props.movie.description}
              </Typography>
            </CardContent>
          </CardActionArea>
     
        </Card>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
         >
        <Fade in={open}>
          <MovieModal movie={props.movie}/>
        </Fade>
      </Modal>
    </>

		)


}

export default MovieCard