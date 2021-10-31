import axios from 'axios';
import * as actionTypes from '../constants/cartConstant'


const url = 'http://localhost:8000';

export const addtoCart = (id) => async (dispatch) => {

    try {
        const {data} = await axios.get(`${url}/product/${id}`) 

        dispatch({type : actionTypes.ADD_TO_CART, payload: data})

    } catch (error) {

        console.log('Error in add to cart api')
        
    }

}

export const removeItem = (id) => (dispatch) =>{

    dispatch({type : actionTypes.REMOVE_FROM_CART, payload: id})

}