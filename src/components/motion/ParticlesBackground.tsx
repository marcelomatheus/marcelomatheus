"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      detectRetina: true,
      fpsLimit: 120,
      particles: {
        number: {
          value: 140,
          density: { enable: true, width: 1200 },
        },
        color: {
          value: ["#fff7ea", "#e8cda8", "#c18c4a"],
        },
        opacity: {
          value: 0.12,
          animation: {
            enable: true,
            speed: 0.3,
            minimumValue: 0.02,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 2.2 },
        },
        move: {
          enable: true,
          speed: 0.28,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out",
          attract: {
            enable: true,
            rotate: { x: 600, y: 1200 },
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.05,
          width: 1,
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "attract",
            parallax: { enable: true, force: 36, smooth: 14 },
          },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true },
        },
        modes: {
          attract: { distance: 160, duration: 0.35, factor: 2 },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        className="h-full w-full"
        options={particlesOptions}
      />
    </div>
  );
}
