"use client"

import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Shield,
  Clock,
  Phone,
  Mail,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  Calendar,
  FileText,
  Lock,
} from "lucide-react"

export default function RequestPage() {
  const [requestType, setRequestType] = useState<"consultation" | "immediate">("consultation")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    location: "",
    serviceType: "",
    urgency: "",
    startDate: "",
    duration: "",
    teamSize: "",
    details: "",
    confidentiality: false,
    terms: false,
    bookingType: "self",
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "request"
        }),
      });

      const data = await res.json();

      if (data.success) {
        setBookingConfirmed(true);
      } else {
        console.error('Error:', data.error);
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error('Network error:', err);
      alert("Failed to send message. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-white pt-16">
        <section className="py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Request Submitted</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Card className="shadow-xl border-0">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  {requestType === "consultation" ? "Consultation Request Submitted" : "Protection Request Submitted"}
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  Your {requestType === "consultation" ? "consultation" : "protection"} request has been submitted successfully. We'll contact you shortly.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        1
                      </div>
                      <p className="text-sm">You'll receive a confirmation email within 5 minutes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <p className="text-sm">
                        A security specialist will call you to confirm details and answer any questions
                        {formData.urgency === "immediate" ? " within 15 minutes" : " within 2-24 hours"}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <p className="text-sm">
                        {requestType === "consultation"
                          ? "Your consultation will be conducted at the scheduled time with our security experts"
                          : "We'll deploy protection services according to your requirements"
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>Reference ID:</strong> GSP-{Date.now().toString().slice(-6)}
                  </p>
                  <p className="text-sm text-gray-600">
                    For urgent matters, call our 24/7 hotline: <strong>+44 (0) 7497 580 732</strong>
                  </p>
                </div>

                <div className="flex gap-4 justify-center mt-8">
                  <Button
                    onClick={() => {
                      setBookingConfirmed(false)
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        company: "",
                        position: "",
                        location: "",
                        serviceType: "",
                        urgency: "",
                        startDate: "",
                        duration: "",
                        teamSize: "",
                        details: "",
                        confidentiality: false,
                        terms: false,
                        bookingType: "self",
                      })
                    }}
                    variant="outline"
                    size="lg"
                  >
                    Book Another Service
                  </Button>
                  <Link href="/">
                    <Button size="lg" className="bg-black hover:bg-gray-800">
                      Return to Homepage
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  const selectTriggerClasses = `
    mt-1 bg-white text-black !border-black
    hover:!border-black
    focus:outline-none focus:!ring-1 focus:!ring-black focus:!border-black
    data-[state=open]:!border-black
    [&>svg]:!text-black [&>svg]:opacity-100
  `

  const selectValueClasses = `!text-black data-[placeholder]:!text-black`

  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Request Protection Services</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you need immediate protection or want to schedule a consultation, our team is ready to provide
            world-class security solutions tailored to your needs.
          </p>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 rounded-lg p-1 flex">
              <button
                onClick={() => setRequestType("consultation")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${requestType === "consultation" ? "bg-white text-black" : "text-gray-300 hover:text-white"
                  }`}
              >
                <Calendar className="w-4 h-4 inline mr-2" />
                Schedule Consultation
              </button>
              <button
                onClick={() => setRequestType("immediate")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${requestType === "immediate" ? "bg-red-600 text-white" : "text-gray-300 hover:text-white"
                  }`}
              >
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                Immediate Protection
              </button>
            </div>
          </div>
        </div>
      </section>

      {requestType === "immediate" && (
        <section className="bg-red-600 text-white py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center space-x-4">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-medium">
                For immediate threats or emergencies, call our 24/7 hotline: +44 (0) 7497 580 732
              </span>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    {requestType === "consultation" ? (
                      <>
                        <Calendar className="w-6 h-6 mr-3" />
                        Schedule Your Consultation
                      </>
                    ) : (
                      <>
                        <Shield className="w-6 h-6 mr-3 text-red-600" />
                        Request Immediate Protection
                      </>
                    )}
                  </CardTitle>
                  <p className="text-gray-600">
                    {requestType === "consultation"
                      ? "Complete this form to schedule a confidential consultation with our security experts."
                      : "Fill out this form for urgent protection needs. Our rapid response team will contact you within 15 minutes."}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="bookingType">Are you booking on behalf of a client? *</Label>
                          <Select onValueChange={(value) => handleInputChange("bookingType", value)}>
                            <SelectTrigger className={selectTriggerClasses}>
                              <SelectValue placeholder="Select booking type" className={selectValueClasses} />
                            </SelectTrigger>
                            <SelectContent sideOffset={4} className="bg-white text-black border border-gray-200 shadow-lg">
                              <SelectItem value="self">No, booking for myself</SelectItem>
                              <SelectItem value="client">Yes, booking on behalf of a client</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Company (Optional)</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="position">Position (Optional)</Label>
                          <Input
                            id="position"
                            value={formData.position}
                            onChange={(e) => handleInputChange("position", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Service Requirements</h3>

                      <div>
                        <Label htmlFor="location">Primary Location *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="City, Country"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                            <SelectTrigger className={selectTriggerClasses}>
                              <SelectValue placeholder="Select service type" className={selectValueClasses} />
                            </SelectTrigger>
                            <SelectContent sideOffset={4} className="bg-white text-black border border-gray-200 shadow-lg">
                              <SelectItem value="close-protection">Close Protection</SelectItem>
                              <SelectItem value="residential-security">Residential Security</SelectItem>
                              <SelectItem value="travel-security">Travel Security</SelectItem>
                              <SelectItem value="event-security">Event Security</SelectItem>
                              <SelectItem value="executive-protection">Executive Protection</SelectItem>
                              <SelectItem value="celebrity-protection">Celebrity Protection</SelectItem>
                              <SelectItem value="secure-transport">Secure Transport</SelectItem>
                              <SelectItem value="intelligence-surveillance">Intelligence &amp; Surveillance</SelectItem>
                              <SelectItem value="comprehensive">Comprehensive Package</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="urgency">Urgency Level *</Label>
                          <Select
                            onValueChange={(value) => handleInputChange("urgency", value)}
                            defaultValue={requestType === "immediate" ? "immediate" : ""}
                          >
                            <SelectTrigger className={selectTriggerClasses}>
                              <SelectValue placeholder="Select urgency" className={selectValueClasses} />
                            </SelectTrigger>
                            <SelectContent sideOffset={4} className="bg-white text-black border border-gray-200 shadow-lg">
                              <SelectItem value="immediate">Immediate (Within 24 hours)</SelectItem>
                              <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                              <SelectItem value="standard">Standard (Within 2 weeks)</SelectItem>
                              <SelectItem value="planning">Planning (1+ months)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="startDate">Preferred Start Date</Label>
                          <Input
                            id="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={(e) => handleInputChange("startDate", e.target.value)}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="duration">Duration</Label>
                          <Select onValueChange={(value) => handleInputChange("duration", value)}>
                            <SelectTrigger className={selectTriggerClasses}>
                              <SelectValue placeholder="Select duration" className={selectValueClasses} />
                            </SelectTrigger>
                            <SelectContent sideOffset={4} className="bg-white text-black border border-gray-200 shadow-lg">
                              <SelectItem value="1-day">1 Day</SelectItem>
                              <SelectItem value="1-week">1 Week</SelectItem>
                              <SelectItem value="1-month">1 Month</SelectItem>
                              <SelectItem value="3-months">3 Months</SelectItem>
                              <SelectItem value="6-months">6 Months</SelectItem>
                              <SelectItem value="1-year">1 Year</SelectItem>
                              <SelectItem value="ongoing">Ongoing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="teamSize">Team Size Required</Label>
                          <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                            <SelectTrigger className={selectTriggerClasses}>
                              <SelectValue placeholder="Select team size" className={selectValueClasses} />
                            </SelectTrigger>
                            <SelectContent sideOffset={4} className="bg-white text-black border border-gray-200 shadow-lg">
                              <SelectItem value="1">1 Operative</SelectItem>
                              <SelectItem value="2">2 Operatives</SelectItem>
                              <SelectItem value="3-5">3–5 Operatives</SelectItem>
                              <SelectItem value="6-10">6–10 Operatives</SelectItem>
                              <SelectItem value="10+">10+ Operatives</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Additional Information</h3>
                      <div>
                        <Label htmlFor="details">Specific Requirements &amp; Threat Assessment</Label>
                        <Textarea
                          id="details"
                          value={formData.details}
                          onChange={(e) => handleInputChange("details", e.target.value)}
                          placeholder="Please describe your specific security needs, any known threats, special requirements, or other relevant information..."
                          rows={6}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="confidentiality"
                          checked={formData.confidentiality}
                          onCheckedChange={(checked) => handleInputChange("confidentiality", checked as boolean)}
                        />
                        <Label htmlFor="confidentiality" className="text-sm leading-relaxed">
                          I understand that all information provided will be treated with the highest level of
                          confidentiality and will only be shared with authorized Global Shield Protection personnel on
                          a need-to-know basis.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          I agree to the{" "}
                          <Link href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                            Privacy Policy
                          </Link>
                          , and consent to being contacted by Global Shield Protection regarding my security
                          requirements.
                        </Label>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className={`w-full font-medium text-white ${requestType === "immediate" ? "bg-red-600 hover:bg-red-700" : "bg-black hover:bg-gray-800"
                          }`}
                        disabled={!formData.confidentiality || !formData.terms || isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : requestType === "consultation" ? (
                          <>
                            Submit Consultation Request
                            <ArrowRight className="ml-2 w-5 h-5 text-white" />
                          </>
                        ) : (
                          <>
                            Request Immediate Protection
                            <Shield className="ml-2 w-5 h-5 text-white" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                      <span className="font-semibold text-red-800">24/7 Emergency Hotline</span>
                    </div>
                    <p className="text-red-700 font-bold text-lg">+44 (0) 7497 580 732</p>
                    <p className="text-red-600 text-sm mt-1">For immediate threats or life-threatening situations</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium">General Inquiries</p>
                        <p className="text-gray-600 text-sm">info@globalshield.co.uk</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium">Typical Response</p>
                        <p className="text-gray-600 text-sm">2–48 hours depending on urgency</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Our Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-sm">Initial Assessment</p>
                        <p className="text-gray-600 text-xs">Risk evaluation and needs analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-sm">Proposal & Planning</p>
                        <p className="text-gray-600 text-xs">Customized security solution design</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-sm">Team Deployment</p>
                        <p className="text-gray-600 text-xs">Operative assignment and briefing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-sm">Active Protection</p>
                        <p className="text-gray-600 text-xs">Continuous security coverage</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Security Assurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">End-to-end encryption</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Strict confidentiality protocols</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Background-verified personnel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Comprehensive security packages</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Global Shield Protection</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by high-profile clients worldwide for our discretion, professionalism, and proven track record.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Elite Team</h3>
              <p className="text-gray-600 text-sm">Military and intelligence trained professionals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">Worldwide coverage and local expertise</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">Round-the-clock support and response</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Total Discretion</h3>
              <p className="text-gray-600 text-sm">Absolute confidentiality guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}