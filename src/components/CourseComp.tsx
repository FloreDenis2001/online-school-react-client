import React from 'react'
import Course from '../models/Course'
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


interface CourseProps{
    course:Course,
}


export const CourseComp:React.FC<CourseProps>=({course})=>{

    return (
        <div className="course id-${course.id} " key={course.id}>
        <Image src="/img/library2.jpeg" alt="" fluid />
        <p className="describe">{course.name}</p>
        <p className="describe">{course.department}</p>
        </div>
    )
}

export default CourseComp;