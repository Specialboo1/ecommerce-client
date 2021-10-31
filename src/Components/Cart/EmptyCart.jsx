import {Box, Typography, Button} from'@mui/material';
import {makeStyles} from '@mui/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({

       component:{
            margin: '80px 140px',
            width: '85%',
            background: '#fff',
            height: '65vh'
        },

        image: {
            width: '15%'
        },

        container : {

            textAlign: 'center',
            paddingTop: 70
        }
       
})
 

const EmptyCart = () => {

    const classes = useStyles()

    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const history = useHistory()

const ShopNow = () => {

    history.push('/')
}
return(
    <Box className={classes.component}>
        <Box className={classes.container}>
        <img src={emptycarturl} className={classes.image}/>
        <Typography style={{marginTop: 10}}>Your cart is empty!</Typography>
        <Typography style={{marginTop: 10}}>Add items to it now</Typography>
        <Button style={{marginTop: 10, padding:'12px 70px'}} variant="contained" onClick={()=>{ShopNow()}}>Shop Now</Button>
        </Box>
    </Box>   
)

}


export default EmptyCart