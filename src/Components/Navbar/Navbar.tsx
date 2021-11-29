import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navNavLinks: { title: string, path: string }[] = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Contact", path: "/contact" }
    ];

    return (
        <nav className="flex justify-between">
            <div>
                <h1 className="text-4xl font-bold">ZèD</h1>
            </div>
            <ul className="flex space-x-5">
                {
                    navNavLinks.map(element => <li key={element.path}>
                        <NavLink to={`${element.path}`}>{element.title}</NavLink>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;