import { Link } from "react-router-dom";
import Typical from "react-typical";
import img from '../../../assets/original.svg';

const Banner = () => {
  const resumeID: string = "15Ijsyf_rc5TLuBgE89WMmKi1yGQtJ5wg";

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col-reverse md:flex-row justify-between md:-mt-20"
    >
      <div className="md:w-1/2 my-auto">
        <div className="text-4xl md:text-5xl font-bold leading-normal">
          <Typical
            steps={[
              "Hello!",
              1000,
              "Konnichiwa!",
              1000,
              "Hola!",
              1000,
              "Bonjour!",
              1000,
              "Nǐn hǎo!",
              1000,
              "Olá!",
              1000,
            ]}
            loop={Infinity}
            wrapper="h1"
          />
          <h1 className="mt-5">I'm Zunayed Patwary</h1>
        </div>
        <ul className="flex space-x-5 text-2xl md:text-3xl inline-block mt-5">
          <li>
            <p className="text-xl">Connect with me at:</p>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/zunayed-arp"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/zunayed-arp/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          {/* <li>
                        <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/16378127"><i className="fab fa-stack-overflow"></i></a>
                    </li> */}
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:zunayed.arp@gmail.com"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
        <a
          className="mt-5"
          href={`https://drive.google.com/uc?id=${resumeID}&export=download`}
        >
          <button className="bg-black text-xl text-white dark:bg-white dark:text-black inline-block mt-5 px-20 py-4 rounded-lg">
            Download Resume
          </button>
        </a>
      </div>
      <div className="md:w-1/2 md:pl-20">
       <img src={img} alt="" />

       
      </div>
    </div>
  );
};

export default Banner;
