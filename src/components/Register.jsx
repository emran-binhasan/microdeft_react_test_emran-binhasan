import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleRegister = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
          });
          if (response.ok) alert('Registration successful');
      } catch (error) {
          alert('Registration Failed')
  };}

  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        <h2 className="formTitle">Create Account</h2>
        <input type="text" placeholder="Name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
