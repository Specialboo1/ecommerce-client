import Appbar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {IconButton, Drawer, List, ListItem} from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {makeStyles} from '@mui/styles'
import Searchbar from './searchbar'
import TopbarButtons from './TopbarButtons'
import {Link} from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles(theme =>({
    topbar : {
            height : 55
    },
    logo : {
        width : 75
    },
    sublogo : {
        width : 10,
        marginLeft : 4,
        height : 10
    },
    cover : {
        display : 'flex'
    },
    list: {
        width: 250
    },
   
container :{
    marginLeft : "12%",
    lineHeight : 0,
    textDecoration : "none",
    color : "#fff"
},
subheading : {
    fontSize : 10,
    fontStyle : 'italic'
},
customButtons: {
    margin: '0 10% 0 auto', 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    } 
}
}))


const Topbar = () =>{

    const classes = useStyles();
    const matches = useMediaQuery('(max-width:900px)');
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    <TopbarButtons />
                </listItem>
            </List>
        </Box>
    );

    return(
    <Appbar className={classes.topbar} style={{backgroundColor : '#2874F0'}} >
        <Toolbar style={{minHeight: 55}}>
          { matches ? 
        <IconButton
        color = 'inherit' 
        onClick={handleOpen}>
            <Menu/>
        </IconButton> : null
          }
        <Drawer open={open} onClose={handleClose}>
        {list()}
        </Drawer>
        <Link to="/" className={classes.container} >
        <img src={logoURL} className={classes.logo}/>
        <Box className={classes.cover}>
        <Typography className={classes.subheading} style={{fontSize: 10}}>Explore <Box component ="span" style = {{color: "#FFE500"}}> Plus </Box> </Typography> 
        <img src={subURL} className={classes.sublogo}/>
        </Box>
        </Link>
     <Searchbar/> 
     <span className={classes.customButtons}><TopbarButtons/>  </span>
    </Toolbar>
    </Appbar>
    )
}

export default Topbar