import React from "react";
import Project from "./project";


const Projects = () => {

    return (
        <div class="container mt-2">
            <div class="row">
                <div class="col-lg-4 col-sm-12">
                    <Project />
                </div>
                <div class="col-lg-4 col-sm-12">
                    <Project />
                </div>
                <div class="col-lg-4 col-sm-12">
                    <Project />
                </div>
            </div>
        </div>
    );

}

export default Projects;