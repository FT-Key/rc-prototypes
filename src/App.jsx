import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CustomerFollowClose from './pages/CustomerFollowClose';
import CustomerRegister from './pages/CustomerRegister';

// Datos simulados de contactos
const MOCK_CONTACTS = [
  {
    id: 1,
    name: "María González",
    lastMessage: "Hola, tengo un problema con mi pedido",
    time: "10:30",
    unread: 2,
    status: "online",
    ticketNumber: "TCK-001234"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    lastMessage: "Gracias por la ayuda",
    time: "09:15",
    unread: 0,
    status: "offline",
    ticketNumber: "TCK-001235"
  },
  {
    id: 3,
    name: "Ana Martínez",
    lastMessage: "¿Cuándo llega mi pedido?",
    time: "Ayer",
    unread: 1,
    status: "online",
    ticketNumber: "TCK-001236"
  },
  {
    id: 4,
    name: "Jorge López",
    lastMessage: "Necesito cambiar mi dirección",
    time: "Ayer",
    unread: 0,
    status: "away",
    ticketNumber: "TCK-001237"
  },
  {
    id: 5,
    name: "Laura Fernández",
    lastMessage: "El producto llegó defectuoso",
    time: "2 días",
    unread: 3,
    status: "online",
    ticketNumber: "TCK-001238"
  }
];

// Respuestas automáticas simuladas
const AUTO_RESPONSES = [
  "Entiendo tu situación, déjame revisar eso para ti.",
  "Gracias por tu paciencia. Estoy trabajando en tu solicitud.",
  "¿Podrías darme más detalles sobre el problema?",
  "Perfecto, he registrado tu solicitud con el número de ticket.",
  "Te mantendré informado sobre el progreso de tu caso."
];

// Componente de Chat Individual
function ChatWindow({ contact, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "customer",
      text: contact.lastMessage,
      time: contact.time
    }
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "agent",
      text: inputText,
      time: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputText("");

    // Simular respuesta automática del cliente después de 2 segundos
    setTimeout(() => {
      const autoResponse = {
        id: messages.length + 2,
        sender: "customer",
        text: AUTO_RESPONSES[Math.floor(Math.random() * AUTO_RESPONSES.length)],
        time: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, autoResponse]);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-fade-in z-50">
      {/* Header del chat */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-semibold text-emerald-600">
              {contact.name.charAt(0)}
            </div>
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
              contact.status === 'online' ? 'bg-green-500' : 
              contact.status === 'away' ? 'bg-yellow-500' : 'bg-slate-400'
            }`}></div>
          </div>
          <div>
            <h3 className="font-semibold text-white">{contact.name}</h3>
            <p className="text-xs text-emerald-100">{contact.ticketNumber}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${msg.sender === 'agent' ? 'order-2' : 'order-1'}`}>
              <div className={`rounded-2xl px-4 py-2 ${
                msg.sender === 'agent'
                  ? 'bg-emerald-500 text-white rounded-br-sm'
                  : 'bg-white text-slate-800 rounded-bl-sm shadow-sm border border-slate-200'
              }`}>
                <p className="text-sm">{msg.text}</p>
              </div>
              <p className={`text-xs text-slate-500 mt-1 ${msg.sender === 'agent' ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input de mensaje */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex items-end space-x-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe un mensaje..."
            className="flex-1 resize-none border border-slate-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent max-h-24"
            rows="1"
          />
          <button
            onClick={sendMessage}
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl p-3 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente de Lista de Contactos
function ContactList({ onSelectContact }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredContacts = MOCK_CONTACTS.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Buscador */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar conversaciones..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
        <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Lista de contactos */}
      <div className="space-y-2">
        {filteredContacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => onSelectContact(contact)}
            className="w-full p-4 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition-all hover:shadow-md text-left"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center font-semibold text-white">
                    {contact.name.charAt(0)}
                  </div>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    contact.status === 'online' ? 'bg-green-500' : 
                    contact.status === 'away' ? 'bg-yellow-500' : 'bg-slate-400'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-slate-800">{contact.name}</h4>
                    <span className="text-xs text-slate-500">{contact.time}</span>
                  </div>
                  <p className="text-sm text-slate-600 truncate">{contact.lastMessage}</p>
                  <p className="text-xs text-emerald-600 mt-1">{contact.ticketNumber}</p>
                </div>
              </div>
              {contact.unread > 0 && (
                <div className="ml-2 flex-shrink-0">
                  <span className="bg-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {contact.unread}
                  </span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Componente principal de Chat
function CustomerChat() {
  const [activeChats, setActiveChats] = useState([]);

  const handleSelectContact = (contact) => {
    if (!activeChats.find(chat => chat.id === contact.id)) {
      setActiveChats([...activeChats, contact]);
    }
  };

  const handleCloseChat = (contactId) => {
    setActiveChats(activeChats.filter(chat => chat.id !== contactId));
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Chat de Atención</h2>
            <p className="text-slate-600">Conversaciones activas con clientes</p>
          </div>
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Conversaciones Activas</p>
              <p className="text-2xl font-bold text-emerald-700">5</p>
            </div>
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Mensajes Sin Leer</p>
              <p className="text-2xl font-bold text-blue-700">6</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Tiempo Promedio</p>
              <p className="text-2xl font-bold text-amber-700">3.5m</p>
            </div>
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de contactos */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
        <ContactList onSelectContact={handleSelectContact} />
      </div>

      {/* Ventanas de chat activas */}
      {activeChats.map((contact, index) => (
        <div
          key={contact.id}
          style={{ right: `${20 + (index * 410)}px` }}
          className="fixed bottom-4"
        >
          <ChatWindow
            contact={contact}
            onClose={() => handleCloseChat(contact.id)}
          />
        </div>
      ))}
    </div>
  );
}

// Componente Home actualizado
function Home() {
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

// TopNav Component
function TopNav() {
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