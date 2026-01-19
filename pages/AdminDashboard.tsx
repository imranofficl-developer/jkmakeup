
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    if (localStorage.getItem('isAdmin') !== 'true') {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const menuItems = ['Overview', 'Portfolio', 'Content', 'Testimonials', 'Leads', 'Settings'];

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-charcoal text-cream flex flex-col fixed h-full z-10">
        <div className="p-8 text-2xl font-serif tracking-widest border-b border-white/10">JK Admin</div>
        <nav className="flex-1 pt-8">
          {menuItems.map(item => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full text-left px-8 py-4 text-xs uppercase tracking-luxury transition-colors ${
                activeTab === item ? 'bg-gold text-white' : 'hover:bg-white/5 text-white/60'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <button 
          onClick={handleLogout}
          className="p-8 text-[10px] uppercase tracking-widest text-white/30 hover:text-gold transition-colors text-left"
        >
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12">
        <header className="flex justify-between items-end mb-12 border-b border-soft-gray pb-8">
          <div>
            <h1 className="text-4xl font-serif italic text-charcoal">{activeTab}</h1>
            <p className="text-xs uppercase tracking-luxury text-charcoal/40 mt-2">Manage your luxury brand presence</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white border border-soft-gray px-6 py-2 text-[10px] uppercase tracking-luxury hover:border-gold">Export Data</button>
            <button className="bg-gold text-white px-6 py-2 text-[10px] uppercase tracking-luxury hover:bg-maroon">Quick Save</button>
          </div>
        </header>

        <section className="bg-white p-8 border border-soft-gray shadow-sm">
          {activeTab === 'Overview' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Images', val: '48' },
                { label: 'Active Services', val: '6' },
                { label: 'Client Reviews', val: '24' },
                { label: 'New Enquiries', val: '12' },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-cream border border-soft-gray text-center">
                  <div className="text-3xl font-serif text-gold mb-2">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-charcoal/40">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Leads' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-soft-gray">
                    <th className="py-4 text-[10px] uppercase tracking-luxury text-charcoal/50">Client</th>
                    <th className="py-4 text-[10px] uppercase tracking-luxury text-charcoal/50">Contact</th>
                    <th className="py-4 text-[10px] uppercase tracking-luxury text-charcoal/50">Event Date</th>
                    <th className="py-4 text-[10px] uppercase tracking-luxury text-charcoal/50">Status</th>
                    <th className="py-4 text-[10px] uppercase tracking-luxury text-charcoal/50">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-soft-gray">
                  {[
                    { name: 'Sarah Miller', phone: '+1 987 654 321', date: 'Oct 24, 2024', status: 'Pending' },
                    { name: 'Jessica Alba', phone: '+1 123 444 777', date: 'Dec 12, 2024', status: 'Contacted' },
                    { name: 'Rita Ora', phone: '+44 771 223 344', date: 'Jan 05, 2025', status: 'Booked' },
                  ].map((lead, i) => (
                    <tr key={i} className="hover:bg-cream transition-colors">
                      <td className="py-6 font-serif text-lg italic">{lead.name}</td>
                      <td className="py-6 text-sm text-charcoal/60">{lead.phone}</td>
                      <td className="py-6 text-sm text-charcoal/60">{lead.date}</td>
                      <td className="py-6">
                        <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${
                          lead.status === 'Booked' ? 'bg-green-100 text-green-700' : 'bg-gold/10 text-gold'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-6">
                        <button className="text-[10px] uppercase tracking-luxury text-gold hover:underline">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {(activeTab !== 'Overview' && activeTab !== 'Leads') && (
            <div className="flex items-center justify-center py-20 text-charcoal/30">
              <div className="text-center">
                <div className="text-4xl font-serif italic mb-4">Under Development</div>
                <p className="text-xs uppercase tracking-luxury">Connecting to Supabase Storage...</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
