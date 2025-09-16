import { Card, CardContent } from "@/components/ui/card"
import { Scan, Shield, Upload, Users, AlertCircle, Archive } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "OCR-based Data Extraction",
    description: "Advanced optical character recognition extracts text from certificates with 99.9% accuracy.",
  },
  {
    icon: Shield,
    title: "Blockchain-backed Authenticity",
    description: "New certificates are secured with immutable blockchain technology for future verification.",
  },
  {
    icon: Upload,
    title: "Bulk Upload for Institutions",
    description: "Universities can upload thousands of records simultaneously with our enterprise tools.",
  },
  {
    icon: Users,
    title: "Secure Government Dashboards",
    description: "Dedicated portals for government authorities with advanced analytics and reporting.",
  },
  {
    icon: AlertCircle,
    title: "Alerts & Blacklisting System",
    description: "Real-time notifications and automated blacklisting of fraudulent institutions and certificates.",
  },
  {
    icon: Archive,
    title: "Legacy Certificate Support",
    description: "Works with both old paper certificates and new digital credentials seamlessly.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Key <span className="text-secondary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive tools designed to detect fraud, ensure authenticity, and protect institutional integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
