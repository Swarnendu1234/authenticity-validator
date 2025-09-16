import { Shield } from "lucide-react"

export function InstitutionalClosingSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100" />

      {/* Subtle shield watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <Shield className="w-96 h-96 text-slate-600" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Reputation is earned. We help preserve it.
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed text-balance">
            Safeguarding the integrity of universities, employers, and public trust.
          </p>
        </div>
      </div>
    </section>
  )
}
