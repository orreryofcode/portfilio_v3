import Work from "../components/Work";
import projects from "../data/projects";

function Works() {
  return (
    <div className='works__container'>
      <div className='works__grid'>
        {projects.map((project) => (
          <Work
            key={project.id}
            title={project.title}
            tags={project.tags}
            body={project.body}
            img={project.title.toLowerCase()}
            vercel={project.vercel}
            github={project.github}
            count={project.count}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
