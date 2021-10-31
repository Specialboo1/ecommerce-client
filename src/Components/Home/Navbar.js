import {navData} from '../../constants/data'
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography'
import {makeStyles} from '@mui/styles';


const useStyle = makeStyles ( theme =>(
    {
        component : {
            display : 'flex',
            margin: '55px 20px 0 20px',
            justifyContent : 'space-between',
            overflowX: 'scroll',
            [theme.breakpoints.down('md')]: {
                margin: 0
            }
        },
        container : {
            textAlign : 'center',
            padding : '12px 8px'
        },
        image : {
            width : 64
        },
        text : {
            fontsize: 14,
            fontweight: 600
        },
    } )
)

const NavBar = () => {
    const classes = useStyle();
    
    return(
    <Box className = {classes.component}>
        {
            navData.map(data => (
                <Box className={classes.container}>
                <img src={data.url} className={classes.image}/>
                <Typography className={classes.text} >{data.text}</Typography>
                </Box>
            ))
        }
        
    </Box>
        
        )
}

export default NavBar