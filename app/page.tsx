import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { IntegrationSection } from "@/components/integration-section"
import { SecuritySection } from "@/components/security-section"
import { DashboardSection } from "@/components/dashboard-section"
import { InstitutionalClosingSection } from "@/components/institutional-closing-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <IntegrationSection />
      <SecuritySection />
      <DashboardSection />
      <InstitutionalClosingSection />
      <Footer />
    </main>
  )
}
