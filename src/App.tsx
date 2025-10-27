import React, { useState, type JSX } from 'react';

type Service = { id: number; title: string };
type Work = { id: number; title: string; img: string; url: string };
type FormState = { name: string; email: string; message: string };

export default function IntelitechLanding(): JSX.Element {
  // --- Rutas editables (pon tus archivos dentro de public/) ---
  const LOGO = '/images/Logo.png';
  const BACKGROUND = '/images/Background.png';

  // Servicios
  const [services] = useState<Service[]>([
    { id: 1, title: 'Paneles Solares' },
    { id: 2, title: 'Puntos de Venta' },
    { id: 3, title: 'Cercos Electricos' },
    { id: 4, title: 'Camaras de seguridad' },
    { id: 5, title: 'Control de acceso' },
    { id: 6, title: 'Alarmas' },
    { id: 7, title: 'Aires Acondicionados' },
    { id: 8, title: 'Redes' },
    { id: 9, title: 'Radiocomunicaciones' },
    { id: 10, title: 'Estudios Site Survey' },
    { id: 11, title: 'Equipos de Inspeccion Rayos X' }
  ]);

  // Trabajos (portfolio)
  const [works] = useState<Work[]>([
    { id: 1, title: '', img: '/images/Image1.jpg', url: '' },
    { id: 2, title: '', img: '/images/Image4.jpg', url: '' },
    { id: 3, title: '', img: '/images/Image5.jpg', url: '' }
  ]);

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });

  // manejo del src del logo (para fallback si falla la carga)
  const [logoSrc, setLogoSrc] = useState<string>(LOGO);

  // Maneja cambios en inputs y textarea (tipado correcto)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value } as FormState));
  };

  // Submit del formulario
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto — INTELITECH: ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}
Email: ${form.email}

Mensaje:
${form.message}`);
    const RECEIVER = 'tu-correo@ejemplo.com';
    window.location.href = `mailto:${RECEIVER}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen font-sans text-gray-100 bg-black relative">
      {/* BACKGROUND FIJO */}
      <div
        className="fixed inset-0 bg-center bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        aria-hidden={true}
      />

      {/* Overlay degradado fijo */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden={true}
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.06) 75%, rgba(0,0,0,0.00) 100%)'
        }}
      />

      {/* Contenido */}
      <div className="relative z-10">
        {/* HERO */}
        <header className="relative">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Texto (izquierda) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  {/* Logo pequeño */}
                  <img
                    src={logoSrc}
                    alt="Intelitech"
                    className="h-16 w-16 object-contain"
                    onError={(ev) => {
                      // fallback si la imagen no carga
                      const target = ev.currentTarget as HTMLImageElement;
                      if (!target.src.endsWith('/images/Logo.png')) {
                        target.src = '/images/Logo.png';
                        setLogoSrc('/images/Logo.png');
                      }
                    }}
                  />
                  <div>
                    <div className="text-sm text-sky-300 font-semibold">INTELI<span className="text-yellow-300">TECH</span></div>
                    <div className="text-xs text-gray-300">Soluciones Fotovoltaicas</div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Energía solar inteligente para hogares y negocios</h1>
                <p className="mt-4 text-lg text-gray-200 max-w-2xl">Maximiza tu ahorro y reduce tu huella ambiental con instalaciones profesionales, monitoreo y soporte técnico local.</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-lg">Solicitar cotización</a>
                  <a href="#works" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-600 hover:border-gray-400">Ver proyectos</a>
                </div>

                {/* Fichas */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-sky-900">
                    <div className="text-sm font-semibold">Ahorro real</div>
                    <div className="text-xs text-gray-300 mt-1">Sistemas dimensionados para tu consumo.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-sky-900">
                    <div className="text-sm font-semibold">Garantía</div>
                    <div className="text-xs text-gray-300 mt-1">Materiales y mano de obra certificados.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-sky-900">
                    <div className="text-sm font-semibold">Soporte</div>
                    <div className="text-xs text-gray-300 mt-1">Atención rápida y local.</div>
                  </div>
                </div>
              </div>

              {/* Lado derecho: logo grande (se mantiene simple si no quieres contenido aquí) */}
              <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
                <div
                  
                >
                  {/* Caja interior más pequeña para que el logo no ocupe todo el recuadro */}
                  <div className="absolute left-1/2 top-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img
                                          />

                    {/* Líneas decorativas tipo circuito */}
                    <svg className="absolute left-0 bottom-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
                      
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* NOTA: se eliminó el separador SVG para evitar franjas */}
        </header>

        {/* MAIN: aseguramos que el contenido quede por encima */}
        <main className="max-w-6xl mx-auto px-6 py-16" style={{ position: 'relative', zIndex: 10 }}>
          {/* Servicios */}
          <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros servicios</h2>
            <p className="text-gray-300 mb-6">Instalacion de:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.id} className="flex gap-4 items-center p-4 rounded-xl bg-gradient-to-r from-sky-900/10 to-black/40 border border-gray-800">
                  <div className="flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="14" rx="1.5" stroke="#60a5fa" strokeWidth="1.2" />
                      <path d="M12 17v4" stroke="#ffd166" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M5 8h14" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{s.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trabajos / Portfolio */}
          <section id="works" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros trabajos</h2>
            <p className="text-gray-300 mb-6"></p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {works.map((w) => (
                <div key={w.id} className="rounded-xl overflow-hidden bg-black/40 border border-gray-800">
                  {w.img ? (
                    w.url ? (
                      <a href={w.url} target="_blank" rel="noreferrer">
                        <img src={w.img} alt={w.title} className="w-full h-48 object-cover" />
                      </a>
                    ) : (
                      <img src={w.img} alt={w.title} className="w-full h-48 object-cover" />
                    )
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-gray-400">Sin imagen</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Contacto */}
          <section id="contact" className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FORM: contenedor transparente */}
              <form onSubmit={handleContactSubmit} className="space-y-4 bg-transparent p-6 rounded-xl border border-white/10">
                <div>
                  <label className="text-sm text-white">Nombre</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 rounded-md bg-transparent border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="text-sm text-white">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 rounded-md bg-transparent border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-white">Mensaje</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full mt-2 p-3 rounded-md bg-transparent border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    placeholder="Escribe tu mensaje..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button type="submit" className="px-5 py-3 rounded-full bg-yellow-400 text-black font-semibold">Enviar mensaje</button>
                  <button type="button" onClick={() => setForm({ name: '', email: '', message: '' })} className="px-4 py-2 rounded-lg border border-white/20 text-white/90">Limpiar</button>
                </div>
              </form>

              <div className="p-6 rounded-xl bg-black/30 border border-gray-800">
                <h3 className="font-semibold text-white">Detalles</h3>
                <p className="mt-2 text-sm text-gray-300">Tel: +52 833 383 1105<br/>Email: correo@ejemplo.com<br/>Ubicación: </p>
              </div>
            </div>
          </section>

        </main>

        <footer className="border-t border-gray-900 py-6">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">© 2021 INTELITECH — Todos los derechos reservados</div>
        </footer>
      </div>
    </div>
  );
}
