import React from "react";
import Project from "./project";
import projectData from "./../../projectData.json"


const Projects = () => {

    return (
        <div class="container mt-2 min-vh-100 d-flex align-items-center">
            <div class="row">
                {projectData.map(item => {
                    return <Project name={item.name}
                        image={item.image}
                        stack1={item.stack[0]}
                        stack2={item.stack[1]}
                        stack3={item.stack[2]} />
                })}
            </div>
        </div>
    );

}

export default Projects;