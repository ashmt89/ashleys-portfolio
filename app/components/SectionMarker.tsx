type SectionMarkerProps = {
  number: string;
  label: string;
  accent?: "cyan" | "pink" | "lime" | "violet";
};

const accentColors = {
  cyan: "text-[#58d7ff]/65",
  pink: "text-[#ff2da3]/65",
  lime: "text-[#d8ff47]/65",
  violet: "text-[#8c52ff]/70",
};

export function SectionMarker({
  number,
  label,
  accent = "cyan",
}: SectionMarkerProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-4

        font-mono

        text-[0.58rem]
        font-medium
        uppercase
        tracking-[0.2em]
      "
    >
      {/* Number */}

      <span className={accentColors[accent]}>
        {number}
      </span>

      {/* Divider */}

      <span
        aria-hidden="true"
        className="
          h-px
          w-8

          bg-gradient-to-r
          from-white/20
          to-white/[0.03]
        "
      />

      {/* Label */}

      <span className="text-white/25">
        {label}
      </span>
    </div>
  );
}

export default SectionMarker;