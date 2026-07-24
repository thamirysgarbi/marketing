"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FAQItem({
  question,
  answer,
  defaultOpen = false
}: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="surface-card">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold tracking-tight text-[#1d1630]">{question}</span>
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#820AD1]/10 bg-[#f5efff] text-[#820AD1] transition duration-300",
            open ? "rotate-180" : ""
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-sm leading-7 text-[#6c6381]">{answer}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
