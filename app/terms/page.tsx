import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Scale, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Please read these terms carefully before using our security services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="font-semibold text-yellow-800">Last Updated: July 2025</span>
              </div>
              <p className="text-yellow-700 text-sm">
                These terms are effective immediately and govern your use of Global Shield Protection services.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-6 h-6 mr-3" />
                  1. Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By engaging Global Shield Protection Limited ("Company," "we," "us," or "our") for security services,
                  you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). These Terms
                  constitute a legally binding agreement between you and Global Shield Protection Limited.
                </p>
                <p>
                  If you do not agree to these Terms, you may not use our services. We reserve the right to modify these
                  Terms at any time, and such modifications will be effective immediately upon posting.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  2. Services Provided
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Global Shield Protection provides professional security services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Close protection and personal security</li>
                  <li>Residential and commercial security</li>
                  <li>Travel security and risk assessment</li>
                  <li>Event security management</li>
                  <li>Intelligence and surveillance services</li>
                  <li>Secure transportation services</li>
                  <li>Security consulting and risk assessment</li>
                </ul>
                <p>
                  All services are provided by licensed, trained, and vetted security professionals in accordance with
                  applicable laws and regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. Client Obligations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Clients agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information regarding security requirements</li>
                  <li>Disclose any known threats, risks, or relevant circumstances</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Cooperate with security personnel and follow their professional guidance</li>
                  <li>Provide safe working conditions for our personnel</li>
                  <li>Pay all fees and charges as agreed upon</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Confidentiality and Non-Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We maintain strict confidentiality regarding all client information, security arrangements, and
                  operational details. Our personnel are bound by comprehensive non-disclosure agreements.
                </p>
                <p>
                  Clients agree to maintain confidentiality regarding our operational methods, personnel details, and
                  security procedures.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  While we strive to provide the highest level of security services, no security system or service can
                  guarantee complete protection against all risks. Our liability is limited to the fees paid for
                  services rendered.
                </p>
                <p>
                  We shall not be liable for any indirect, incidental, special, or consequential damages arising from
                  the use of our services.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Payment terms are specified in individual service agreements. Generally:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consultation fees are due upon completion</li>
                  <li>Ongoing services require advance payment or approved credit terms</li>
                  <li>Emergency services may require immediate payment authorization</li>
                  <li>Late payments may incur additional charges</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Either party may terminate services with appropriate notice as specified in the service agreement.
                  Emergency termination may be necessary for safety or legal reasons.
                </p>
                <p>Upon termination, all confidentiality obligations remain in effect indefinitely.</p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  These Terms are governed by the laws of England and Wales. Any disputes shall be resolved through the
                  courts of England and Wales or through binding arbitration as mutually agreed.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>For questions regarding these Terms of Service, please contact:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Global Shield Protection Limited</strong>
                  </p>
                  <p>Email: info.globalshield@gmail.com</p>
                  <p>Phone: +44 (0) 749 758 0732</p>
                  <p>Address: London, United Kingdom</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
