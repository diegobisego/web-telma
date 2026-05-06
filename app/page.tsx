import { RevealOnScroll } from "./ui/reveal-on-scroll";

const WHATSAPP_NUMBER = "5493517530992";

function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type WhatsAppButtonProps = {
  label: string;
  message: string;
  className?: string;
};

function WhatsAppButton({ label, message, className = "" }: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-emerald-600 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:scale-[0.99] ${className}`}
    >
      {label}
    </a>
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
          Soy empresa
        </a>
        <a
          href="#personas"
          className="flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-base font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md hover:ring-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          Busco trabajo
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
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
            Respuesta en menos de 24hs
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
            Contratar bien o conseguir entrevistas no deberia ser cuestion de suerte
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-700 sm:text-xl">
            Te ayudo a resolverlo con un enfoque real de Recursos Humanos, sin vueltas ni teoria
          </p>
          <div className="mt-8">
            <WhatsAppButton
              label="Hacer consulta por WhatsApp"
              message="Hola, quiero hacer una consulta"
              className="w-full sm:w-auto"
            />
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
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto w-full max-w-4xl px-6 py-16 text-center sm:px-10 lg:px-14">
      <RevealOnScroll>
        <div className="rounded-3xl bg-white p-8 ring-1 ring-zinc-200 sm:p-10">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Sobre mi</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-600">
            Trabajo en Recursos Humanos hace años viendo el mismo problema: empresas que no encuentran
            buenos perfiles y personas que no consiguen entrevistas.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
            Mi enfoque es simple: entender bien la necesidad y resolverla sin vueltas.
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
      </div>
      <RevealOnScroll>
        <div className="grid gap-6 md:grid-cols-2">
          <article
            id="empresas"
            className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-200"
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
                Ahorro de tiempo en seleccion
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  ✓
                </span>
                Enfoque practico
              </li>
            </ul>
            <WhatsAppButton
              label="Quiero contratar mejor"
              message="Hola, quiero mejorar mi proceso de contratacion"
              className="mt-8 w-full"
            />
          </article>

          <article
            id="personas"
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
                Mejora rapida y concreta
              </li>
            </ul>
            <WhatsAppButton
              label="Quiero mas entrevistas"
              message="Hola, quiero mejorar mi CV"
              className="mt-8 w-full"
            />
          </article>
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
              <p className="text-zinc-700">"{item}"</p>
            </article>
          ))}
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
          <WhatsAppButton
            label="Consultar por WhatsApp"
            message="Hola, quiero hacer una consulta"
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
          <div className="mt-8">
            <WhatsAppButton
              label="Hacer consulta por WhatsApp"
              message="Hola, quiero hacer una consulta"
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

function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsappLink("Hola, quiero hacer una consulta")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="pulse-soft fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow-lg shadow-emerald-500/30 transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-600 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:scale-95"
    >
      W
    </a>
  );
}

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900">
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
            <WhatsAppButton
              label="WhatsApp"
              message="Hola, quiero hacer una consulta"
              className="px-4 py-2 text-sm"
            />
          </div>
        </nav>
      </header>

      <main>
        <AudienceSegmentSection />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialSection />
        <HowItWorksSection />
        <SocialProofSection />
        <IndecisosSection />
        <FinalCtaSection />
      </main>

      <FooterSection />
      <FloatingWhatsAppButton />
    </div>
  );
}
