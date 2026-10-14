"use client";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, BriefcaseBusiness } from "lucide-react";
import { workChapters } from "./experience";

export function WorkJourney({ onOpen }: { onOpen: (index: number) => void }) {
  const [selected, setSelected] = useState(0);
  const chapter = workChapters[selected];
  return (
    <section
      className="journey-section"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="wrap">
        <div className="section-heading journey-heading">
          <div>
            <span className="section-kicker">Work at SRM Technologies</span>
            <h2 id="journey-title">
              Learning. Building.
              <br />
              Taking on more.
            </h2>
          </div>
          <p>
            A curated view of my daily work log.
            <br />
            September 2025 — 13 October 2026
          </p>
        </div>
        <div className="role-progression">
          <div>
            <BriefcaseBusiness size={20} />
            <p>
              <strong>Internship</strong>
              <span>September 2025 — March 2026 · 7 months</span>
            </p>
          </div>
          <span className="progression-line" aria-hidden="true" />
          <div>
            <BriefcaseBusiness size={20} />
            <p>
              <strong>Programmer Analyst Trainee</strong>
              <span>Full time · April 2026 — present</span>
            </p>
          </div>
        </div>
        <div className="journey-browser">
          <div
            className="month-selector"
            role="group"
            aria-label="Select a work-log month"
          >
            <p>Select a month</p>
            <div className="month-list">
              {workChapters.map((item, index) => (
                <button
                  key={item.id}
                  aria-pressed={selected === index}
                  aria-controls="month-detail"
                  onClick={() => setSelected(index)}
                >
                  <span>{item.month}</span>
                  <small>{item.title}</small>
                </button>
              ))}
            </div>
          </div>
          <article
            className="month-detail"
            id="month-detail"
            aria-labelledby="month-title"
            key={chapter.id}
          >
            <div className="month-summary" aria-live="polite">
              <span className="chapter-date">
                {chapter.month}
                {selected === 0 ? " · through 13 October" : ""}
              </span>
              <h3 id="month-title">{chapter.title}</h3>
              <p>{chapter.overview}</p>
            </div>
            <h4>Work highlights</h4>
            <ul className="chapter-highlights">
              {chapter.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div
              className="chapter-stack"
              aria-label="Technologies and learning focus"
            >
              {chapter.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <details className="weekly-highlights">
              <summary>
                Work-period highlights <ChevronDown size={17} />
              </summary>
              <ol>
                {chapter.weeks.map((week) => (
                  <li key={week.period}>
                    <strong>{week.period}</strong>
                    <p>{week.work}</p>
                  </li>
                ))}
              </ol>
            </details>
            {chapter.project !== undefined && (
              <button
                className="button primary"
                onClick={() => onOpen(chapter.project!)}
              >
                View related case study <ArrowUpRight size={16} />
              </button>
            )}
          </article>
        </div>
        <p className="journey-source-note">
          Selected learning exercises, POCs and team contributions—not a list of
          separate shipped products. Company data and raw log entries stay
          private.
        </p>
      </div>
    </section>
  );
}
