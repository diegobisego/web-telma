import type { ReactNode } from "react";
import Image from "next/image";
import { buildWhatsappLink } from "@/app/lib/whatsapp";
import { RevealOnScroll } from "./ui/reveal-on-scroll";
import { DelayedFloatingWhatsApp } from "./ui/delayed-floating-whatsapp";
import { ScrollHashHighlight } from "./ui/scroll-hash-highlight";
import { ServiceWhatsappCard } from "./ui/service-whatsapp-card";
import { TrackedWhatsAppButton } from "./ui/tracked-whatsapp-button";

const BRAND_NAME = "Telma Córdoba";
const BRAND_TAGLINE = "Servicio de Consultoría - RR HH";

const WA_MSG_GLOBAL =
  "Hola Telma 😊 Vi tu página web y quisiera recibir información sobre tus servicios.";
const WA_MSG_RECLUTAMIENTO = WA_MSG_GLOBAL;
const WA_MSG_CV = WA_MSG_GLOBAL;
const WA_MSG_MENTORIA = WA_MSG_GLOBAL;

function WhatsAppCtaVisual({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-[0_10px_28px_-6px_rgba(111,143,114,0.38)] ${className}`}
    >
      {label}
    </span>
  );
}

const POSITIONING_LINE =
  "Trabajo desde mi experiencia real en selección, y también desde la comprensión de quien está del otro lado.";

function ServiceAccordion({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <details
      className={`group mt-6 rounded-xl border border-stone-200 bg-stone-50/70 open:bg-white ${className}`}
    >
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-2">
          {title}
          <span className="text-stone-400 transition group-open:rotate-180">
            ▼
          </span>
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
        <p className="text-base font-semibold text-ink">
          ¿No sabés por dónde empezar?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          Si estás dando tus primeros pasos o no estás consiguiendo entrevistas,
          empezá por mentoría.
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
    <section
      id="inicio"
      className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 sm:px-10 lg:px-14"
    >
      <RevealOnScroll>
        <div className="rounded-3xl bg-linear-to-br from-brand-soft/85 via-white to-cream p-8 shadow-[0_16px_40px_-28px_rgba(51,51,51,0.28)] ring-1 ring-stone-200 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <p className="mb-1 font-display text-xl font-semibold text-brand-dark sm:text-2xl">
                {BRAND_NAME}
              </p>
              <p className="mb-4 text-sm text-stone-600">{BRAND_TAGLINE}</p>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <p className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold text-brand-dark ring-1 ring-brand-border/70">
                  RRHH humano y estratégico
                </p>
                <p className="inline-flex rounded-full bg-brand-dark/12 px-4 py-1 text-sm font-semibold text-brand-dark ring-1 ring-brand-border/75">
                  Respuesta en menos de 24hs
                </p>
              </div>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-700 sm:text-xl">
                Soy Telma Córdoba y acompaño a personas y empresas en procesos
                laborales reales y humanos. Cuento con más de 10 años de
                experiencia en búsqueda y selección de personal, combinando
                herramientas de Recursos Humanos y coaching aplicado al ámbito
                laboral. Puedo ayudarte a encontrar el talento adecuado para tu
                empresa o acompañarte en la búsqueda de tu próxima oportunidad
                laboral.
              </p>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-brand-dark italic sm:text-xl">
                {POSITIONING_LINE}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="#personas"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-[0_10px_28px_-6px_rgba(111,143,114,0.38)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Quiero conseguir trabajo
                </a>
                <a
                  href="#empresas"
                  className="inline-flex items-center justify-center rounded-2xl border border-brand-dark/35 bg-white px-6 py-3 text-base font-semibold text-brand-dark shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Quiero contratar
                </a>
              </div>
              <TrackedWhatsAppButton
                href={buildWhatsappLink(WA_MSG_GLOBAL)}
                label="Escribirme por WhatsApp"
                trackEventName="hero_cta_click"
                className="mt-4 w-full sm:w-auto"
              />
            </div>
            <figure className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl bg-brand-soft/70 ring-1 ring-brand-border/65">
                <Image
                  src="/final_blanco.png"
                  alt={`Retrato profesional de ${BRAND_NAME}, consultora RRHH.`}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </figure>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function DecisionQuickSection() {
  const cards = [
    {
      href: "#empresas",
      title: "Necesito contratar profesionales",
      hint: "Servicio de Reclutamiento y Seleccion de Talento",
    },
    {
      href: "#cv",
      title: "Quiero revisar o Armar mi CV",
      hint: "Servicio de revisión y/o Armado de CV",
    },
    {
      href: "#mentoria",
      title: "No sé cómo avanzar laboralmente",
      hint: " Servicio de acompañamiento laboral para principiantes",
    },
  ];

  return (
    <section
      aria-label="Elegí qué necesitás"
      className="mx-auto w-full max-w-6xl px-6 pb-4 pt-4 sm:px-10 lg:px-14"
    >
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200 sm:p-8">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            ¿Qué necesitás?
          </h2>
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

function ServicesSection() {
  return (
    <section
      id="servicios"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-14"
    >
      <div className="mb-10 max-w-3xl sm:mb-12">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Servicios</h2>
        <p className="mt-4 text-sm leading-relaxed text-stone-600">
          Te cuento cómo te acompaño.
        </p>
        <p className="mt-6 text-base font-medium leading-relaxed text-brand-dark sm:text-lg">
          {POSITIONING_LINE}
        </p>
      </div>
      <RevealOnScroll>
        <div className="flex flex-col gap-8">
          <ServiceWhatsappCard
            id="empresas"
            href={buildWhatsappLink(WA_MSG_RECLUTAMIENTO)}
            ariaLabel="Abrir WhatsApp para consultar por reclutamiento"
            trackEventName="empresas_click"
            className="scroll-mt-28 w-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-border/80 sm:p-10"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Reclutamiento y selección de personal
              </h3>
              <p className="text-lg font-semibold leading-snug text-stone-800 sm:text-xl">
                Encontrá personas que realmente encajen con tu equipo
              </p>
            </div>
            <div className="mt-8 space-y-5 text-stone-600">
              <p className="leading-relaxed">
                Te acompaño en todo el proceso de búsqueda y selección para que
                puedas enfocarte en tu negocio, sin perder tiempo entrevistando
                perfiles que no se ajustan a lo que necesitás.
              </p>
              <p className="leading-relaxed">
                Hace más de 10 años que trabajo en selección de personal: lo hago
                de forma cercana, práctica y estratégica, para ayudarte a
                encontrar candidatos alineados tanto al puesto como a la cultura
                de tu empresa.
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-sm leading-relaxed text-stone-700">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                  ✓
                </span>
                Perfiles previamente evaluados
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                  ✓
                </span>
                Ahorro de tiempo en el proceso de selección
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                  ✓
                </span>
                Entrevistas y análisis profesional de candidatos
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                  ✓
                </span>
                Presentación de perfiles recomendados con informe individual
              </li>
            </ul>
            <ServiceAccordion
              title="¿Qué incluye el servicio?"
              className="mt-10 sm:mt-12"
            >
              <ul className="space-y-2.5 text-sm leading-relaxed text-stone-700">
                {[
                  "Relevamiento del perfil y necesidad del puesto",
                  "Publicación y difusión de la búsqueda",
                  "Screening y filtrado de CVs",
                  "Entrevistas laborales por competencias",
                  "Evaluación integral de candidatos",
                  "Informe individual de finalistas",
                  "Presentación de perfiles recomendados",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 text-brand-dark">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ServiceAccordion>
            <div className="mt-10 rounded-2xl border-l-4 border-brand bg-brand-soft/95 py-5 pl-5 pr-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                Diferencial
              </p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-ink">
                No solo te presento candidatos.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                Analizo cada perfil desde mi experiencia real en selección y te
                entrego información clara para que puedas decidir con más
                seguridad y sin perder tiempo.
              </p>
            </div>
            <WhatsAppCtaVisual
              label="Quiero contratar mejor"
              className="mt-10 w-full"
            />
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
                Revisión y Armado de CV
              </h3>
              <p className="mt-3 text-lg font-semibold leading-snug text-ink">
                Tu experiencia puede ser buena… pero si tu CV no la comunica,
                no te van a llamar
              </p>
              <p className="mt-4 text-stone-600">
                Te ayudo a transformar tu CV en una herramienta clara,
                profesional y enfocada en el tipo de trabajo que estás buscando.
              </p>
              <p className="mt-4 text-stone-600">
                Trabajo cada CV desde mi experiencia en selección, para que
                destaque, pase filtros ATS y genere más oportunidades reales de
                entrevista.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-stone-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                    ✓
                  </span>
                  CV optimizado para filtros ATS
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                    ✓
                  </span>
                  Redacción clara y profesional
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                    ✓
                  </span>
                  Enfoque estratégico según tu objetivo laboral
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs text-brand-dark">
                    ✓
                  </span>
                  Mejora concreta y personalizada
                </li>
              </ul>
              <ServiceAccordion title="¿Qué incluye el servicio?">
                <ul className="space-y-2 text-sm text-stone-700">
                  {[
                    "Revisión completa de tu CV actual",
                    "Rediseño visual y mejora del contenido",
                    "Optimización para sistemas ATS",
                    "Ajuste según tu perfil y objetivo laboral",
                    "Recomendaciones personalizadas para potenciar tu presentación profesional",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 text-brand-dark">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ServiceAccordion>
              <div className="mt-4 border-l-4 border-brand bg-brand-soft/95 py-4 pl-4 pr-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                  Diferencial
                </p>
                <p className="mt-2 text-sm font-semibold text-ink">
                  No trabajo con plantillas genéricas.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  Analizo tu experiencia desde el criterio de selección real
                  para ayudarte a mostrar mejor tu perfil y aumentar tus
                  posibilidades de conseguir entrevistas.
                </p>
              </div>
              <WhatsAppCtaVisual
                label="Quiero mas entrevistas"
                className="mt-8 w-full"
              />
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
                Mentoría Laboral
              </h3>
              <p className="mt-3 text-lg font-semibold leading-snug text-ink">
                Claridad y acompañamiento para tu próximo paso laboral
              </p>
              <p className="mt-4 text-stone-600">
                Si te sentís perdido/a laboralmente, no sabés cómo organizar tu
                búsqueda o hace tiempo enviás CVs sin resultados, este espacio es
                para vos.
              </p>
              <p className="mt-4 text-stone-600">
                Te acompaño de manera personalizada para ordenar tu camino
                laboral, mejorar tu presentación profesional y prepararte para
                afrontar entrevistas con más claridad y confianza.
              </p>
              <p className="mt-4 text-sm font-medium italic leading-relaxed text-brand-dark">
                {POSITIONING_LINE}
              </p>

              <div className="mt-6 rounded-xl border border-brand-border/55 bg-brand-soft/75 p-5">
                <p className="text-base font-semibold text-ink">
                  ¿Cómo es el acompañamiento?
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-dark">
                  Proceso individual de 4 semanas
                </p>
                <p className="text-sm text-stone-700">
                  (4 sesiones personalizadas)
                </p>
                <ul className="mt-4 space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="text-brand-dark">✓</span>
                    Diagnóstico y orientación laboral
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-dark">✓</span>
                    Revisión y optimización de CV
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-dark">✓</span>
                    Estrategia de búsqueda laboral
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-dark">✓</span>
                    Simulación de entrevistas y feedback
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-dark">✓</span>
                    Acompañamiento por WhatsApp durante el proceso
                  </li>
                </ul>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-base font-semibold text-ink">
                    ¿Para quién es?
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-stone-600">
                    {[
                      "Personas que se sienten desorientadas laboralmente",
                      "Personas que no consiguen entrevistas",
                      "Personas con poca o nula experiencia laboral",
                      "Personas que quieren reorganizar su búsqueda de trabajo",
                      "Personas que necesitan acompañamiento y estructura",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-brand-dark">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-base font-semibold text-ink">
                    ¿Qué vas a lograr?
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-stone-600">
                    {[
                      "Tener un CV más claro y profesional",
                      "Entender cómo y dónde postularte",
                      "Prepararte mejor para entrevistas laborales",
                      "Comunicar mejor tu experiencia y fortalezas",
                      "Ganar más seguridad y confianza en el proceso",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-brand-dark">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <p className="text-base font-semibold text-ink">
                  ¿Cómo trabajamos?
                </p>
                <div className="space-y-4 text-sm leading-relaxed text-stone-700">
                  <div>
                    <p className="font-semibold text-ink">
                      Sesión 1 — Diagnóstico y claridad laboral
                    </p>
                    <p className="mt-1">
                      Analizamos tu experiencia, intereses, fortalezas y objetivo
                      laboral para ordenar tu búsqueda y definir una estrategia
                      inicial.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">
                      Sesión 2 — CV estratégico y mirada de reclutador
                    </p>
                    <p className="mt-1">
                      Trabajamos tu CV desde el criterio real de selección:
                      estructura, contenido, claridad y optimización para filtros
                      ATS.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">
                      Sesión 3 — Simulación de entrevista y feedback
                    </p>
                    <p className="mt-1">
                      Realizamos una práctica de entrevista laboral con
                      devolución personalizada para ayudarte a comunicarte con
                      mayor seguridad.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">
                      Sesión 4 — Seguimiento y acompañamiento
                    </p>
                    <p className="mt-1">
                      Revisamos cómo te fue en entrevistas reales, qué podés
                      mejorar y cómo seguir avanzando con más claridad y
                      confianza.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-l-4 border-brand bg-brand-soft/95 py-4 pl-4 pr-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                  Diferencial
                </p>
                <p className="mt-2 text-sm font-semibold text-ink">
                  No es solo una corrección de CV ni consejos genéricos.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  Es un acompañamiento laboral personalizado, basado en
                  experiencia real en selección de personal y herramientas de
                  coaching aplicadas al ámbito laboral.
                </p>
              </div>

              <WhatsAppCtaVisual
                label="Quiero información sobre mentoría"
                className="mt-8 w-full"
              />
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
    {
      title: "Experiencia real en RRHH",
      detail: "Más de una década evaluando talento y procesos.",
    },
    {
      title: "Enfoque humano y personalizado",
      detail: "Cada caso se trabaja con criterio, escucha y contexto.",
    },
    {
      title: "Respuesta rápida",
      detail: "Comunicación clara para que no pierdas tiempo.",
    },
    {
      title: "Acompañamiento estratégico",
      detail: "No es solo RRHH: integro mentoría, coaching y acción concreta.",
    },
  ];

  return (
    <section
      id="diferencial"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-14"
    >
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-8 ring-1 ring-stone-200 shadow-[0_12px_30px_-24px_rgba(51,51,51,0.35)] sm:p-10">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            ¿Por qué trabajar conmigo?
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-stone-200 bg-white p-6 text-left shadow-[0_12px_24px_-20px_rgba(51,51,51,0.32)] transition duration-300 hover:-translate-y-0.5"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
                  ✓
                </span>
                <p className="mt-4 text-lg font-semibold text-ink">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.detail}
                </p>
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
    <section
      id="como-trabajo"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-14"
    >
      <RevealOnScroll>
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
          Como trabajo
        </h2>
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

function IdentificationCloserSection() {
  const situations = [
    "No te llaman de entrevistas",
    "No sabés por dónde empezar",
    "Necesitás contratar y no encontrás perfiles",
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-14">
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
    <section
      id="consulta-sin-compromiso"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-14"
    >
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-8 text-center ring-1 ring-stone-200 sm:p-10">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            ¿No estás seguro todavía?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Escribime igual y vemos tu caso sin compromiso.
          </p>
          <TrackedWhatsAppButton
            href={buildWhatsappLink(WA_MSG_GLOBAL)}
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
    <section
      id="contacto"
      className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-10 lg:px-14"
    >
      <RevealOnScroll>
        <div className="rounded-3xl bg-brand-dark p-8 text-white sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Mandame un mensaje y lo vemos hoy
          </h2>
          <p className="mt-4 text-white/75">
            Trabajo con pocos clientes a la vez para dar seguimiento real.
          </p>
          <p className="mt-6 text-lg font-medium text-white">
            Si llegaste hasta acá, ya tenés claro que necesitás ayuda.
          </p>
          <div className="mt-8">
            <TrackedWhatsAppButton
              href={buildWhatsappLink(WA_MSG_GLOBAL)}
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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-ink">{BRAND_NAME}</span>
          <span className="text-xs text-stone-500">{BRAND_TAGLINE}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={buildWhatsappLink(WA_MSG_GLOBAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-brand-dark"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
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
          <a
            href="#inicio"
            className="flex flex-col gap-0.5 text-left leading-tight"
          >
            <span className="text-sm font-semibold text-ink">{BRAND_NAME}</span>
            <span className="text-[11px] font-medium text-stone-500">
              {BRAND_TAGLINE}
            </span>
          </a>
          <div className="flex items-center gap-3 text-sm text-stone-600 sm:gap-4">
            <a
              href="#servicios"
              className="hidden transition hover:text-brand-dark sm:inline-flex"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="hidden transition hover:text-brand-dark sm:inline-flex"
            >
              Contacto
            </a>
            <TrackedWhatsAppButton
              href={buildWhatsappLink(WA_MSG_GLOBAL)}
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
        <ServicesSection />
        <DifferentialSection />
        <HowItWorksSection />
        <IndecisosSection />
        <IdentificationCloserSection />
        <FinalCtaSection />
      </main>

      <FooterSection />
      <DelayedFloatingWhatsApp href={buildWhatsappLink(WA_MSG_GLOBAL)} />
    </div>
  );
}
