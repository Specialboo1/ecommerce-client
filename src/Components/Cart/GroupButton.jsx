import {Button, ButtonGroup} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {useContext} from 'react'
import {DataContext} from '../../Context/DataProvider'



const useStyles = makeStyles({
    
    component: {
        marginTop: 30,
    }
})

const GroupButton = () => {

    const classes = useStyles();

    const {timer, setTimer} = useContext(DataContext)

    const handleDecrement = () =>{
        setTimer(timer => +timer-1)
    }
    const handleIncrement = () =>{
        setTimer(timer => +timer+1)
    }

return(
    <ButtonGroup className={classes.component} style={{borderRadius: '50%'}}>

        <Button style={{borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%'}}
        onClick={()=> handleDecrement()} disabled ={timer === 1}>-</Button>
        <Button>{timer}</Button>
        <Button style={{borderTopRightRadius: '50%', borderBottomRightRadius: '50%'}} 
        onClick={()=> handleIncrement()} >+</Button>


    </ButtonGroup>   
)

}

export default GroupButton