import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../lib/api";
import { useAuth } from "../lib/auth";

export default function Chat() {
  const { appId } = useParams();
  const { user } = useAuth();
  const [data, setData] = useState({ application: null, messages: [] });
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef(null);

  const load = async () => {
    try {
      const res = await api.get(`/chat/messages/${appId}`);
      setData(res.data);
    } catch (e) {}
    finally { setLoading(false); }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [appId]);
  useEffect(() => {
    const t = setInterval(load, 5000);
    return () => clearInterval(t);
    /* eslint-disable-next-line */
  }, [appId]);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [data.messages]);

  const send = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await api.post("/chat/messages", { application_id: appId, text: text.trim() });
      setText("");
      load();
    } catch (e) {}
  };

  if (loading) return <div className="min-h-screen bg-[#09090B]"><Navbar /><div className="p-12 font-mono text-sm text-zinc-500 uppercase max-w-7xl mx-auto">Загрузка...</div></div>;
  const a = data.application;
  if (!a) return null;

  return (
    <div className="min-h-screen bg-[#09090B] flex flex-col" data-testid="chat-page">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 w-full flex-1 flex flex-col">
        <div className="overline mb-3">// CHAT / {appId}</div>
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h1 className="font-heading font-bold text-2xl">{a.job_title}</h1>
            <div className="text-sm text-zinc-400">{a.company} · {user?.user_id === a.candidate_id ? "Чат с работодателем" : `Кандидат: ${a.candidate_name}`}</div>
          </div>
          <Link to={`/jobs/${a.job_id}`} className="font-mono text-xs uppercase text-[#FACC15] hover:underline">Вакансия →</Link>
        </div>

        <div className="card-surface flex-1 flex flex-col min-h-[500px] mb-4 overflow-hidden">
          <div className="flex-1 p-6 overflow-y-auto space-y-3" data-testid="chat-messages">
            {data.messages.length === 0 ? (
              <div className="text-center text-zinc-500 font-mono text-xs uppercase mt-12">// Сообщений пока нет. Напишите первым.</div>
            ) : (
              data.messages.map((m) => {
                const mine = m.sender_id === user?.user_id;
                return (
                  <div key={m.message_id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[70%] p-3 ${mine ? "bg-[#FACC15] text-[#09090B]" : "bg-zinc-800 text-white"}`}>
                      <div className={`font-mono text-xs uppercase mb-1 ${mine ? "text-zinc-700" : "text-zinc-400"}`}>
                        {m.sender_name} · {new Date(m.created_at).toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" })}
                      </div>
                      <div className="text-sm whitespace-pre-wrap">{m.text}</div>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={send} className="border-t border-zinc-800 p-4 flex gap-3">
            <input type="text" placeholder="Сообщение..." className="input-field flex-1" value={text} onChange={(e) => setText(e.target.value)} data-testid="chat-input" />
            <button type="submit" className="btn-primary" data-testid="chat-send-btn">→</button>
          </form>
        </div>
      </div>
    </div>
  );
}
