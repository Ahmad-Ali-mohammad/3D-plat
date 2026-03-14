"use client";
import Image from 'next/image';
import { Header } from "@/components/header";
import { motion } from "motion/react";
import { Sparkles, History, Users, Database, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden selection:bg-primary/30">
      <Header title="Island Archaeology" />
      
      <main className="flex-1">
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[var(--color-accent-gold)]/5 blur-[100px] rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(37,192,244,0.1)]">
              <Sparkles className="size-4" />
              Established 2342
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 bg-gradient-to-b from-[var(--text)] to-[var(--text)]/50 bg-clip-text text-transparent">
              Unearthing the <br/>Digital Cosmos
            </h1>
            <p className="text-lg md:text-xl text-[var(--text)]/60 max-w-2xl mx-auto leading-relaxed">
              We are a collective of interstellar curators dedicated to preserving the artifacts of civilizations that drifted into the silence of the void.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 relative w-full max-w-5xl aspect-[21/9] rounded-3xl overflow-hidden border border-[var(--border)] bg-gradient-to-tr from-[var(--surface)] to-primary/5 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-wrap justify-center gap-12 p-8">
                {[
                  { name: 'Dr. Aris', role: 'Chief Antiquarian', exp: 'Xeno-linguistics & Chrono-mapping', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVMMi_uHXRjPLZxBdToJ51YQlIwdJR-NiMPOcP6IFB5lrY3QIYh7yQL6IkSgPSEnb4q2mXs5JfTJbdRLHUiubAOyN7rCfF_H9zGBnEOdT_GPPf_65fJiOgI9xORXoVncnnOEXWDceSm5TkNR0reI2dA-vb1RKRNu8vyFdOUE9mmAtZi_2BQbf7utpQQavc8wt9Bsw_VNPKDFeLOQtQDdeK-l1H7biNcIcylCuKVd_sPcJDNVlKd2eYlV0sQUxZfHFfH8JUTIcvMcY' },
                  { name: 'Sarah Chen', role: 'Deep Space Excavator', exp: 'Nebula Sediment Analysis', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCJ8NYaxLo1i5k2p4RxZs8_DlTwqRfsPLjBMtNdld6YYPd3r7Ei4y0V_OmAudTTdZfxVjLeMiqyoMdXsZCRawJ9hoXVFIxrAMSdsIiTF6BiYz4yWLYeUMr9GpeGo97Hfhv8yjmeIVJ9B53cZoGv0eCrWyFZAsRfUNZIWGVsm1pcC5fFiCTSmOR4YOV6WoS_tz_aZQAFpvShCNevXb3xDElI_kqZ2X6FIlomptUWZcv83c4G0qzcK71ll5ApzA0BQdJ-mF-zXRpQtQ' },
                  { name: 'Marcus Void', role: 'Data Cryptographer', exp: 'Decoding Level 9 Civilizations', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7mG08CmgGhoa2HPHJUROrQtGzolXP_RIetzwcb27qyptlQwkHSbzE1TNdhO-tNM7iPT3C50_p0bw_1GzNrF3Edp2cHHDU9ikekWBybRMSwlQVNlW1s2n9EQVgZM2yLYdB3iFXog4PRENTwuxzcLAltAcYl_LkNViZB-0vwHWHc9SMxVlwHY4JwbM2h10bvkcqL44OLYn2Sk2k2MIXXAZMBbw7VGHzk5FiPvVe_UpDr8qW3B4t45x3JVBvn4-0XTrkINc0hqOWlA8' }
                ].map((member, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="group relative flex flex-col items-center"
                  >
                    <div className="size-24 md:size-32 rounded-full border-2 border-primary/30 p-1 bg-[var(--surface)] shadow-[0_0_30px_rgba(37,192,244,0.2)]">
                      <div className="w-full h-full rounded-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: `url('${member.img}')`}}></div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-primary font-bold">{member.name}</p>
                      <p className="text-xs text-[var(--text)]/60">{member.role}</p>
                    </div>
                    <div className="absolute -top-12 -left-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[var(--surface)]/90 backdrop-blur-xl p-4 rounded-2xl border border-[var(--border)] w-48 text-left z-20 pointer-events-none shadow-2xl">
                      <p className="text-[10px] text-[var(--color-accent-gold)] uppercase tracking-tighter mb-1">Expertise / Focus</p>
                      <p className="text-xs text-[var(--text)]/80">{member.exp}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
        
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--text)] flex items-center gap-3">
                <History className="text-primary size-8" />
                Our Cosmic Mandate
              </h2>
              <div className="space-y-6 text-[var(--text)]/70 leading-relaxed">
                <p>
                  At Island Archaeology, we believe that history is the only true currency of the universe. As stars fade and systems collapse, the records of life&apos;s struggle for meaning must be preserved. 
                </p>
                <p>
                  Our team utilizes high-frequency sonar pulses to map the echoes of long-dead planets, retrieving digital ghosts and physical shards from the cold dark.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
                    <p className="text-4xl font-black text-[var(--text)]">42</p>
                    <p className="text-xs uppercase text-primary font-bold tracking-widest mt-2">Star Systems Recovered</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[var(--color-accent-gold)]/5 border border-[var(--color-accent-gold)]/10 backdrop-blur-sm">
                    <p className="text-4xl font-black text-[var(--text)]">800k</p>
                    <p className="text-xs uppercase text-[var(--color-accent-gold)] font-bold tracking-widest mt-2">Artifacts Cataloged</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-[var(--color-accent-gold)]/20 rounded-3xl blur-xl transition duration-1000 group-hover:duration-200 opacity-50"></div>
              <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden aspect-video shadow-2xl">
                <Image fill alt="Observatory Platform Delta-9 Active" className="object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa6ZGBDoQroq3mIMK0-7-BYHwLtihYmo4DDvL0OP2Vw7LueHLSJJly56mpvyrk-KWqI-0pJAOgMZZt3PPGnL7Yt-fXc1c_lBHVLy1Kkjv5YtCQpO-kO6XxMmdH0-j3dGe3JCErCwI-ga14qMiGaWAohw48yHnsLMcbT1kLxOVduVOGceM2BIxb9PV_FE4e8WwLPU8acv9j26qGa52A-3h7L7w4dglGHn0GBBIW7vsPZTXukmsrtA7jLu4gyIlQ5J9qKlxQgFDZGgc"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase mb-2 block flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[var(--color-accent-gold)] animate-pulse"></span>
                    Live Feed
                  </span>
                  <p className="text-[var(--text)] font-medium text-lg">Observatory Platform Delta-9 Active</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
