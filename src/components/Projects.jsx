import React, { useState, useEffect } from "react";
import Messaging from "./Messaging";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function getProjectData() {
      const response = await fetch("./projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getProjectData();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const loaded = () => {
    return (
      <div className="parent2">
        <div className="proj-scroll">
          {projects.map((project, index) => (
            <div key={index}>
              <div onClick={() => handleProjectClick(project)}>
              <img
                    src={project.images[0]}
                    alt="projectImages"
                    className="project-icon"
                  />
                <h3 className="proj-title">{project.title}</h3>
                <p>{project.short_description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          {selectedProject && (
            <Messaging description={selectedProject.description} />
          )}
        </div>
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
