import React from 'react';
import { Link } from 'react-router-dom';

export default function PrototypeCard({title, description, to, icon, color = 'blue'}){
  
  // Colores basados en el tipo de sistema
  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-indigo-600',
      shadow: 'shadow-blue-500/20 hover:shadow-blue-500/40',
      border: 'border-blue-200',
      icon: 'bg-blue-100 text-blue-600'
    },
    emerald: {
      bg: 'from-emerald-500 to-teal-600',
      shadow: 'shadow-emerald-500/20 hover:shadow-emerald-500/40',
      border: 'border-emerald-200',
      icon: 'bg-emerald-100 text-emerald-600'
    },
    violet: {
      bg: 'from-violet-500 to-purple-600',
      shadow: 'shadow-violet-500/20 hover:shadow-violet-500/40',
      border: 'border-violet-200',
      icon: 'bg-violet-100 text-violet-600'
    }
  };
  
  const colors = colorClasses[color] || colorClasses.blue;
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${colors.border} overflow-hidden group hover:-translate-y-1 animate-fade-in`}>
      {/* Barra superior con gradiente */}
      <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>
      
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Icono */}
          {icon && (
            <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
          )}
          
          {/* Título */}
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
            {title}
          </h3>
          
          {/* Descripción */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Botón de acción */}
        <div className="mt-6">
          <Link 
            to={to} 
            className={`inline-flex items-center space-x-2 px-5 py-3 bg-gradient-to-r ${colors.bg} text-white rounded-xl font-semibold shadow-lg ${colors.shadow} hover:shadow-xl transition-all duration-200 group-hover:-translate-y-0.5 w-full justify-center`}
          >
            <span>Abrir prototipo</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}