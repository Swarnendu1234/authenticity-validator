"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, CheckCircle, Loader2 } from "lucide-react"
import { VerificationAnimation } from "@/components/verification-animation"
import { VerificationResults } from "@/components/verification-results"
import { FileUploadZone } from "@/components/file-upload-zone"

interface VerificationResult {
  status: 'PASS' | 'FAIL'
  confidence: number
  extractedFields: {
    name: string
    marks: string
  }
  message: string
}

export default function VerifyPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null)
  const [startLoading, setStartLoading] = useState(false)

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }

  const handleClearFile = () => {
    setSelectedFile(null)
  }

  const startVerification = async () => {
    if (selectedFile) {
      setStartLoading(true)
      await new Promise(resolve => setTimeout(resolve, 500))
      setIsVerifying(true)
      setVerificationResult(null)
      setStartLoading(false)
    }
  }

  const handleVerificationComplete = (result: VerificationResult) => {
    setVerificationResult(result)
    setIsVerifying(false)
  }

  const handleRetry = () => {
    setIsVerifying(true)
    setVerificationResult(null)
  }

  const handleNewUpload = () => {
    setSelectedFile(null)
    setIsVerifying(false)
    setVerificationResult(null)
  }

  // Show verification animation if processing
  if (isVerifying && selectedFile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute top-4 right-4 text-sm text-muted-foreground opacity-60">
          <div>Team Hack Spire – Smart India Hackathon 2025 </div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-4xl py-20">
          <VerificationAnimation
            onComplete={handleVerificationComplete}
            fileName={selectedFile.name}
          />
        </div>
      </div>
    )
  }

  // Show results if verification is complete
  if (verificationResult && selectedFile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute top-4 right-4 text-sm text-muted-foreground opacity-60">
          <div>Team Hack Spire – Smart India Hackathon 2025 </div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-4xl py-20">
          <VerificationResults
            result={verificationResult}
            fileName={selectedFile.name}
            onRetry={handleRetry}
            onNewUpload={handleNewUpload}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="absolute top-4 right-4 text-sm text-muted-foreground opacity-60">
        <div>Team Hack Spire – Smart India Hackathon 2025 </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-4xl py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Upload Your Academic Document for Verification
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Supported formats: PDF, JPG, PNG | Max size: 10MB</p>
        </div>

        <FileUploadZone
          onFileSelect={handleFileSelect}
          selectedFile={selectedFile}
          onClearFile={handleClearFile}
        />

        {selectedFile && (
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="px-8"
              onClick={startVerification}
              disabled={startLoading}
            >
              {startLoading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
              Start Verification
            </Button>
          </div>
        )}

        {/* Security Notice */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
          <Lock className="h-4 w-4" />
          <span>Your documents are encrypted and processed securely. We do not share your data.</span>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">End-to-End Encrypted</h3>
            <p className="text-sm text-muted-foreground">Your documents are protected with military-grade encryption</p>
          </Card>

          <Card className="text-center p-6">
            <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Blockchain Secured</h3>
            <p className="text-sm text-muted-foreground">Verification results are immutably recorded on blockchain</p>
          </Card>

          <Card className="text-center p-6">
            <Lock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Government Grade</h3>
            <p className="text-sm text-muted-foreground">Meets the highest security standards for institutional use</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
