import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src={logo} alt="Cuva" className="dashboard-logo" />
        <div className="dashboard-logo-text">Cuvva</div>
        <button className="dashboard-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        <h2 className="dashboard-title">Dashboard</h2>
        <h3 className="dashboard-subtitle">No credit Available</h3>

        <div className="dashboard-actions">
          <button className="dashboard-primary-btn" onClick={() => navigate('/policy')}>
            Create a policy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;