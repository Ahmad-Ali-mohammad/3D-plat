"use client";
import Image from 'next/image';
import { Header } from "@/components/header";
import { motion } from "motion/react";
import { Cpu, BrainCircuit, ShieldAlert, Database, Activity, ChevronRight } from "lucide-react";

export default function Services() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header title="Services Island" />
      
      <main className="flex-1 flex">
        <aside className="w-72 hidden lg:flex flex-col border-r border-[var(--border)] p-8 gap-8 bg-[var(--surface)]/30 backdrop-blur-xl">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="relative size-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
              <Image fill className="object-cover" alt="CORE-01" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuk3VwbfuEIgjYJmA4mNkz3IG8ImdCWDXa4tMMAORydxW1jeOTnKi9oVM1U5mFat6uz30onorYApmKPjjzXJNBrCA8usmvW1OpavfigGlqqVLNwe0YCxTFx_fo-9svf4l5Hoc52cKla7bROMrFYshAfA1HL_qB8MO4okD0T9OwSmyJOi2R-XQau7oHZgVQDEpCnkFeevjLM35Qvxi7Hk6kb_rYhR56fCxaLYqbf3r7dPgIXB0JWE1_qL8JSfKq1k8a2lpfYDZmaRo"/>
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--text)] text-sm font-bold">CORE-01</span>
              <span className="flex items-center gap-1.5 text-xs text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                Sync Active
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-[var(--text)]/50 uppercase tracking-widest px-4 mb-2">Systems</p>
            <a className="flex items-center gap-3 px-4 py-3 text-primary bg-primary/10 rounded-xl border border-primary/20 font-medium text-sm transition-all" href="#">
              <Activity className="size-5" /> Dashboard
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[var(--text)]/60 hover:text-primary hover:bg-primary/5 transition-all rounded-xl font-medium text-sm" href="#">
              <Database className="size-5" /> Service Grid
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[var(--text)]/60 hover:text-primary hover:bg-primary/5 transition-all rounded-xl font-medium text-sm" href="#">
              <ShieldAlert className="size-5" /> Encrypted Vault
            </a>
          </div>
        </aside>
        
        <section className="flex-1 p-6 lg:p-12 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Operations Center</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-[var(--text)] text-4xl lg:text-5xl font-black leading-tight tracking-tighter">
                  SERVICES <span className="text-primary">ISLAND</span>
                </h1>
                <p className="text-[var(--text)]/60 text-lg max-w-xl mt-4">
                  Interface with high-performance neural computing and quantum processing nodes across the decentralized matrix.
                </p>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(37,192,244,0.4)]"
              >
                New Instance
              </motion.button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Cpu, title: 'Quantum Core', desc: 'High-fidelity qubit processing with sub-zero latency stabilization.', stat: '8.24 PFLOPS' },
              { icon: BrainCircuit, title: 'Neural Link', desc: 'Direct brain-computer interface synchronization and bio-feedback loops.', stat: 'SYNAPTIC-V3' },
              { icon: ShieldAlert, title: 'Void Shield', desc: 'Multi-layered cryptographic barrier against spectral data intrusions.', stat: 'ACTIVE PROTOCOL' },
              { icon: Database, title: 'Data Forge', desc: 'Synthetic data generation and real-time visualization of meta-structures.', stat: '400 TB/s' }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                className="group relative cursor-pointer p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-primary/50 transition-all overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(37,192,244,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,192,244,0.1)] border border-primary/20">
                    <service.icon className="size-8" />
                  </div>
                  <div>
                    <h3 className="text-[var(--text)] text-xl font-bold">{service.title}</h3>
                    <p className="text-[var(--text)]/60 text-sm mt-2 leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)]">
                    <span className="text-xs font-mono text-primary font-bold">{service.stat}</span>
                    <ChevronRight className="text-primary size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
