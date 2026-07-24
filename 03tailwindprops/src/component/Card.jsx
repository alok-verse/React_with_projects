import { useState } from "react";

const cards = [
  {
    id: 1,
    category: "Design",
    tag: "Featured",
    title: "The Art of Negative Space",
    excerpt:
      "Discover how emptiness becomes the most powerful design tool — where silence speaks louder than form.",
    author: "Mira Tanaka",
    date: "Mar 28, 2026",
    readTime: "5 min read",
    gradient: "from-rose-400 via-fuchsia-500 to-indigo-500",
    accent: "#f43f5e",
    avatar: "MT",
    avatarBg: "bg-rose-100 text-rose-600",
  },
  {
    id: 2,
    category: "Technology",
    tag: "Trending",
    title: "Neural Interfaces & the Human Experience",
    excerpt:
      "When brain meets machine, who writes the narrative? Exploring the ethics and beauty of cognitive augmentation.",
    author: "Luca Ferretti",
    date: "Apr 1, 2026",
    readTime: "8 min read",
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    accent: "#06b6d4",
    avatar: "LF",
    avatarBg: "bg-cyan-100 text-cyan-700",
  },
  {
    id: 3,
    category: "Culture",
    tag: "New",
    title: "Cities That Dream in Neon",
    excerpt:
      "Urban nightscapes as living canvases — a photographic journey through the world's most electric skylines.",
    author: "Seo-Yeon Park",
    date: "Apr 4, 2026",
    readTime: "4 min read",
    gradient: "from-amber-400 via-orange-500 to-pink-500",
    accent: "#f97316",
    avatar: "SP",
    avatarBg: "bg-amber-100 text-amber-700",
  },
];

function Card({ card, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      style={{ animationDelay: `${index * 120}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow layer */}
      <div
        className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700`}
      />

      {/* Card body */}
      <div className="relative rounded-3xl bg-white border border-zinc-100 overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">

        {/* Top gradient banner */}
        <div className={`h-2 w-full bg-gradient-to-r ${card.gradient}`} />

        {/* Decorative circle */}
        <div
          className={`absolute top-6 right-6 w-28 h-28 rounded-full bg-gradient-to-br ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}
        />

        <div className="p-8">
          {/* Tag & Category */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: card.accent }}
            >
              {card.tag}
            </span>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400">
              {card.category}
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-black text-2xl leading-tight text-zinc-900 mb-3 tracking-tight transition-all duration-300"
            style={{
              backgroundImage: hovered
                ? `linear-gradient(to right, ${card.accent}, #7c3aed)`
                : "none",
              WebkitBackgroundClip: hovered ? "text" : "initial",
              WebkitTextFillColor: hovered ? "transparent" : "initial",
            }}
          >
            {card.title}
          </h2>

          {/* Excerpt */}
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">
            {card.excerpt}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-100 mb-6" />

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black tracking-wide ${card.avatarBg}`}
              >
                {card.avatar}
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-800">{card.author}</p>
                <p className="text-[10px] text-zinc-400">{card.date}</p>
              </div>
            </div>

            {/* Read Time + Arrow */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-400 font-medium">{card.readTime}</span>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${card.accent}18` }}
              >
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  style={{ color: card.accent }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center px-6 py-20">

      {/* Google font import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        body, * { font-family: 'DM Sans', sans-serif; }
        h1, h2 { font-family: 'Bricolage Grotesque', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          opacity: 0;
          animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) forwards;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-14 animate-fadeUp">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 mb-3">
          Component Showcase
        </p>
        <h1 className="text-5xl font-black text-zinc-900 tracking-tight leading-none mb-4">
          Beautiful Cards
        </h1>
        <p className="text-zinc-500 text-base font-light max-w-sm mx-auto">
          Hover to feel the magic — subtle depth, vivid gradients, fluid motion.
        </p>
      </div>

      {/* Cards grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-7">
        {cards.map((card, i) => (
          <div key={card.id} className="animate-fadeUp" style={{ animationDelay: `${i * 130 + 200}ms` }}>
            <Card card={card} index={i} />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-14 text-[11px] tracking-widest uppercase text-zinc-300 animate-fadeUp" style={{ animationDelay: "600ms" }}>
        React · Vite · Tailwind CSS
      </p>
    </div>
  );
}