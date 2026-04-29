export default function Hero() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <div id="home">
      <section className="min-h-[819px] flex flex-col justify-center max-w-container-max mx-auto px-margin-x mb-section-gap relative">
        <div className="max-w-4xl">
          <span className="font-mono-label text-mono-label text-secondary-container tracking-widest uppercase mb-4 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            System Status: Online
          </span>
          <h1 className="font-h1 text-h1 text-on-surface mb-6 glow-text-cyan">
            Front-end
            <br />
            <span className="text-surface-variant">Developer</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 border-l-2 border-primary-container pl-6 py-2">
            Engineering high-performance, immersive digital interfaces.
            Specializing in dark mode aesthetics, modern web technologies, and
            pixel-perfect execution.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded font-mono-label text-mono-label glow-cyan-strong hover:bg-primary-fixed transition-all hover:scale-105">
              Initiate Sequence
            </button>
            <button className="px-8 py-4 rounded border border-primary-container text-primary-container font-mono-label text-mono-label hover:glow-cyan transition-all hover:bg-primary-container/10">
              View Source
            </button>
          </div>
        </div>
        {/* <!-- Abstract Hero Visual --> */}
        <div className="absolute right-margin-x top-1/2 -translate-y-1/2 hidden lg:block w-[400px] h-[400px]">
          <img
            alt="Abstract dark geometric shapes with subtle cyan and purple neon lighting, high-tech vibe"
            className="w-full h-full object-cover rounded-xl opacity-60 mix-blend-screen"
            data-alt="Abstract dark geometric shapes with subtle cyan and purple neon lighting, high-tech vibe"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm9m2CwYJgVnGrB_nukeJGhFyruHk3gfUMBcvt2x-OhnmHJEMPd2P3gtzCIqN0fs2BFbMTkYCmfj5hG4AXmoJ02IoVu4YNjuS8vyARzpS3CeCD7v4J3vdma6OfQ_YkOL-TX5OoSi1AT_hT_VigkXTUvxjvhl9reWNmKy-6ZK9Vc1livaWsgJ3bRGHnRqOi-2cv3t_StPvUfSmkvb3yWXwx39fHsz-Ni-UWy3HT0Yz8Tj6mIIP9qme4Miquea_FFhJWHZ8nd2EiEsM"
          />
        </div>
      </section>
      </div>
    </>
  );
}
