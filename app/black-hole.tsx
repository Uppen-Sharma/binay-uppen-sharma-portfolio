import { useId } from "react";
const stars = [
  [42, 90, 2],
  [86, 190, 1.5],
  [130, 48, 1.8],
  [217, 94, 1.5],
  [386, 49, 2],
  [476, 100, 1.5],
  [559, 175, 2],
  [522, 294, 1.7],
  [575, 386, 1.5],
  [432, 427, 2],
  [340, 454, 1.5],
  [176, 428, 2],
  [67, 357, 1.5],
  [252, 40, 1.3],
  [540, 66, 1.2],
  [40, 265, 1.2],
  [485, 455, 1.3],
];
export function BlackHole() {
  const id = useId();
  return (
    <div className="black-hole-scene">
      <svg
        className="black-hole"
        viewBox="0 0 620 500"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={id + "-halo"}>
            <stop stopColor="var(--gravity)" stopOpacity=".23" />
            <stop offset=".6" stopColor="var(--gravity)" stopOpacity=".08" />
            <stop offset="1" stopColor="var(--gravity)" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id={id + "-disk"}
            x1="80"
            y1="205"
            x2="530"
            y2="280"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--gravity)" stopOpacity=".15" />
            <stop offset=".28" stopColor="var(--gravity)" />
            <stop offset=".52" stopColor="var(--gravity-core)" />
            <stop offset=".8" stopColor="var(--gravity)" />
            <stop offset="1" stopColor="var(--gravity)" stopOpacity=".15" />
          </linearGradient>
        </defs>
        <g className="gravity-stars" fill="var(--star)">
          {stars.map(([x, y, r]) => (
            <circle key={x} cx={x} cy={y} r={r} />
          ))}
          <path
            d="M99 113h12m-6-6v12M494 353h12m-6-6v12M359 82h10m-5-5v10"
            stroke="var(--star)"
            strokeWidth="1.3"
          />
        </g>
        <circle cx="310" cy="245" r="230" fill={`url(#${id}-halo)`} />
        <g transform="rotate(-18 310 245)">
          <ellipse
            cx="310"
            cy="245"
            rx="238"
            ry="65"
            stroke="var(--gravity)"
            strokeOpacity=".2"
            strokeDasharray="2 8"
          />
          <ellipse
            cx="310"
            cy="245"
            rx="205"
            ry="48"
            stroke={`url(#${id}-disk)`}
            strokeWidth="13"
            opacity=".12"
          />
          <ellipse
            cx="310"
            cy="245"
            rx="199"
            ry="43"
            stroke={`url(#${id}-disk)`}
            strokeWidth="2"
          />
          <ellipse
            cx="310"
            cy="245"
            rx="176"
            ry="35"
            stroke={`url(#${id}-disk)`}
            strokeWidth="5"
          />
          <path
            d="M227 245c0-124 166-124 166 0"
            stroke="var(--gravity)"
            strokeWidth="10"
            opacity=".14"
          />
          <path
            d="M227 245c0-124 166-124 166 0"
            stroke={`url(#${id}-disk)`}
            strokeWidth="3"
          />
          <circle
            cx="310"
            cy="245"
            r="75"
            fill="#040810"
            stroke="var(--gravity)"
            strokeWidth="2"
          />
          <circle
            cx="310"
            cy="245"
            r="70"
            stroke="var(--gravity-core)"
            strokeOpacity=".32"
          />
          <path
            d="M111 245c0 57 398 57 398 0"
            stroke={`url(#${id}-disk)`}
            strokeWidth="7"
            opacity=".15"
          />
          <path
            d="M111 245c0 51 398 51 398 0"
            stroke={`url(#${id}-disk)`}
            strokeWidth="3"
          />
          <path
            d="M134 251c28 29 111 39 176 39s149-10 176-39"
            stroke="var(--gravity-core)"
            strokeWidth="1"
            opacity=".8"
          />
        </g>
      </svg>
    </div>
  );
}
