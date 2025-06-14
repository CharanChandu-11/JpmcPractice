import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle } from "lucide-react";

const ai = new GoogleGenerativeAI("AIzaSyDhwilqG7bZQePdl23qhUMhLQ3MbnslxUU");

const Chatting = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              {
                text:
                  "You are a helpful assistant for a volunteering organisation Bhumi. The team of Bhumi believes that every child deserves to have access to quality education as it is the one thing that can never be lost. Additionally, it will enable them to achieve many of their aspirations and live fulfilling lives. Bhumi is one of the few Top NGOs in India that promotes whole-school transformations and gives educational opportunities to students from disadvantaged communities. Their vision is that every Indian should volunteer for causes such as child education, and community welfare, among many others. They bring together many members and supporters to increase their ability to protect people's right to good education and a clean environment. Answer concisely. If unsure, say: 'Sorry, that's not in my knowledge base.'\n\nUser: " +
                  input,
              },
            ],
          },
        ],
      });

      const botResponse = await result.response.text();
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Something went wrong. Try again!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="w-[350px] h-[380px] max-w-full bg-white text-black flex flex-col rounded-lg shadow-2xl overflow-hidden border border-gray-300">
  {/* Chat Container */}
  <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
    <div ref={chatRef} className="flex flex-col space-y-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] px-4 py-2 rounded-lg shadow ${
              msg.sender === "user"
                ? "bg-green-600 text-white rounded-br-none"
                : "bg-orange-500 text-white rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  </main>

  {/* Input Bar at Bottom */}
  <footer className="px-4 py-3 border-t border-gray-300 bg-white">
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type your message..."
        className="flex-1 px-3 py-2 bg-gray-100 text-black border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition disabled:opacity-50"
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  </footer>
</div>

);


}

export default Chatting;