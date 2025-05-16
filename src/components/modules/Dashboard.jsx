import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/DashboardPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const apps = [
  { name: 'Agri', path: '/agri', icon: 'fa-sharp fa-solid fa-tractor' },
  { name: 'Home Security', path: '/home', icon: 'fa-solid fa-house-lock'},
  { name: 'job', path: '/job', icon: 'fas fa-bullhorn' },
  { name: 'settings', path: '/settings', icon: 'fas fa-gears' }  
];

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Smart  Dashboard</h2>
      <div className="app-grid">
        {apps.map((app, index) => (
          <div
            key={index}
            className="app-card"
            onClick={() => navigate(app.path)}
          >
            <div className="app-icon">
              <i className={app.icon}></i>
            </div>
            <div className="app-name">{app.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
