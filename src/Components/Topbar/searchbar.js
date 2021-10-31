import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import {List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import {makeStyles} from '@mui/styles'

const Search = styled('div')(({ theme }) => ({
    borderRadius: 2,
    backgroundColor: '#fff',
    marginLeft: 10,
    width: '38%',
    display : 'flex'
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: 5,
    height: '100%',
    display: 'flex',
    color : 'blue'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    
      paddingLeft: 20,
      width : '100%',
      fontsize: 'unset'
  }));
  
const useStyles = makeStyles({
  list: {
    position: 'absolute',
    color: '#000',
    background: '#FFFFFF',
    marginTop: 36
  }
})


const Searchbar = () => {

  const classes = useStyles()

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)

  const getText = (text) => {
      setText(text);
      setOpen(false);
  }

return(
<Search>            
            <StyledInputBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
              onChange ={(e) => getText(e.target.value)}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            {
              text && 
              <List style={{position: 'absolute',
              color: '#000',
              background: '#FFFFFF',
              marginTop: 36}} hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
          </Search>
    )
}

export default Searchbar