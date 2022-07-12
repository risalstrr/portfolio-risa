import Projects from "./Projects";
import okkui from "../public/assets/projects/okkui.png";
import sayembara from "../public/assets/projects/sayembara.png";

const ProjectDetail = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-zinc-700 text-center py-4">
          Collaboration Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projects
            title="OKK UI 2022"
            backgroundImg={okkui}
            projectUrl="https://okk.ui.ac.id/"
            tech="React JS"
          />
          <Projects
            title="Sayembara Project"
            backgroundImg={sayembara}
            projectUrl="https://sayembaraproject.com/"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
