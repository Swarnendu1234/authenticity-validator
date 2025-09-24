"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, RefreshCw, HelpCircle, Download, Loader2 } from "lucide-react"

interface VerificationResult {
  status: 'PASS' | 'FAIL'
  confidence: number
  extractedFields: {
    name: string
    marks: string
  }
  message: string
}

interface VerificationResultsProps {
  result: VerificationResult
  fileName: string
  onRetry: () => void
  onNewUpload: () => void
}

export function VerificationResults({ result, fileName, onRetry, onNewUpload }: VerificationResultsProps) {
  const isSuccess = result.status === 'PASS'
  const [loadingStates, setLoadingStates] = useState({
    download: false,
    support: false,
    retry: false,
    newUpload: false
  })

  const setLoading = (key: keyof typeof loadingStates, value: boolean) => {
    setLoadingStates(prev => ({ ...prev, [key]: value }))
  }
  
  // Log verification result for auditing
  console.log('AUDIT LOG:', {
    timestamp: new Date().toISOString(),
    fileName,
    status: result.status,
    confidence: result.confidence,
    extractedFields: result.extractedFields,
    message: result.message
  })

  const handleDownloadReport = async () => {
    setLoading('download', true)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const report = {
      fileName,
      verificationStatus: result.status,
      confidence: result.confidence,
      extractedFields: result.extractedFields,
      timestamp: new Date().toISOString(),
      message: result.message
    }
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `verification-report-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    setLoading('download', false)
  }

  return (
    <div className="space-y-6" role="region" aria-label="Verification results">
      {/* Status Header */}
      <Card className={`border-2 ${isSuccess ? 'border-green-500 bg-green-50/50' : 'border-red-500 bg-red-50/50'}`}>
        <CardContent className="p-8 text-center">
          <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
            isSuccess ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {isSuccess ? (
              <CheckCircle className="h-8 w-8 text-green-600" />
            ) : (
              <XCircle className="h-8 w-8 text-red-600" />
            )}
          </div>
          
          <h2 className={`text-2xl font-bold mb-2 ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
            {isSuccess ? 'Document Verified' : 'Verification Failed'}
          </h2>
          
          <p className={`text-lg mb-4 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {result.message}
          </p>
          
          <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <span>Confidence Score:</span>
            <span className={`font-bold ${
              result.confidence > 80 ? 'text-green-600' : 
              result.confidence > 50 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {result.confidence}%
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Document Details */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Document Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-muted/30 rounded-lg">
              <div className="text-sm text-muted-foreground">File Name</div>
              <div className="font-medium break-all">{fileName}</div>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg">
              <div className="text-sm text-muted-foreground">Status</div>
              <div className={`font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                {result.status}
              </div>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg">
              <div className="text-sm text-muted-foreground">Processed</div>
              <div className="font-medium">{new Date().toLocaleString()}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extracted Fields */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Extracted Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Student Name</div>
              <div className="font-medium">{result.extractedFields.name}</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Marks</div>
              <div className="font-medium">{result.extractedFields.marks}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Guidance and Next Steps */}
      {!isSuccess && (
        <Alert>
          <HelpCircle className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <p className="font-medium">What to do next:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Ensure you're uploading the correct document</li>
                <li>Check that the document is clear and not corrupted</li>
                <li>Verify the student information matches our database records</li>
                <li>Contact support if you believe this is an error</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {isSuccess && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700">
            <div className="space-y-2">
              <p className="font-medium">Verification successful!</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Document authenticity confirmed</li>
                <li>All fields match database records</li>
                <li>Result has been logged for audit purposes</li>
                <li>You can download the verification report below</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button 
          onClick={async () => {
            setLoading('newUpload', true)
            await new Promise(resolve => setTimeout(resolve, 300))
            onNewUpload()
            setLoading('newUpload', false)
          }} 
          size="lg"
          disabled={loadingStates.newUpload}
        >
          {loadingStates.newUpload ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
          Upload New Document
        </Button>
        
        {!isSuccess && (
          <Button 
            onClick={async () => {
              setLoading('retry', true)
              await new Promise(resolve => setTimeout(resolve, 300))
              onRetry()
              setLoading('retry', false)
            }} 
            variant="outline" 
            size="lg"
            disabled={loadingStates.retry}
          >
            {loadingStates.retry ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-2" />}
            Retry Verification
          </Button>
        )}
        
        <Button 
          onClick={handleDownloadReport} 
          variant="outline" 
          size="lg"
          disabled={loadingStates.download}
        >
          {loadingStates.download ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Download className="h-4 w-4 mr-2" />}
          Download Report
        </Button>
        

      </div>

      {/* Support Contact */}
      <Card className="bg-muted/30">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            If you have questions about this verification result or need technical support
          </p>
          <Button 
            onClick={async () => {
              setLoading('support', true)
              await new Promise(resolve => setTimeout(resolve, 300))
              
              const subject = encodeURIComponent('Document Verification Support Request')
              const body = encodeURIComponent(`Hello,\n\nI need help with document verification.\n\nFile: ${fileName}\nStatus: ${result.status}\nConfidence: ${result.confidence}%\nTimestamp: ${new Date().toISOString()}\n\nPlease assist me.\n\nThank you.`)
              window.open(`mailto:swarnendumajumdert2007@gmail.com?subject=${subject}&body=${body}`)
              
              setLoading('support', false)
            }}
            variant="outline"
            disabled={loadingStates.support}
          >
            {loadingStates.support ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <HelpCircle className="h-4 w-4 mr-2" />}
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}