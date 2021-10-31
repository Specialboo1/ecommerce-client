import { useState, useContext } from 'react'
import Box from '@mui/material/Box'
import  Button  from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import {makeStyles} from '@mui/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import LoginDialog from '../login/Login';
import {DataContext} from '../../Context/DataProvider'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';


const styles = {
        "&.MuiButton-contained": {
             padding: '5px 60px',
            background : '#FFFFFF',
            color: '#2874f0',
            textTransform: 'none',
            fontWeight: 500,
            boxShadow: 'none',
    }
  };

const useStyles = makeStyles(theme =>({
    wrapper : {
        display : 'flex', 
        marginLeft: '5%',
        alignItems: 'center',
        
    },  
    icon : {
        display : 'flex',
        textDecoration: 'none',
        color: '#fff',
    }
}))

const TopbarButtons = () =>
{
    const [open, setOpen] = useState(false)
    const classes = useStyles();
    const {account, setAccount} = useContext(DataContext)

    const {cartItems} = useSelector(state => state.cart);

    const openDialogLogin = (event) => {
      event.preventDefault();
      setOpen(true)
    }
    const matches = useMediaQuery('(max-width:900px)');

return(
    <Box className={classes.wrapper}>
      {
      account ? <Profile account={account} setAccount={setAccount}/> :
        <Link className={classes.icon}>   <Button sx={styles}  variant="contained" onClick={(event)=> openDialogLogin(event)}>           
    Login
  </Button> </Link> 
      }
      
     
<Link to="/" className={classes.icon} style={{margin: '0 5% 0 20%'}}><Typography >More</Typography></Link>
<Link to="/cart" className={classes.icon} style={{margin: '0 5% 0 10%'}}>
<Badge  color="secondary" badgeContent={cartItems.length}>
<ShoppingCartIcon/> 
</Badge>
<Typography style={{margin: '0 5% 0 20%'}}>Cart</Typography>
</Link>
<LoginDialog  open={open} setOpen={setOpen} setAccount={setAccount} />
  </Box>)
}

export default TopbarButtons