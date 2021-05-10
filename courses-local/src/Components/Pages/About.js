import React from 'react'
// import { Prompt } from "react-router-dom";

function About(){
    return (
        <div class="jumbotron">
        <h1 class="display-4">About Us</h1>
        <p class="lead">Checkout our courses by applying today!!</p>
        {/* <Prompt className="card" when={true} message ="Are you sure you want to leave?"/> */}
        <hr class="my-4"></hr>
        <p></p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/Courses" role="button">Courses</a>
        </p>
      </div>
    )
}

export default About;
