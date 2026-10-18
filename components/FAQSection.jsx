"use client";

import { useState } from "react";

export default function FAQSection({ items, title = "Questions fréquentes" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return <section aria-labelledby="faq-title">
    <h2 id="faq-title" className="font-heading text-3xl font-black text-primary sm:text-4xl">{title}</h2>
    <div className="mt-8 divide-y divide-primary/10 overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-primary/8">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return <div key={item.question}>
          <h3>
            <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)} className="focus-ring flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-heading text-lg font-black text-primary sm:px-8">
              <span>{item.question}</span><span aria-hidden="true" className="text-2xl font-normal text-accent">{isOpen ? "−" : "+"}</span>
            </button>
          </h3>
          <div id={panelId} hidden={!isOpen} className="px-6 pb-6 leading-7 text-text-muted sm:px-8">{item.answer}</div>
        </div>;
      })}
    </div>
  </section>;
}
