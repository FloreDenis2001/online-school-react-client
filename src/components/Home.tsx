import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ContextLogin } from '../context/LoginProvider';
import LoginContextType from '../models/LoginContextType';

const Home:React.FC= () => {

  let { studentLogin, setStudent } = useContext(ContextLogin) as LoginContextType;
  return (
 <>

<Header/>

<main>
        <div className="all-learnings">
           Denis
       </div>
    </main>

<Footer/>

</>
  )
}

export default Home