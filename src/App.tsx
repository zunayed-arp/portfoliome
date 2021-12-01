import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Components/Blogs/Blogs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/App.css"
import ProjectDetails from "./Components/Home/Projects/ProjectDetails/ProjectDetails";
import Home from "./Components/Home/Home/Home";

AOS.init({
  startEvent: 'DOMContentLoaded',
});

function App() {
  const [ darkMode, setDarkMode ] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, [])

  const switchDarkMode = () => {
    if (darkMode) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
    setDarkMode(!darkMode)
  };
  return (
    <div className="pt-5 md:pt-10 px-5 pb-5 md:px-40 dark:bg-black dark:text-white min-h-screen">
      <BrowserRouter>
        <Navbar
          darkMode={darkMode}
          switchDarkMode={switchDarkMode}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
