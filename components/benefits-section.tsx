import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Building2, Award } from "lucide-react"

const benefits = [
  {
    icon: Briefcase,
    title: "Employers",
    subtitle: "Hire with Confidence",
    description:
      "Eliminate the risk of hiring candidates with fake credentials. Verify degrees instantly and make informed hiring decisions.",
    color: "text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    subtitle: "Protect Institutional Reputation",
    description:
      "Safeguard your institution's credibility by preventing degree fraud and maintaining the value of your certifications.",
    color: "text-purple-600",
  },
  {
    icon: Building2,
    title: "Government",
    subtitle: "Ensure Transparency",
    description:
      "Maintain integrity in government schemes, admissions, and public sector hiring with verified academic credentials.",
    color: "text-green-600",
  },
  {
    icon: Award,
    title: "Students",
    subtitle: "Safeguard Your Achievements",
    description:
      "Protect your legitimate academic achievements from being devalued by fraudulent certificates in the market.",
    color: "text-orange-600",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Benefits for <span className="text-primary">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our platform serves multiple stakeholders in the academic ecosystem, providing value to each.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="font-medium text-primary text-sm">{benefit.subtitle}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
