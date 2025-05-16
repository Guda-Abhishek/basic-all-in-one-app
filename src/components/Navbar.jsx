import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import './Navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const apps = [
  { name: 'Dashboard', path: '/', icon: 'fa-solid fa-chess-board' },
  { name: 'Agri', path: '/agri', icon: 'fa-sharp fa-solid fa-tractor' },
  { name: 'job', path: '/job', icon: 'fas fa-bullhorn' },
  { name: 'Home Security', path: '/home', icon: 'fa-solid fa-house-lock'},
  { name: 'Chat', path: '/chat', icon: 'fas fa-comments' },
  { name: 'Traffic', path: '/traffic', icon: 'fas fa-car-crash' },
  { name: 'Fake', path: '/fake', icon: 'fa-solid fa-newspaper' },
  { name: 'Spam', path: '/spam', icon: 'fa-solid fa-envelope' },
  { name: 'settings', path: '/settings', icon: 'fas fa-gears' },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-links">
      <img src={logo} alt="Logo" className="logo" />
        {apps.map((app, index) => (
          <div
            key={index}
            className="nav-item"
            onClick={() => navigate(app.path)}
          >
            <div className="nav-icon">
              <i className={app.icon}></i>
            </div>
            <div className="nav-name">{app.name}</div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;