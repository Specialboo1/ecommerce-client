import { Typography, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import {Link} from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const useStyles = makeStyles({

    icon : {
        display : 'flex',
        textDecoration: 'none',
        color: '#fff'
    }

})

const Profile = ({account,setAccount}) => {

    const [open,setOpen] = useState(false)

    const classes = useStyles();

    const handleClose = () => {

        setOpen(false)
    }

    const handleClick = (event) => {

        event.preventDefault()

        setOpen(event.currentTarget)
    }

    const logout = () => {

        setAccount('');
    }

    return (
      <>
       <Link className={classes.icon}> <Typography onClick={handleClick}>{account}</Typography> </Link>
        <Menu className = {classes.component}
          anchorEl={open}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={ () => {handleClose(); logout()}}> <PowerSettingsNewIcon fontSize="small" color ='primary' />
          <Typography className={classes.logout}
          
          style={{marginLeft: 10, fontSize: 14}}

          >Logout</Typography></MenuItem>
        </Menu>
      </>
    );
}


export default Profile