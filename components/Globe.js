// Clean static wireframe globe (pictogram style).
export default function Globe({ className = "" }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={`globe ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {/* Outline */}
      <circle cx="150" cy="150" r="140" strokeWidth="2" />

      {/* Latitudes (horizontal chords) */}
      <line x1="10" y1="150" x2="290" y2="150" />
      <line x1="18.1" y1="103" x2="281.9" y2="103" />
      <line x1="18.1" y1="197" x2="281.9" y2="197" />
      <line x1="45.4" y1="57" x2="254.6" y2="57" />
      <line x1="45.4" y1="243" x2="254.6" y2="243" />

      {/* Meridians (fixed longitude lines) */}
      <line x1="150" y1="10" x2="150" y2="290" />
      <ellipse cx="150" cy="150" rx="55" ry="140" />
      <ellipse cx="150" cy="150" rx="105" ry="140" />
    </svg>
  );
}
