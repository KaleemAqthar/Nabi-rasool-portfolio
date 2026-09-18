import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

function Projects() {
  return (
    <main>

      <section className="page-hero">

        <div className="container">

          <span className="section-eyebrow">
            PROFESSIONAL WORK
          </span>

          <h1>
            Construction &
            <br />
            <span>contracting.</span>
          </h1>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="PROJECTS"
            title="Professional work and projects."
            description="A selection of construction and contracting projects."
          />

          <div className="projects-grid">

            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projects;