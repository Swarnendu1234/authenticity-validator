# Document Verification Microservice

## Overview
This is a Document Verification microservice UI/assistant that validates academic documents using OCR and database comparison.

## Canonical Test Files
Two test files exist in the `backend/test/` folder:

1. **CLASSXCERTIFICATE.pdf** (Valid Document)
   - Contains: Swarnendu Majumder, 89.1
   - Status: PASS
   - Message: "You uploaded document is correct. Somosto kichu sekhane perfect ache."

2. **ClassXMarksheet(1).pdf** (Invalid Document)  
   - Contains: Invalid data
   - Status: FAIL
   - Message (Bangla): "Tomar name and marks amader database er sathe milche na — ei document fake."

## Verification Process

### 1. OCR Processing
- Extracts name and marks fields from uploaded document
- Provides confidence score (0-100%)
- Shows live scanning animation with field highlighting

### 2. Database Comparison
- Compares extracted fields with student database records
- Matching is case-insensitive and trimmed
- Validates both name and marks fields

### 3. Result Generation
- PASS: Document is authentic and matches database
- FAIL: Document is fake or doesn't match records
- Provides appropriate messaging in English/Bangla

## Features

### Futuristic Verification Animation
- OCR beam scanning effects
- Live scanning grid overlay
- Real-time field highlighting
- Confidence meter (0-100%)
- Accessible screen-reader updates

### Accessibility
- Screen-reader friendly text updates
- ARIA labels and live regions
- Keyboard navigation support
- High contrast visual indicators

### Audit Logging
- Logs verification results
- Records OCR-extracted fields
- Tracks confidence scores
- Timestamps all operations

### User Experience
- Clear microcopy for all states
- Friendly guidance on failures
- Retry and support actions
- Downloadable verification reports

## Technical Implementation

### Components
- `VerificationAnimation`: Handles the scanning process
- `VerificationResults`: Displays results and next steps
- `VerificationService`: Backend logic for OCR and comparison

### Database Schema
```typescript
{
  "john-doe": {
    name: "Swarnendu Majumder",
    marks: "89.1",
    documentHash: "valid-certificate-hash"
  }
}
```

### API Flow
1. File upload → OCR processing
2. Field extraction → Database lookup
3. Comparison → Result generation
4. Audit logging → User notification

## Usage

1. Upload a document (PDF, JPG, PNG)
2. Watch the verification animation
3. Review the results
4. Download verification report
5. Take appropriate next steps

## Error Handling
- Invalid file formats
- OCR processing failures
- Database connection issues
- Network timeouts
- Corrupted documents

## Security Features
- End-to-end encryption
- Secure file processing
- No data sharing
- Audit trail maintenance
- Government-grade security standards

---
Made by Swarnendu Majumder
