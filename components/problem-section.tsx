import { Card, CardContent } from "@/components/ui/card"
import { Clock, AlertTriangle, Building, Database } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Manual Verification Delays",
    description: "Traditional verification processes take weeks, causing hiring delays and administrative bottlenecks.",
  },
  {
    icon: AlertTriangle,
    title: "Forged Seals & Signatures",
    description: "Sophisticated forgeries are increasingly difficult to detect with manual inspection methods.",
  },
  {
    icon: Building,
    title: "Fake Institutions & Courses",
    description: "Diploma mills and non-accredited institutions create convincing but worthless credentials.",
  },
  {
    icon: Database,
    title: "Lack of Centralized Systems",
    description: "No unified database makes cross-verification between institutions nearly impossible.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            The Rising Challenge of <span className="text-destructive">Fake Degrees</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Academic fraud is a growing threat that undermines trust in educational institutions and puts employers at
            risk of hiring unqualified candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
