import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Shield, Users } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/3 to-transparent transform skew-y-12"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Secure Academic Integrity.
            <span className="block text-emerald-400">Protect Your Institution.</span>
          </h2>
          <p className="text-xl text-blue-100 text-pretty leading-relaxed">
            Partner with industry leaders to establish uncompromising standards in credential verification. Deploy
            enterprise-grade authentication technology that safeguards your organization's reputation and ensures every
            degree meets the highest standards of authenticity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 shadow-lg"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">500+ Global Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">99.9% Accuracy Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
