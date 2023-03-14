import React from "react";

const Form = () => {


    return (<div>
        <div class="container mb-2">
            <div class="row">
                <div class="col-3">
                </div>
                <div class="col-6 m-1 p-1 fw-normal">
                    <form action="https://formsubmit.co/jsutcliffe1991@gmail.com" method="POST">
                        <input class="w-100 m-1 p-1 border border-dark border-2 rounded" type="text" name="name" placeholder="Name*" id="form-box" required></input> <br></br>
                        <input class="w-100 m-1 p-1 border border-dark border-2 rounded" type="email" name="email" placeholder="E-mail*" id="form-box" required></input> <br></br>
                        <textarea class="w-100 m-1 p-1 border border-dark border-2 rounded" rows="10" type="text" name="message" placeholder="Message*" id="message-box" required></textarea> <br></br>
                        <div class="d-flex justify-content-start">
                            <button type="submit" class="btn btn-warning btn-lg fw-bold m-1 p-1 border border-dark border-2 rounded">Work with me!</button>
                        </div>
                        {/* <input type="hidden" name="_next"
          value="https://jamesrobertsutcliffe.github.io/frontend-portfolio/#thank-you"> */}
                        <input type="hidden" name="_captcha" value="false"></input>
                    </form>
                </div>
                <div class="col-3">
                </div>
            </div>
        </div>
    </div>
    )
}

export default Form;