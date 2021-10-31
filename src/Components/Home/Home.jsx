import {Box} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {getProducts as listProducts} from '../../redux/actions/productActions'

import NavBar from "./Navbar"
import Banner from "./Banner"
import Slide from "./Slide"
import MidSection from "./MidSection"

const useStyles = makeStyles(theme => ({
    component : {
        padding : 10,
        background : '#F2F2F2'
    },
    leftwrapper: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    rightwrapper : {
        background : "#FFFFFF",
        padding : 5,
        margin : '12px 0 0 10px',
        width : '17%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}))

const Home = () =>{

const classes = useStyles();

const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

   const {products} = useSelector(state => state.getProducts);

   const dispatch = useDispatch();

   useEffect(() => {
       
        dispatch(listProducts())
      
   }, [dispatch])


    return (
    <div>
    <NavBar/>
    <Box className={classes.component}>
    <Banner/>
    <Box style={{display : 'flex'}}>
        <Box className={classes.leftwrapper}>
             <Slide timer ={true} title="Deal of the Day" products={products}/>
        </Box>
        <Box className={classes.rightwrapper}>
             <img src={adURL} style={{width : 200, height: 355}}/>
        </Box>
    </Box>
    <MidSection/>
        <Slide timer ={false} title="Discounts for You" products={products}/>
        <Slide timer ={false} title="Suggested Items" products={products}/>
        <Slide timer ={false} title="Top Selection" products={products}/>
        <Slide timer ={false} title="Recommended Items" products={products}/>
        <Slide timer ={false} title="Best Sellers" products={products}/>
    </Box>    
    </div>
    )
}
export default Home