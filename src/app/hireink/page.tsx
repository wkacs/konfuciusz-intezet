"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { PhoenixOrnament, CloudOrnament, Lantern } from "@/components/ornaments";
import { Fireflies } from "@/components/Particles";
import { newsItems } from "@/data/courses";

const groupedNews = newsItems.reduce<Record<string, typeof newsItems>>((acc, item) => {
  const year = item.date.split('.')[0];
  if (!acc[year]) acc[year] = [];
  acc[year].push(item);
  return acc;
}, {});

const years = Object.keys(groupedNews).sort((a, b) => Number(b) - Number(a));

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* ── Dark Hero Section ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-16 pt-32">
        <div className="absolute inset-0 cloud-pattern opacity-[0.06]" />
        <Fireflies count={8} />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute right-8 top-16 text-[12rem] font-bold leading-none text-accent/[0.05] select-none">
          新
        </div>

        {/* Ornaments */}
        <PhoenixOrnament className="absolute left-6 top-24 hidden h-12 w-36 text-accent/20 lg:block" />
        <CloudOrnament className="absolute right-10 bottom-12 hidden h-8 w-24 text-accent/15 md:block" />
        <Lantern size="sm" className="absolute right-20 top-20 hidden lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            tone="dark"
            title="Híreink"
            subtitle="Intézetünk legfrissebb eseményei és hírei"
          />
        </div>

      </section>

      {/* ── Light News Section ── */}
      <section className="bg-cream silk-texture chinese-pattern relative pb-20 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {years.map((year) => (
            <div key={year} className="mb-14">
              {/* Year badge header */}
              <div className="mb-8 flex items-center gap-4">
                <span className="inline-flex items-center justify-center rounded-sm border-2 border-accent/30 bg-primary/10 px-4 py-2 text-lg font-bold tracking-wide text-primary shadow-sm">
                  {year}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
              </div>

              <div className="space-y-4">
                {groupedNews[year].map((news) => (
                  <article
                    key={`${news.date}-${news.title}`}
                    className="group relative flex items-center gap-6 rounded-[1.25rem] border border-border bg-white p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {/* Corner decorations */}
                    <div className="absolute -top-0.5 -left-0.5 h-4 w-4 border-l-2 border-t-2 border-accent/0 transition-all group-hover:border-accent/40" />
                    <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 border-b-2 border-r-2 border-accent/0 transition-all group-hover:border-accent/40" />

                    {/* Chop-mark date stamp */}
                    <div className="chop-mark hidden h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-sm text-white sm:flex">
                      <div className="text-xs font-medium opacity-80">{news.date.split('.')[0]}</div>
                      <div className="text-xl font-bold">{news.date.split('.')[1]}.{news.date.split('.')[2]}</div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-primary">
                        {news.title}
                      </h3>
                      {news.description && (
                        <p className="mt-2 text-sm text-text-secondary">{news.description}</p>
                      )}
                      <span className="mt-1 block text-xs text-text-secondary sm:hidden">{news.date}</span>
                    </div>

                    {/* Arrow */}
                    <svg className="h-5 w-5 flex-shrink-0 text-text-secondary transition-all group-hover:text-primary group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
