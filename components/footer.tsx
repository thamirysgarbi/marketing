import { BrandLockup } from "@/components/brand-lockup";
import { CTAButton } from "@/components/cta-button";
import { siteContent } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-[#820AD1]/8 py-10">
      <div className="section-shell flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <BrandLockup size="md" className="mb-5" />
          <p className="text-sm leading-7 text-[#6e6483]">
            {siteContent.footer.description}
          </p>
          <div className="mt-5 space-y-2 text-sm text-[#4e4563]">
            <p>{siteContent.contact.phone}</p>
            <p>{siteContent.contact.email}</p>
            <p>CNPJ {siteContent.contact.cnpj}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <nav className="flex flex-wrap gap-4 text-sm text-[#5f5673]">
            {siteContent.nav.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#820AD1]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3">
            <CTAButton href={siteContent.links.whatsapp} newTab variant="secondary">
              Falar com especialista
            </CTAButton>
            <CTAButton href={siteContent.links.trial} newTab withArrow>
              Começar teste grátis
            </CTAButton>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#8b82a1]">
            {siteContent.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
