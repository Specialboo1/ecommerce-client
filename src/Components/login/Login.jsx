import {useState} from 'react'
import { Dialog, DialogContent, Box, Typography, TextField, Button } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { authenticateSignup, aunthenticateLogin } from '../../Api/api';

const useStyles = makeStyles({
    component : {
        height : '70vh',
        width : '90vh'
    },
    image : {
        backgroundImage : `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        backgroundRepeat : 'no-repeat',
        height : '70vh',
        background: '#2874f0',
        width : '40%',
        backgroundPosition : 'center 85%',
        padding : '45px 35px',

        '& > *' : {
            color : "#FFFFFF",
            fontWeight : 600
        }
    },
    login : {
        padding : '20px 35px',
        display : 'flex',
        flex : 1,
        flexDirection : 'column', 
    },
    
    text : {
        color: '#878787',       
    },
   createtext : {
            textAlign : 'center',
    } 
    
})

const initialValues = {
    
    login : {
        view : 'login',
        heading : 'Login',
        subHeading : "Get access to your Orders, Wishlist and Recommendations"
    },
    signup : {
        view : 'signup',
        heading : `Looks like you're new here!`,
        subHeading : "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : ' ',
    phone : ''

}

const loginInitialValues = {
    username : '',
    password : '',
}

const Login = ({open, setOpen, setAccount}) =>
{
        const classes = useStyles();

    const [account, toggleAccount] = useState(initialValues.login)

    const [signup, setSignup] = useState(signupInitialValues)

    const [login, setLogin] = useState(loginInitialValues)

    const [error, setError] = useState(false)

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValues.login)
    }

    const toggleUserAccount = () => {
        toggleAccount(initialValues.signup)
    }

    const signupUser = async () => {
     let response = await authenticateSignup(signup);
     if(!response) return;
     handleClose()
     setAccount(signup.username)
    }

    const loginUser = async () => {

        let response = await aunthenticateLogin(login);
        if(!response) {
            setError(true);
            return
        }
        handleClose()
        setAccount(login.username)
    }

    const onInputChange = (e) => {

        setSignup({...signup, [e.target.name] : e.target.value })
        
    }

    const onValueChange = (e) => {

        setLogin({...login, [e.target.name] : e.target.value })
    }

    return(
        
    <Dialog open = {open} onClose={() => handleClose()}>
     <DialogContent className={classes.component} style={{padding : '0px 0px'}}>
         <Box style={{display:'flex'}}>
             <Box className = {classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{marginTop : 20}}>{account.subHeading}</Typography>
            </Box>
            {
                account.view === 'login' ?
            <Box className={classes.login}>
                <TextField onChange={(e) => onValueChange(e)} name='username' label="Enter Email/Mobile number" variant="standard"/>
                <TextField onChange={(e) => onValueChange(e)} name='password' label="Enter Password" variant="standard"/>
                
                {error && <Typography style={{fontSize: 12, color: '#ff6161', marginTop: 0, fontWeight: 600}}
                >Invalid Username or Password</Typography>}
                                
                <Typography className={classes.text} style={{fontSize: 12, marginTop: 20}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                </Typography>
                <Button variant ="contained" style={{textTransform:'none', background :'#FB641B', 
                color: 'white', height: 48, boarderRadius: 2, marginTop: 20}}
                onClick={() => loginUser()}>Login
                </Button>
                <Typography style={{textAlign : 'center', marginTop: 10}} className={classes.text}>OR</Typography>
                <Button variant="contained" style={{textTransform:'none', background :'#FFFFFF', 
                color: '#2874f0', height: 48, boarderRadius: 2, marginTop: 10, boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'}}>
                Request OTP</Button>
                <Typography className={classes.createtext} onClick = {()=> toggleUserAccount()}
                style={{fontSize: 14, marginTop: 'auto', color:'#2874f0', fontWeight: 600, cursor:'pointer'}}>
                    New to Flipkart? Create an account</Typography>
            </Box> :         <Box className={classes.login}>
                <TextField onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname" variant="standard"/>
                <TextField onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname" variant="standard"/>
                <TextField onChange={(e) => onInputChange(e)} name='username' label="Enter Username" variant="standard"/>
                <TextField onChange={(e) => onInputChange(e)} name='email' label="Enter Email" variant="standard"/>
                <TextField onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone Number" variant="standard"/>
                <TextField onChange={(e) => onInputChange(e)} name='password' label="Enter Password" variant="standard"/>
                <Button variant="contained" style={{textTransform:'none', background :'#FFFFFF', 
                color: '#2874f0', height: 48, boarderRadius: 2, marginTop: 10, boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'}}
                onClick={()=> signupUser()}>
                Signup</Button>
            </Box> 
            }
        </Box>
     </DialogContent>
    </Dialog>
        )
}


export default Login