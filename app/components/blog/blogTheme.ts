export type BlogAccent =
  | "pink"
  | "cyan"
  | "violet"
  | "lime";

export const blogAccents = {
  pink: {
    hex: "#ff2da3",

    text: "text-[#ff2da3]",
    textMuted: "text-[#ff2da3]/65",

    bg: "bg-[#ff2da3]",

    border: "border-[#ff2da3]/20",

    divider:
      "from-[#ff2da3]/50 to-transparent",

    glow:
      "bg-[#ff2da3]/6",

    dot:
      "bg-[#ff2da3]/60 shadow-[0_0_7px_rgba(255,45,163,0.35)]",
  },

  cyan: {
    hex: "#58d7ff",

    text: "text-[#58d7ff]",
    textMuted: "text-[#58d7ff]/65",

    bg: "bg-[#58d7ff]",

    border: "border-[#58d7ff]/20",

    divider:
      "from-[#58d7ff]/50 to-transparent",

    glow:
      "bg-[#58d7ff]/6",

    dot:
      "bg-[#58d7ff]/60 shadow-[0_0_7px_rgba(88,215,255,0.35)]",
  },

  violet: {
    hex: "#8c52ff",

    text: "text-[#8c52ff]",
    textMuted: "text-[#8c52ff]/65",

    bg: "bg-[#8c52ff]",

    border: "border-[#8c52ff]/20",

    divider:
      "from-[#8c52ff]/50 to-transparent",

    glow:
      "bg-[#8c52ff]/6",

    dot:
      "bg-[#8c52ff]/60 shadow-[0_0_7px_rgba(140,82,255,0.35)]",
  },

  lime: {
    hex: "#d8ff47",

    text: "text-[#d8ff47]",
    textMuted: "text-[#d8ff47]/65",

    bg: "bg-[#d8ff47]",

    border: "border-[#d8ff47]/20",

    divider:
      "from-[#d8ff47]/50 to-transparent",

    glow:
      "bg-[#d8ff47]/5",

    dot:
      "bg-[#d8ff47]/60 shadow-[0_0_7px_rgba(216,255,71,0.35)]",
  },
} as const;