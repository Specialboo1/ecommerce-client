import { bannerData } from "../../constants/data"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
    image: {
        width : '100%',
        height: 230,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}));

const Banner = () => {
    const classes = useStyles();
    return(
       <Carousel showThumbs={false} showIndicators={false} showStatus={false}
       infiniteLoop={true} autoPlay={true}>
        {
            bannerData.map( (image) => (
                <img src={image} className={classes.image}/>
            ))
        }
    </Carousel>
   
    )
}

export default Banner