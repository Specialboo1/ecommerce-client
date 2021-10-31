import {ImageURL} from '../../constants/data';
import { Box, Grid } from '@mui/material';
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    wrapper : {
        display : 'flex',
        marginTop : 20,
        justifyContent : 'space-between'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}))

const MidSection = () => {
    const classes = useStyles();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
        <Grid lg={12} sm={12} md={12} xs={12} container className ={classes.wrapper}>
            {
                ImageURL.map(image =>
                    (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} style={{width: '100%'}}/>
                        </Grid>
                    ))
            }
        </Grid>
        <img src ={coronaURL} className={clsx(classes.wrapper, classes.help)} style={{width : '100%', marginTop : 20}} />
        </>
    )
}


export default MidSection