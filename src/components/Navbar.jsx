function Navbar() {

  const links = ["About", "Skills", "Projects", "Experience"];

  return (
    <nav className="bg-[#111827]">
      <div className="flex items-center justify-between px-10 py-6 relative">
        {/* left */}
        <div>
          <h1 className="text-lg font-bold leading-tight">
            <span className="text-[#10B981]">Harshika</span>
            <br />
            <span className="text-[#F9FAFB]">Malhotra</span>
          </h1>
        </div>

        {/* center */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-[#1F2937] rounded-full px-8 py-2 flex gap-8">
          {links.map((link) => {
            return (
              <a 
            key={link}   
            href={`#${link.toLowerCase()}`}
            className="text-[#D1D5DB] hover:text-[#F9FAFB] transition">
              {link}
            </a>
            );
          })}
        </div>

        {/* right */}
        <div className="flex items-center gap-3 bg-[#1F2937] px-8 py-2 rounded-full ">
          <a 
          className="text-[#D1D5DB] text-sm hover:text-[#F9FAFB] cursor-pointer transition"
          href="#contact"
          >Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;