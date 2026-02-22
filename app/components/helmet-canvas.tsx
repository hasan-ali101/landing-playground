"use client";

import { Model } from "@/app/components/helmet";
import { Sparkles, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export const HelmetCanvas = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [globalPointer, setGlobalPointer] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Percent of the element that needs to be visible to trigger
        rootMargin: "200px", // Start loading slightly before it enters viewport (200px margin)
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Normalize to -1 to 1 range relative to container
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      setGlobalPointer({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className="w-full h-full overflow-clip grid grid-cols-1 lg:grid-cols-2 px-6"
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      ref={containerRef}
    >
      <div className="w-full h-100 md:h-140 col-span-1">
        {isInView && (
          <Canvas
            className="w-full h-full"
            dpr={[1, 2]} // Limit pixel ratio for better performance
          >
            <ambientLight intensity={5} />
            <directionalLight position={[15, -5, 2]} intensity={4} />
            <directionalLight position={[-15, -5, 2]} intensity={4} />
            <Model
              position={[0, -2, -5]}
              scale={1.5}
              isHovered={isHovered}
              globalPointer={globalPointer}
            />
            <SpotLight
              position={[0, -2.5, 0]}
              distance={10}
              radiusBottom={6}
              radiusTop={1}
              anglePower={7}
              scale={1.5}
            />
            <Sparkles count={100} position={[0, 0, -2]} scale={10} />
          </Canvas>
        )}
      </div>
      <div className="border-t p-20 border-x rounded-t-lg border-white/20 h-100 md:h-150 bg-linear-to-b from-purple-200/10 to-blue-300/30 from-50% flex items-center justify-center relative">
        <div className="absolute inset-1 bg-linear-to-b from-purple-400/5 to-indigo-400/30 rounded-3xl blur-md"></div>
        <div className="relative w-full h-full rounded-lg">
          <div className="w-full h-full bg-white/80 flex flex-col justify-center rounded-lg items-center z-20 absolute">
            <p className="text-black">& Glowing Card</p>
          </div>
          <div className="absolute bg-indigo-300 blur-lg z-10 -inset-3" />
        </div>
      </div>
    </div>
  );
};
