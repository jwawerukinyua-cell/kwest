import Image from "next/image";

type VerifiedBadgeProps = {
  size?: "sm" | "md";
};

export default function VerifiedBadge({
  size = "sm",
}: VerifiedBadgeProps) {
  const small = size === "sm";

  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-emerald-200
        bg-emerald-50
        px-3
        py-1
        shadow-sm
        transition-all
        duration-200
        hover:bg-emerald-100
      "
    >
      <Image
        src="/logos/kwest-icon.png"
        alt="KWEST Verified"
        width={small ? 16 : 20}
        height={small ? 16 : 20}
      />

      <span
        className={`font-bold uppercase tracking-wide text-emerald-700 ${
          small ? "text-[10px]" : "text-xs"
        }`}
      >
        VERIFIED
      </span>
    </div>
  );
}