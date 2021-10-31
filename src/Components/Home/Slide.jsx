import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {makeStyles} from '@mui/styles';
import {Box, Button, Divider} from '@mui/material';
import Typography from "@mui/material/Typography";
import Countdown from 'react-countdown';
import { styled } from "@mui/system";
import {Link} from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const useStyles = makeStyles(theme =>({  
    deal : {
        padding : "15px 20px",
        display : 'flex'
    },    
    timer : {
        color : '#7f7f7f',
        marginLeft : 10,
        display : 'flex',
        alignItems : 'center'
    },
    image: {
        height : 150,
    },
    text : {
        fontSize : 14,
        marginTop : 5
    },
    wrapper : {
        padding : "10px 15px"
    },
    icon : {
        display : 'flex',
        textDecoration: 'none',
        color: '#fff'
    },
    cover: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))

const MyButton = styled(Button)({
    background: '#2874f0', marginLeft : 'auto', fontSize: 13, color : 'white', "&:hover": {background: '#2874f0'}
})
const MyBox = styled(Box)({
    background : 'white', marginTop : 12
})

const Slide = ({timer, title, products}) =>{

    const classes = useStyles()    
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds}) => {
               return <span className={classes.timer}> {hours} : {minutes} : {seconds} Left</span>;       
      };
    return(
    <MyBox >
    <Box className = {classes.deal} style={{display: 'flex'}}>
    <Typography style ={{ fontSize :22, fontWeight : 600, lineHeight : '32px',
            marginRight : 25,}} >{title}</Typography>
    {
    timer &&
    <Box className={classes.cover}>
    <img src = {timerURL} style ={{width: 24}}/>
    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} style={classes.timer}/>
    </Box>
    }
     <MyButton>View All</MyButton>
    </Box>
    <Divider/>
    <Carousel
    responsive={responsive} infinite={true}
    draggable = {false} swipeable ={false}
    centerMode = {true}
    autoPlay = {true}
    autoPlaySpeed ={10000}
    keyBoardControl = {true}
    showDots = {false}
    // removeArrowOnDeviceType = {["tablet", "mobile"]}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
        {
            products.map((item)=> (
            <Link to={`product/${item.id}`} className={classes.icon}>
            <Box textAlign="center" style={{padding: '35px 15px'}}>
            <img src={item.url} className = {classes.image}/>
            <Typography  style={{fontWeight : 600, color : '#212121',  fontSize : 14,
        marginTop : 5}}>{item.title.shortTitle}</Typography>
            <Typography  style={{color: "green",fontSize : 14,
        marginTop : 5}}>{item.discount}</Typography>
            <Typography  style={{color: "#212121", opacity :"0.6",fontSize : 14,
        marginTop : 5}}>{item.tagline}</Typography>
            </Box>
            </Link>
            ))
        }
    </Carousel>
    </MyBox>)
}

export default Slide