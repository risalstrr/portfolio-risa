import { ExperiencesData } from "./ExperiencesData";

export const Experiences = () => {
  return (
    <>
      <div id="experiences" className="xl:mx-36 h-2/3 md:mx-20 mx-12">
        <div className="rounded-xl">
          <h2 className="text-zinc-700 text-center">Experiences</h2>
          {ExperiencesData.map((data, id) => (
            <div
              key={id}
              className="relative mt-4 bg-underlineOrange overflow-hidden rounded-xl p-2 bg-[#ecf0f3]"
            >
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="h-full w-full p-3 flex items-center max-h-full">
                <h1 className="xl:text-xl font-bold md:text-lg text-sm mr-5">
                  <span className="italic text-stone-600">{data.role}</span>
                  {data.title}
                </h1>
              </div>
              <div className="absolute top-5 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="overflow-hidden rounded-lg bg-[#ecf0f3] transition-all duration-500 max-h-0 peer-checked:max-h-full">
                <div className="marker:text-sky-400 p-5 border-t text-justify whitespace-pre-wrap">
                  {data.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
