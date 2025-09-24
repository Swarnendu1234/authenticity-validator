"use client"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, FileText, AlertCircle, X } from "lucide-react"

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void
  selectedFile: File | null
  onClearFile: () => void
}

export function FileUploadZone({ onFileSelect, selectedFile, onClearFile }: FileUploadZoneProps) {
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateFile = useCallback((file: File): string | null => {
    // Check file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
    if (!allowedTypes.includes(file.type)) {
      return "Please upload a PDF, JPG, or PNG file."
    }

    // Check file size (10MB limit)
    const maxSize = 10 * 1024 * 1024 // 10MB in bytes
    if (file.size > maxSize) {
      return "File size must be less than 10MB."
    }

    // Check if filename contains suspicious characters
    if (!/^[a-zA-Z0-9\s\-_().]+$/.test(file.name)) {
      return "Filename contains invalid characters."
    }

    return null
  }, [])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    setError(null)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const validationError = validateFile(file)
      
      if (validationError) {
        setError(validationError)
      } else {
        onFileSelect(file)
      }
    }
  }, [validateFile, onFileSelect])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const validationError = validateFile(file)
      
      if (validationError) {
        setError(validationError)
      } else {
        onFileSelect(file)
      }
    }
  }, [validateFile, onFileSelect])

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-8">
          <div
            className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
              dragActive
                ? "border-primary bg-primary/5 scale-105"
                : selectedFile
                  ? "border-emerald-500 bg-emerald-50/50"
                  : error
                    ? "border-red-500 bg-red-50/50"
                    : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            role="button"
            tabIndex={0}
            aria-label="File upload area"
          >
            <input
              type="file"
              id="file-upload"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileSelect}
              aria-describedby="file-upload-description"
            />

            <div className="space-y-4">
              {selectedFile ? (
                <>
                  <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-700">File Selected</h3>
                    <p className="text-sm text-muted-foreground break-all">{selectedFile.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(selectedFile.size)}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      onClearFile()
                    }}
                    className="mt-2"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Remove File
                  </Button>
                </>
              ) : (
                <>
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
                    error ? 'bg-red-100' : 'bg-primary/10'
                  }`}>
                    {error ? (
                      <AlertCircle className="h-8 w-8 text-red-600" />
                    ) : (
                      <Upload className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {error ? 'Upload Error' : 'Drag and drop your document here'}
                    </h3>
                    <p className="text-muted-foreground" id="file-upload-description">
                      {error ? error : 'or click to browse files'}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="text-center text-sm text-muted-foreground">
        <p>Supported formats: PDF, JPG, PNG • Maximum size: 10MB</p>
        <p className="mt-1">For best results, ensure your document is clear and well-lit</p>
      </div>
    </div>
  )
}