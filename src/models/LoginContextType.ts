import Student from "./Student";
import React from "react";

type LoginContextType={
    student:Student;
    setStudent:(student:Student)=>void;
}

export default LoginContextType;