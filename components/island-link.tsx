import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface IslandLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
}

export function IslandLink({ href, icon: Icon, label, className = "" }: IslandLinkProps) {
  return (
    <Link href={href} className={`group flex flex-col items-center gap-2 sm:gap-3 ${className}`}>
      <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)] text-[var(--text)] cursor-pointer backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:border-primary/50 group-hover:text-primary">
        <Icon className="size-4 sm:size-5 md:size-6 transition-transform duration-300 group-hover:scale-125" />
      </div>
      <span className="text-xs sm:text-sm font-black text-[var(--text)] bg-[var(--surface)]/80 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full border border-[var(--border)] opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
}
