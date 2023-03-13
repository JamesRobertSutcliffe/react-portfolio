import React from "react";
import html from "./../../images/html.png"
import css from "./../../images/css3.png"
import js from "./../../images/javascript.png"
import boot from "./../../images/bootstrap.png"
import jq from "./../../images/jquery.png"
import json from "./../../images/json.png"
import reac from "./../../images/react.png"
import node from "./../../images/nodejs.png"
import adobe from "./../../images/adobe.png"

import "./tools.css"

const tools = () => {

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6 m-1 p-1 fw-normal">
                        <div class="row">
                            <div class="col-lg-4"><img src={html} class="tool-img m-2 mb-3"></img></div>
                            <div class="col-lg-4"><img src={css} class="tool-img m-2 mb-3"></img></div>
                            <div class="col-lg-4"><img src={js} class="tool-img m-2 mb-3"></img></div>
                            <div class="col-lg-4"><img src={boot} class="tool-img m-2 mb-3"></img></div>
                            <div class="col-lg-4"><img src={jq} class="tool-img m-2 mb-3"></img></div>
                            <div class="col-lg-4"><img src={json} class="tool-img m-2 mb-3"></img></div>
                            <div class="col-lg-4"><img src={reac} class="tool-img m-2 mb-3"></img></div>
                            <div class="col-lg-4"><img src={node} class="tool-img m-2 mb-3"></img></div>
                            <div class="col-lg-4"><img src={adobe} class="tool-img m-2 mb-3"></img></div>
                        </div>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        </div >
    )
}

export default tools;