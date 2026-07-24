"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandLockup } from "@/components/brand-lockup";
import { CTAButton } from "@/components/cta-button";
import { siteContent } from "@/data/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const primaryNav = siteContent.nav.slice(0, 4);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3.5 w-[calc(100%-1rem)] max-w-6xl rounded-full border border-[#820AD1]/10 bg-white/84 px-3 py-2 shadow-[0_16px_44px_rgba(78,48,122,0.08)] backdrop-blur-xl md:px-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" aria-label="Framja">
            <BrandLockup />
          </Link>

          <nav className="hidden items-center gap-5 text-[0.83rem] font-medium text-[#6b607f] lg:flex">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition duration-300 hover:text-[#820AD1]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <CTAButton href={siteContent.links.trial} newTab size="compact">
              Teste grátis
            </CTAButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#820AD1]/12 bg-[#faf7ff] text-[#28193d] lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-[22px] border border-[#820AD1]/10 bg-white/96 p-3.5 shadow-[0_18px_40px_rgba(78,48,122,0.08)] lg:hidden">
            <nav className="mb-4 flex flex-col gap-2 text-sm font-medium text-[#5f5673]">
              {siteContent.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-2 transition hover:bg-[#f5efff] hover:text-[#820AD1]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <CTAButton href={siteContent.links.trial} newTab>
              Teste grátis
            </CTAButton>
          </div>
        ) : null}
      </div>
    </header>
  );
}
