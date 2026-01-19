
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, use Supabase Auth
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Unauthorized');
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-cream px-6">
      <div className="max-w-md w-full bg-white p-12 border border-soft-gray shadow-xl text-center">
        <h1 className="text-3xl font-serif mb-8 italic">Admin Access</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-left space-y-2">
            <label className="text-[10px] uppercase tracking-luxury text-charcoal/50">Passphrase</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-soft-gray py-2 focus:border-gold outline-none transition-colors"
            />
          </div>
          <button className="w-full bg-gold text-white py-4 text-xs uppercase tracking-luxury hover:bg-maroon transition-colors duration-500">
            Enter Dashboard
          </button>
          <button 
            type="button"
            onClick={() => navigate('/')}
            className="text-[10px] uppercase tracking-luxury text-charcoal/30 hover:text-gold"
          >
            Back to Public Site
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
