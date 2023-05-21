import React from "react";
import LoginContextType from "../models/LoginContextType";
import { createContext,useState } from "react";
import Student from "../models/Student";

type Props = {
    children?: React.ReactNode;
}

export const ContextLogin=createContext<LoginContextType | null >(null);

 const LoginProvider :React.FC<Props> = ({children}) =>{
   const[student,setStudent]=useState<Student>({
    id:0,
    age:0,
    email:'NOEMAIL',
    first_name:'NONAME',
    second_name:'NONAME'
   });

   function seteazaStudent(student:Student):void
   {
     setStudent(student);
   }

   return <ContextLogin.Provider value={{student,setStudent}} >  {children}  </ContextLogin.Provider>
}

export default LoginProvider