import {
  BadgePercent,
  BellRing,
  CircleDollarSign,
  LineChart,
  MessageSquare,
  Package
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/data/site-content";

const painIcons = {
  MessageSquare,
  CircleDollarSign,
  BadgePercent,
  BellRing,
  Package,
  LineChart
};

export function PainSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Dor real"
          title="Seu negócio está cheio, mas está realmente organizado?"
          description="A operação pode até parecer ocupada, mas crescimento sem controle custa margem, energia e previsibilidade."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.painPoints.map((item, index) => {
            const Icon = painIcons[item.icon];

            return (
              <FeatureCard
                key={item.title}
                icon={Icon}
                title={item.title}
                description={item.description}
                delay={index * 0.04}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

