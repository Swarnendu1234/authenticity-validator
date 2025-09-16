import { Card, CardContent } from "@/components/ui/card"
import { Upload, Scan, CheckCircle } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Certificate",
    description: "Upload PDF, scan, or manually input certificate details through our secure platform.",
  },
  {
    step: "02",
    icon: Scan,
    title: "AI + OCR Verification",
    description: "Our AI extracts details and cross-references against institutional databases and blockchain records.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Instant Authenticity Result",
    description: "Get immediate results: Valid ✅ / Forged ❌ / Needs Review ⚠️ with detailed verification report.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our streamlined 3-step process makes credential verification fast, accurate, and reliable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
