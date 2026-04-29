export default function ContactForm() {
  return (
    <form className="space-y-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono-label text-mono-label text-on-surface-variant mb-2">
            Name
          </label>
          <input
            className="w-full bg-[#080808] border border-surface-container-high rounded p-4 font-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:shadow-[inset_0_0_10px_rgba(0,240,255,0.2)] transition-all outline-none"
            placeholder="Sarah M"
            type="text"
          />
        </div>
        <div>
          <label className="block font-mono-label text-mono-label text-on-surface-variant mb-2">
            Email Address
          </label>
          <input
            className="w-full bg-[#080808] border border-surface-container-high rounded p-4 font-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:shadow-[inset_0_0_10px_rgba(0,240,255,0.2)] transition-all outline-none"
            placeholder="sarah.m@gmail.com"
            type="email"
          />
        </div>
      </div>
      <div>
        <label className="block font-mono-label text-mono-label text-on-surface-variant mb-2">
          Message
        </label>
        <textarea
          className="w-full bg-[#080808] border border-surface-container-high rounded p-4 font-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:shadow-[inset_0_0_10px_rgba(0,240,255,0.2)] transition-all outline-none resize-none"
          placeholder="Halo Mario! Saya ingin ngobrol soal..."
          rows={4}
        ></textarea>
      </div>
      <a href="mailto:marrhasiholan@gmail.com">
        <button
          className="w-full bg-surface-container-highest border border-primary-container/50 text-primary-container py-4 rounded font-mono-label text-mono-label hover:bg-primary-container hover:text-on-primary-container hover:glow-cyan-strong transition-all duration-300"
          type="button"
        >
          Send Message
        </button>
      </a>
    </form>
  );
}
