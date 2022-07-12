import Image from "next/image";
import { SkillsData } from "./SkillsData";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-zinc-700 text-center py-4">Skills</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsData.map((data, id) => {
            return (
              <div
                key={id}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={data.image}
                      width="64px"
                      height="64px"
                      alt="/"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{data.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
