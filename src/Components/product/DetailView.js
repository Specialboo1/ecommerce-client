import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext } from "react";
import { getProductDetails } from "../../redux/actions/productActions";
import {Box, Typography, Table, TableBody, TableRow, TableCell} from '@mui/material';
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {LocalOffer as Badge} from '@mui/icons-material';
import ActionItems from "./ActionItems";



const useStyles = makeStyles(theme =>({
    component: {
        marginTop : 55,
        background : '#F2F2F2'

    },
    container : {
        background: '#fff',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightcontainer : {
        marginTop: 55,
    },    
}))

const DetailView = ({match}) => {

    const classes = useStyles()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const {product} = useSelector(state => state.getProductDetails);

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProductDetails(match.params.id));
    }, [dispatch])

  

    return(
        <Box className={classes.component} >
            { product && Object.keys(product).length &&
            <Grid container className={classes.container}>
                <Grid item lg={4} md={4} sm={8} xs={12} style={{minWidth: '30%'}}>
                        <ActionItems product={product}/>
                </Grid>                        
                <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightcontainer} style={{marginTop: 55}}>

                <Typography>{product.title.longTitle}</Typography>
                <Typography style={{fontSize: 14, color: '#878787', marginTop: 10}}>
                    8 Ratings & 1 Review
                    <span><img src={fassured} style={{width: 77}}/></span>
                </Typography>
                <Typography style={{marginTop: 10}}>
                    <span style={{fontSize: 28}}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span style={{color: '#878787'}}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{color: '#388E3C'}}>{product.price.discount}</span>
                </Typography>
                <Typography style={{marginTop: 20, fontWeight:600}}>Available Offers</Typography>  
                <Box style={{marginTop:10}}>
                <Typography style={{fontSize: 14, marginTop: 10}}><Badge style={{fontSize: 14, marginRight: 10, color:'green'}}/>
                    Special PriceGet extra 42% off (price inclusive of discount)</Typography>
                <Typography style={{fontSize: 14, marginTop: 10}}><Badge style={{fontSize: 14, marginRight: 10, color:'green'}}/>
                    Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography style={{fontSize: 14, marginTop: 10}}><Badge style={{fontSize: 14, marginRight: 10, color:'green'}}/>
                    Bank Offer15% Instant discount on first Pay Later order of ₹500 and above</Typography>
                </Box>
                <Table>
                    <TableBody>
                        <TableRow style={{fontSize: 14}}>
                            <TableCell style={{color: 'grey', borderBottom:'none'}}>Delivery</TableCell>
                            <TableCell style={{fontWeight: 600, borderBottom:'none'}}>{date.toDateString()} | ₹ 40</TableCell>                            
                        </TableRow>
                        <TableRow style={{fontSize: 14}}>
                            <TableCell style={{color: 'grey', borderBottom:'none'}}>Warranty</TableCell>
                            <TableCell style={{ borderBottom:'none'}}>No Warranty</TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell style={{color: 'grey', verticalAlign:'Baseline', borderBottom:'none'}} >Seller</TableCell>
                            <TableCell style={{fontSize: 14, borderBottom:'none'}}>
                                <span style={{color: '#2874f0'}}>AGILE</span>
                                <Typography style={{fontSize: 14}}>GST Invoice Available</Typography>
                                <Typography style={{fontSize: 14}}>15 Days Return Policy</Typography>
                                <Typography style={{fontSize: 14}}>View More Sellers Starting from ₹ 300</Typography>
                            </TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2} style={{ borderBottom:'none'}}>
                                {
                                    <img src={sellerURL} style={{width: 390}}/>
                                }
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{color: 'grey', borderBottom:'none'}}>Description</TableCell>
                            <TableCell style={{ borderBottom:'none'}}>{product.description}</TableCell>                            
                        </TableRow>
                    </TableBody>
                </Table>
                </Grid>                
            </Grid>
            }
         </Box>   
    )

}

export default DetailView