import React from 'react';
import PrototypeCard from '../components/PrototypeCard';

export default function Home() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header de bienvenida */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Prototipos de Sistemas de Gestión
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explora las funcionalidades del sistema Customer Care
        </p>
      </div>

      {/* Sección Customer Care */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">Customer Care System</h3>
            <p className="text-sm text-slate-600">Gestión de consultas y reclamos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PrototypeCard
            title="Registrar Consulta"
            description="Formulario completo para registrar reclamos y consultas de clientes."
            to="/customer/register"
            color="emerald"
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />

          <PrototypeCard
            title="Seguimiento y Cierre"
            description="Visualiza reclamos pendientes y cierra tickets."
            to="/customer/follow-close"
            color="emerald"
            icon={
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Footer informativo */}
      <div className="mt-12 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Nota sobre los prototipos</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Estos son prototipos no funcionales diseñados para demostración. No almacenan datos reales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
