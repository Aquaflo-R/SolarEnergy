import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between p-7">
        <Link className="text-xl font-bold" to="/">
          Airneb
        </Link>
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
