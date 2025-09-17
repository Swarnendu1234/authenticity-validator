"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, FileText, Shield, Lock, CheckCircle } from "lucide-react"

export default function VerifyPage() {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="absolute top-4 right-4 text-sm text-muted-foreground opacity-60">
        Made by Swarnendu Majumder
      </div>
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-4xl py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Upload Your Academic Document for Verification
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Supported formats: PDF, JPG, PNG | Max size: 10MB</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                dragActive
                  ? "border-primary bg-primary/5 scale-105"
                  : selectedFile
                    ? "border-emerald-500 bg-emerald-50/50"
                    : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="file-upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
              />

              <div className="space-y-4">
                {selectedFile ? (
                  <>
                    <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <FileText className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-700">File Selected</h3>
                      <p className="text-sm text-muted-foreground">{selectedFile.name}</p>
                      <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Drag and drop your document here</h3>
                      <p className="text-muted-foreground">or click to browse files</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {selectedFile && (
              <div className="mt-6 flex justify-center">
                <Button size="lg" className="px-8">
                  Start Verification
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

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
