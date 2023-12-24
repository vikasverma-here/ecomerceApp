import { Route,Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Catagories from "./pages/catagories/catagories";
import Productdetails from "./pages/productDetails/productdetails";
import NavBar from "./conponent/navBar/navBar";
import Footer from "./conponent/footer/footer";

function App() {
  return (
    <div className="App">
     
      <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Catagories/>} />
    <Route path="/product/:productId" element={<Productdetails/>} />
   </Routes>
    <Footer/>
    </div>
  );
}

export default App;
