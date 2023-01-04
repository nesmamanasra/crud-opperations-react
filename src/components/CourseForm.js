import React from "react";

const CourseForm = (props) => {
    return (
       <form onSubmit={props.addCourse}>
            <input type="text" onChange={props.updateCourse} />
             <button type="submit">ADD Course</button>
       </form>
    )
}
export default CourseForm ;