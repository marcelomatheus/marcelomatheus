"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import type { TechOrbitProps } from "../interfaces/sections";
import { TECH_ICON_MAP } from "./constants/techOrbit";

export function TechOrbit({ copy }: TechOrbitProps) {
  const items = useMemo(() => copy?.items ?? [], [copy]);
  const [rotation, setRotation] = useState(0);
  const step = items.length > 0 ? 360 / items.length : 0;
  const [radius, setRadius] = useState(280);
  const [nodeSize, setNodeSize] = useState(56);
  const [isMobile, setIsMobile] = useState(false);

  const rotate = useCallback(
    (direction: 1 | -1) => {
      if (!items.length) return;
      setRotation((prev) => prev + direction * step * -1);
    },
    [items.length, step],
  );

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < -60) rotate(1);
      if (info.offset.x > 60) rotate(-1);
    },
    [rotate],
  );

  useEffect(() => {
    if (!items.length) return undefined;
    const timer = setInterval(() => rotate(1), 8000);
    return () => clearInterval(timer);
  }, [items.length, rotate]);

  useEffect(() => {
    const updateMetrics = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);
      const dynamicRadius = mobile ? Math.max(120, width * 0.34) : Math.min(260, width * 0.22);
      setRadius(dynamicRadius);
      setNodeSize(mobile ? 44 : 56);
    };

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  const diameter = radius * 2;
  const orbitCanvas = diameter + (isMobile ? 24 : 80);

  const positionedNodes = useMemo(() => {
    return items.map((item, index) => {
      const baseAngle = index * step;
      const angle = baseAngle + rotation;
      const radians = (angle * Math.PI) / 180;
      const x = radius * Math.sin(radians);
      const y = -radius * Math.cos(radians);
      const Icon = TECH_ICON_MAP[item.id];
      const normalized = ((angle % 360) + 360) % 360;
      return { item, Icon, x, y, normalized };
    });
  }, [items, rotation, radius, step]);

  const visibleNodes = useMemo(() => positionedNodes, [positionedNodes]);

  const middleNode = useMemo(() => {
    return visibleNodes.reduce<typeof visibleNodes[number] | undefined>((best, node) => {
      if (!best) return node;
      const bestDistance = Math.min(best.normalized, 360 - best.normalized);
      const nodeDistance = Math.min(node.normalized, 360 - node.normalized);
      return nodeDistance < bestDistance ? node : best;
    }, undefined);
  }, [visibleNodes]);

  const activeTech = middleNode?.item;

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDrag}
        className="relative mx-auto cursor-grab overflow-visible active:cursor-grabbing"
        style={{ width: orbitCanvas, height: orbitCanvas }}
      >
        <div className="absolute inset-0 rounded-full border border-white/15 bg-transparent">
          <div className="absolute inset-6 rounded-full border border-white/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_rgba(0,216,255,0.8)]" />
          </div>
        </div>
        <div className="absolute inset-0 rotate-[-90deg]">
          {visibleNodes.map(({ item, Icon, x, y }) => (
            <motion.div
              key={item.id}
              className="absolute left-1/2 top-1/2"
              animate={{ x, y, scale: middleNode?.item.id === item.id ? 1.25 : 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="flex -translate-x-1/2 -translate-y-1/2 rotate-[90deg] items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur transition-shadow"
                style={{ width: nodeSize, height: nodeSize }}
              >
                <Icon className="h-6 w-6 text-white" aria-hidden />
              </div>
            </motion.div>
          ))}
        </div>
        {activeTech && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div
              className="flex flex-col items-center justify-center rounded-full border border-white/10 bg-black/60/90 text-center backdrop-blur"
              style={{
                width: Math.min(orbitCanvas * 0.52, radius * 1.2),
                height: Math.min(orbitCanvas * 0.52, radius * 1.2),
                padding: 16,
              }}
            >
              <p className="text-[11px] uppercase tracking-[0.35em] text-muted">{activeTech.focus}</p>
              <p className="mt-1 text-lg font-semibold text-white">{activeTech.name}</p>
              <p className="mt-2 text-xs text-white/70 line-clamp-4">{activeTech.summary}</p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
