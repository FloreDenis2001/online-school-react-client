import React from 'react'
import Course from '../models/Course'

interface CourseProps{
    course:Course,
}


export const Course:React.FC<CourseProps>=({course})=>{

    return (
        <div className="course id-${course.id}">
        <img src="../mockup-react/img/library2.jpeg" alt=""/>
        <p className="describe">{course.name}</p>
        <p className="department">{course.departament}</p>
    </div>
    )
}

export default Course;