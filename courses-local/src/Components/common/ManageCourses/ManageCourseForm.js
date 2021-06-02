import React from "react";
import CourseForm from "../CourseForm/CourseForm";
import { useState } from "react";

function Manage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    authorId: "",
    category: "",
  });

  // onChangeHandler
  function handleChange({target}){
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  };

  function handleSubmit(e){
    e.preventDefault();
  }
  return (
    <div>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
      {/* {props.match.params.slug} */}
    </div>
  );
}

export default Manage;
