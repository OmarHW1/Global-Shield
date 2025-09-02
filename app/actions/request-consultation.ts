"use server"

type MiniConsultationResponse = {
  success: boolean
  message: string
  data?: Record<string, string>
}

export async function submitMiniConsultation(
  prevState: MiniConsultationResponse | null,
  formData: FormData | Record<string, any>,
): Promise<MiniConsultationResponse> {
  try {
    console.log("[v0] Data type check:", typeof formData, formData.constructor.name)

    let fullName: string, email: string, phone: string, serviceType: string, urgency: string, additionalInfo: string

    if (formData instanceof FormData) {
      // Traditional FormData submission
      fullName = String(formData.get("fullName") || "").trim()
      email = String(formData.get("email") || "").trim()
      phone = String(formData.get("phone") || "").trim()
      serviceType = String(formData.get("serviceType") || "").trim()
      urgency = String(formData.get("urgency") || "").trim()
      additionalInfo = String(formData.get("additionalInfo") || "").trim()
    } else if (formData && typeof formData === "object") {
      // Object from useActionState
      fullName = String(formData.fullName || "").trim()
      email = String(formData.email || "").trim()
      phone = String(formData.phone || "").trim()
      serviceType = String(formData.serviceType || "").trim()
      urgency = String(formData.urgency || "").trim()
      additionalInfo = String(formData.additionalInfo || "").trim()
    } else {
      console.log("[v0] Invalid data object received:", formData)
      return {
        success: false,
        message: "Invalid form data received. Please try again.",
      }
    }

    const source = "hero-mini"

    console.log("[v0] Extracted form data:", { fullName, email, phone, serviceType, urgency })

    if (!fullName || !email) {
      return {
        success: false,
        message: "Please provide your full name and a valid email address.",
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      }
    }

    // Normally you'd send an email or store to a DB here
    console.log("Mini Request Consultation:", {
      fullName,
      email,
      phone,
      serviceType,
      urgency,
      additionalInfo,
      source,
      submittedAt: new Date().toISOString(),
    })

    // Simulate brief latency
    await new Promise((r) => setTimeout(r, 500))

    return {
      success: true,
      message: "✅ Your consultation request has been submitted. We'll contact you shortly.",
      data: { fullName, email, phone, serviceType, urgency, source },
    }
  } catch (error) {
    console.error("[v0] Error in submitMiniConsultation:", error)
    return {
      success: false,
      message: "An error occurred while submitting your request. Please try again.",
    }
  }
}
