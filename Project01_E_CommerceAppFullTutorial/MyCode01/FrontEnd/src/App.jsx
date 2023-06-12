import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import Product from "./pages/Product.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Success from "./pages/Success.jsx";

const App = () => {
    const user = true;
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/products/:category'>
                    <ProductList/>
                </Route>
                <Route path='/product/:id'>
                    <Product/>
                </Route>
                <Route path='/cart'>
                    <Cart/>
                </Route>
                <Route path='/login'>
                    {user ? <Redirect to='/'/> : <Redirect to='/login'/>}
                    <Login/>
                </Route>
                <Route path='/register'>
                    {user ? <Redirect to='/'/> : <Redirect to='/register'/>}
                    <Register/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;