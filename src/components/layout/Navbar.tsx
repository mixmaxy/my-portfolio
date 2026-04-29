export default function Navbar() {
  return (
    <>
      {/* TopNavBar Component */}
      <nav className="bg-black/10 backdrop-blur-md font-space-grotesk tracking-tighter fixed top-4 rounded-xl left-1/2 -translate-x-1/2 w-full z-50 shadow-[0_0_20px_rgba(0,240,255,0.1)] flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-widest text-cyan-400 uppercase">
          Mario.H
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-gray-400 active:border-b-2 border-cyan-400 active:pb-1 hover:text-cyan-400 duration-300 scale-95 active:scale-90 transition-all"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-gray-400 active:border-b-2 border-cyan-400 active:pb-1 hover:text-cyan-400 duration-300 scale-95 active:scale-90 transition-all"
            href="#project"
          >
            Project
          </a>
          <a
            className="text-gray-400 active:border-b-2 border-cyan-400 active:pb-1 hover:text-cyan-400 duration-300 scale-95 active:scale-90 transition-all"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <button className="hidden md:flex bg-primary-container text-on-primary-container px-6 py-2 rounded font-mono-label text-mono-label glow-cyan-strong hover:bg-primary-fixed transition-colors">
          Hire Me
        </button>

        {/* Mobile Menu Icon (Visual only) */}
        <button className="md:hidden text-primary-container">
          <span className="material-symbols-outlined" data-icon="menu">
            menu
          </span>
        </button>
      </nav>
    </>
  );
}
