"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { HeroModuleType } from "./hero-right-modules"

const options: { value: HeroModuleType; label: string }[] = [
  { value: "none", label: "None (hide module)" },
  { value: "global-event-protection", label: "Global Event Protection — Real-time tracking" },
  { value: "kpi-strip", label: "KPI Strip — Quick trust metrics" },
  { value: "lead-capture", label: "Lead Capture — Mini form" },
  { value: "case-study-spotlight", label: "Case Study — Spotlight" },
  { value: "mini-request", label: "Mini Request Consultation — Inline form" },
]

export default function ModulePicker() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const initial = (searchParams.get("module") as HeroModuleType) || "none"
  const [value, setValue] = useState<HeroModuleType>(initial)

  useEffect(() => {
    setValue(((searchParams.get("module") as HeroModuleType) || "none") as HeroModuleType)
  }, [searchParams])

  const selectItems = useMemo(
    () =>
      options.map((o) => (
        <SelectItem key={o.value} value={o.value}>
          {o.label}
        </SelectItem>
      )),
    [],
  )

  const updateUrl = (next: HeroModuleType) => {
    const params = new URLSearchParams(searchParams.toString())
    if (next === "none") params.delete("module")
    else params.set("module", next)
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <Label className="text-black">Preview hero module</Label>
            <p className="text-sm text-gray-600">Choose a right-side hero module to display (default hidden).</p>
          </div>
          <div className="w-full sm:w-80">
            <Select
              value={value}
              onValueChange={(v) => {
                setValue(v as HeroModuleType)
                updateUrl(v as HeroModuleType)
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a module" />
              </SelectTrigger>
              <SelectContent>{selectItems}</SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
