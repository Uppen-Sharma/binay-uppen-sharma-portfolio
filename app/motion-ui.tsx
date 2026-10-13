"use client";

import {
  useRef,
  type ReactNode,
  type PointerEvent,
  type ComponentProps,
} from "react";
import {
  LazyMotion,
  MotionConfig,
  m,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const features = () =>
  import("./motion-features").then((module) => module.default);
export const settle = {
  type: "spring" as const,
  stiffness: 240,
  damping: 28,
  mass: 0.8,
};

export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={features} strict>
      <MotionConfig reducedMotion="user" transition={settle}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 170, damping: 30 });
  const reduced = useReducedMotion();
  return (
    <m.div
      className="reading-progress"
      style={{ scaleX: reduced ? scrollYProgress : progress }}
      aria-hidden="true"
    />
  );
}

export function Entrance({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "span" | "div";
}) {
  const reduced = useReducedMotion();
  const Element = as === "span" ? m.span : m.div;
  return (
    <Element
      className={className}
      initial={{ transform: "translateY(22px)" }}
      animate={{ transform: "translateY(0px)" }}
      transition={{
        duration: reduced ? 0 : 0.7,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Element>
  );
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: "0px 0px -35px 0px" });
  const reduced = useReducedMotion();
  // Text stays visible in SSR, without JavaScript, and while an observer loads.
  return (
    <m.div
      ref={ref}
      className={className}
      initial={false}
      animate={{
        transform: visible || reduced ? "translateY(0px)" : "translateY(24px)",
      }}
      transition={{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

function usePointerSpring(strength: number) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 24 });
  const springY = useSpring(y, { stiffness: 180, damping: 24 });
  function move(event: PointerEvent<HTMLElement>) {
    if (
      reduced ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }
  return { reduced, springX, springY, move, reset };
}

export function Tilt({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const p = usePointerSpring(5);
  return (
    <m.div
      className={`motion-surface ${className}`}
      onPointerMove={p.move}
      onPointerLeave={p.reset}
      style={{
        rotateX: p.reduced ? 0 : p.springY,
        rotateY: p.reduced ? 0 : p.springX,
        transformPerspective: 1000,
      }}
      whileHover={p.reduced ? undefined : { scale: 1.015 }}
    >
      {children}
    </m.div>
  );
}

export function ScrollScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const transform = useTransform(
    scrollYProgress,
    (value) => `translateY(${(value - 0.5) * -28}px)`,
  );
  return (
    <m.div
      ref={ref}
      className="scroll-scene"
      style={{ transform: reduced ? "none" : transform }}
    >
      {children}
    </m.div>
  );
}

export function MagneticLink({
  children,
  ...props
}: ComponentProps<typeof m.a>) {
  const p = usePointerSpring(10);
  return (
    <m.a
      {...props}
      onPointerMove={p.move}
      onPointerLeave={p.reset}
      onBlur={p.reset}
      style={{ x: p.reduced ? 0 : p.springX, y: p.reduced ? 0 : p.springY }}
      whileTap={p.reduced ? undefined : { scale: 0.97 }}
    >
      {children}
    </m.a>
  );
}
