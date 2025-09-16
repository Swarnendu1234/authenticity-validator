import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 encryption standards.",
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    description: "Secure access controls with MFA for all administrative and institutional accounts.",
  },
  {
    icon: Eye,
    title: "Privacy Compliance",
    description: "Full compliance with GDPR, India's DPDP Act, and other international privacy regulations.",
  },
  {
    icon: FileCheck,
    title: "Blockchain Validation",
    description: "Immutable blockchain records ensure certificate authenticity cannot be tampered with.",
  },
]

export function SecuritySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Built for <span className="text-primary">Security</span>, Designed for{" "}
            <span className="text-secondary">Trust</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Enterprise-grade security measures protect sensitive academic data while ensuring compliance with global
            privacy standards and regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-center">
              <div className="bg-primary/10 rounded-full p-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Government-Grade Security</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our platform meets the highest security standards required by government institutions and educational
              bodies. Regular security audits and penetration testing ensure your data remains protected against
              evolving threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
