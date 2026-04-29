import ProjectCard from "./ProjectCard";
import { projectsData } from "./projects.data";

export default function Project() {
  return (
    <>
      <section
        id="project"
        className="max-w-container-max mx-auto px-margin-x mb-section-gap scroll-mt-24"
      >
        <div className="mb-16">
          <h2 className="font-h2 text-h2 text-on-surface mb-4">
            Selected Works
          </h2>
          <div className="h-px w-full bg-linear-to-r from-primary-container to-transparent opacity-30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
