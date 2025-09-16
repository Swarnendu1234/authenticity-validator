"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Database, Shield, Search, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

interface VerificationStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  status: "pending" | "processing" | "completed" | "failed"
  duration: number
}

export default function ProgressPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const steps: VerificationStep[] = [
    {
      id: "document-analysis",
      title: "Document Analysis",
      description: "Analyzing document structure and security features",
      icon: <FileText className="h-5 w-5" />,
      status: "completed",
      duration: 2000,
    },
    {
      id: "institutional-lookup",
      title: "Institutional Database Lookup",
      description: "Verifying with MIT academic records system",
      icon: <Database className="h-5 w-5" />,
      status: "processing",
      duration: 4000,
    },
    {
      id: "blockchain-verification",
      title: "Blockchain Verification",
      description: "Cross-referencing with blockchain certificate registry",
      icon: <Shield className="h-5 w-5" />,
      status: "pending",
      duration: 3000,
    },
    {
      id: "fraud-detection",
      title: "AI Fraud Detection",
      description: "Running advanced fraud detection algorithms",
      icon: <Search className="h-5 w-5" />,
      status: "pending",
      duration: 2500,
    },
  ]

  const [verificationSteps, setVerificationSteps] = useState(steps)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true)
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setVerificationSteps((prev) => {
        const updated = [...prev]
        const processingIndex = updated.findIndex((step) => step.status === "processing")

        if (processingIndex !== -1) {
          updated[processingIndex].status = "completed"
          if (processingIndex + 1 < updated.length) {
            updated[processingIndex + 1].status = "processing"
          }
        }

        return updated
      })
    }, 3000)

    return () => clearInterval(stepTimer)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-emerald-600"
      case "processing":
        return "text-blue-600"
      case "failed":
        return "text-red-600"
      default:
        return "text-muted-foreground"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Completed</Badge>
      case "processing":
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Processing...</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-4xl py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Verifying Your Document</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Please wait while we verify your academic certificate with institutional databases
          </p>

          {/* Overall Progress */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {isComplete && (
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200">
                <CheckCircle className="h-4 w-4" />
                <span className="font-medium">Verification Complete</span>
              </div>
            </div>
          )}
        </div>

        {/* Verification Steps */}
        <div className="space-y-4 mb-8">
          {verificationSteps.map((step, index) => (
            <Card
              key={step.id}
              className={`transition-all duration-300 ${
                step.status === "processing" ? "ring-2 ring-blue-200 bg-blue-50/30" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-full ${
                      step.status === "completed"
                        ? "bg-emerald-100 text-emerald-600"
                        : step.status === "processing"
                          ? "bg-blue-100 text-blue-600"
                          : step.status === "failed"
                            ? "bg-red-100 text-red-600"
                            : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : step.status === "processing" ? (
                      <Clock className="h-5 w-5 animate-spin" />
                    ) : (
                      step.icon
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-semibold ${getStatusColor(step.status)}`}>{step.title}</h3>
                      {getStatusBadge(step.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Document Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Document Being Verified</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="font-medium">MIT_Degree_Certificate.pdf</p>
                <p className="text-sm text-muted-foreground">
                  John Michael Smith • Master of Science in Computer Science • 2023
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="text-center">
          {isComplete ? (
            <Link href="/verify/results">
              <Button size="lg" className="px-8">
                View Verification Results
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" size="lg" disabled>
              <Clock className="h-4 w-4 mr-2 animate-spin" />
              Verification in Progress...
            </Button>
          )}
        </div>

        {/* Estimated Time */}
        {!isComplete && (
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">Estimated time remaining: 2-3 minutes</p>
          </div>
        )}
      </div>
    </div>
  )
}
