export function Navigation() {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#A8D4DC" }}>
          Ashley Graham
        </span>
        <ul className="flex gap-3 text-sm">
          {["About", "Projects", "Essays", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-all duration-200"
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: "999px",
                  border: "1px solid #46292B",
                  color: "#959BB9",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#73617B";
                  e.currentTarget.style.color = "#A8D4DC";
                  e.currentTarget.style.backgroundColor = "rgba(115,97,123,0.15)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#46292B";
                  e.currentTarget.style.color = "#959BB9";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
}