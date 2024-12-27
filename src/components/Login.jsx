import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('https://react-interview.crd4lc.easypanel.host/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const res = await response.json();
        if (response.ok) {
          localStorage.setItem('token',res.data.token)
          toast.success('Login successful');
        };
    } catch (error) {
        toast.error('Login Failed')
    }
  }
    return (
      <div className="container">
        <form onSubmit={handleLogin}>
          <h2 className="formTitle">Login to your account</h2>
          <input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input type="password" placeholder="Password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  
    
  
   