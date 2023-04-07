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
        <div>
          {projects.map((project, index) => (
            <div key={index}>
              <h4 onClick={() => handleProjectClick(project)}>
                {project.title}
              </h4>
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
