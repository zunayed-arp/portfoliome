import { NavLink } from "react-router-dom";

const Navbar = (props: any) => {
    const { darkMode, switchDarkMode } = props;

    const navNavLinks: { title: string, path: string }[] = [
        { title: "Home", path: "/" },
        { title: "About", path: "about" },
        { title: "Portfolio", path: "portfolio" },
        { title: "Contact", path: "contact" }
    ];

    return (
        <nav className="flex justify-between mb-20">
            <div>
                <h1 className="text-3xl">ZèD.</h1>
            </div>
            <ul className="flex space-x-5">
                {
                    navNavLinks.map(element => <li key={element.path}>
                        <NavLink
                            className={({ isActive }) => isActive ?
                                "border-b-2 border-black dark:border-white pb-2" : //Indicates active links classes
                                "hover:text-gray-400"} //Indicates inactive links classes
                            to={`${element.path}`}
                        >
                            {element.title}
                        </NavLink>
                    </li>)
                }
                <li>
                    <button onClick={switchDarkMode} className="bg-black text-white dark:bg-white dark:text-black px-2 rounded-lg">{darkMode ? "Light Mode" : "Dark Mode"}</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;