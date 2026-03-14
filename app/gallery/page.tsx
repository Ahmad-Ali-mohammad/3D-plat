"use client";
import { useState } from "react";
import Image from 'next/image';
import { Header } from "@/components/header";
import { motion } from "motion/react";
import { Radio, Database, Building2, Satellite, Cpu, Loader2 } from "lucide-react";

export default function Gallery() {
  const [isEntering, setIsEntering] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--bg)]">
      <Header title="Gallery Island" />
      
      <main className="flex-1 flex flex-col">
        <div className="relative px-6 md:px-12 py-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-3xl min-h-[500px] relative border border-[var(--border)] bg-[radial-gradient(circle_at_50%_0%,rgba(37,192,244,0.15)_0%,transparent_70%)] shadow-2xl" 
            style={{backgroundImage: 'linear-gradient(180deg, rgba(11, 17, 20, 0.2) 0%, rgba(11, 17, 20, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJfzeVM_f2FsUloupFtGwavKVTXZBHIMIaXW9XxHJ88jbaF6FQWqOaTb3nbcbHA1LacpB9rdXPZOavRwYRlqD3NC-6xS0ksogelmFna5Kc62Fk3To7GOcOMkOHFQimzEFtTeKMNByVeqygPOYUGm-UqHBgqMRgh4TxxkXK8swupgQP0QYVZuLOQAP5ceXwJJVdqfBBnbJKFFfLZGqhGMjpazXN5VI_OvuLJP_bpjfc1SN8QvXEhOxJ4CvCGYAPmzJYTd-VC7U0mCY")'}}
          >
            <div className="p-10 md:p-16 space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Radio className="animate-pulse size-5" />
                <span className="text-sm font-bold tracking-widest uppercase">Live Exhibition</span>
              </div>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                NEBULA FRAGMENTS
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                Immerse yourself in the void. Experience curated 3D sculptures and interactive artifacts floating in the silent expanse of the Gallery Island.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <motion.button 
                  whileHover={!isEntering ? { scale: 1.05 } : {}}
                  whileTap={!isEntering ? { scale: 0.95 } : {}}
                  onClick={() => setIsEntering(true)}
                  disabled={isEntering}
                  className={`px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_0_20px_rgba(37,192,244,0.4)] flex items-center gap-3 ${isEntering ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isEntering ? (
                    <>
                      <Loader2 className="size-5 animate-spin" /> Entering...
                    </>
                  ) : (
                    <>
                      <Satellite className="size-5" /> Enter 3D Hall
                    </>
                  )}
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[var(--surface)]/50 backdrop-blur-md border border-[var(--border)] text-[var(--text)] font-bold rounded-xl hover:bg-[var(--surface)] transition-colors"
                >
                  View Catalog
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="px-6 md:px-12 py-12">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-[var(--text)]">Featured Artifacts</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { title: 'Quantum Core', creator: 'Architect Vane', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOeZxkPOhCjb3nf4geSLmRXjZpuXHvMqf4DSJrgMdk1wTKNmFG7vrinPM3LmS1wu6X7TThECNGJxcNK1_Zv-FgygqAkYCQaXcijrWPGpqq1u2azCwm9HaT--eqB2rx6bP7OTWB2n4OMBr8TZjAGYoG66qOGWdPvI0-RjfhVWdpzxQqK40HngCQ92maQSrLw5ATfpbpg74vRPiMgfQcYfbFI7M4q5GdGRfKaSY9i3ht5SP96YfxOtodkQqYZRuDSY9iufidsA41nrk', price: '4.2 ETH', icon: Database },
              { title: 'Neural Matrix', creator: 'Synth_99', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIs6x7b8ABm06P24FJOcs5cGhJ6kchl-RR-Ag_5l1q_SerzhHmepYVXqC0h-wG3AsQu7GNKKwRAvvWZ_FBOprC_61T03aGpsMqOc9PY0fxehkRRqS-u7fNJtmFwnPPMcgiMisTX51hoGPwPRBOGU7lIG_bif4YgY3YoqwWQlOnZ63l5DygTmc__o7COevwM7DXq2cbDFMLQRjrm4RJU87V1KWKGMZr2F__cV14hB-YKkozCnOgunRTIaqqgVg2NP1KkyjPC3S5Opk', price: '1.8 ETH', icon: Cpu },
              { title: 'Void Echo', creator: 'Dr. Aris', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGHu5ZGHKjc4iAPSg83Az1Ht37-mZv7y0sW_w4p6F3nwc6VGZRBKUw1Irlk4r0HVgEBq123Xa94q8HlzRoCGvKOa4nwyKaw46gwNkY3inJPNKjmOievZxPMimWCi08rjj8kWnxp9r9X2wpHKdfJstz2lnnFK0RWRdH5xTZlAay7FSx5zTzYrD9pIDAwgPENUvdafASk-JlK17L9FD3OwNiFIQpW94mcu9Y77EVHNLy84xzQnQYYRs1AOnYAX7Z2dEZ9PI52sp25-c', price: '12.0 ETH', icon: Building2 },
              { title: 'Solar Flare', creator: 'Helios', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa6ZGBDoQroq3mIMK0-7-BYHwLtihYmo4DDvL0OP2Vw7LueHLSJJly56mpvyrk-KWqI-0pJAOgMZZt3PPGnL7Yt-fXc1c_lBHVLy1Kkjv5YtCQpO-kO6XxMmdH0-j3dGe3JCErCwI-ga14qMiGaWAohw48yHnsLMcbT1kLxOVduVOGceM2BIxb9PV_FE4e8WwLPU8acv9j26qGa52A-3h7L7w4dglGHn0GBBIW7vsPZTXukmsrtA7jLu4gyIlQ5J9qKlxQgFDZGgc', price: '0.5 ETH', icon: Satellite }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col gap-6 rounded-3xl bg-[var(--surface)] p-5 border border-[var(--border)] hover:border-primary/50 transition-all shadow-lg hover:shadow-[0_10px_40px_rgba(37,192,244,0.15)]"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-900 border border-[var(--border)]">
                  <Image fill src={item.img} alt={item.title} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="bg-[var(--surface)]/90 backdrop-blur-xl text-primary px-6 py-3 rounded-xl font-bold border border-primary/50 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-2xl">
                      Inspect Artifact
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-[var(--surface)]/80 backdrop-blur-md size-12 rounded-xl flex items-center justify-center border border-[var(--border)] shadow-lg">
                    <item.icon className="text-primary size-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[var(--text)] font-bold text-xl">{item.title}</h3>
                    <span className="text-primary font-mono text-sm font-bold bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">{item.price}</span>
                  </div>
                  <p className="text-[var(--text)]/50 text-sm">Curated by <span className="text-[var(--text)]/80 font-medium">{item.creator}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
