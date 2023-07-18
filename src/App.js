import "./App.css";
import "./componentStyling/footer.css";
import "./componentStyling/nav.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //importing to handle routing for the entire application
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Footer from "./components/Footer";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* Importing the nav component to every page */}
          <Nav />
          {/* defining the routes for the application */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Router>
      {/* Importing the footer component */}
      <Footer />
    </div>
  );
}

export default App;
