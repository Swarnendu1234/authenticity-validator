// Mock database for student records
const studentDatabase = {
  "swarnendu-majumder": {
    name: "Swarnendu Majumder",
    marks: "89.1",
    documentHash: "valid-certificate-hash"
  },
  "jane-smith": {
    name: "Jane Smith",
    marks: "92%",
    documentHash: "valid-certificate-hash-2"
  }
}

interface OCRResult {
  name: string
  marks: string
  confidence: number
}

interface VerificationResult {
  status: 'PASS' | 'FAIL'
  confidence: number
  extractedFields: {
    name: string
    marks: string
  }
  message: string
  auditLog: {
    timestamp: string
    fileName: string
    ocrResult: OCRResult
    databaseMatch: boolean
    finalDecision: string
  }
}

export class VerificationService {
  // Simulate OCR processing
  static async performOCR(fileName: string): Promise<OCRResult> {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock OCR results based on canonical files
    if (fileName === "CLASSXCERTIFICATE.pdf") {
      return {
        name: "Swarnendu Majumder",
        marks: "89.1",
        confidence: 98
      }
    } else if (fileName === "ClassXMarksheet(1).pdf") {
      return {
        name: "Invalid Name",
        marks: "Invalid Marks",
        confidence: 15
      }
    } else {
      // For other files, return low confidence results
      return {
        name: "Unknown",
        marks: "Unknown",
        confidence: 25
      }
    }
  }

  // Compare extracted data with database
  static compareWithDatabase(ocrResult: OCRResult): boolean {
    const normalizedName = ocrResult.name.toLowerCase().trim().replace(/\s+/g, '-')
    const studentRecord = studentDatabase[normalizedName as keyof typeof studentDatabase]

    if (!studentRecord) {
      return false
    }

    // Case-insensitive, trimmed comparison
    const nameMatch = studentRecord.name.toLowerCase().trim() === ocrResult.name.toLowerCase().trim()
    const marksMatch = studentRecord.marks.toLowerCase().trim() === ocrResult.marks.toLowerCase().trim()

    return nameMatch && marksMatch
  }

  // Main verification function
  static async verifyDocument(fileName: string): Promise<VerificationResult> {
    try {
      // Step 1: Perform OCR
      const ocrResult = await this.performOCR(fileName)

      // Step 2: Compare with database
      const databaseMatch = this.compareWithDatabase(ocrResult)

      // Step 3: Determine final result
      const isValid = databaseMatch && ocrResult.confidence > 80

      // Step 4: Generate appropriate message
      let message: string
      if (isValid) {
        message = "You uploaded the document correctly. Everything matches perfectly."
      } else {
        message = "Your name and marks do not match our database — this document appears fake."
      }

      // Step 5: Create audit log
      const auditLog = {
        timestamp: new Date().toISOString(),
        fileName,
        ocrResult,
        databaseMatch,
        finalDecision: isValid ? 'PASS' : 'FAIL'
      }

      // Log for auditing (in production, this would go to a proper logging service)
      console.log('VERIFICATION AUDIT:', auditLog)

      return {
        status: isValid ? 'PASS' : 'FAIL',
        confidence: ocrResult.confidence,
        extractedFields: {
          name: ocrResult.name,
          marks: ocrResult.marks
        },
        message,
        auditLog
      }

    } catch (error) {
      console.error('Verification error:', error)

      return {
        status: 'FAIL',
        confidence: 0,
        extractedFields: {
          name: "Error",
          marks: "Error"
        },
        message: "Verification process encountered an error. Please try again.",
        auditLog: {
          timestamp: new Date().toISOString(),
          fileName,
          ocrResult: { name: "Error", marks: "Error", confidence: 0 },
          databaseMatch: false,
          finalDecision: 'FAIL'
        }
      }
    }
  }
}

// Export types for use in components
export type { VerificationResult, OCRResult }