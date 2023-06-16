import React, { useContext } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { ContextLogin } from '../context/LoginProvider';
import LoginContextType from '../models/LoginContextType';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { studentLogin, setStudent } = useContext(ContextLogin) as LoginContextType;
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (studentLogin !== undefined) {
    console.log(path);
      navigate(path.replace(':studentId', studentLogin.studentId.toString()));
    }
  };

  return (
    <header>
      <div className="logo-container">
        <p><span>Online</span> School</p>
      </div>

      <div className="nav-container">
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="/" onClick={() => handleNavigation('/home/:studentId')}>
                Home
              </a>
            </li>
            <li>
              <a href="/" onClick={() => handleNavigation('/mybooks/:studentId')}>
                My Books
              </a>
            </li>
            <li>
              <a href="/" onClick={() => handleNavigation('/mycourses/:studentId')}>
                My Courses
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="auth-container">
        <div className="sign-in">
          <UserOutlined />
          <a href="/">{studentLogin?.firstName} {studentLogin?.lastName}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
