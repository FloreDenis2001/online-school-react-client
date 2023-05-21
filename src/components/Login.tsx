import React, { useContext, useState } from 'react'
import { ContextLogin } from '../context/LoginProvider'
import LoginContextType from '../models/LoginContextType'
import StudentService from '../services/StudentService';



const Login: React.FC = () => {
    let { student, setStudent } = useContext(ContextLogin) as LoginContextType;
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);

     let studentService=new StudentService();

     let login = async () =>{
        let rez = await studentService.logInn({email,password});
    }
    
    return (
        <main className="login-container">
            <div className="main-login">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="First name" />
                        <input type="text" name="txt" placeholder="Second name" />
                        <input type="number" min="18" max="25" name="txt" placeholder="Age" />

                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="pswd" placeholder="Password" />
                        <button>Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                        <input type="password" name="pswd" placeholder="Password" value={password} onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                        <button onClick={login}>Login</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login