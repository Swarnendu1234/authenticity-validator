"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Scan, Eye, Database, Shield } from "lucide-react"
import { VerificationService } from "@/lib/verification-service"

interface VerificationAnimationProps {
  onComplete: (result: VerificationResult) => void
  fileName: string
}

interface VerificationResult {
  status: 'PASS' | 'FAIL'
  confidence: number
  extractedFields: {
    name: string
    marks: string
  }
  message: string
}

export function VerificationAnimation({ onComplete, fileName }: VerificationAnimationProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [confidence, setConfidence] = useState(0)
  const [scanningField, setScanningField] = useState("")
  const [extractedFields, setExtractedFields] = useState({ name: "", marks: "" })

  const steps = [
    { icon: Scan, label: "OCR Processing", description: "Extracting text from document" },
    { icon: Eye, label: "Field Detection", description: "Identifying name and marks fields" },
    { icon: Database, label: "Database Comparison", description: "Matching with student records" },
    { icon: Shield, label: "Verification Complete", description: "Generating final result" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2
        
        // Update current step based on progress
        if (newProgress >= 25 && currentStep < 1) setCurrentStep(1)
        if (newProgress >= 50 && currentStep < 2) setCurrentStep(2)
        if (newProgress >= 75 && currentStep < 3) setCurrentStep(3)
        
        // Simulate field scanning
        if (newProgress >= 20 && newProgress < 40) {
          setScanningField("name")
          setExtractedFields(prev => ({ ...prev, name: "Extracting..." }))
        }
        if (newProgress >= 40 && newProgress < 60) {
          setScanningField("marks")
          setExtractedFields(prev => ({ ...prev, marks: "Extracting..." }))
        }
        
        // Update confidence meter
        setConfidence(Math.min(newProgress, 100))
        
        if (newProgress >= 100) {
          clearInterval(timer)
          
          // Perform actual verification using the service
          VerificationService.verifyDocument(fileName)
            .then(result => {
              setExtractedFields(result.extractedFields)
              setTimeout(() => onComplete(result), 1000)
            })
            .catch(error => {
              console.error('Verification failed:', error)
              const errorResult: VerificationResult = {
                status: 'FAIL',
                confidence: 0,
                extractedFields: { name: "Error", marks: "Error" },
                message: "Verification process encountered an error. Please try again."
              }
              setTimeout(() => onComplete(errorResult), 1000)
            })
        }
        
        return newProgress
      })
    }, 100)

    return () => clearInterval(timer)
  }, [currentStep, fileName, onComplete])

  return (
    <div className="space-y-6" role="region" aria-label="Document verification in progress">
      {/* Progress Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Verifying Document</h2>
        <p className="text-muted-foreground" aria-live="polite">
          {steps[currentStep]?.description}
        </p>
      </div>

      {/* Main Progress Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground" aria-live="polite">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Confidence Meter */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Confidence Score</span>
              <span 
                className={`text-sm font-bold ${confidence > 80 ? 'text-green-600' : confidence > 50 ? 'text-yellow-600' : 'text-red-600'}`}
                aria-live="polite"
              >
                {Math.round(confidence)}%
              </span>
            </div>
            <Progress 
              value={confidence} 
              className={`h-2 ${confidence > 80 ? '[&>div]:bg-green-500' : confidence > 50 ? '[&>div]:bg-yellow-500' : '[&>div]:bg-red-500'}`}
            />
          </div>
        </CardContent>
      </Card>

      {/* Processing Steps */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === currentStep
              const isCompleted = index < currentStep
              
              return (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isActive ? 'bg-primary/10 border border-primary/20' : 
                    isCompleted ? 'bg-green-50 border border-green-200' : 
                    'bg-muted/30'
                  }`}
                  role="status"
                  aria-current={isActive ? "step" : undefined}
                >
                  <div className={`p-2 rounded-full ${
                    isActive ? 'bg-primary text-primary-foreground animate-pulse' :
                    isCompleted ? 'bg-green-500 text-white' :
                    'bg-muted'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{step.label}</div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                  {isActive && (
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Extracted Fields */}
      {(extractedFields.name || extractedFields.marks) && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-4">Extracted Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-3 rounded-lg border ${scanningField === 'name' ? 'border-primary bg-primary/5 animate-pulse' : 'border-muted'}`}>
                <div className="text-sm text-muted-foreground">Student Name</div>
                <div className="font-medium" aria-live="polite">{extractedFields.name || "—"}</div>
              </div>
              <div className={`p-3 rounded-lg border ${scanningField === 'marks' ? 'border-primary bg-primary/5 animate-pulse' : 'border-muted'}`}>
                <div className="text-sm text-muted-foreground">Marks</div>
                <div className="font-medium" aria-live="polite">{extractedFields.marks || "—"}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Screen reader updates */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Document verification at {Math.round(progress)}% completion. 
        Current step: {steps[currentStep]?.label}. 
        Confidence score: {Math.round(confidence)}%.
      </div>
    </div>
  )
}