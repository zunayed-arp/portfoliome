import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <div>
                <h1>ZèD</h1>
            </div>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;