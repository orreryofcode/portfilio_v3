import Work from "../components/Work";
import projects from "../data/projects";

function Works() {
  return (
    <div className='works__container'>
      <h1 className='works__heading'>Works</h1>
      <div className='works__grid'>
        {projects.map((project) => (
          <Work
            key={project.id}
            title={project.title}
            tags={project.tags}
            body={project.body}
            img={project.img}
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
