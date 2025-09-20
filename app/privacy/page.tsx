import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Eye, Database, AlertTriangle } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Your privacy and data security are fundamental to our security services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">Last Updated: July 2025</span>
              </div>
              <p className="text-blue-700 text-sm">
                This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-6 h-6 mr-3" />
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We collect information necessary to provide professional security services:</p>
                <h4 className="font-semibold">Personal Information:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name, contact details, and identification information</li>
                  <li>Professional and personal background relevant to security needs</li>
                  <li>Travel itineraries and location information</li>
                  <li>Emergency contact information</li>
                  <li>Security preferences and requirements</li>
                </ul>
                <h4 className="font-semibold">Security-Related Information:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Threat assessments and risk profiles</li>
                  <li>Security incident reports</li>
                  <li>Surveillance and monitoring data (when authorized)</li>
                  <li>Access control and security system data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-6 h-6 mr-3" />
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Your information is used exclusively for legitimate security purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conducting risk assessments and threat analysis</li>
                  <li>Providing personalized security services</li>
                  <li>Coordinating with law enforcement when necessary</li>
                  <li>Emergency response and crisis management</li>
                  <li>Improving our security services and protocols</li>
                  <li>Compliance with legal and regulatory requirements</li>
                </ul>
                <p>We do not use your information for marketing purposes without explicit consent.</p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-6 h-6 mr-3" />
                  3. Data Protection and Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We implement military-grade security measures to protect your data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-to-end encryption for all communications</li>
                  <li>Secure, access-controlled data storage systems</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Background-verified personnel with security clearances</li>
                  <li>Strict need-to-know access protocols</li>
                  <li>ISO 27001 compliant information security management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We maintain strict confidentiality and only share information when:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Required by law or legal process</li>
                  <li>Necessary for emergency response or life safety</li>
                  <li>Authorized by you in writing</li>
                  <li>Essential for coordinated security operations with trusted partners</li>
                </ul>
                <p>We never sell, rent, or trade your personal information to third parties.</p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We retain information only as long as necessary for security purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Active service data: Duration of service plus 7 years</li>
                  <li>Security incident reports: 10 years or as required by law</li>
                  <li>Threat intelligence: As long as relevant to ongoing security</li>
                  <li>Financial records: 7 years as required by law</li>
                </ul>
                <p>Data is securely destroyed when no longer needed.</p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of information (subject to security and legal requirements)</li>
                  <li>Object to processing in certain circumstances</li>
                  <li>Data portability where applicable</li>
                </ul>
                <p>Note: Some rights may be limited due to legitimate security interests and legal obligations.</p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. International Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Given the global nature of security services, your information may be transferred internationally. We
                  ensure appropriate safeguards are in place, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Binding corporate rules</li>
                  <li>Encryption and secure transmission protocols</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Cookies and Website Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our website uses essential cookies for functionality and security. We do not use tracking cookies for
                  advertising purposes.
                </p>
                <p>Website analytics are anonymized and used solely for improving our services.</p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>For privacy-related questions or to exercise your rights, contact our Data Protection Officer:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Global Shield Protection Limited</strong>
                  </p>
                  <p>
                    <strong>Data Protection Officer</strong>
                  </p>
                  <p>Email: info@globalshield.com</p>
                  <p>Phone: +44 (0) 749 758 0732</p>
                  <p>Address: London, United Kingdom</p>
                </div>
                <p className="text-sm text-gray-600">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you
                  believe your data protection rights have been violated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
