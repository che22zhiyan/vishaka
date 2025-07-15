import { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://your-api-url/login', form); // Replace with actual API
      alert(res.data.msg);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/success');
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          required
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          required
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
        <div style={{ marginTop: '20px' }}>
          <p>Don't have an account?</p>
          <Link to="/register">
            <button style={{ padding: '10px 20px' }}>Go to Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
