type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 hover:-translate-y-0.5",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:-translate-y-0.5",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100",

    light:
      "bg-white text-emerald-700 hover:bg-slate-100 hover:-translate-y-0.5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}