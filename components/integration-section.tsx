import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, BarChart3, Shield, Zap } from "lucide-react"

export function IntegrationSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Seamless <span className="text-secondary">Institution Integration</span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Connect your ERP, upload bulk records, and secure your students' future with tamper-proof credentials.
                Our enterprise-grade integration ensures minimal disruption to your existing workflows.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">ERP Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Analytics Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Secure API Access</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Real-time Sync</span>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8 py-6">
              Schedule Integration Demo
            </Button>
          </div>

          <div className="relative">
            <Card className="bg-card shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">University Admin Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Certificates Issued</span>
                        <span className="text-2xl font-bold text-secondary">12,847</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Verification Requests</span>
                        <span className="text-2xl font-bold text-primary">3,421</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">98.7%</div>
                        <div className="text-xs text-green-600">Valid</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-red-600">1.2%</div>
                        <div className="text-xs text-red-600">Forged</div>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-yellow-600">0.1%</div>
                        <div className="text-xs text-yellow-600">Review</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
