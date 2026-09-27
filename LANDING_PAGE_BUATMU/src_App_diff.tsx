--- src/App.tsx (原始)
export default function App() {
  return (
    <div/>
  );
}


+++ src/App.tsx (修改后)
import { useState, useEffect, useRef } from 'react';

// ============ DATA ============
const tiers = [
  {
    name: "Mini",
    price: "Rp10.000",
    tagline: "Something simple",
    description: "Kejutan digital sederhana, singkat, dan langsung ke inti.",
    features: [
      "Pesan personal",
      "Opening & closing",
      "Desain clean & menarik",
      "Link yang bisa dibagikan"
    ],
    recommended: false,
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    name: "Sweet",
    price: "Rp25.000",
    tagline: "Something personal",
    description: "Kejutan digital yang lebih personal dan lebih berkesan.",
    features: [
      "Semua fitur Mini",
      "Foto / memory",
      "Storytelling ringan",
      "Transisi animasi",
      "Lebih banyak section"
    ],
    recommended: false,
    color: "from-pink-400 to-rose-400",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700",
    borderColor: "border-pink-200",
  },
  {
    name: "Story",
    price: "Rp40.000",
    tagline: "Something meaningful",
    description: "Pengalaman digital yang berpusat pada cerita personal.",
    features: [
      "Semua fitur Sweet",
      "Alur cerita personal",
      "Multiple memories",
      "Letter / surat",
      "Emotional progression",
      "Richer content"
    ],
    recommended: false,
    color: "from-purple-400 to-violet-400",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
  },
  {
    name: "Signature",
    price: "Rp59.000",
    tagline: "Something unforgettable",
    description: "Pengalaman digital paling lengkap. Lengkap, immersive, dan berkesan.",
    features: [
      "Semua fitur Story",
      "Interactive elements",
      "Photo gallery lengkap",
      "Deep storytelling",
      "Advanced transitions",
      "Immersive experience",
      "Customization tinggi"
    ],
    recommended: true,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
  },
  {
    name: "Custom",
    price: "Rp99.000+",
    tagline: "Your vision, realized",
    description: "Sepenuhnya personal. Dibuat khusus sesuai keinginanmu.",
    features: [
      "Semua fitur Signature",
      "Desain fully custom",
      "Fitur khusus sesuai request",
      "Konsultasi langsung",
      "Revisi lebih fleksibel",
      "Prioritas pengerjaan"
    ],
    recommended: false,
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
  }
];

const howItWorks = [
  {
    step: "01",
    title: "Pilih Paket",
    description: "Pilih tier yang sesuai dengan kebutuhanmu. Dari yang sederhana hingga yang paling lengkap.",
    icon: "🎁"
  },
  {
    step: "02",
    title: "Kirim Bahan",
    description: "Berikan nama, pesan, cerita, foto, dan elemen personal lainnya.",
    icon: "✉️"
  },
  {
    step: "03",
    title: "Kami Buatkan",
    description: "Tim kami merangkai bahanmu menjadi pengalaman digital yang indah dan berkesan.",
    icon: "✨"
  },
  {
    step: "04",
    title: "Bagikan Kejutannya",
    description: "Terima link halaman digitalmu, lalu bagikan ke orang yang kamu sayangi.",
    icon: "💝"
  }
];

const examples = [
  {
    occasion: "Ulang Tahun",
    emoji: "🎂",
    description: "Buat ucapan ulang tahun yang lebih dari sekadar chat."
  },
  {
    occasion: "Anniversary",
    emoji: "💕",
    description: "Rayakan momen spesial dengan cerita yang indah."
  },
  {
    occasion: "Apresiasi",
    emoji: "🌟",
    description: "Sampaikan rasa terima kasih dengan cara yang berbeda."
  },
  {
    occasion: "Perpisahan",
    emoji: "🌅",
    description: "Berikan kenangan terakhir yang tak terlupakan."
  },
  {
    occasion: "Valentine",
    emoji: "❤️",
    description: "Nyatakan perasaan dengan pengalaman yang personal."
  },
  {
    occasion: "Just Because",
    emoji: "🌸",
    description: "Tidak perlu alasan untuk membuat seseorang tersenyum."
  }
];

