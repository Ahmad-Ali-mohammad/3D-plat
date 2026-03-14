"use client";
import { Header } from "@/components/header";
import { IslandLink } from "@/components/island-link";
import Link from "next/link";
import { motion } from "motion/react";
import { Compass, Image as ImageIcon, Cpu, Phone, Hexagon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <Header title="Aetheris Core" />
      
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 dark:bg-primary/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-6">
        <div className="relative flex items-center justify-center w-full max-w-[800px] aspect-square">
          {/* 3D Rings */}
          <motion.div 
            animate={{ rotateZ: 360 }} 
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-primary/20 dark:border-primary/10 border-dashed"
          />
          <motion.div 
            animate={{ rotateZ: -360 }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-20 rounded-full border-2 border-primary/10 dark:border-primary/5"
          />
          
          {/* Center Hub */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 flex flex-col items-center text-center bg-[var(--surface)]/50 backdrop-blur-xl p-12 rounded-full border border-[var(--border)] shadow-[0_0_50px_rgba(37,192,244,0.1)]"
          >
            <div className="mb-6 h-24 w-24 flex items-center justify-center rounded-3xl bg-primary/10 border border-primary/30 text-primary shadow-[0_0_30px_rgba(37,192,244,0.2)] rotate-45">
              <Hexagon className="size-12 -rotate-45" />
            </div>
            <h1 className="text-[var(--text)] text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase">
              The <span className="text-primary">Core</span>
            </h1>
            <p className="mt-4 text-[var(--text)]/60 max-w-sm">Central nexus of the Aetheris network. Select an island to initiate transfer.</p>
          </motion.div>

          {/* Floating Islands (Links) */}
          <FloatingIsland href="/about" icon={Compass} label="Exploration" angle={0} delay={0} />
          <FloatingIsland href="/services" icon={Cpu} label="Services" angle={90} delay={1} />
          <FloatingIsland href="/gallery" icon={ImageIcon} label="Gallery" angle={180} delay={2} />
          <FloatingIsland href="/contact" icon={Phone} label="Comm-Link" angle={270} delay={3} />
        </div>
      </main>
    </div>
  );
}

function FloatingIsland({ href, icon, label, angle, delay }: { href: string, icon: any, label: string, angle: number, delay: number }) {
  // Calculate position on a circle
  const radius = 40; // percentage
  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, x: "-50%", y: "-50%" }}
      animate={{ y: ["-50%", `calc(-50% - 15px)`, "-50%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <IslandLink href={href} icon={icon} label={label} />
    </motion.div>
  );
}
