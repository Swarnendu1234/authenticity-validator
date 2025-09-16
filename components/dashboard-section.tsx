import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, Users, FileX } from "lucide-react"

export function DashboardSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Advanced <span className="text-primary">Analytics Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive insights into verification trends, fraud detection patterns, and institutional performance
            metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Fraud Detection Trends</h3>
                    <div className="text-sm text-muted-foreground">Last 30 days</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileX className="h-5 w-5 text-red-600" />
                        <span className="font-medium">Forged Certificates Detected</span>
                      </div>
                      <div className="text-2xl font-bold text-red-600">247</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        <span className="font-medium">Suspicious Patterns</span>
                      </div>
                      <div className="text-2xl font-bold text-yellow-600">89</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Blacklisted Institutions</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">12</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                    <h3 className="font-semibold">Verification Stats</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Verifications</span>
                      <span className="font-bold">1,24,567</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Success Rate</span>
                      <span className="font-bold text-secondary">98.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Response Time</span>
                      <span className="font-bold">2.3s</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Recent Alerts</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                      <div className="text-sm">
                        <div className="font-medium text-red-900">High-risk certificate detected</div>
                        <div className="text-red-600">2 minutes ago</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div className="text-sm">
                        <div className="font-medium text-yellow-900">Unusual verification pattern</div>
                        <div className="text-yellow-600">15 minutes ago</div>
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
