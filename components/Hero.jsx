import Image from "next/image";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Get To Know Me!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Risa</span>
          </h1>

          <h2 className="py-2 text-gray-700">Computer Science Student</h2>
          <h2 className="py-2 text-gray-700">
            at <span className="text-yellow-500">University of Indonesia</span>
          </h2>
          <div className="py-10">
            <p className="text-lg text-cyan-600 tracking-widest">
              Let's Connect!
            </p>
            <div>
              <ul className="flex mx-auto items-center gap-4 justify-center w-full my-5">
                <a href="https://www.linkedin.com/in/risa-lestari-471776217/">
                  <div className="shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 p-3 rounded-full ease-in duration-500">
                    <FaLinkedinIn size={25} />
                  </div>
                </a>
                <a href="https://github.com/risalstrr">
                  <div className="shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 p-3 rounded-full ease-in duration-500">
                    <AiOutlineGithub size={25} />
                  </div>
                </a>
                <a className="/">
                  <div className="shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 p-3 rounded-full ease-in duration-500">
                    <AiOutlineMail size={25} />
                  </div>
                </a>
              </ul>
              <p className="text-sm tracking-widest text-gray-600">
                risa.lestari@ristek.cs.ui.ac.id
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
