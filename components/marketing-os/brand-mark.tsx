import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

export function BrandMark({
  collapsed = false
}: {
  collapsed?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[#c9abff] shadow-[0_16px_40px_rgba(130,10,209,0.18)]">
        <Sparkles className="h-4 w-4" />
      </span>
      <div className={cn("min-w-0", collapsed && "hidden")}>
        <p className="text-sm font-semibold tracking-[-0.02em] text-white">
          Framja Marketing OS
        </p>
        <p className="mt-1 text-sm text-[#9f95b7]">
          Operação de conteúdo para duas pessoas.
        </p>
      </div>
    </div>
  );
}
