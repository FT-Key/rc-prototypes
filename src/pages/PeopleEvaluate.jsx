import React, {useState} from 'react';

const employees = [
  {id:'EMP-1001', name:'Lucía Gómez', position: 'Desarrolladora Senior'},
  {id:'EMP-1002', name:'Carlos Díaz', position: 'Analista de Sistemas'},
  {id:'EMP-1003', name:'Ana Martínez', position: 'Docente'},
];

export default function PeopleEvaluate(){
  const [selected, setSelected] = useState('');
  const [criteria, setCriteria] = useState({puntualidad:3,desempeno:3,compromiso:3,comunicacion:3});
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(null);

  function handleScore(k, v){ setCriteria({...criteria, [k]: Number(v)}); }
  
  function submit(){
    if(!selected) {
      alert('Seleccioná un empleado para evaluar.');
      return;
    }
    const final = Math.round((Object.values(criteria).reduce((a,b)=>a+b,0) / 4) * 10) / 10;
    const employee = employees.find(e => e.name === selected);
    setSaved({
      employee: selected, 
      employeeId: employee?.id,
      position: employee?.position,
      criteria, 
      final, 
      notes, 
      date: new Date().toLocaleDateString('es-AR')
    });
  }

  function handleClear(){
    setSelected('');
    setCriteria({puntualidad:3,desempeno:3,compromiso:3,comunicacion:3});
    setNotes('');
    setSaved(null);
  }

  const criteriaLabels = {
    puntualidad: 'Puntualidad',
    desempeno: 'Desempeño',
    compromiso: 'Compromiso',
    comunicacion: 'Comunicación'
  };

  const getScoreColor = (score) => {
    if(score >= 4) return 'text-emerald-600';
    if(score >= 3) return 'text-blue-600';
    return 'text-amber-600';
  };

  const getScoreLabel = (score) => {
    if(score === 5) return 'Excelente';
    if(score === 4) return 'Muy bueno';
    if(score === 3) return 'Bueno';
    if(score === 2) return 'Regular';
    return 'Necesita mejorar';
  };

  const avgScore = Object.values(criteria).reduce((a,b)=>a+b,0) / 4;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Evaluación de Desempeño</h2>
          <p className="text-sm text-slate-600">Evalúa el rendimiento del personal</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulario de evaluación */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-violet-100 space-y-6">
            {/* Selección de empleado */}
            <div>
              <label className="input-label flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Empleado a evaluar</span>
              </label>
              <select 
                value={selected} 
                onChange={(e)=>setSelected(e.target.value)} 
                className="input-field"
              >
                <option value="">-- Seleccionar empleado --</option>
                {employees.map(emp=> (
                  <option key={emp.id} value={emp.name}>
                    {emp.name} ({emp.id}) - {emp.position}
                  </option>
                ))}
              </select>
            </div>

            {/* Criterios de evaluación */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span>Criterios de evaluación</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(criteria).map(k=> (
                  <div key={k} className="bg-gradient-to-br from-slate-50 to-violet-50 p-5 rounded-xl border border-violet-100">
                    <div className="flex justify-between items-center mb-3">
                      <label className="font-semibold text-slate-800">
                        {criteriaLabels[k]}
                      </label>
                      <div className="flex items-center space-x-2">
                        <span className={`text-2xl font-bold ${getScoreColor(criteria[k])}`}>
                          {criteria[k]}
                        </span>
                        <span className="text-xs text-slate-500">/ 5</span>
                      </div>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      value={criteria[k]} 
                      onChange={(e)=>handleScore(k,e.target.value)} 
                      className="w-full h-2 bg-violet-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                    <p className={`text-xs font-medium mt-2 text-center ${getScoreColor(criteria[k])}`}>
                      {getScoreLabel(criteria[k])}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Observaciones */}
            <div>
              <label className="input-label flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Observaciones y comentarios</span>
              </label>
              <textarea 
                value={notes} 
                onChange={(e)=>setNotes(e.target.value)} 
                className="input-field resize-none" 
                rows="4"
                placeholder="Agrega comentarios adicionales sobre el desempeño del empleado..."
              ></textarea>
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <button onClick={submit} className="btn-accent flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Guardar Evaluación</span>
              </button>
              <button onClick={handleClear} className="btn-outline">
                Limpiar
              </button>
            </div>
          </div>
        </div>

        {/* Panel de resumen */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-violet-100 sticky top-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center space-x-2">
              <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Resumen</span>
            </h3>

            {selected ? (
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
                  <p className="text-xs text-slate-600 mb-1">Empleado</p>
                  <p className="font-bold text-slate-800">{selected}</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
                  <p className="text-xs text-slate-600 mb-2">Calificación Promedio</p>
                  <div className="flex items-center space-x-3">
                    <span className={`text-4xl font-bold ${getScoreColor(avgScore)}`}>
                      {avgScore.toFixed(1)}
                    </span>
                    <div>
                      <span className="text-sm text-slate-500">/ 5.0</span>
                      <p className={`text-xs font-medium ${getScoreColor(avgScore)}`}>
                        {getScoreLabel(Math.round(avgScore))}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {Object.entries(criteria).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{criteriaLabels[key]}</span>
                      <span className={`font-bold ${getScoreColor(value)}`}>{value}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <svg className="w-16 h-16 mx-auto mb-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm">Selecciona un empleado para ver el resumen</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirmación de guardado */}
      {saved && (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-violet-100 animate-fade-in">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-violet-900 mb-3">¡Evaluación guardada exitosamente!</h4>
              <div className="bg-gradient-to-br from-slate-50 to-violet-50 rounded-xl p-4 space-y-3 border border-violet-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-600">Empleado</p>
                    <p className="font-bold text-slate-800">{saved.employee}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">ID</p>
                    <p className="font-mono text-violet-700">{saved.employeeId}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Calificación Final</p>
                    <p className={`text-2xl font-bold ${getScoreColor(saved.final)}`}>{saved.final}/5</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Fecha</p>
                    <p className="font-medium text-slate-700">{saved.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}