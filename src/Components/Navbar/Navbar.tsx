import { NavLink } from "react-router-dom";

const Navbar = (props: any) => {
    const { darkMode, switchDarkMode } = props;

    const navNavLinks: { title: string, path: string }[] = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Blogs", path: "/blogs" }
    ];

    return (
        <nav className="md:flex justify-between mb-10 md:mb-20">
            <div>
                <h1 className="text-3xl">ZèD.</h1>
            </div>
            <ul className="flex justify-between space-x-2 md:space-x-5 mt-5 md:mt-0">
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