// ============ COMPONENTS ============

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-bold text-xl bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Buatmu
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#cara-kerja" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Cara Kerja</a>
            <a href="#paket" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Paket</a>
            <a href="#untuk-siapa" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Untuk Siapa</a>
            <a href="#paket" className="px-5 py-2 bg-gradient-to-r from-brand-500 to-purple-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-brand-200 transition-all">
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#cara-kerja" className="text-sm font-medium text-gray-600 px-2 py-1" onClick={() => setMobileOpen(false)}>Cara Kerja</a>
              <a href="#paket" className="text-sm font-medium text-gray-600 px-2 py-1" onClick={() => setMobileOpen(false)}>Paket</a>
              <a href="#untuk-siapa" className="text-sm font-medium text-gray-600 px-2 py-1" onClick={() => setMobileOpen(false)}>Untuk Siapa</a>
              <a href="#paket" className="px-5 py-2 bg-gradient-to-r from-brand-500 to-purple-600 text-white text-sm font-semibold rounded-full text-center" onClick={() => setMobileOpen(false)}>
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-purple-50 to-warm-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-warm-200/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>

      {/* Floating emojis */}
      <div className="absolute top-1/4 left-[15%] text-4xl animate-float opacity-60" style={{ animationDelay: '0s' }}>💌</div>
      <div className="absolute top-1/3 right-[20%] text-3xl animate-float opacity-60" style={{ animationDelay: '1s' }}>🌸</div>
      <div className="absolute bottom-1/3 left-[25%] text-3xl animate-float opacity-60" style={{ animationDelay: '2s' }}>✨</div>
      <div className="absolute bottom-1/4 right-[15%] text-4xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}>💝</div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-brand-100 mb-8">
            <span className="text-sm">✨</span>
            <span className="text-sm font-medium text-brand-700">Digital Surprise Experience</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Berikan Kejutan yang{' '}
            <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-brand-600 bg-clip-text text-transparent">
              Lebih Berkesan
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kami merangkai pesan, cerita, dan fotomu menjadi pengalaman digital personal
            yang bisa kamu bagikan kepada orang yang kamu sayangi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#paket" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-brand-200 transition-all transform hover:-translate-y-0.5">
              Lihat Paket
            </a>
            <a href="#cara-kerja" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all">
              Cara Kerjanya →
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Mulai Rp10.000</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Proses Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Personal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="cara-kerja" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-4">
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Semudah 4 Langkah
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Dari bahan mentah sampai jadi pengalaman digital yang indah. Prosesnya simpel, hasilnya istimewa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {howItWorks.map((item, index) => (
            <HowItWorksCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksCard({ item, index }: { item: typeof howItWorks[0], index: number }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`relative p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-4xl mb-4">{item.icon}</div>
      <div className="text-xs font-bold text-brand-500 mb-2">STEP {item.step}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>

      {index < howItWorks.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
          →
        </div>
      )}
    </div>
  );
}

function TiersSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="paket" className="py-20 sm:py-28 bg-gradient-to-b from-white to-brand-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            Pilih Paketmu
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pengalaman Sesuai Kebutuhanmu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap tier memberikan kedalaman pengalaman yang berbeda. Pilih yang paling sesuai dengan momen spesialmu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <TierCard key={index} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier, index }: { tier: typeof tiers[0], index: number }) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl p-6 transition-all duration-500 ${
        tier.recommended
          ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 shadow-xl shadow-amber-100 scale-[1.02]'
          : 'bg-white border border-gray-200 hover:border-brand-200 hover:shadow-lg'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {tier.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
          ⭐ RECOMMENDED
        </div>
      )}

      <div className="mb-4">
        <div className={`inline-block px-3 py-1 ${tier.bgColor} ${tier.textColor} text-xs font-bold rounded-full mb-3`}>
          {tier.tagline}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-5 leading-relaxed">{tier.description}</p>

      <ul className="space-y-2.5 mb-6">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
        tier.recommended
          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-200'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Pilih {tier.name}
      </button>
    </div>
  );
}

function ForWhomSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="untuk-siapa" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-warm-100 text-warm-500 text-sm font-medium rounded-full mb-4">
            Untuk Segala Momen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kapanpun, Untuk Siapapun
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Buatmu cocok untuk berbagai momen spesial dalam hidupmu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((example, index) => (
            <ExampleCard key={index} example={example} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleCard({ example, index }: { example: typeof examples[0], index: number }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl mb-3">{example.emoji}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{example.occasion}</h3>
      <p className="text-sm text-gray-600">{example.description}</p>
    </div>
  );
}

function ValuePropSection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-brand-50 via-purple-50 to-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih Buatmu?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Bukan sekadar website. Ini adalah cara baru untuk menyampaikan perasaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              emoji="🎨"
              title="Dirancang Personal"
              description="Setiap halaman dibuat berdasarkan bahan dari kamu. Nama, cerita, foto — semuanya personal."
            />
            <ValueCard
              emoji="💫"
              title="Pengalaman Emosional"
              description="Bukan sekadar teks. Ada alur, transisi, dan visual yang membuat penerima merasakan sesuatu."
            />
            <ValueCard
              emoji="🔗"
              title="Mudah Dibagikan"
              description="Cukup kirim link. Penerima bisa langsung membuka dan mengalami kejutanmu kapan saja."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ emoji, title, description }: { emoji: string, title: string, description: string }) {
  return (
    <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function CTASection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-purple-600 to-brand-700 p-8 sm:p-12 lg:p-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="text-4xl mb-6">💝</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Siap Membuat Kejutan?
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Jadikan momen spesial lebih berkesan. Mulai dari Rp10.000,
              kamu sudah bisa memberikan pengalaman digital yang personal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#paket" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-600 font-bold rounded-full hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Pilih Paket Sekarang
              </a>
              <a href="https://wa.me/" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-bold text-xl">Buatmu.id</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#cara-kerja" className="hover:text-white transition-colors">Cara Kerja</a>
            <a href="#paket" className="hover:text-white transition-colors">Paket</a>
            <a href="#untuk-siapa" className="hover:text-white transition-colors">Momen</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.74a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© 2025 Buatmu.id — Digital Surprise Experience</p>
          <p className="mt-1 text-xs text-gray-600">Buat momen spesial jadi lebih berkesan ✨</p>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ValuePropSection />
      <TiersSection />
      <ForWhomSection />
      <CTASection />
      <Footer />
    </div>
  );
}
