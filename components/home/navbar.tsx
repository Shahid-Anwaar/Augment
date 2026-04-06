import { navLinks } from "@/data/home";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="container-app flex h-20 items-center justify-between">
        <Link href="/" className="text-[30px] font-semibold tracking-[-0.05em] text-white">
          Augment
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden nav-link md:inline-flex">
            Log in
          </Link>

          <button type="button" className="contained-btn contained-btn-dark-border">
            <span>Enroll Now</span>
            <span className="ml-2.5 text-[20px] leading-none">→</span>
          </button>
        </div>
      </div>
    </header>
  );
}