import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

function LoginIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      navigate('/dashboard');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="login-container">
      <header className="login-navbar">
        <img src={logo} alt="Cuva" className="login-logo" />
        <div className="login-logo-text">Cuvva</div>
      </header>
      
      <div className="login-box-container">
        <div className="login-box">
          <h2 className="login-title">Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <div className="login-buttons">
            <button className="login-btn login-primary-btn" onClick={handleLogin}>
              Login
            </button>
            <button className="login-btn login-secondary-btn" onClick={() => navigate('/signup')}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginIn;