"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const sections = [
  { id: "top", label: "Overview" },
  { id: "work", label: "Projects" },
  { id: "journey", label: "SRM journey" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
function subscribeTheme(callback: () => void) {
  function syncStorage(event: StorageEvent) {
    if (
      event.key === "portfolio-theme" &&
      (event.newValue === "light" || event.newValue === "dark")
    ) {
      document.documentElement.dataset.theme = event.newValue;
      callback();
    }
  }
  window.addEventListener("portfolio-theme", callback);
  window.addEventListener("storage", syncStorage);
  return () => {
    window.removeEventListener("portfolio-theme", callback);
    window.removeEventListener("storage", syncStorage);
  };
}
function getTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "dark");
  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#090e1c" : "#f4f8fc");
  }, [theme]);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Theme still works when storage is unavailable. */
    }
    window.dispatchEvent(new Event("portfolio-theme"));
  }
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
export function SectionRail() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    for (const { id } of sections) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="section-rail" aria-label="Page sections">
      <span className="rail-label" aria-hidden="true">
        On this page
      </span>
      <div className="rail-segments">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? "location" : undefined}
          >
            <span className="rail-marker" aria-hidden="true" />
            <span>{section.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
