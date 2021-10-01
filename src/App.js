import './App.css';
import Header from './containers/Header'
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
     <Header />
     <Switch>
     <Route path="/" exact component={ProductListing} />
     <Route path="/product/:productId" exact component={ProductDetail} />
     <Route>404 Not found!</Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;

// First step:  Go in contants/action-type.js file and create all actions here which you want to perform in application
//Second step:  Go in Action/ProductActions.js and create actions(datas)
// Third step:  Go to Reducer/productReducer.js file and create methods what to do
// Fourth step: Go to Reducer/index.js and create all productsReducers
// Fifth step:  Go to redux-devtool-extention site and copy link and paste in store.js
// Sixth step:  Go to index.js and import Provider and store to link react to redux
//Seventh Step: Go to 