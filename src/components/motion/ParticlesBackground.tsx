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
          value: 100,
          density: { enable: true, width: 1200 },
        },
        color: {
          value: ["#7dd3fc", "#f472b6", "#a5b4fc", "#67e8f9"],
        },
        opacity: {
          value: 0.32,
          animation: {
            enable: true,
            speed: 0.6,
            minimumValue: 0.08,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3.4 },
        },
        move: {
          enable: true,
          speed: 0.45,
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
          color: "#8b5cf6",
          opacity: 0.16,
          width: 1,
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "attract",
            parallax: { enable: true, force: 60, smooth: 12 },
          },
          onClick: { enable: false, mode: [] },
          resize: { enable: true },
        },
        modes: {
          attract: { distance: 200, duration: 0.4, factor: 3 },
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
