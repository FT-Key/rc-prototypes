import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4 py-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Prototipos de Sistemas de Gestión
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explora las funcionalidades del sistema Customer Care
        </p>
      </div>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/customer/register" className="block group">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Registrar Consulta</h4>
              <p className="text-emerald-100">Formulario completo para registrar reclamos y consultas de clientes.</p>
            </div>
          </Link>

          <Link to="/customer/follow-close" className="block group">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Seguimiento y Cierre</h4>
              <p className="text-emerald-100">Visualiza reclamos pendientes y cierra tickets.</p>
            </div>
          </Link>

          <Link to="/customer/chat" className="block group">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Chat de Atención</h4>
              <p className="text-emerald-100">Comunícate en tiempo real con los clientes para resolver reclamos.</p>
            </div>
          </Link>
        </div>
      </div>

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