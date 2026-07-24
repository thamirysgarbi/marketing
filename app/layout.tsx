import type { Metadata } from "next";
import { AppShell } from "@/components/marketing-os/app-shell";
import { publicSiteUrl } from "@/lib/site";
import "./globals.css";

const title = "Framja Marketing OS";
const description =
  "Sistema interno para o time de marketing do Framja decidir o conteúdo do dia, com roteiro, capturas, legenda, CTA e calendário editorial.";
const siteUrl = new URL(publicSiteUrl);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Framja Marketing OS",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
