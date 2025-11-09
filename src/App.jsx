import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import CustomerRegister from './pages/CustomerRegister';
import CustomerFollowClose from './pages/CustomerFollowClose';
import PeopleRegisterEmployee from './pages/PeopleRegisterEmployee';
import PeopleEvaluate from './pages/PeopleEvaluate';

export default function App(){ 
  return (
    <div className="min-h-screen">
      <TopNav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer/register" element={<CustomerRegister />} />
          <Route path="/customer/follow-close" element={<CustomerFollowClose />} />
          <Route path="/people/register-employee" element={<PeopleRegisterEmployee />} />
          <Route path="/people/evaluate" element={<PeopleEvaluate />} />
        </Routes>
      </main>
    </div>
  );
}
