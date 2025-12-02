import { useState } from "react";
import { MOCK_CONTACTS } from "../../constants/contactList";

export default function ContactList({ onSelectContact }) {
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
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${contact.status === 'online' ? 'bg-green-500' :
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