"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Hexagon, Search, Bell, User } from "lucide-react";
import { motion } from "motion/react";

export function Header({ title = "Aetheris" }: { title?: string }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Hub" },
    { href: "/about", label: "Team" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-xl px-6 py-4 md:px-10 lg:px-20"
    >
      <div className="flex items-center gap-8">
        <Link href="/" aria-label="Home" className="flex items-center gap-3 text-primary group">
          <motion.div 
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="size-10 flex items-center justify-center bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20"
          >
            <Hexagon className="text-primary size-6" />
          </motion.div>
          <h2 className="text-[var(--text)] text-xl font-bold leading-tight tracking-tight hidden sm:block">{title}</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                aria-current={isActive ? "page" : undefined}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-primary bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(37,192,244,0.15)]"
                    : "text-[var(--text)]/70 border border-transparent hover:text-primary hover:bg-[var(--surface)] hover:border-[var(--border)] hover:shadow-sm"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-4 items-center">
        <div className="hidden lg:flex items-center bg-[var(--bg)] border border-[var(--border)] rounded-xl px-3 py-2 w-64 focus-within:border-primary/50 transition-colors">
          <Search className="size-4 text-primary/60 mr-2" />
          <input aria-label="Search network" className="bg-transparent border-none text-[var(--text)] focus:ring-0 placeholder:text-[var(--text)]/40 text-sm outline-none w-full" placeholder="Scan Network..." />
        </div>
        <div className="flex gap-3">
          <ThemeToggle />
          <button aria-label="Notifications" className="hidden sm:flex items-center justify-center size-10 rounded-xl bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:border-primary/50 hover:text-primary transition-all">
            <Bell className="size-5" />
          </button>
          <button aria-label="User Profile" className="flex items-center justify-center size-10 rounded-xl bg-primary text-white hover:brightness-110 transition-all shadow-[0_0_15px_rgba(37,192,244,0.3)]">
            <User className="size-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
