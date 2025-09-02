"use client"

import { useEffect, useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Calendar, MapPin, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { submitMiniConsultation } from "@/app/actions/request-consultation"

export type HeroModuleType =
  | "none"
  | "global-event-protection"
  | "kpi-strip"
  | "lead-capture"
  | "case-study-spotlight"
  | "mini-request"

export function HeroRightModule({ type = "none" }: { type?: HeroModuleType }) {
  if (type === "global-event-protection") {
    return <GlobalEventProtection />
  }
  if (type === "kpi-strip") {
    return <KpiStrip />
  }
  if (type === "lead-capture") {
    return <LeadCapture />
  }
  if (type === "case-study-spotlight") {
    return <CaseStudySpotlight />
  }
  if (type === "mini-request") {
    return <MiniRequestForm />
  }
  return null
}

function GlobalEventProtection() {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 27, seconds: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        if (seconds > 0) seconds--
        else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        } else {
          clearInterval(timer)
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <h3 className="text-2xl font-bold text-white mb-2">Global Event Protection</h3>
        <p className="text-gray-300 text-sm">Real-time security deployment tracking</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">Priority Event</span>
            </div>
            <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs font-medium rounded-full border border-red-500/30">
              Concert
            </span>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-2">Taylor Swift – Eras Tour</h4>
            <div className="flex items-center text-gray-300 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              New York, USA
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/10">
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((t) => (
                <div key={t.label}>
                  <div className="text-2xl font-bold text-white mb-1">{t.value.toString().padStart(2, "0")}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{t.label}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-red-400 text-sm font-medium">High Priority Deployment</span>
            </div>
          </div>

          <Link href="/request">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3">
              Request Immediate Protection
            </Button>
          </Link>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-white">Upcoming Events</h4>

        {[
          { title: "UFC 304", location: "Las Vegas, USA", days: 5, color: "blue" },
          { title: "World Economic Forum", location: "Davos, Switzerland", days: 9, color: "green" },
          { title: "Paris Fashion Week", location: "Paris, France", days: 13, color: "purple" },
        ].map((e) => (
          <Card
            key={e.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                      e.color === "blue"
                        ? "bg-blue-500/20 border-blue-500/30"
                        : e.color === "green"
                          ? "bg-green-500/20 border-green-500/30"
                          : "bg-purple-500/20 border-purple-500/30"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        e.color === "blue" ? "bg-blue-400" : e.color === "green" ? "bg-green-400" : "bg-purple-400"
                      }`}
                    />
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-sm">{e.title}</h5>
                    <p className="text-gray-400 text-xs">{e.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{e.days}</div>
                  <div className="text-gray-400 text-xs">Days</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="space-y-3 pt-2">
          <Button
            variant="outline"
            className="w-full border-white/30 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 mr-2" />
            View Full Event Calendar
          </Button>
          <Link href="/request">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-0 backdrop-blur-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              Emergency Response Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function KpiStrip() {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-white">4+</div>
            <div className="text-xs text-gray-300">Years</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-xs text-gray-300">VIP Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">Global</div>
            <div className="text-xs text-gray-300">Coverage</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function LeadCapture() {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
      <CardContent className="p-6">
        <h4 className="text-white font-semibold mb-2">Request a Confidential Call</h4>
        <p className="text-gray-300 text-sm mb-4">Share your email and we&apos;ll reach out within 2 hours.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert("Thanks — we’ll be in touch shortly.")
          }}
          className="flex gap-2"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-md bg-black/30 border border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <Button className="bg-white text-black hover:bg-gray-100">Send</Button>
        </form>
        <p className="text-[11px] text-gray-400 mt-2">Encrypted. Confidential. No spam.</p>
      </CardContent>
    </Card>
  )
}

function CaseStudySpotlight() {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-40">
          <Image
            src="/placeholder.svg?height=160&width=600"
            alt="Case study spotlight"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-white mr-2" />
            <span className="text-xs text-gray-300">Featured Case Study</span>
          </div>
          <h4 className="text-white font-semibold">World Tour Security — Zero Incidents</h4>
          <p className="text-gray-300 text-sm mt-2">
            Coordinated multi-country protection for a global artist across 15 nations and 6 months.
          </p>
          <Link href="/case-studies" className="inline-block mt-4">
            <Button variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10">
              Read Case Study
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function MiniRequestForm() {
  // Server Action state
  const [state, formAction, isPending] = useActionState(submitMiniConsultation, { success: false, message: "" })

  return (
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
      <CardContent className="p-6">
        <h4 className="text-white font-semibold mb-1">Request a Consultation</h4>
        <p className="text-gray-300 text-sm mb-4">Confidential. Discreet. Response within 2 hours.</p>

        {state?.success ? (
          <div className="flex items-start gap-3 rounded-md border border-white/20 bg-white/10 p-3 text-white">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
            <p className="text-sm">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="fullName" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Jane Doe"
                  required
                  className="mt-1 bg-black/30 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  className="mt-1 bg-black/30 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="phone" className="text-white">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 ..."
                  className="mt-1 bg-black/30 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Label className="text-white">Urgency</Label>
                <Select name="urgency">
                  <SelectTrigger className="mt-1 bg-black/30 border-white/20 text-white">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (24h)</SelectItem>
                    <SelectItem value="urgent">Urgent (1 week)</SelectItem>
                    <SelectItem value="standard">Standard (2 weeks)</SelectItem>
                    <SelectItem value="planning">Planning (1+ month)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2">
                <Label className="text-white">Service Type</Label>
                <Select name="serviceType">
                  <SelectTrigger className="mt-1 bg-black/30 border-white/20 text-white">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="close-protection">Close Protection</SelectItem>
                    <SelectItem value="residential-security">Residential Security</SelectItem>
                    <SelectItem value="travel-security">Travel Security</SelectItem>
                    <SelectItem value="event-security">Event Security</SelectItem>
                    <SelectItem value="executive-protection">Executive Protection</SelectItem>
                    <SelectItem value="celebrity-protection">Celebrity Protection</SelectItem>
                    <SelectItem value="secure-transport">Secure Transport</SelectItem>
                    <SelectItem value="intelligence-surveillance">Intelligence & Surveillance</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="additionalInfo" className="text-white">
                Additional Information
              </Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Please provide any additional details about your security requirements..."
                rows={3}
                className="mt-1 bg-black/30 border-white/20 text-white placeholder:text-gray-400 resize-none"
              />
            </div>

            <Button type="submit" disabled={isPending} className="w-full bg-white text-black hover:bg-gray-100">
              {isPending ? "Submitting..." : "Request Consultation"}
            </Button>
          </form>
        )}

        {!state?.success && (
          <div className="mt-6 pt-4 border-t border-white/20">
            <h5 className="text-white font-medium mb-3 text-sm">Secure Communications Available</h5>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Signal Messenger:</span>
                <span className="text-white">{"+44 (0) 7497 580 732"}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>WhatsApp Encrypted:</span>
                <span className="text-white">+44 (0) 7497 580 732</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>{""}</span>
                <span className="text-white">{""}</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-2">For highly sensitive matters requiring additional security</p>
          </div>
        )}
        {!state?.success && <p className="text-[11px] text-gray-400 mt-2">Encrypted. Confidential. No spam.</p>}
      </CardContent>
    </Card>
  )
}
