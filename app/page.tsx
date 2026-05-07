import type { ReactNode } from "react";
import { buildWhatsappLink } from "@/app/lib/whatsapp";
import { RevealOnScroll } from "./ui/reveal-on-scroll";
import { DelayedFloatingWhatsApp } from "./ui/delayed-floating-whatsapp";
import { ScrollHashHighlight } from "./ui/scroll-hash-highlight";
import { ServiceWhatsappCard } from "./ui/service-whatsapp-card";
import { TrackedWhatsAppButton } from "./ui/tracked-whatsapp-button";

const WA_MSG_RECLUTAMIENTO =
  "Hola, necesito ayuda con reclutamiento. ¿Cómo trabajás?";
const WA_MSG_CV = "Hola, vi la web y quiero mejorar mi CV. ¿Cómo es el proceso?";
const WA_MSG_MENTORIA =
  "Hola, vengo de la web y quiero info sobre mentoría laboral. ¿Cómo funciona?";

function WhatsAppCtaVisual({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-[0_10px_28px_-6px_rgba(111,143,114,0.38)] ${className}`}
    >
      {label}
    </span>
  );
}

const POSITIONING_LINE = "Trabajo desde la mirada de quien selecciona";

function ServiceAccordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group mt-6 rounded-xl border border-stone-200 bg-stone-50/70 open:bg-white">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-2">
          {title}
          <span className="text-stone-400 transition group-open:rotate-180">▼</span>
        </span>
      </summary>
      <div className="border-t border-stone-100 px-4 pb-4 pt-3">{children}</div>
    </details>
  );
}

function AudienceSegmentSection() {
  return (
    <section
      aria-label="Elegi tu perfil"
      className="mx-auto w-full max-w-6xl px-6 pt-8 sm:px-10 lg:px-14"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <a
          href="#empresas"
          className="flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-base font-semibold text-ink shadow-sm ring-1 ring-stone-200 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md hover:ring-brand-border/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Quiero contratar
        </a>
        <a
          href="#personas"
          className="flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-base font-semibold text-ink shadow-sm ring-1 ring-stone-200 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md hover:ring-brand-border/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Quiero conseguir trabajo
        </a>
      </div>
      <div className="mt-5 rounded-2xl border border-brand-border/85 bg-brand-soft/80 p-5 ring-1 ring-brand-border/45">
        <p className="text-base font-semibold text-ink">¿No sabés por dónde empezar?</p>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          Si estás dando tus primeros pasos o no estás consiguiendo entrevistas, empezá por mentoría.
        </p>
        <a
          href="#mentoria"
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-brand-dark/35 bg-white px-4 py-3 text-sm font-semibold text-brand-dark shadow-sm transition duration-200 hover:border-brand-dark hover:shadow-md sm:w-auto"
        >
          Ver mentoría
        </a>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16 sm:px-10 lg:px-14">
      <RevealOnScroll>
        <div className="rounded-3xl bg-linear-to-br from-brand-soft via-white to-cream p-8 shadow-sm ring-1 ring-stone-200 sm:p-12">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <p className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold text-brand-dark ring-1 ring-brand-border/70">
              Respuesta en menos de 24hs
            </p>
            <p className="inline-flex rounded-full bg-brand-dark/12 px-4 py-1 text-sm font-semibold text-brand-dark ring-1 ring-brand-border/75">
              {POSITIONING_LINE}
            </p>
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
            Contratar bien o conseguir entrevistas no deberia ser cuestion de suerte
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-stone-700 sm:text-xl">
            Te ayudo a resolverlo con un enfoque real de Recursos Humanos, sin vueltas ni teoria
          </p>
          <div className="mt-8">
            <TrackedWhatsAppButton
              href={buildWhatsappLink("Hola, quiero hacer una consulta")}
              label="Hacer consulta por WhatsApp"
              trackEventName="hero_cta_click"
              className="w-full sm:w-auto"
            />
            <p className="mt-2 max-w-xl text-sm font-medium text-stone-700">
              Te respondo personalmente (no es automático).
            </p>
            <a
              href="#mentoria"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border-2 border-brand-dark/22 bg-white/70 px-6 py-3 text-base font-semibold text-brand-dark backdrop-blur-sm transition duration-200 hover:border-brand-dark/48 hover:bg-white hover:shadow-md sm:w-auto"
            >
              Ver mentoría laboral
            </a>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
              Respondo en el dia. Cupos limitados por semana.
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-stone-700">
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-stone-200">Respuesta en el dia</span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-stone-200">Sin compromiso</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-700 shadow-sm ring-1 ring-stone-200">
          +10 años en RRHH
        </span>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-700 shadow-sm ring-1 ring-stone-200">
          Experiencia real en selección
        </span>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-700 shadow-sm ring-1 ring-stone-200">
          Enfoque práctico
        </span>
      </div>
    </section>
  );
}

function DecisionQuickSection() {
  const cards = [
    { href: "#empresas", title: "Necesito contratar", hint: "Selección y perfiles alineados" },
    { href: "#cv", title: "No me llaman de entrevistas", hint: "Optimización de CV" },
    { href: "#mentoria", title: "No sé por dónde empezar", hint: "Programa de mentoría" },
  ];

  return (
    <section
      aria-label="Elegí qué necesitás"
      className="mx-auto w-full max-w-6xl px-6 pb-4 pt-4 sm:px-10 lg:px-14"
    >
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200 sm:p-8">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">¿Qué necesitás?</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {cards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="group rounded-2xl border border-stone-200 bg-stone-50/60 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-brand-border hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <p className="font-semibold text-ink">{card.title}</p>
                <p className="mt-1 text-sm text-stone-600">{card.hint}</p>
                <p className="mt-3 text-sm font-medium text-brand-dark group-hover:text-brand-dark">
                  Ver →
                </p>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto w-full max-w-4xl px-6 py-16 text-center sm:px-10 lg:px-14">
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-8 ring-1 ring-stone-200 sm:p-10">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Sobre mi</h2>
          <p className="mx-auto mt-4 inline-flex rounded-full bg-brand-soft px-4 py-1 text-sm font-semibold text-brand-dark ring-1 ring-brand-border/70">
            Más de 10 años de experiencia
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-brand-dark">
            {POSITIONING_LINE}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">
            Trabajo en Recursos Humanos hace años viendo el mismo problema: empresas que no encuentran
            buenos perfiles y personas que no consiguen entrevistas.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-stone-600">
            Mi enfoque es simple: entender bien la necesidad y resolverla sin vueltas. Combino la
            práctica de selección con mirada de coaching ontológico cuando suma al proceso.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Servicios</h2>
        <p className="mt-3 max-w-2xl text-base font-medium text-brand-dark">{POSITIONING_LINE}</p>
      </div>
      <RevealOnScroll>
        <div className="flex flex-col gap-6">
          <ServiceWhatsappCard
            id="empresas"
            href={buildWhatsappLink(WA_MSG_RECLUTAMIENTO)}
            ariaLabel="Abrir WhatsApp para consultar por reclutamiento"
            trackEventName="empresas_click"
            className="scroll-mt-28 w-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-border/80"
          >
            <h3 className="text-2xl font-bold tracking-tight text-ink">
              Deja de perder tiempo con candidatos que no sirven
            </h3>
            <p className="mt-4 text-stone-600">
              Filtro, evaluo y te presento perfiles que realmente encajan con lo que necesitas.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-stone-700">
              <li className="flex gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                  ✓
                </span>
                Perfiles evaluados antes de llegar a vos
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                  ✓
                </span>
                Ahorro de tiempo en selección
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                  ✓
                </span>
                Enfoque práctico
              </li>
            </ul>
            <ServiceAccordion title="Qué incluye el servicio">
              <ul className="space-y-2 text-sm text-stone-700">
                {[
                  "Relevamiento del perfil",
                  "Publicación de búsqueda",
                  "Screening de CVs",
                  "Entrevistas por competencias",
                  "Evaluación de candidatos",
                  "Informe individual de finalistas",
                  "Presentación de candidatos recomendados",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 text-brand-dark">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ServiceAccordion>
            <p className="mt-4 border-l-4 border-brand bg-brand-soft/95 py-3 pl-4 pr-3 text-sm font-medium text-ink">
              No solo presento candidatos: entrego un informe claro para facilitar la decisión.
            </p>
            <WhatsAppCtaVisual label="Quiero contratar mejor" className="mt-8 w-full" />
          </ServiceWhatsappCard>

          <div
            id="personas"
            className="scroll-mt-28 grid gap-6 md:grid-cols-2 md:items-start"
          >
            <ServiceWhatsappCard
              id="cv"
              href={buildWhatsappLink(WA_MSG_CV)}
              ariaLabel="Abrir WhatsApp para mejorar tu CV"
              trackEventName="cv_click"
              className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-border/80"
            >
              <h3 className="text-2xl font-bold tracking-tight text-ink">
                Si no te llaman, el problema no sos vos: es tu CV
              </h3>
              <p className="mt-4 text-stone-600">
                Optimizo tu CV para que pase filtros y consigas entrevistas reales.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-stone-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                    ✓
                  </span>
                  Optimizado para filtros ATS
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                    ✓
                  </span>
                  Enfocado en entrevistas
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                    ✓
                  </span>
                  Mejora rápida y concreta
                </li>
              </ul>
              <ServiceAccordion title="Qué incluye">
                <ul className="space-y-2 text-sm text-stone-700">
                  {[
                    "Revisión completa del CV",
                    "Rediseño y mejora del contenido",
                    "Optimización para ATS",
                    "Ajuste según objetivo laboral",
                    "Recomendaciones personalizadas",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 text-brand-dark">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ServiceAccordion>
              <p className="mt-4 border-l-4 border-brand bg-brand-soft/95 py-3 pl-4 pr-3 text-sm font-medium text-ink">
                Trabajo tu CV desde la mirada de quien selecciona.
              </p>
              <WhatsAppCtaVisual label="Quiero mas entrevistas" className="mt-8 w-full" />
            </ServiceWhatsappCard>

            <ServiceWhatsappCard
              id="mentoria"
              href={buildWhatsappLink(WA_MSG_MENTORIA)}
              ariaLabel="Abrir WhatsApp para información sobre mentoría laboral"
              trackEventName="mentoria_click"
              className="scroll-mt-28 rounded-3xl bg-linear-to-br from-brand-softer/90 via-white to-cream/95 p-8 shadow-md ring-2 ring-brand-border/90 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-dark/45"
            >
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-900 ring-1 ring-amber-200">
                  Recomendado
                </span>
                <span className="inline-flex rounded-full bg-white px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand-dark ring-1 ring-brand-border/70">
                  Para personas
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-ink">
                Primeros pasos con claridad y confianza
              </h3>
              <p className="mt-3 text-stone-600">
                Programa de mentoría laboral para ordenar tu camino: CV, postulaciones y entrevistas,
                con acompañamiento cercano. Ideal si necesitas estructura y alguien que te guíe con
                criterio real de selección.
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-dark">
                Programa de acompañamiento de 4 semanas (4 sesiones individuales)
              </p>
              <p className="mt-3 rounded-xl border border-brand-border/55 bg-brand-soft/85 px-4 py-3 text-sm leading-relaxed text-stone-700">
                Si sentís que estás perdido/a laboralmente, no tenés que resolverlo solo/a.
              </p>

              <div className="mt-6 rounded-xl border border-brand-border/55 bg-brand-soft/75 p-4">
                <p className="text-sm font-semibold text-brand-dark">Incluye:</p>
                <ul className="mt-2 space-y-1.5 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="text-brand-dark">✓</span>4 sesiones individuales
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-dark">✓</span>
                    Corrección de CV
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-dark">✓</span>
                    Acompañamiento por WhatsApp
                  </li>
                </ul>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink">¿Para quién es?</p>
                  <ul className="mt-2 space-y-1 text-sm text-stone-600">
                    <li>• Personas sin experiencia</li>
                    <li>• Personas desorientadas</li>
                    <li>• Personas que no consiguen entrevistas</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">¿Qué vas a lograr?</p>
                  <ul className="mt-2 space-y-1 text-sm text-stone-600">
                    <li>• Tener un CV listo</li>
                    <li>• Saber dónde postularte</li>
                    <li>• Prepararte para entrevistas</li>
                    <li>• Ganar confianza</li>
                  </ul>
                </div>
              </div>

              <ServiceAccordion title="¿Cómo funciona? (4 sesiones)">
                <ol className="list-decimal space-y-2 pl-4 text-sm text-stone-700">
                  <li>Claridad y dirección</li>
                  <li>Armado de CV</li>
                  <li>Búsqueda laboral</li>
                  <li>Preparación para entrevistas</li>
                </ol>
              </ServiceAccordion>

              <p className="mt-4 text-sm font-medium text-brand-dark">{POSITIONING_LINE}</p>
              <ul className="mt-2 space-y-1 text-sm text-stone-600">
                <li>• Acompañamiento personalizado</li>
                <li>• Experiencia real en selección</li>
                <li>• Soporte por WhatsApp</li>
              </ul>

              <WhatsAppCtaVisual label="Quiero información sobre mentoría" className="mt-8 w-full" />
              <p className="mt-3 text-center text-sm text-stone-600">
                Trabajo con pocos cupos por semana.
              </p>
            </ServiceWhatsappCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function DifferentialSection() {
  const items = [
    "No pierdo tiempo con perfiles que no sirven",
    "Te digo lo que nadie te dice (aunque no guste)",
    "Respuesta rapida (porque el tiempo importa)",
    "Experiencia real, no teoria",
  ];

  return (
    <section id="diferencial" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-14">
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-8 ring-1 ring-stone-200 sm:p-10">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Mi diferencial</h2>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-stone-700">
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-brand-dark"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    "Me contas que necesitas",
    "Analizo tu caso",
    "Trabajo sobre eso",
    "Te llevas resultados concretos",
  ];

  return (
    <section id="como-trabajo" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-14">
      <RevealOnScroll>
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Como trabajo</h2>
        <ol className="mt-8 space-y-5">
          {steps.map((step, index) => (
            <li
              key={step}
              className="grid gap-3 rounded-2xl bg-white p-6 ring-1 ring-stone-200 sm:grid-cols-[auto_1fr]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="self-center text-stone-700">{step}</p>
            </li>
          ))}
        </ol>
      </RevealOnScroll>
    </section>
  );
}

function SocialProofSection() {
  const items = [
    "En menos de una semana empece a recibir respuestas",
    "Me llegaron candidatos que realmente encajaban",
    "Proceso claro y sin perder tiempo",
  ];

  return (
    <section id="resultados" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-14">
      <RevealOnScroll>
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Resultados reales</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <p className="text-stone-700">&ldquo;{item}&rdquo;</p>
            </article>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

function IdentificationCloserSection() {
  const situations = [
    "No te llaman de entrevistas",
    "No sabés por dónde empezar",
    "Necesitás contratar y no encontrás perfiles",
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-14">
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-8 ring-1 ring-stone-200 sm:p-10">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            Si estás en alguna de estas situaciones, puedo ayudarte:
          </h2>
          <ul className="mt-6 space-y-3">
            {situations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-700">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function IndecisosSection() {
  return (
    <section id="consulta-sin-compromiso" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-14">
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-8 text-center ring-1 ring-stone-200 sm:p-10">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            ¿No estás seguro todavía?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Escribime igual y vemos tu caso sin compromiso.
          </p>
          <TrackedWhatsAppButton
            href={buildWhatsappLink("Hola, quiero hacer una consulta")}
            label="Consultar por WhatsApp"
            className="mt-8"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-10 lg:px-14">
      <RevealOnScroll>
        <div className="rounded-3xl bg-brand-dark p-8 text-white sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Mandame un mensaje y lo vemos hoy</h2>
          <p className="mt-4 text-white/75">
            Trabajo con pocos clientes a la vez para dar seguimiento real.
          </p>
          <p className="mt-6 text-lg font-medium text-white">
            Si llegaste hasta acá, ya tenés claro que necesitás ayuda.
          </p>
          <div className="mt-8">
            <TrackedWhatsAppButton
              href={buildWhatsappLink("Hola, quiero hacer una consulta")}
              label="Hacer consulta por WhatsApp"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <a
          href={buildWhatsappLink("Hola, quiero hacer una consulta")}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-brand-dark"
        >
          WhatsApp
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-cream text-ink">
      <ScrollHashHighlight />
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
          <a href="#inicio" className="text-sm font-semibold text-ink">
            RRHH Consultora
          </a>
          <div className="flex items-center gap-3 text-sm text-stone-600 sm:gap-4">
            <a href="#servicios" className="hidden transition hover:text-brand-dark sm:inline-flex">
              Servicios
            </a>
            <a href="#contacto" className="hidden transition hover:text-brand-dark sm:inline-flex">
              Contacto
            </a>
            <TrackedWhatsAppButton
              href={buildWhatsappLink("Hola, quiero hacer una consulta")}
              label="WhatsApp"
              className="px-4 py-2 text-sm"
            />
          </div>
        </nav>
      </header>

      <main className="pb-28 md:pb-10">
        <AudienceSegmentSection />
        <HeroSection />
        <DecisionQuickSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialSection />
        <HowItWorksSection />
        <SocialProofSection />
        <IndecisosSection />
        <IdentificationCloserSection />
        <FinalCtaSection />
      </main>

      <FooterSection />
      <DelayedFloatingWhatsApp
        href={buildWhatsappLink("Hola, quiero hacer una consulta")}
      />
    </div>
  );
}
