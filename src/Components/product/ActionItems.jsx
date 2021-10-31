import { Box, Button } from "@mui/material"
import { makeStyles } from "@mui/styles";
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material'
import { addtoCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { payUsingPaytm } from "../../Api/api";
import  { post } from '../../utils/paytm'

const useStyles = makeStyles(theme => ({
    leftcontainer: {
        padding : '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    image : {
        width: '90%',
        padding: '15px 20px',
        border: '1px solid #f0f0f0'
    }
}))

const styles = {
    "&.MuiButton-contained": {
        height : 50,
        width: '45%',
        fontSize: 13
}
};

const ActionItems = ({product}) => {

    const classes = useStyles();

    const history = useHistory();

    const dispatch = useDispatch()

    const addItemToCart = () => {

        dispatch(addtoCart(product.id))
        history.push('/cart')
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
        <Box className={classes.leftcontainer}>
            <img src={product.detailUrl} className={classes.image}/><br/>
            <Button sx={styles} onClick={() => addItemToCart()} variant="contained" style={{background: '#ff9f00', marginRight: 10}}><Cart/>Add to Cart</Button>
            <Button onClick={() => buyNow()} sx={styles} variant="contained" style={{background: '#fb641b'}}><Flash/>Buy Now</Button>
        </Box>   
    )
}

export default ActionItems