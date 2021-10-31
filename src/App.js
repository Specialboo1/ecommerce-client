import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/cart'
import TemplateProvider from './templates/TemplateProvider';
import DataContextProvider from './Context/DataProvider';
import DetailView from './Components/product/DetailView';
import {Box} from '@mui/material'


function App() {
  return (
     <TemplateProvider>    
      <Router>      
      <Switch>
      <DataContextProvider>      
      <Topbar/>
      <Box style ={{marginTop : 54}}>
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} exact/>
      <Route path="/product/:id" component={DetailView} exact/>
      </Box>      
      </DataContextProvider>
      </Switch>
      </Router>      
    </TemplateProvider>
    
  );
}

export default App;
