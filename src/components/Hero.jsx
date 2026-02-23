function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between bg-[#111827] px-16">
      {/* left content */}
      <div className="max-w-xl text-left space-y-6">
        <p className="text-sm tracking-wide text-[#9CA3AF]">Available for work</p>
        <h1 className="text-7xl font-bold text-[#F9FAFB] tracking-tight leading-tight">Harshika Malhotra</h1>
        <p className="text-lg text-[#D1D5DB] font-medium">MERN Developer</p>
        <p className="text-base text-[#9CA3AF] leading-relaxed">I build clean, responsive websites for individuals and small businesses. Focused on clarity, performance, and real-world usability.</p>
      </div>

      {/* right img */}
      <div></div>
    </section>
  );
}

export default Hero;