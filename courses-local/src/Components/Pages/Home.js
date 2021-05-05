import React from 'react'
import { Link } from "react-router-dom";

function Home(){
    return (
        <div class="jumbotron">
        <h1 class="display-4">Hello, Coursly</h1>
        <p class="lead"></p>
        <hr class="my-4"></hr>
        <p></p>
        <p class="lead">
       <Link to = "about" className="btn btn-primary btn-lg">Learn More</Link>
        </p>
      </div>
    )
}

export default Home
