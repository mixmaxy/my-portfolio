export default function Footer() {
  return (
    <>
      {/* <!-- Footer Component --> */}
      <footer className="bg-black/30 rounded-xl  py-12 border-t border-zinc-900 shadow-none flex flex-col md:flex-row justify-between items-center px-8 gap-6 max-w-7xl mx-auto">
        <div className="text-cyan-400 font-bold font-mono text-xs uppercase tracking-widest">
          © 2026 Mario H.N.
        </div>
        <div className="flex gap-6">
          <a
            className="text-cyan-400 font-mono text-xs uppercase tracking-widest hover:text-cyan-300 transition-all opacity-80 hover:opacity-100"
            href="https://github.com/mixmaxy"
          >
            GitHub
          </a>
          <a
            className="text-zinc-600 font-mono text-xs uppercase tracking-widest hover:text-cyan-300 transition-all opacity-80 hover:opacity-100"
            href="https://www.linkedin.com/in/marionap/"
          >
            LinkedIn
          </a>
          <a
            className="text-zinc-600 font-mono text-xs uppercase tracking-widest hover:text-cyan-300 transition-all opacity-80 hover:opacity-100"
            href="https://www.instagram.com/sirmaxy._/"
          >
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
