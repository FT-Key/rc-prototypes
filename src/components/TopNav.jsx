import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-xl font-bold">Customer Care</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Inicio</Link>
            <Link to="/customer/register" className="hover:text-emerald-400 transition-colors">Registrar</Link>
            <Link to="/customer/follow-close" className="hover:text-emerald-400 transition-colors">Seguimiento</Link>
            <Link to="/customer/chat" className="hover:text-emerald-400 transition-colors">Chat</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}