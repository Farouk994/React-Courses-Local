import React from 'react'

function Courselist(props){
    return (
        <div>
            {props.course.map((_course)=>{
                return(
                    <div>
                        <h5>Title : {_course.title}</h5>
                        <h5>Slug : {_course.slug}</h5>
                        <h5>Category : {_course.category}</h5>
                        <br></br>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default Courselist;