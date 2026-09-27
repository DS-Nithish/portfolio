"use client";

import { useTheme } from "next-themes";
import GlowCursor from "./GlowCursor";

export function PortfolioGlowCursor() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden md:block overflow-hidden">
      <GlowCursor
        attachToWindow={true}
        color={isDark ? "#38bdf8" : "#0284c7"}
        secondaryColor={isDark ? "#a78bfa" : "#7c3aed"}
        trailLength={38}
        trailWidth={isDark ? 7.5 : 6}
        trailTaper={0.8}
        followSpeed={0.18}
        glowIntensity={isDark ? 1.85 : 1.3}
        glowSpread={1.2}
        hotspot={isDark ? 0.7 : 0.4}
        brightness={isDark ? 1.25 : 1.0}
        opacity={isDark ? 0.95 : 0.75}
        pulseSpeed={1.2}
        noiseStrength={0.03}
        idleFade={true}
        idleTimeout={650}
        fadeDuration={800}
        blendMode={isDark ? "screen" : "normal"}
        maxDevicePixelRatio={1.5}
        className="h-full w-full pointer-events-none"
      />
    </div>
  );
}

export default PortfolioGlowCursor;
