"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useTransform, motion, animate, useMotionValueEvent } from "framer-motion";

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export default function Counter({ to, suffix = "", prefix = "", duration = 2, decimals = 0 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(latest.toFixed(decimals));
  });

  useEffect(() => {
    if (isInView) {
      animate(count, to, {
        duration: duration,
        ease: "easeOut",
      });
    }
  }, [isInView, count, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
