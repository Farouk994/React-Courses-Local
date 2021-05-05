import React from "react";
import { useState, useEffect } from "react";
import Courselist from "../Courselist";
import { courses } from "../../tools/mockData";
console.log(courses);
function Courses() {
  const [course, setCourse] = useState([]);
  // Always pass in Array in useState function as an arguement when ddealing with data
  // like arrays
  useEffect(() => {
    function getCourses() {
      setCourse(courses);
      console.log(course);
    }
    getCourses();
  });
  return (
    <div className="container">
      <h2>Courses</h2>
      <Courselist course={course}/>
    </div>
  );
}

export default Courses;
