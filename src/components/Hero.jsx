function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between bg-[#111827] px-16">
      {/* left content */}
      <div className="max-w-xl text-left space-y-6">

        <div className="flex items-center gap-2">
          {/* dot with pulse */}
          <div className="relative">
            <span className="w-2 h-2 rounded-full bg-[#10B981] relative z-10 block" />
            <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-75" />
          </div>
          <p className="text-sm tracking-wide text-[#9CA3AF]">
            Available for work
          </p>
        </div>

        <h1 className="text-7xl font-bold text-[#F9FAFB] tracking-tight leading-tight">Harshika Malhotra</h1>
        <p className="text-lg text-[#D1D5DB] font-medium">MERN Developer</p>
        <p className="text-base text-[#9CA3AF] leading-relaxed">I build clean, responsive websites for individuals and small businesses. Focused on clarity, performance, and real-world usability.</p>
      </div>

      {/* right img */}
      <div className="w-1/2 flex justify-center items-center">
        <img 
          src="../../images/my-img.png" 
          alt="Harshika" 
          className="w-120 h-120 object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;