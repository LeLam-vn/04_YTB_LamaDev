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
    return (
        <Home/>
    );
};

export default App;