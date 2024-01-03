import React, { useState } from 'react';
import './Admin.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Admin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
      toast.success('Welcome back, Anees!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.error('Login error:', error.message);
      toast.error('You are not the admin', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className='container'>
      <form className="form" onSubmit={handleLogin}>
        <p className="heading">Login</p>
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
