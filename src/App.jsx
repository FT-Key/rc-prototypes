import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CustomerFollowClose from './pages/CustomerFollowClose.jsx';
import CustomerRegister from './pages/CustomerRegister.jsx';
import TopNav from './components/TopNav';
import CustomerChat from './pages/CustomerChat';
import Home from './pages/Home.jsx';

// App Principal
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <TopNav />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer/chat" element={<CustomerChat />} />
          <Route path="/customer/register" element={<CustomerRegister />} />
          <Route path="/customer/follow-close" element={<CustomerFollowClose />} />
        </Routes>
      </main>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}