"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Download,
  Share2,
  FileText,
  Shield,
  Calendar,
  Building,
  User,
  GraduationCap,
  Hash,
  Clock,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

type VerificationResult = "authentic" | "forged" | "review"

export default function ResultsPage() {
  // For demo purposes, you can change this to 'forged' or 'review' to see different states
  const [result] = useState<VerificationResult>("authentic")

  const getResultConfig = (result: VerificationResult) => {
    switch (result) {
      case "authentic":
        return {
          icon: <CheckCircle className="h-12 w-12 text-emerald-600" />,
          title: "Document Verified Successfully",
          subtitle: "This document is authentic and matches institutional records",
          badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
          badgeText: "✓ Authentic",
          cardBorder: "border-emerald-200",
          bgColor: "bg-emerald-50/30",
        }
      case "forged":
        return {
          icon: <XCircle className="h-12 w-12 text-red-600" />,
          title: "Document Could Not Be Verified",
          subtitle: "This document could not be verified. Please contact the issuing institution.",
          badgeColor: "bg-red-100 text-red-700 border-red-200",
          badgeText: "✗ Unverified",
          cardBorder: "border-red-200",
          bgColor: "bg-red-50/30",
        }
      case "review":
        return {
          icon: <AlertTriangle className="h-12 w-12 text-amber-600" />,
          title: "Manual Review Required",
          subtitle: "Verification requires manual inspection. Our team will notify you within 24 hours.",
          badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
          badgeText: "⚠ Under Review",
          cardBorder: "border-amber-200",
          bgColor: "bg-amber-50/30",
        }
    }
  }

  const config = getResultConfig(result)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-4xl py-20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/verify">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              New Verification
            </Button>
          </Link>
          <div className="h-6 w-px bg-border" />
          <h1 className="text-3xl font-bold">Verification Results</h1>
        </div>

        {/* Main Result Card */}
        <Card className={`mb-8 ${config.cardBorder} ${config.bgColor}`}>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">{config.icon}</div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{config.title}</h2>
                <p className="text-muted-foreground text-lg">{config.subtitle}</p>
              </div>

              <Badge className={`${config.badgeColor} text-lg px-4 py-2`}>{config.badgeText}</Badge>

              {result === "authentic" && (
                <div className="flex justify-center gap-4 pt-4">
                  <Button size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Results
                  </Button>
                </div>
              )}

              {result === "forged" && (
                <div className="flex justify-center gap-4 pt-4">
                  <Button variant="outline" size="lg">
                    Contact Institution
                  </Button>
                  <Button variant="outline" size="lg">
                    Upload Different Document
                  </Button>
                </div>
              )}

              {result === "review" && (
                <div className="flex justify-center pt-4">
                  <Button variant="outline" size="lg">
                    <Clock className="h-4 w-4 mr-2" />
                    Track Review Status
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Document Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Document Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Name
                </span>
                <span className="font-medium">John Michael Smith</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Institution
                </span>
                <span className="font-medium">MIT</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Degree
                </span>
                <span className="font-medium">Master of Science</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Year
                </span>
                <span className="font-medium">2023</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Hash className="h-4 w-4" />
                  Certificate ID
                </span>
                <span className="font-medium font-mono text-sm">MIT-CS-2023-001</span>
              </div>
            </CardContent>
          </Card>

          {/* Verification Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Verification Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Document Analysis</span>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Passed
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Institutional Database</span>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Blockchain Registry</span>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Confirmed
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">AI Fraud Detection</span>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Clean
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Verification ID:</span>
                  <span className="font-mono">VER-2024-001234</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Verified On:</span>
                  <span>March 15, 2024 at 2:34 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Processing Time:</span>
                  <span>2 minutes 18 seconds</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Notice */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-semibold">Verification Security</h3>
                <p className="text-sm text-muted-foreground">
                  This verification result is cryptographically signed and recorded on our blockchain ledger. The
                  verification ID can be used to independently verify this result at any time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
