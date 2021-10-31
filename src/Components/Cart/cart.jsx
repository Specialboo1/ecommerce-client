import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {makeStyles} from '@mui/styles'
import {Box, Typography, Button, Grid} from '@mui/material'
import CartItem from './cartItem'
import {removeItem} from '../../redux/actions/cartActions'
import EmptyCart from './EmptyCart'
import TotalView from './TotalView'
import { payUsingPaytm } from "../../Api/api";
import  { post } from '../../utils/paytm'


const useStyles = makeStyles(theme =>({
    component : {
        marginTop : 55,
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftcomponent : {
        width: '67%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
       background: "white",
       padding: '15px 20px'
    }
}))



const Cart = () => {

    const classes = useStyles()

    const {cartItems} = useSelector(state => state.cart)

    const dispatch = useDispatch();

    useEffect(() => {
        
        console.log(cartItems)

    }, [])

    const removeItemFromCart = (id) => {

        dispatch(removeItem(id))


    }

    const buyNow = async () => {

        let response = await payUsingPaytm(
            
          {amount: 500, email: 'boopalan1314@gmail.com'}
        );
  
        let information = {
            action : 'https:/securegw-stage.paytm.in/order/process',
            params : response
        }
  
        post (information)
      }

    return(
       <>
       {
           cartItems.length ?

           <Grid container className={classes.component}>

               <Grid item lg={9} md={9} sm={12} xs={12} ClassName={classes.leftcomponent}>

                    <Box className={classes.header}>

                            <Typography style={{frontSize: 18, fontWeight: 600}} >
                                
                             My Cart ({cartItems.length})</Typography>
                     </Box>   
                    {

                        cartItems.map((item) => (
                            <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            )) 

                    }
                    <Box style={{padding: '16px 22px', background:'#fff', borderTop:'1px solid #f0f0f0',
                boxShadow: '0 2px 10px 0 rgb(0 0 0 /10%)'}}>
                        <Button onClick={() => buyNow()} variant="contained" style={{background: "#fb641b", width: 250, height: 50, display:'flex', marginLeft:'auto'}}>
                            Place Order</Button>
                    </Box>   
                </Grid>  

               
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems}/> 
                 
                </Grid>

           </Grid>

           : <EmptyCart/>
       }
       </>
    )
}

export default Cart