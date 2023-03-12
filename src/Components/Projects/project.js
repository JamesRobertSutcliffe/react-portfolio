import React from "react";
import film from "./images/film.png"


const Project = () => {

    return (

        <div>
            <div class="card border border-dark border-4 rounded mt-2">
                <img src={film} class="card-img-top" alt="..."></img>
                <div class="card-body text-start">
                    <h5 class="fw-bold">The Movie Database</h5>
                    <div class="border border-dark border-2 rounded d-inline m-1 p-1">Html</div>
                    <div class="border border-dark border-2 rounded d-inline  m-1 p-1">css</div>
                    <div class="border border-dark border-2 rounded d-inline  m-1 p-1">Javascript</div>
                </div>
            </div>


        </div>

    )

}

export default Project;