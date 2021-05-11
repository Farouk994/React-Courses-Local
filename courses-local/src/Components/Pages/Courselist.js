import React from "react";
import { Link } from "react-router-dom";
// import Courses,{ course } from "./Pages/Courses"
import PropTypes from "prop-types"

function Courselist(props) {
  return (
    <div>
      {props.course.map((_course) => {
        return (
          <div>
            <h5>
              <Link to={"/course/" + _course.slug}>{_course.title}</Link>
            </h5>
            <h5>Slug : {_course.slug}</h5>
            <h5>Category : {_course.category}</h5>
            <br></br>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Courselist;
