import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects/Projects";

const Home = () => {
    return (
        <div className="space-y-10">
            <Banner />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;