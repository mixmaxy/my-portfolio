export default function Skills() {
  return (
    <>
      {/* <!-- Tech Stack Section --> */}
      <section className="max-w-container-max mx-auto px-margin-x mb-section-gap">
        <div className="mb-16">
          <h2 className="font-h2 text-h2 text-on-surface mb-4">Tech Stack</h2>
          <div className="h-px w-full bg-linear-to-r from-primary-container to-transparent opacity-30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* <!-- Core Tech Card --> */}
          <div className="glass-panel p-8 rounded-xl hover:border-primary-container transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="font-h3 text-h3 text-on-surface mb-8 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary-container"
                data-icon="terminal"
              >
                terminal
              </span>
              Core
            </h3>
            <div className="space-y-6">
              {/* <!-- Progress Bar Item --> */}
              <div>
                <div className="flex justify-between font-mono-label text-mono-label text-on-surface-variant mb-2">
                  <span>React / Next.js</span>
                  <span className="text-primary-container">85%</span>
                </div>
                <div className="w-full h-[4px] bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-primary-container to-secondary-container w-[85%] shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                </div>
              </div>
              {/* <!-- Progress Bar Item --> */}
              <div>
                <div className="flex justify-between font-mono-label text-mono-label text-on-surface-variant mb-2">
                  <span>TypeScript</span>
                  <span className="text-primary-container">82%</span>
                </div>
                <div className="w-full h-[4px] bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-primary-container to-secondary-container w-[82%] shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                </div>
              </div>
              {/* <!-- Progress Bar Item --> */}
              <div>
                <div className="flex justify-between font-mono-label text-mono-label text-on-surface-variant mb-2">
                  <span>Tailwind CSS</span>
                  <span className="text-primary-container">88%</span>
                </div>
                <div className="w-full h-[4px] bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-primary-container to-secondary-container w-[88%] shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Environment / Tools Card --> */}
          <div className="glass-panel p-8 rounded-xl hover:border-secondary-container transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="font-h3 text-h3 text-on-surface mb-8 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-secondary-container"
                data-icon="deployed_code"
              >
                deployed_code
              </span>
              Environment
            </h3>
            <div className="flex flex-wrap gap-4">
              <span className="font-mono-label text-mono-label bg-[#1A0033] text-secondary-container px-4 py-2 rounded-[2px] border border-secondary-container/30">
                Git
              </span>
              <span className="font-mono-label text-mono-label bg-[#1A0033] text-secondary-container px-4 py-2 rounded-[2px] border border-secondary-container/30">
                Vite
              </span>
              <span className="font-mono-label text-mono-label bg-[#1A0033] text-secondary-container px-4 py-2 rounded-[2px] border border-secondary-container/30">
                Figma
              </span>
              <span className="font-mono-label text-mono-label bg-[#1A0033] text-secondary-container px-4 py-2 rounded-[2px] border border-secondary-container/30">
                Jest
              </span>
            </div>
            {/* <!-- Circular Indicators Concept --> */}
            <div className="mt-8 flex justify-around border-t border-surface-container-high pt-8">
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-2 border-surface-container-high">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    fill="none"
                    r="38"
                    stroke="transparent"
                    strokeWidth="2"
                  ></circle>
                  <circle
                    className="drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]"
                    cx="40"
                    cy="40"
                    fill="none"
                    r="38"
                    stroke="url(#gradient1)"
                    strokeDasharray="238"
                    strokeDashoffset="47"
                    strokeWidth="2"
                  ></circle>
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#00f0ff"></stop>
                      <stop offset="100%" stopColor="#b600f8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-mono-label text-mono-label text-on-surface">
                  UI/UX
                </span>
              </div>
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-2 border-surface-container-high">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    className="drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]"
                    cx="40"
                    cy="40"
                    fill="none"
                    r="38"
                    stroke="url(#gradient1)"
                    strokeDasharray="238"
                    strokeDashoffset="23"
                    strokeWidth="2"
                  ></circle>
                </svg>
                <span className="font-mono-label text-mono-label text-on-surface">
                  Perf
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
