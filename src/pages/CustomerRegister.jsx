import React, {useState} from 'react';

export default function CustomerRegister(){
  const [form, setForm] = useState({name:'',dni:'',email:'',phone:'',reason:''});
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState('');

  function handleChange(e){ setForm({...form,[e.target.name]: e.target.value}); }
  
  function validate(){
    if(!form.name || !form.email || !form.reason) return 'Complete los campos requeridos (Nombre, Email, Motivo).';
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Email con formato inválido.';
    return '';
  }
  
  function handleSubmit(e){
    e.preventDefault();
    const v = validate();
    if(v){ setError(v); return; }
    setError('');
    // prototipo no operacional: generamos ticket local
    const t = 'TCK-' + Date.now().toString().slice(-6);
    setTicket(t);
  }

  function handleClear(){
    setForm({name:'',dni:'',email:'',phone:'',reason:''});
    setTicket(null);
    setError('');
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Registrar Consulta / Reclamo</h2>
          <p className="text-sm text-slate-600">Genera un ticket para la atención del cliente</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100 space-y-6">
        {/* Información del Cliente */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Datos del Cliente</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="input-label">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="Ej: María López"
              />
            </div>
            
            <div>
              <label className="input-label">DNI</label>
              <input 
                name="dni" 
                value={form.dni} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="Ej: 12345678"
              />
            </div>
            
            <div>
              <label className="input-label">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email"
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="correo@ejemplo.com"
              />
            </div>
            
            <div>
              <label className="input-label">Teléfono</label>
              <input 
                name="phone" 
                value={form.phone} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="Ej: +54 381 123-4567"
              />
            </div>
          </div>
        </div>

        {/* Motivo del Reclamo */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>Detalle del Reclamo</span>
          </h3>
          
          <div>
            <label className="input-label">
              Motivo de la consulta <span className="text-red-500">*</span>
            </label>
            <textarea 
              name="reason" 
              value={form.reason} 
              onChange={handleChange} 
              className="input-field resize-none" 
              rows="6"
              placeholder="Describe el motivo de tu consulta o reclamo de forma detallada..."
            ></textarea>
            <p className="text-xs text-slate-500 mt-1">
              Proporciona la mayor cantidad de detalles posible para una mejor atención
            </p>
          </div>
        </div>

        {/* Mensaje de Error */}
        {error && (
          <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 flex items-start space-x-3 animate-fade-in">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold text-red-800">Error en el formulario</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Botones */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
          <button type="submit" className="btn-secondary flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Registrar Reclamo</span>
          </button>
          <button type="button" onClick={handleClear} className="btn-outline">
            Limpiar formulario
          </button>
        </div>

        {/* Mensaje de Éxito con Ticket */}
        {ticket && (
          <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-emerald-900 mb-2">¡Reclamo registrado exitosamente!</h4>
                <div className="bg-white rounded-xl p-4 border border-emerald-200 mb-3">
                  <p className="text-sm text-slate-600 mb-1">Tu número de ticket es:</p>
                  <p className="text-2xl font-bold text-emerald-700 font-mono">{ticket}</p>
                </div>
                <div className="flex items-start space-x-2 text-sm text-emerald-800">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>
                    En un sistema real, recibirías una confirmación por email con este número de ticket. 
                    Podrás usar este número para hacer seguimiento de tu consulta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}