import {Card, Box, Typography, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import GroupButton from './GroupButton';


const useStyle = makeStyles({
    component:{
        display: 'flex',
        borderRadius: 0,
        borderTop: '1px solid #f0f0f0'
    },
    leftcomponent: {

        margin: 20,
        display: 'flex',
        flexDirection: 'column'

    },
    rightcomponent: {

        margin: 20
    },
    image: {
        height: 110,
        width: 110
    }
})


const CartItem = ({item, removeItemFromCart})  => {
    
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const classes = useStyle()

    return(
        <Card className={classes.component}>
                <Box className={classes.leftcomponent}>
                    <img src={item.url} className={classes.image}/> 
                    <GroupButton/>
                </Box>   

                <Box className={classes.rightcomponent}>
                  <Typography>  {item.title.longTitle} </Typography>
                  <Typography style={{marginTop: 10, fontSize: 14, color: "#878787"}}>  Seller: AGILE 
                  <span><img src={fassured} style={{width: 50, marginLeft: 10}}/></span>
                  </Typography>
                  <Typography style={{margin: '20px 0'}}>
                      <span style={{fontSize:18, fontWeight: 600}}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                      <span style={{color: "#878787"}}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span style={{color: 'green'}}>₹{item.price.discount} off</span>
                  </Typography>  
                  <Button variant='contained' style={{marginTop: 20, fontSize:16, textTransform:'none'}}
                  onClick={()=> {removeItemFromCart(item.id)}}>
                      Remove</Button>
                </Box>   
        </Card>
    )
}


export default CartItem



