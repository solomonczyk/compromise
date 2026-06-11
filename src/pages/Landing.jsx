import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]" data-testid="landing-page">
      <Navbar />

      {/* HERO */}
      <section className="relative border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          <div className="md:col-span-8 fade-up">
            <div className="overline mb-6" data-testid="hero-overline">// JOB.SEARCH / V1.0 / FOR ENGINEERS</div>
            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-[0.95]">
              Работа в IT.<br/>
              <span className="text-[#FACC15]">Без воды.</span><br/>
              <span className="text-zinc-500">Без рекрутёрского спама.</span>
            </h1>
            <p className="mt-8 text-lg text-zinc-400 max-w-xl leading-relaxed">
              JobPulse — это анти-LinkedIn для технарей. AI-подбор вакансий, прямой чат
              с работодателем, генерация резюме одним кликом. Никаких лайков,
              никаких "опытных гуру".
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => navigate("/register")} className="btn-primary" data-testid="hero-cta-candidate">
                Я ищу работу →
              </button>
              <button onClick={() => navigate("/register?role=employer")} className="btn-ghost" data-testid="hero-cta-employer">
                Я нанимаю
              </button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 font-mono text-xs text-zinc-500 uppercase tracking-widest">
              <span>→ AI-MATCHING</span>
              <span>→ DIRECT CHAT</span>
              <span>→ NO BS</span>
            </div>
          </div>

          <div className="md:col-span-4 md:border-l md:border-zinc-800 md:pl-8 flex flex-col gap-4">
            <div className="card-surface p-6 fade-up" style={{animationDelay: "0.1s"}}>
              <div className="overline mb-2">// STATS</div>
              <div className="font-heading font-black text-5xl tracking-tighter">12K+</div>
              <div className="text-sm text-zinc-400 mt-1">Открытых вакансий</div>
            </div>
            <div className="card-surface p-6 fade-up" style={{animationDelay: "0.2s"}}>
              <div className="overline mb-2">// AI POWERED</div>
              <div className="font-heading font-black text-5xl tracking-tighter text-[#FACC15]">87%</div>
              <div className="text-sm text-zinc-400 mt-1">Точность подбора</div>
            </div>
            <div className="card-surface p-6 fade-up" style={{animationDelay: "0.3s"}}>
              <div className="overline mb-2">// AVG RESPONSE</div>
              <div className="font-heading font-black text-5xl tracking-tighter">48h</div>
              <div className="text-sm text-zinc-400 mt-1">Среднее время отклика</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE: hiring companies */}
      <section className="border-b border-zinc-800 py-8">
        <div className="overline px-6 mb-4 max-w-7xl mx-auto">// КОМПАНИИ КОТОРЫЕ НАНИМАЮТ</div>
        <Marquee gradient={false} speed={40} className="marquee-row">
          {["YANDEX", "OZON", "TINKOFF", "VK", "AVITO", "SBER", "WILDBERRIES", "X5", "MTS", "ROSTELECOM"].map((c) => (
            <div key={c} className="px-12 font-heading font-black text-3xl tracking-tighter text-zinc-500">
              {c}<span className="text-[#FACC15]">.</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* BENTO FEATURES */}
      <section className="border-b border-zinc-800 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-12 mb-8">
            <div className="overline mb-4">// FEATURES</div>
            <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tighter">Платформа собрана для технарей.</h2>
          </div>

          <div className="md:col-span-6 card-surface p-8 md:row-span-2">
            <div className="overline mb-3">01 / AI</div>
            <h3 className="font-heading font-bold text-2xl mb-3">AI подбор и резюме за 10 секунд</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Claude Sonnet 4.6 анализирует ваши навыки и подбирает вакансии с конкретным
              match-score. Сгенерирует резюме и cover letter под каждую позицию.
            </p>
            <div className="mt-8 border border-zinc-800 p-4 font-mono text-xs text-zinc-400 bg-black">
              <div className="text-[#FACC15]">$ jobpulse match --job python-senior</div>
              <div className="mt-2">match_score: <span className="text-[#22C55E]">92%</span></div>
              <div>strengths: ["fastapi", "asyncio", "postgres"]</div>
              <div>gaps: ["kubernetes"]</div>
              <div className="text-[#FACC15] mt-2">$ _</div>
            </div>
          </div>

          <div className="md:col-span-6 card-surface p-8">
            <div className="overline mb-3">02 / FILTERS</div>
            <h3 className="font-heading font-bold text-2xl mb-3">Поиск без шелухи</h3>
            <p className="text-zinc-400 leading-relaxed">
              Фильтры по стеку, локации, удалёнке, зарплате. Нет рекламы, нет premium-вакансий.
            </p>
          </div>

          <div className="md:col-span-3 card-surface p-8">
            <div className="overline mb-3">03 / CHAT</div>
            <h3 className="font-heading font-bold text-xl">Прямой чат с работодателем</h3>
          </div>

          <div className="md:col-span-3 card-surface p-8 bg-[#FACC15] text-[#09090B]">
            <div className="font-mono text-xs uppercase tracking-widest mb-3 opacity-70">04 / FREE</div>
            <h3 className="font-heading font-black text-xl">Бесплатно для соискателей</h3>
          </div>

          <div className="md:col-span-12 card-surface p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="overline mb-2">05 / OPEN</div>
              <h3 className="font-heading font-bold text-xl mb-2">Открытый API</h3>
              <p className="text-zinc-400 text-sm">REST API для агрегаторов и ATS.</p>
            </div>
            <div>
              <div className="overline mb-2">06 / FAST</div>
              <h3 className="font-heading font-bold text-xl mb-2">Отклик в один клик</h3>
              <p className="text-zinc-400 text-sm">Резюме автоматически прикрепляется.</p>
            </div>
            <div>
              <div className="overline mb-2">07 / NO ADS</div>
              <h3 className="font-heading font-bold text-xl mb-2">Никакой рекламы</h3>
              <p className="text-zinc-400 text-sm">Чистый интерфейс, ничего не отвлекает.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-zinc-800 max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="font-heading font-black text-5xl md:text-6xl tracking-tighter mb-6">
          Готовы найти<br/><span className="text-[#FACC15]">свою работу?</span>
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          Регистрация занимает 30 секунд. AI подберёт первые вакансии сразу.
        </p>
        <button onClick={() => navigate("/register")} className="btn-primary" data-testid="bottom-cta-btn">
          Создать аккаунт →
        </button>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-between gap-4 font-mono text-xs text-zinc-500 uppercase tracking-widest">
        <span>© 2026 JobPulse</span>
        <span>v1.0 · powered by Claude Sonnet</span>
      </footer>
    </div>
  );
}
