// Clean wireframe globe. Meridians pulse (scaleX) with staggered delays,
// which reads as the sphere slowly rotating around its vertical axis.
const MERIDIAN_COUNT = 6;
const PERIOD = 9; // seconds, must match globe-rotate in globals.css

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

      {/* Latitudes (static horizontal chords) */}
      <line x1="10" y1="150" x2="290" y2="150" />
      <line x1="18.1" y1="103" x2="281.9" y2="103" />
      <line x1="18.1" y1="197" x2="281.9" y2="197" />
      <line x1="45.4" y1="57" x2="254.6" y2="57" />
      <line x1="45.4" y1="243" x2="254.6" y2="243" />

      {/* Meridians (animated) */}
      {Array.from({ length: MERIDIAN_COUNT }).map((_, i) => (
        <ellipse
          key={i}
          className="meridian"
          cx="150"
          cy="150"
          rx="140"
          ry="140"
          style={{ animationDelay: `${-(PERIOD / MERIDIAN_COUNT) * i}s` }}
        />
      ))}
    </svg>
  );
}
