// components/hero-right-modules.tsx
"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"
import { submitMiniConsultation } from "@/app/actions/request-consultation"

export type HeroModuleType = "none" | "mini-request"

export function HeroRightModule({ type = "none" }: { type?: HeroModuleType }) {
  if (type === "mini-request") return <MiniRequestForm />
  return null
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
                  {/* Dark/glass trigger */}
                  <SelectTrigger className="mt-1 bg-black/30 text-white border-white/20 backdrop-blur-sm">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  {/* White dropdown when opened */}
                  <SelectContent
                    sideOffset={4}
                    className="bg-white text-black border border-gray-200 shadow-lg"
                  >
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
                  <SelectTrigger className="mt-1 bg-black/30 text-white border-white/20 backdrop-blur-sm">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent
                    sideOffset={4}
                    className="bg-white text-black border border-gray-200 shadow-lg"
                  >
                    <SelectItem value="close-protection">Close Protection</SelectItem>
                    <SelectItem value="residential-security">Residential Security</SelectItem>
                    <SelectItem value="travel-security">Travel Security</SelectItem>
                    <SelectItem value="event-security">Event Security</SelectItem>
                    <SelectItem value="executive-protection">Executive Protection</SelectItem>
                    <SelectItem value="celebrity-protection">Celebrity Protection</SelectItem>
                    <SelectItem value="secure-transport">Secure Transport</SelectItem>
                    <SelectItem value="intelligence-surveillance">
                      Intelligence &amp; Surveillance
                    </SelectItem>
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
          <>
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
              </div>
              <p className="text-[10px] text-gray-400 mt-2">
                For highly sensitive matters requiring additional security
              </p>
            </div>

            <p className="text-[11px] text-gray-400 mt-2">Encrypted. Confidential. No spam.</p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
