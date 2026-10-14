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
export function usePortfolioTheme() {
  return useSyncExternalStore(subscribeTheme, getTheme, () => "dark");
}
export function ThemeToggle() {
  const theme = usePortfolioTheme();
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
    let scheduled = 0;
    function measure() {
      scheduled = 0;
      const line =
        (document.querySelector("header")?.getBoundingClientRect().bottom ??
          76) + 48;
      let current = "top";
      for (const { id } of sections) {
        const target = document.getElementById(id);
        if (target && target.getBoundingClientRect().top <= line) current = id;
      }
      setActive((previous) => (previous === current ? previous : current));
    }
    function update() {
      if (!scheduled) scheduled = window.requestAnimationFrame(measure);
    }
    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.cancelAnimationFrame(scheduled);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
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
