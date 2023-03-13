import React from "react";
// import film from "./../../images/film.png"




const Project = (props) => {

    return (
        <div class="col-lg-4 col-sm-12">
            <div class="card border border-dark border-4 rounded mt-2">
                <img src={props.image} class="card-img-top" alt={props.name}></img>
                <div class="card-body text-start">
                    <h5 class="fw-bold">{props.name}</h5>
                    <div class="border border-dark border-2 rounded d-inline m-1 p-1">{props.stack1}</div>
                    <div class="border border-dark border-2 rounded d-inline  m-1 p-1">{props.stack2}</div>
                    <div class="border border-dark border-2 rounded d-inline  m-1 p-1">{props.stack3}</div>
                </div>
            </div>
        </div>
    );
};

export default Project;