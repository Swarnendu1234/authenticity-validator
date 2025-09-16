"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FileText, Edit3, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PreviewPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [extractedData, setExtractedData] = useState({
    name: "John Michael Smith",
    rollNumber: "CS2019001",
    certificateId: "MIT-CS-2023-001",
    institution: "Massachusetts Institute of Technology",
    degree: "Master of Science in Computer Science",
    year: "2023",
    grade: "A+ (9.2/10.0)",
    issueDate: "June 15, 2023",
  })

  const handleInputChange = (field: string, value: string) => {
    setExtractedData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-6xl py-20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/verify">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Upload
            </Button>
          </Link>
          <div className="h-6 w-px bg-border" />
          <h1 className="text-3xl font-bold">Document Preview & Verification</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Document Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Uploaded Document
              </CardTitle>
              <CardDescription>
                AI has automatically extracted the following information from your document
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-6 border-2 border-dashed border-muted-foreground/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-20 bg-red-100 rounded-lg mx-auto flex items-center justify-center">
                    <FileText className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">MIT_Degree_Certificate.pdf</p>
                    <p className="text-sm text-muted-foreground">2.4 MB • PDF Document</p>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    OCR Processing Complete
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Extracted Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Extracted Information</CardTitle>
                  <CardDescription>Review and confirm the details below before verification</CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                  <Edit3 className="h-4 w-4 mr-2" />
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={extractedData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted/50 rounded border">{extractedData.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="rollNumber">Roll Number</Label>
                  {isEditing ? (
                    <Input
                      id="rollNumber"
                      value={extractedData.rollNumber}
                      onChange={(e) => handleInputChange("rollNumber", e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted/50 rounded border">{extractedData.rollNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="institution">Institution</Label>
                {isEditing ? (
                  <Input
                    id="institution"
                    value={extractedData.institution}
                    onChange={(e) => handleInputChange("institution", e.target.value)}
                  />
                ) : (
                  <p className="mt-1 p-2 bg-muted/50 rounded border">{extractedData.institution}</p>
                )}
              </div>

              <div>
                <Label htmlFor="degree">Degree/Program</Label>
                {isEditing ? (
                  <Input
                    id="degree"
                    value={extractedData.degree}
                    onChange={(e) => handleInputChange("degree", e.target.value)}
                  />
                ) : (
                  <p className="mt-1 p-2 bg-muted/50 rounded border">{extractedData.degree}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Graduation Year</Label>
                  {isEditing ? (
                    <Input
                      id="year"
                      value={extractedData.year}
                      onChange={(e) => handleInputChange("year", e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted/50 rounded border">{extractedData.year}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="grade">Grade/CGPA</Label>
                  {isEditing ? (
                    <Input
                      id="grade"
                      value={extractedData.grade}
                      onChange={(e) => handleInputChange("grade", e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted/50 rounded border">{extractedData.grade}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="certificateId">Certificate ID</Label>
                  {isEditing ? (
                    <Input
                      id="certificateId"
                      value={extractedData.certificateId}
                      onChange={(e) => handleInputChange("certificateId", e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted/50 rounded border">{extractedData.certificateId}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="issueDate">Issue Date</Label>
                  {isEditing ? (
                    <Input
                      id="issueDate"
                      value={extractedData.issueDate}
                      onChange={(e) => handleInputChange("issueDate", e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 p-2 bg-muted/50 rounded border">{extractedData.issueDate}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" size="lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Upload Different Document
          </Button>
          <Link href="/verify/progress">
            <Button size="lg" className="px-8">
              Proceed to Verification
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Confidence Indicators */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">OCR Confidence Levels</CardTitle>
            <CardDescription>AI confidence in extracted data accuracy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">98%</div>
                <div className="text-sm text-muted-foreground">Name</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">95%</div>
                <div className="text-sm text-muted-foreground">Institution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">87%</div>
                <div className="text-sm text-muted-foreground">Certificate ID</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">92%</div>
                <div className="text-sm text-muted-foreground">Dates</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
