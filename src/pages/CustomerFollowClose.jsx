import React, { useState } from 'react';

const sample = [
  { id: 'TCK-1001', client: 'María López', subject: 'Problema con pago', status: 'Pendiente', date: '2025-10-20' },
  { id: 'TCK-1002', client: 'Juan Pérez', subject: 'Consulta de horarios', status: 'Pendiente', date: '2025-11-01' },
];

export default function CustomerFollowClose() {
  const [tickets, setTickets] = useState(sample);
  const [selected, setSelected] = useState(null);
  const [solution, setSolution] = useState('');
  const [message, setMessage] = useState('');

  function openTicket(t) {
    setSelected(t);
    setSolution('');
    setMessage('');
  }

  function closeTicket() {
    if (!selected) return;
    if (!solution.trim()) {
      setMessage('Por favor, ingresá una descripción de la solución.');
      return;
    }
    // prototipo: actualizar estado local
    setTickets(tickets.map(t => t.id === selected.id ? { ...t, status: 'Cerrado' } : t));
    setMessage('Reclamo cerrado exitosamente y notificación enviada al cliente.');
    setTimeout(() => {
      setSelected(null);
      setMessage('');
    }, 2000);
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Seguimiento y Cierre de Reclamos</h2>
          <p className="text-sm text-slate-600">Gestiona y resuelve las consultas de clientes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de tickets */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800 flex items-center space-x-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Reclamos</span>
              </h3>
              <span className="badge badge-info">{tickets.filter(t => t.status === 'Pendiente').length} pendientes</span>
            </div>

            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {tickets.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <svg className="w-16 h-16 mx-auto mb-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm">No hay reclamos</p>
                </div>
              ) : (
                tickets.map(t => (
                  <div
                    key={t.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${t.status === 'Pendiente'
                        ? 'bg-amber-50 border-amber-200 hover:border-amber-300 hover:shadow-md'
                        : 'bg-slate-50 border-slate-200 opacity-60'
                      } ${selected?.id === t.id ? 'ring-4 ring-emerald-500/30 border-emerald-400' : ''}`}
                    onClick={() => openTicket(t)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-mono text-slate-500">{t.id}</span>
                          <span className={`badge ${t.status === 'Pendiente' ? 'badge-warning' : 'badge-success'}`}>
                            {t.status}
                          </span>
                        </div>
                        <div className="font-semibold text-slate-800">{t.client}</div>
                        <div className="text-sm text-slate-600 mt-1">{t.subject}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-1 text-xs text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{t.date}</span>
                      </div>
                      {t.status === 'Pendiente' && (
                        <button
                          onClick={(e) => { e.stopPropagation(); openTicket(t); }}
                          className="text-xs px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                        >
                          Abrir
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Panel de detalles */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100 min-h-[600px]">
            {selected ? (
              <div className="space-y-6">
                {/* Header del ticket */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl font-bold text-slate-800">{selected.id}</span>
                        <span className={`badge ${selected.status === 'Pendiente' ? 'badge-warning' : 'badge-success'}`}>
                          {selected.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-700">{selected.client}</h3>
                      <p className="text-slate-600 mt-1">{selected.subject}</p>
                    </div>
                    <button
                      onClick={() => { setSelected(null); setSolution(''); setMessage(''); }}
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Formulario de solución */}
                <div>
                  <label className="input-label flex items-center space-x-2">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>Descripción de la solución</span>
                  </label>
                  <textarea
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    className="input-field resize-none"
                    rows="8"
                    placeholder="Describe la solución aplicada para este reclamo..."
                  ></textarea>
                  <p className="text-xs text-slate-500 mt-1">
                    Detalla las acciones tomadas para resolver la consulta del cliente
                  </p>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={closeTicket}
                    className="btn-secondary flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Cerrar Reclamo</span>
                  </button>
                  <button
                    onClick={() => { setSelected(null); setSolution(''); setMessage(''); }}
                    className="btn-outline"
                  >
                    Cancelar
                  </button>
                </div>

                {/* Mensaje de confirmación */}
                {message && (
                  <div className={`p-4 rounded-xl border-2 flex items-start space-x-3 animate-fade-in ${message.includes('exitosamente')
                      ? 'bg-emerald-50 border-emerald-200'
                      : 'bg-amber-50 border-amber-200'
                    }`}>
                    <svg className={`w-6 h-6 flex-shrink-0 ${message.includes('exitosamente') ? 'text-emerald-600' : 'text-amber-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className={`font-semibold ${message.includes('exitosamente') ? 'text-emerald-800' : 'text-amber-800'
                        }`}>
                        {message.includes('exitosamente') ? '¡Éxito!' : 'Atención'}
                      </p>
                      <p className={`text-sm ${message.includes('exitosamente') ? 'text-emerald-700' : 'text-amber-700'
                        }`}>
                        {message}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">Seleccioná un reclamo</h3>
                <p className="text-slate-500 max-w-md">
                  Elegí un ticket de la lista para ver sus detalles, registrar la solución aplicada y cerrar el caso
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}