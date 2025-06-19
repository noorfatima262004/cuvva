// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.svg';
// import ImageUploader from './ImageUploader';

// function Policy() {
//   const navigate = useNavigate();
//    const handleLogout = () => {
//     navigate('/login');
//   };
  
//   return (
//     <div className="policy-container">
//       <header className="policy-header">
//         <img src={logo} alt="Cuva" className="policy-logo" />
//         <div className="policy-logo-text">cuvva</div>
//           <button className="dashboard-logout-btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
      
//       <div className="policy-form-container">
//         <h2 className="policy-title">Create a policy</h2>
        
//         <FormField label="Name" type="text" placeholder="Enter your name" />
//         <FormField label="Date of birth" type="date" />
//         <FormField label="Driving License Number" type="text" />
//         <FormField label="Residential Address" type="text" />
//         <FormField label="Mobile" type="tel" />
//         <FormField label="Email" type="email" />
//         <FormField label="Valid From (Date & Time)" type="datetime-local" />
//         <FormField label="Valid Until (Date & Time)" type="datetime-local" />
//         <FormField label="Vehicle Reg" type="text" />
//         <FormField label="Vin" type="text" />
//         <FormField label="Make" type="text" />
//         <FormField label="Color" type="text" />
//         <FormField label="Model" type="text" />
//         <FormField label="Year Manufactured" type="number" />
//         <FormField label="Policy Amount" type="number" />
        
//         <div className="policy-upload-section">
//           <ImageUploader/>
//         </div>
        
//         <button className="policy-submit-btn" onClick={() => navigate('/signup')}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// function FormField({ label, type, placeholder }) {
//   return (
//     <div className="form-field">
//       <label className="form-label">{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="form-input"
//       />
//     </div>
//   );
// }

// export default Policy;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.svg';
import ImageUploader from './ImageUploader';

function Policy() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    licenseNumber: '',
    address: '',
    mobile: '',
    email: '',
    validFrom: '',
    validUntil: '',
    vehicleReg: '',
    vin: '',
    make: '',
    color: '',
    model: '',
    year: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/policy', formData); // Update URL to your backend
      alert('Policy submitted and email sent!');
      navigate('/dashboard'); // Redirect after success
    } catch (error) {
      console.error('Error submitting policy:', error);
      alert('Failed to submit policy.');
    }
  };

  return (
    <div className="policy-container">
      <header className="policy-header">
        <img src={logo} alt="Cuva" className="policy-logo" />
        <div className="policy-logo-text">cuvva</div>
        <button className="dashboard-logout-btn" onClick={() => navigate('/login')}>
          Logout
        </button>
      </header>

      <div className="policy-form-container">
        <h2 className="policy-title">Create a policy</h2>

        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'Date of birth', name: 'dob', type: 'date' },
          { label: 'Driving License Number', name: 'licenseNumber', type: 'text' },
          { label: 'Residential Address', name: 'address', type: 'text' },
          { label: 'Mobile', name: 'mobile', type: 'tel' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Valid From (Date & Time)', name: 'validFrom', type: 'datetime-local' },
          { label: 'Valid Until (Date & Time)', name: 'validUntil', type: 'datetime-local' },
          { label: 'Vehicle Reg', name: 'vehicleReg', type: 'text' },
          { label: 'Vin', name: 'vin', type: 'text' },
          { label: 'Make', name: 'make', type: 'text' },
          { label: 'Color', name: 'color', type: 'text' },
          { label: 'Model', name: 'model', type: 'text' },
          { label: 'Year Manufactured', name: 'year', type: 'number' },
          { label: 'Policy Amount', name: 'amount', type: 'number' },
        ].map((field) => (
          <FormField
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}

        <div className="policy-upload-section">
          <ImageUploader />
        </div>

        <button className="policy-submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

function FormField({ label, type, name, value, onChange }) {
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
}

export default Policy;
