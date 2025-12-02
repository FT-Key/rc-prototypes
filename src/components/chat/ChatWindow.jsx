import { useState, useEffect, useRef } from "react";
import { CLIENT_RESPONSES } from "../../constants/chatResponses";

export default function ChatWindow({ contact, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "customer",
      text: contact.lastMessage,
      time: contact.time,
    },
  ]);

  const [inputText, setInputText] = useState("");

  // Ref para hacer scroll al final
  const messagesEndRef = useRef(null);

  // Función para hacer scroll automático al final
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "agent",
      text: inputText,
      time: new Date().toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");

    // Simula respuesta del cliente
    setTimeout(() => {
      const autoResponse = {
        id: Date.now(),
        sender: "customer",
        text: CLIENT_RESPONSES[Math.floor(Math.random() * CLIENT_RESPONSES.length)],
        time: new Date().toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, autoResponse]);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="
        fixed right-4 
        top-[calc(60px+8px)]      /* Evita taparse con el navbar */
        sm:bottom-4 sm:top-auto   /* En desktop vuelve a posición normal */
        w-96 max-w-[95vw]
        min-h-[400px] max-h-[80vh]
        bg-white rounded-2xl shadow-2xl
        flex flex-col 
        border border-slate-200 
        overflow-hidden 
        z-50
        animate-fade-in
      "
    >
      {/* HEADER */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-semibold text-emerald-600">
              {contact.name.charAt(0)}
            </div>
            <div
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                contact.status === "online"
                  ? "bg-green-500"
                  : contact.status === "away"
                  ? "bg-yellow-500"
                  : "bg-slate-400"
              }`}
            ></div>
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
          ✕
        </button>
      </div>

      {/* MENSAJES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "agent" ? "justify-end" : "justify-start"
            }`}
          >
            <div className={`max-w-[75%]`}>
              <div
                className={`rounded-2xl px-4 py-2 ${
                  msg.sender === "agent"
                    ? "bg-emerald-500 text-white rounded-br-sm"
                    : "bg-white text-slate-800 rounded-bl-sm shadow-sm border border-slate-200"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>

              <p
                className={`text-xs text-slate-500 mt-1 ${
                  msg.sender === "agent" ? "text-right" : "text-left"
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {/* Ancla para el autoscroll */}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex items-end space-x-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe un mensaje..."
            className="
              flex-1 resize-none border border-slate-300 rounded-xl
              px-4 py-2 focus:outline-none focus:ring-2
              focus:ring-emerald-500 focus:border-transparent
              max-h-24
            "
            rows="1"
          />

          <button
            onClick={sendMessage}
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl p-3 transition-colors"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
