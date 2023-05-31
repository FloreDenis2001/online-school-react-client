import React, { useContext, useState } from 'react'
import { ContextLogin } from '../context/LoginProvider'
import LoginContextType from '../models/LoginContextType'
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import StudentLogin from '../dtos/StudentLogin';
import { eventNames } from 'process';

type FormData={
    name:string;
    email:string;
    password:string;
}

const Login: React.FC = () => {
    let { studentLogin, setStudent } = useContext(ContextLogin) as LoginContextType;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

     let studentService=new StudentService();

    let navigate = useNavigate();

    let goSingUp = (): void => {
        navigate("/singup");
    }

    const onSubmit = async (data:FormData)=>{
       console.log("Form submitted: ",data);
       setEmail(data.email);
       setPassword(data.password);
       console.log(email);
       console.log(password);
       let rez = await studentService.logInn({email,password});
       if(rez){
       setStudent(rez as StudentLogin);
       }else {
        console.log("Nu este raspuns!");
       }
      
    }
    
    return (
        <main className="login-container">
            <div className="main-login">

                <div className="login">                         
                      {/* todo erroare la primul fetch  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" {...register('email',{required:true,pattern:/^\S+@\S+$/i})}/>
                         {errors.email && <span>Please enter a valid email address</span>}
                
                        <input type="password" {...register('password',{required:true,minLength:6})}/>
                        {errors.password && <span>Password must be at least 6 characters long</span>}

                        <button  type='submit'>Login</button>
                        <button onClick={goSingUp}>Sing Up</button>
                    </form>

                </div>
            </div>
        </main>
    )
}

export default Login


