import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-20 lg:py-32">
      <div className="absolute top-4 right-4 text-sm text-muted-foreground opacity-60">
        <div>Made by HackSpire</div>
        <div>Lead Developer: Swarnendu Majumder</div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Verify Academic Credentials with <span className="text-primary">Trust</span> &{" "}
                <span className="text-secondary">Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                AI + Blockchain powered system to detect fake degrees, tampered certificates, and forged records —
                protecting institutions, employers, and students.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/verify">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Request Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Instant Verification</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Blockchain Secured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-5 w-5 text-secondary" />
                <span>Government Grade</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-2xl border">
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full p-3">
                <Shield className="h-8 w-8" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Certificate Verified</h3>
                    <p className="text-sm text-muted-foreground">Authentic • Blockchain Secured</p>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Institution:</span>
                    <span className="font-medium">University of Excellence</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Degree:</span>
                    <span className="font-medium">Master of Science</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-secondary font-medium">✓ Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
