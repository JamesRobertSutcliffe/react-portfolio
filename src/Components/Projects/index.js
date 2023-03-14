import React from "react";
import Project from "./project";
import projectData from "./../../projectData.json"


const Projects = () => {

    return (
        <div>
            <div class="container mt-2 min-vh-100 d-flex align-items-center">
                <div class="row">
                    <h2 class="text-center m-1 p-1 fw-bold"><u>Projects</u></h2>
                    {projectData.map(item => {
                        return <Project name={item.name}
                            image={item.image}
                            stack1={item.stack[0]}
                            stack2={item.stack[1]}
                            stack3={item.stack[2]} />
                    })}
                </div>
            </div>

        </div>
    );

}

export default Projects;