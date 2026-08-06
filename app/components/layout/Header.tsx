import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logos/kwest-logo.png"
            alt="KWEST Directory"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Menu Button */}
        <button
          className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
          aria-label="Open Menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}