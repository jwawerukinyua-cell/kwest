import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
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
          className="rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-100"
          aria-label="Open Menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}