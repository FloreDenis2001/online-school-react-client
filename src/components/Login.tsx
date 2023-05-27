import React, { useContext, useState } from 'react'
import { ContextLogin } from '../context/LoginProvider'
import LoginContextType from '../models/LoginContextType'
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';



const Login: React.FC = () => {
    let { student, setStudent } = useContext(ContextLogin) as LoginContextType;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     let studentService=new StudentService();

     let login = async () =>{
        let rez = await studentService.logInn({email,password});
    }

    let navigate = useNavigate();

    let goSingUp = (): void => {
        navigate("/singup");
    }
    
    return (
        <main className="login-container">
            <div className="main-login">

                <div className="login">
                    <div className='form'>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                        <input type="password" name="pswd" placeholder="Password" value={password} onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                        <button onClick={login}>Login</button>
                        <button onClick={goSingUp}>Sing Up</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login