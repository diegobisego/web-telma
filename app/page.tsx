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
      className={`pointer-events-none inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 ${className}`}
    >
      {label}
    </span>
  );
}

const POSITIONING_LINE = "Trabajo desde la mirada de quien selecciona";

function ServiceAccordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group mt-6 rounded-xl border border-zinc-200 bg-zinc-50/60 open:bg-white">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-zinc-900 marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-2">
          {title}
          <span className="text-zinc-400 transition group-open:rotate-180">▼</span>
        </span>
      </summary>
      <div className="border-t border-zinc-100 px-4 pb-4 pt-3">{children}</div>
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
          className="flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-base font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md hover:ring-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          Quiero contratar
        </a>
        <a
          href="#personas"
          className="flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-base font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md hover:ring-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          Quiero conseguir trabajo
        </a>
      </div>
      <div className="mt-5 rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-5 ring-1 ring-emerald-100">
        <p className="text-base font-semibold text-zinc-900">¿No sabés por dónde empezar?</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">
          Si estás dando tus primeros pasos o no estás consiguiendo entrevistas, empezá por mentoría.
        </p>
        <a
          href="#mentoria"
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-emerald-600/35 bg-white px-4 py-3 text-sm font-semibold text-emerald-900 shadow-sm transition duration-200 hover:border-emerald-600 hover:shadow-md sm:w-auto"
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
        <div className="rounded-3xl bg-linear-to-br from-emerald-100 via-white to-sky-100 p-8 shadow-sm ring-1 ring-zinc-200 sm:p-12">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <p className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
              Respuesta en menos de 24hs
            </p>
            <p className="inline-flex rounded-full bg-emerald-700/10 px-4 py-1 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-300/60">
              {POSITIONING_LINE}
            </p>
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
            Contratar bien o conseguir entrevistas no deberia ser cuestion de suerte
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-700 sm:text-xl">
            Te ayudo a resolverlo con un enfoque real de Recursos Humanos, sin vueltas ni teoria
          </p>
          <div className="mt-8">
            <TrackedWhatsAppButton
              href={buildWhatsappLink("Hola, quiero hacer una consulta")}
              label="Hacer consulta por WhatsApp"
              trackEventName="hero_cta_click"
              className="w-full sm:w-auto"
            />
            <p className="mt-2 max-w-xl text-sm font-medium text-zinc-700">
              Te respondo personalmente (no es automático).
            </p>
            <a
              href="#mentoria"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border-2 border-emerald-700/25 bg-white/70 px-6 py-3 text-base font-semibold text-emerald-900 backdrop-blur-sm transition duration-200 hover:border-emerald-600/50 hover:bg-white hover:shadow-md sm:w-auto"
            >
              Ver mentoría laboral
            </a>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">
              Respondo en el dia. Cupos limitados por semana.
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-zinc-700">
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">Respuesta en el dia</span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200">Sin compromiso</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm ring-1 ring-zinc-200">
          +10 años en RRHH
        </span>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm ring-1 ring-zinc-200">
          Experiencia real en selección
        </span>
        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm ring-1 ring-zinc-200">
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
        <div className="rounded-3xl bg-white p-6 ring-1 ring-zinc-200 sm:p-8">
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">¿Qué necesitás?</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {cards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="group rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                <p className="font-semibold text-zinc-900">{card.title}</p>
                <p className="mt-1 text-sm text-zinc-600">{card.hint}</p>
                <p className="mt-3 text-sm font-medium text-emerald-700 group-hover:text-emerald-800">
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
        <div className="rounded-3xl bg-white p-8 ring-1 ring-zinc-200 sm:p-10">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Sobre mi</h2>
          <p className="mx-auto mt-4 inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200">
            Más de 10 años de experiencia
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-emerald-800">
            {POSITIONING_LINE}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-600">
            Trabajo en Recursos Humanos hace años viendo el mismo problema: empresas que no encuentran
            buenos perfiles y personas que no consiguen entrevistas.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
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
        <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Servicios</h2>
        <p className="mt-3 max-w-2xl text-base font-medium text-emerald-800">{POSITIONING_LINE}</p>
      </div>
      <RevealOnScroll>
        <div className="flex flex-col gap-6">
          <ServiceWhatsappCard
            id="empresas"
            href={buildWhatsappLink(WA_MSG_RECLUTAMIENTO)}
            ariaLabel="Abrir WhatsApp para consultar por reclutamiento"
            trackEventName="empresas_click"
            className="scroll-mt-28 w-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-200"
          >
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
              Deja de perder tiempo con candidatos que no sirven
            </h3>
            <p className="mt-4 text-zinc-600">
              Filtro, evaluo y te presento perfiles que realmente encajan con lo que necesitas.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700">
              <li className="flex gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  ✓
                </span>
                Perfiles evaluados antes de llegar a vos
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  ✓
                </span>
                Ahorro de tiempo en selección
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  ✓
                </span>
                Enfoque práctico
              </li>
            </ul>
            <ServiceAccordion title="Qué incluye el servicio">
              <ul className="space-y-2 text-sm text-zinc-700">
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
                    <span className="mt-0.5 text-emerald-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ServiceAccordion>
            <p className="mt-4 border-l-4 border-emerald-500 bg-emerald-50/90 py-3 pl-4 pr-3 text-sm font-medium text-zinc-800">
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
              className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-200"
            >
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                Si no te llaman, el problema no sos vos: es tu CV
              </h3>
              <p className="mt-4 text-zinc-600">
                Optimizo tu CV para que pase filtros y consigas entrevistas reales.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                    ✓
                  </span>
                  Optimizado para filtros ATS
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                    ✓
                  </span>
                  Enfocado en entrevistas
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                    ✓
                  </span>
                  Mejora rápida y concreta
                </li>
              </ul>
              <ServiceAccordion title="Qué incluye">
                <ul className="space-y-2 text-sm text-zinc-700">
                  {[
                    "Revisión completa del CV",
                    "Rediseño y mejora del contenido",
                    "Optimización para ATS",
                    "Ajuste según objetivo laboral",
                    "Recomendaciones personalizadas",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 text-emerald-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ServiceAccordion>
              <p className="mt-4 border-l-4 border-emerald-500 bg-emerald-50/90 py-3 pl-4 pr-3 text-sm font-medium text-zinc-800">
                Trabajo tu CV desde la mirada de quien selecciona.
              </p>
              <WhatsAppCtaVisual label="Quiero mas entrevistas" className="mt-8 w-full" />
            </ServiceWhatsappCard>

            <ServiceWhatsappCard
              id="mentoria"
              href={buildWhatsappLink(WA_MSG_MENTORIA)}
              ariaLabel="Abrir WhatsApp para información sobre mentoría laboral"
              trackEventName="mentoria_click"
              className="scroll-mt-28 rounded-3xl bg-linear-to-br from-emerald-50/90 via-white to-sky-50/80 p-8 shadow-md ring-2 ring-emerald-400/45 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-500/55"
            >
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-900 ring-1 ring-amber-200">
                  Recomendado
                </span>
                <span className="inline-flex rounded-full bg-white px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-800 ring-1 ring-emerald-200">
                  Para personas
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                Primeros pasos con claridad y confianza
              </h3>
              <p className="mt-3 text-zinc-600">
                Programa de mentoría laboral para ordenar tu camino: CV, postulaciones y entrevistas,
                con acompañamiento cercano. Ideal si necesitas estructura y alguien que te guíe con
                criterio real de selección.
              </p>
              <p className="mt-3 text-sm font-semibold text-emerald-900">
                Programa de acompañamiento de 4 semanas (4 sesiones individuales)
              </p>
              <p className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm leading-relaxed text-zinc-700">
                Si sentís que estás perdido/a laboralmente, no tenés que resolverlo solo/a.
              </p>

              <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                <p className="text-sm font-semibold text-emerald-900">Incluye:</p>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>4 sesiones individuales
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    Corrección de CV
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    Acompañamiento por WhatsApp
                  </li>
                </ul>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">¿Para quién es?</p>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                    <li>• Personas sin experiencia</li>
                    <li>• Personas desorientadas</li>
                    <li>• Personas que no consiguen entrevistas</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">¿Qué vas a lograr?</p>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                    <li>• Tener un CV listo</li>
                    <li>• Saber dónde postularte</li>
                    <li>• Prepararte para entrevistas</li>
                    <li>• Ganar confianza</li>
                  </ul>
                </div>
              </div>

              <ServiceAccordion title="¿Cómo funciona? (4 sesiones)">
                <ol className="list-decimal space-y-2 pl-4 text-sm text-zinc-700">
                  <li>Claridad y dirección</li>
                  <li>Armado de CV</li>
                  <li>Búsqueda laboral</li>
                  <li>Preparación para entrevistas</li>
                </ol>
              </ServiceAccordion>

              <p className="mt-4 text-sm font-medium text-emerald-900">{POSITIONING_LINE}</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                <li>• Acompañamiento personalizado</li>
                <li>• Experiencia real en selección</li>
                <li>• Soporte por WhatsApp</li>
              </ul>

              <WhatsAppCtaVisual label="Quiero información sobre mentoría" className="mt-8 w-full" />
              <p className="mt-3 text-center text-sm text-zinc-600">
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
        <div className="rounded-3xl bg-white p-8 ring-1 ring-zinc-200 sm:p-10">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Mi diferencial</h2>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-zinc-700">
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
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
        <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Como trabajo</h2>
        <ol className="mt-8 space-y-5">
          {steps.map((step, index) => (
            <li
              key={step}
              className="grid gap-3 rounded-2xl bg-white p-6 ring-1 ring-zinc-200 sm:grid-cols-[auto_1fr]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="self-center text-zinc-700">{step}</p>
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
        <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Resultados reales</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
              <p className="text-zinc-700">&ldquo;{item}&rdquo;</p>
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
        <div className="rounded-3xl bg-white p-8 ring-1 ring-zinc-200 sm:p-10">
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            Si estás en alguna de estas situaciones, puedo ayudarte:
          </h2>
          <ul className="mt-6 space-y-3">
            {situations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-700">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700"
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
        <div className="rounded-3xl bg-white p-8 text-center ring-1 ring-zinc-200 sm:p-10">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            ¿No estás seguro todavía?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
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
        <div className="rounded-3xl bg-zinc-900 p-8 text-white sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Mandame un mensaje y lo vemos hoy</h2>
          <p className="mt-4 text-zinc-300">
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
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <a
          href={buildWhatsappLink("Hola, quiero hacer una consulta")}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-emerald-700"
        >
          WhatsApp
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-900">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900">
      <ScrollHashHighlight />
      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
          <a href="#inicio" className="text-sm font-semibold text-zinc-900">
            RRHH Consultora
          </a>
          <div className="flex items-center gap-3 text-sm text-zinc-600 sm:gap-4">
            <a href="#servicios" className="hidden transition hover:text-zinc-900 sm:inline-flex">
              Servicios
            </a>
            <a href="#contacto" className="hidden transition hover:text-zinc-900 sm:inline-flex">
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
