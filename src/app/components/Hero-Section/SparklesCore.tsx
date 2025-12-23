"use client";

import React, { useEffect, useId, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { motion, useAnimation } from "framer-motion";
// import { cn } from "@/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  speed = 3,
  particleColor = "#ffffff",
  particleDensity = 120,
}: ParticlesProps) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    controls.start({
      opacity: 1,
      transition: { duration: 1 },
    });
  };

  return (
    <motion.div animate={controls} className={"opacity-0 " + (className || "")}>
      {init && (
        <Particles
          id={id || generatedId}
          className="w-full h-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            detectRetina: true,
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                  mode: "repulse",
                  parallax: { enable: false, force: 60, smooth: 10 },
                },
              },
            },
            particles: {
              number: {
                value: particleDensity,
                density: { enable: true, width: 400, height: 400 },
              },
              color: { value: particleColor },
              size: {
                value: { min: minSize, max: maxSize },
              },
              move: {
                enable: true,
                speed: { min: 0.1, max: 1 },
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed,
                },
              },
              shape: { type: "circle" },
            },
          }}
        />
      )}
    </motion.div>
  );
};

export default SparklesCore;