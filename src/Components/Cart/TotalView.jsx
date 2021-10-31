import {Box, Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {useState, useEffect, useContext} from "react"
import {DataContext} from '../../Context/DataProvider'



const useStyles = makeStyles({
    component: {
        // width:'30%',
        background: 'white',
        marginLeft: 15
    },
    header: {
        padding: '16px 24px',
        borderBottom: '1px solid #f0f0f0'
    },
    container: {
        padding: '15px 24px',
    },
    price: {
        float: 'right'
    }
})


const TotalView = ({cartItems}) => {

    const [price, setPrice] = useState(0);
    
    const [discount, setDiscount] = useState(0);

    const {timer, setTimer} = useContext(DataContext);    

    const classes = useStyles();

    useEffect(() => {
        
        TotalAmount();
       
    }, [cartItems, timer])

    const TotalAmount = () => {
        let price = 0, discount = 0;        

        cartItems.map((item) => {

            price = (price + item.price.mrp ) * timer;
            discount = (discount + (item.price.mrp - item.price.cost)) * timer
        });

        setPrice(price );
        setDiscount(discount)
    }

    return(
        <Box className={classes.component}>

            <Box className={classes.header}>

                <Typography style={{color: '#878787'}}>PRICE DETAILS</Typography>
             </Box> 
            <Box className={classes.container}> 
             <Typography 
             style={{fontSize:14, marginTop: 20}}>Price ({cartItems.length} item) <span className={classes.price}>₹{price}</span>
             </Typography>
             <Typography style={{fontSize:14, marginTop: 20}}>Discount <span className={classes.price}>₹{discount}</span></Typography>
             <Typography style={{fontSize:14, marginTop: 20}}>Delivery Charge <span className={classes.price}>₹40</span></Typography>
             <Typography style={{fontSize:18, marginTop: 20, fontWeight: 600, borderTop: '1px dashed #e0e0e0', borderBottom: '1px dashed #e0e0e0', padding: '20px 0'}}>
                 Total Amount <span className={classes.price}>₹{price - discount + 40}</span></Typography>
             <Typography style={{fontSize:14, marginTop: 20, color: 'green'}}>You will save ₹{discount - 40} on this order</Typography>        
            </Box> 

        </Box>    




    )

}


export default TotalView