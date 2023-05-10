import React from 'react'
import { UserOutlined } from '@ant-design/icons'

function Header() {
  return (
    <header>
    <div className="logo-container">
        <p><span>Online</span> School</p>
    </div>

    <div className="nav-container">
        <nav className="nav-bar">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">My Books</a></li>
                <li><a href="">My Courses</a></li>
            </ul>
        </nav>
    </div>

    <div className="auth-container">
            <div className="sign-in">
                <i className="fa-sharp fa-solid fa-user"></i>
                <a href="/login.html"> <UserOutlined />  My Account</a>
            </div>
        </div>
</header>

  )
}

export default Header