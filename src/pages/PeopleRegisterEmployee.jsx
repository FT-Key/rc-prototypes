import React, {useState} from 'react';

export default function PeopleRegisterEmployee(){
  const [form, setForm] = useState({
    name:'',
    dni:'',
    position:'',
    area:'',
    phone:'',
    email:'',
    workMode:'Presencial'
  });
  const [saved, setSaved] = useState(null);
  const [error, setError] = useState('');

  function handleChange(e){ 
    setForm({...form,[e.target.name]: e.target.value}); 
  }
  
  function validate(){
    if(!form.name || !form.dni || !form.position) {
      return 'Nombre, DNI y Cargo son campos obligatorios.';
    }
    if(form.dni && !/^\d{7,8}$/.test(form.dni)) {
      return 'El DNI debe tener 7 u 8 dígitos numéricos.';
    }
    if(form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      return 'Email con formato inválido.';
    }
    return '';
  }
  
  function handleSubmit(e){
    e.preventDefault();
    const v = validate();
    if(v){ 
      setError(v); 
      return; 
    }
    setError('');
    // prototipo: generamos id local
    const id = 'EMP-' + Math.floor(Math.random()*9000+1000);
    setSaved({...form, id, registrationDate: new Date().toLocaleDateString('es-AR')});
  }

  function handleClear(){
    setForm({
      name:'',
      dni:'',
      position:'',
      area:'',
      phone:'',
      email:'',
      workMode:'Presencial'
    });
    setSaved(null);
    setError('');
  }

  const workModeIcons = {
    'Presencial': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    'Remoto': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    'Híbrido': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Registrar Empleado/Docente</h2>
          <p className="text-sm text-slate-600">Alta de personal en el sistema</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-violet-100 space-y-6">
        {/* Datos Personales */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
            <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Datos Personales</span>
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
                placeholder="Ej: Juan Pérez"
              />
            </div>
            
            <div>
              <label className="input-label">
                DNI <span className="text-red-500">*</span>
              </label>
              <input 
                name="dni" 
                value={form.dni} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="Ej: 12345678"
                maxLength="8"
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
            
            <div>
              <label className="input-label">Email</label>
              <input 
                type="email"
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>
        </div>

        {/* Datos Laborales */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
            <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Información Laboral</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="input-label">
                Cargo <span className="text-red-500">*</span>
              </label>
              <input 
                name="position" 
                value={form.position} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="Ej: Desarrollador Senior"
              />
            </div>
            
            <div>
              <label className="input-label">Área / Departamento</label>
              <input 
                name="area" 
                value={form.area} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="Ej: Tecnología"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="input-label flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Modalidad de trabajo</span>
              </label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {['Presencial', 'Remoto', 'Híbrido'].map(mode => (
                  <label 
                    key={mode}
                    className={`flex items-center justify-center space-x-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      form.workMode === mode
                        ? 'border-violet-500 bg-violet-50 text-violet-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-violet-300'
                    }`}
                  >
                    <input 
                      type="radio"
                      name="workMode"
                      value={mode}
                      checked={form.workMode === mode}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {workModeIcons[mode]}
                    <span className="font-medium">{mode}</span>
                  </label>
                ))}
              </div>
            </div>
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
          <button type="submit" className="btn-accent flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Registrar Empleado</span>
          </button>
          <button type="button" onClick={handleClear} className="btn-outline">
            Limpiar formulario
          </button>
        </div>

        {/* Mensaje de Éxito */}
        {saved && (
          <div className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-violet-900 mb-3">¡Empleado registrado exitosamente!</h4>
                <div className="bg-white rounded-xl p-4 border border-violet-200 space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-600">ID Empleado</p>
                      <p className="text-xl font-bold text-violet-700 font-mono">{saved.id}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600">Fecha de registro</p>
                      <p className="font-medium text-slate-700">{saved.registrationDate}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-200">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-slate-600">Nombre:</span>
                        <p className="font-semibold text-slate-800">{saved.name}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">DNI:</span>
                        <p className="font-semibold text-slate-800">{saved.dni}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Cargo:</span>
                        <p className="font-semibold text-slate-800">{saved.position}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Modalidad:</span>
                        <p className="font-semibold text-slate-800 flex items-center space-x-1">
                          {workModeIcons[saved.workMode]}
                          <span>{saved.workMode}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 text-sm text-violet-800 mt-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>
                    El empleado ha sido registrado con el identificador único <strong>{saved.id}</strong>. 
                    En un sistema real, se enviaría un email de bienvenida con las credenciales de acceso.
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