"use client";
import Image from 'next/image';
import { Header } from "@/components/header";
import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone as PhoneIcon, Rocket } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--bg)] text-[var(--text)] font-display selection:bg-primary/30">
      <Header title="Island Connect" />

      <main className="flex-1">
        <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 bg-gradient-to-b from-[var(--text)] to-[var(--text)]/50 bg-clip-text text-transparent">
              Establish Connection
            </h1>
            <p className="text-lg md:text-xl text-[var(--text)]/60 max-w-2xl mx-auto leading-relaxed">
              Transmit your signal across the void. Our communication relays are standing by to receive your inquiry.
            </p>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 backdrop-blur-xl shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-8 text-[var(--text)] flex items-center gap-3">
                <Send className="text-primary size-8" />
                Send Transmission
              </h3>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-xs font-bold text-[var(--text)]/50 uppercase tracking-widest">Designation</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name or callsign" 
                    className="bg-[var(--bg)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--text)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="frequency" className="text-xs font-bold text-[var(--text)]/50 uppercase tracking-widest">Frequency (Email)</label>
                  <input 
                    type="email" 
                    id="frequency" 
                    placeholder="Enter your email address" 
                    className="bg-[var(--bg)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--text)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-xs font-bold text-[var(--text)]/50 uppercase tracking-widest">Data Payload</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    placeholder="Enter your message here..." 
                    className="bg-[var(--bg)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--text)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none shadow-inner"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button" 
                  className="mt-6 bg-primary text-white font-bold text-lg rounded-xl py-5 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(37,192,244,0.3)] flex items-center justify-center gap-3"
                >
                  <Rocket className="size-6" />
                  Initiate Transfer
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-10"
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 backdrop-blur-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8 text-[var(--text)]">Relay Coordinates</h3>
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-6 group">
                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="size-6" />
                    </div>
                    <div className="flex flex-col justify-center h-14">
                      <p className="font-bold text-[var(--text)] text-lg">Sector 7G, Aetheris Core</p>
                      <p className="text-sm text-[var(--text)]/60 mt-1">Orbital Station Alpha, Deck 4</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Mail className="size-6" />
                    </div>
                    <div className="flex flex-col justify-center h-14">
                      <p className="font-bold text-[var(--text)] text-lg">comms@aetheris.os</p>
                      <p className="text-sm text-[var(--text)]/60 mt-1">Encrypted channel available upon request</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <PhoneIcon className="size-6" />
                    </div>
                    <div className="flex flex-col justify-center h-14">
                      <p className="font-bold text-[var(--text)] text-lg">+1 (800) 555-VOID</p>
                      <p className="text-sm text-[var(--text)]/60 mt-1">Sub-space frequencies monitored 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] aspect-video bg-[var(--bg)] group shadow-xl">
                <Image 
                  fill
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa6ZGBDoQroq3mIMK0-7-BYHwLtihYmo4DDvL0OP2Vw7LueHLSJJly56mpvyrk-KWqI-0pJAOgMZZt3PPGnL7Yt-fXc1c_lBHVLy1Kkjv5YtCQpO-kO6XxMmdH0-j3dGe3JCErCwI-ga14qMiGaWAohw48yHnsLMcbT1kLxOVduVOGceM2BIxb9PV_FE4e8WwLPU8acv9j26qGa52A-3h7L7w4dglGHn0GBBIW7vsPZTXukmsrtA7jLu4gyIlQ5J9qKlxQgFDZGgc" 
                  alt="Map Location" 
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-primary/30 flex items-center justify-center animate-pulse border border-primary/50">
                  <div className="size-4 rounded-full bg-primary shadow-[0_0_20px_#25c0f4]"></div>
                </div>
                <div className="absolute bottom-6 left-6 bg-[var(--surface)]/90 backdrop-blur-xl px-4 py-2 rounded-xl border border-[var(--border)] text-xs font-mono text-primary font-bold shadow-lg">
                  LOC: 34.0522° N, 118.2437° W
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-10 px-6 md:px-20 lg:px-40 text-center bg-[var(--surface)]/50 backdrop-blur-md">
        <p className="text-sm text-[var(--text)]/50 font-medium">
          © {new Date().getFullYear()} Aetheris OS. All connections secured.
        </p>
      </footer>
    </div>
  );
}
