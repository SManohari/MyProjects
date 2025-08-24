import './Projects.css';

function Projects({ data }) {
  return (
    <div className="projectContainer" id="projects">
      <p>PROJECTS</p>
      <div className="rowProj">
        {data.map((proj) => (
          <div className="projectClass" key={proj.id}>
            <div>
              <img src={proj.projectImage} alt={proj.projectName} />
            </div>
            <div>
              <p>{proj.projectName}</p>
            </div>
            <div className="buttonClass">
              <a href={proj.demoLink}>DEMO</a>
              <a href={proj.sourceLink}>SOURCE</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
