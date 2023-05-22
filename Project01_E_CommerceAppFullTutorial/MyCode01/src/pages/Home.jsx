import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Slider from "../components/Slider.jsx";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products.jsx";

const Home = () => {
    return (
        <>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
        </>
    )
}
export default Home