"use client";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { usePortfolioTheme } from "./site-controls";

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
  const theme = usePortfolioTheme();
  const [replay, setReplay] = useState(0);
  return (
    <div className="black-hole-scene">
      <svg
        key={theme + replay}
        className="black-hole"
        viewBox="0 0 620 500"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="gravity-halo">
            <stop stopColor="var(--gravity)" stopOpacity=".23" />
            <stop offset=".6" stopColor="var(--gravity)" stopOpacity=".08" />
            <stop offset="1" stopColor="var(--gravity)" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="accretion"
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
        <circle cx="310" cy="245" r="230" fill="url(#gravity-halo)" />
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
            stroke="url(#accretion)"
            strokeWidth="13"
            opacity=".12"
          />
          <ellipse
            cx="310"
            cy="245"
            rx="199"
            ry="43"
            stroke="url(#accretion)"
            strokeWidth="2"
          />
          <ellipse
            cx="310"
            cy="245"
            rx="176"
            ry="35"
            stroke="url(#accretion)"
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
            stroke="url(#accretion)"
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
            stroke="url(#accretion)"
            strokeWidth="7"
            opacity=".15"
          />
          <path
            d="M111 245c0 51 398 51 398 0"
            stroke="url(#accretion)"
            strokeWidth="3"
          />
          <path
            d="M134 251c28 29 111 39 176 39s149-10 176-39"
            stroke="var(--gravity-core)"
            strokeWidth="1"
            opacity=".8"
          />
        </g>
        <g className="infall">
          <g className="infall-item infall-one">
            <g transform="translate(115 130)">
              <rect x="-17" y="-14" width="34" height="28" rx="6" />
              <text className="dark-cargo" textAnchor="middle" y="5">
                {"{ }"}
              </text>
              <path className="light-cargo" d="M-8-4h16M-8 1h10M-8 6h13" />
            </g>
          </g>
          <g className="infall-item infall-two">
            <g transform="translate(520 162)">
              <ellipse rx="15" ry="6" />
              <path d="M-15 0v16c0 8 30 8 30 0V0M-15 8c0 8 30 8 30 0" />
            </g>
          </g>
          <g className="infall-item infall-three">
            <g transform="translate(450 380)">
              <path
                className="dark-cargo"
                d="m-15 0 8-8 8 8-8 8ZM2-8h14M2 0h18M2 8h11"
              />
              <path
                className="light-cargo"
                d="M-13-12h26v24h-26ZM-7 5v-6M0 5V-5M7 5V-9"
              />
            </g>
          </g>
          <g className="infall-item infall-four">
            <g transform="translate(139 366)">
              <circle r="14" />
              <path className="dark-cargo" d="m-7 0 5 5 9-10" />
              <path
                className="light-cargo"
                d="M-6-3c0-8 14-8 12 0-1 3-6 2-6 7M0 8v1"
              />
            </g>
          </g>
        </g>
      </svg>
      <div className="gravity-caption">
        <span>
          Complexity in. <strong>Clarity out.</strong>
        </span>
        <button
          className="orbit-replay"
          onClick={() => setReplay(replay + 1)}
          aria-label="Replay black hole animation"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
}
