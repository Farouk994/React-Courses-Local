import React from 'react'
import CourseForm from "../../Pages/CourseForm"

function Manage(props){
    return (
        <div>
            <h2>Manage Course</h2>
            <CourseForm/>
            {props.match.params.slug}
        </div>
    )
}

export default Manage;
