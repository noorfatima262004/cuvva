import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function SignUp() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = () => {
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      navigate('/login');
    } else {
      alert('Please enter name, email and password');
    }
  };

  return (
    <div className="signup-container">
      <header className="signup-navbar">
        <img src={logo} alt="Cuva" className="signup-logo"/>
        <div className="signup-logo-text">Cuvva</div>
      </header>

      <div className="signup-box-container">
        <div className="signup-box">
          <h2 className="signup-title">Sign Up</h2>
          
          <input 
            type="text" 
            placeholder="Name" 
            className="signup-input"
            onChange={(e) => setName(e.target.value)}
          />
          
          <input 
            type="email" 
            placeholder="Email" 
            className="signup-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="signup-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="signup-buttons">
            <button 
              className="signup-btn signup-primary-btn"
              onClick={handleSignup}
            >
              Sign Up
            </button>
            
            <button 
              className="signup-btn signup-secondary-btn"
              onClick={() => navigate('/Login')}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;