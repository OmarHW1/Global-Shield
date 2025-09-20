import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Shield,
  Clock,
  Eye,
  Award,
  Camera,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  AlertTriangle,
  Users,
  FileText,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IntelligenceSurveillancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/surveillance-operations.jpg"
            alt="Professional surveillance operations"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Intelligence & Surveillance Services</h1>
            <div className="w-24 h-1 bg-white mb-8" />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional threat assessment and intelligence gathering services for comprehensive security planning.
              Our surveillance teams provide critical intelligence to identify and neutralize potential threats before
              they materialize.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  Request Intelligence
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium bg-transparent"
                >
                  Threat Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Professional Intelligence Operations</h2>
              <div className="w-24 h-1 bg-black mb-8" />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our intelligence and surveillance services provide the critical information needed to make informed
                security decisions. We combine traditional surveillance techniques with modern technology to deliver
                comprehensive threat assessments and ongoing intelligence support.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our experienced operatives, drawn from military intelligence and law enforcement backgrounds, conduct
                discreet investigations and surveillance operations while maintaining the highest standards of
                professionalism and legal compliance.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Licensed Investigators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Advanced Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Legal Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Confidential Reports</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/surveillance-monitoring-center.jpg"
                alt="Professional surveillance monitoring center"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Intelligence & Surveillance Solutions</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive intelligence gathering and surveillance services to support your security operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Threat Assessment",
                desc: "Comprehensive analysis of potential threats including personal, business, and environmental risk factors.",
              },
              {
                icon: Eye,
                title: "Surveillance Operations",
                desc: "Discreet surveillance services for personal security, business intelligence, and threat monitoring.",
              },
              {
                icon: Search,
                title: "Background Investigations",
                desc: "Thorough background checks on individuals, business partners, and potential security risks.",
              },
              {
                icon: Camera,
                title: "Counter-Surveillance",
                desc: "Detection and neutralization of hostile surveillance activities targeting you or your organization.",
              },
              {
                icon: FileText,
                title: "Intelligence Reports",
                desc: "Detailed intelligence briefings and threat assessments with actionable security recommendations.",
              },
              {
                icon: Zap,
                title: "Digital Intelligence",
                desc: "Online threat monitoring, social media analysis, and digital footprint assessment services.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Intelligence Applications</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Executive Protection",
                desc: "Intelligence support for close protection operations including threat identification and risk assessment.",
              },
              {
                icon: Shield,
                title: "Corporate Security",
                desc: "Business intelligence and threat monitoring for corporate executives and sensitive business operations.",
              },
              {
                icon: Eye,
                title: "Personal Security",
                desc: "Individual threat assessment and surveillance detection for high-net-worth individuals and families.",
              },
              {
                icon: AlertTriangle,
                title: "Crisis Management",
                desc: "Emergency intelligence gathering and threat assessment during security incidents and crisis situations.",
              },
            ].map((application, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black">{application.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{application.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Advanced Capabilities</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art technology and proven methodologies for comprehensive intelligence operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Surveillance",
                desc: "Advanced surveillance technology including GPS tracking, audio/video monitoring, and digital forensics capabilities.",
                features: [
                  "GPS vehicle tracking",
                  "Covert audio/video",
                  "Digital forensics",
                  "Communication monitoring",
                ],
              },
              {
                title: "Human Intelligence",
                desc: "Experienced operatives conducting physical surveillance, interviews, and undercover operations with complete discretion.",
                features: [
                  "Physical surveillance",
                  "Undercover operations",
                  "Source development",
                  "Interview techniques",
                ],
              },
              {
                title: "Analysis & Reporting",
                desc: "Professional intelligence analysis with detailed reporting and actionable recommendations for security planning.",
                features: ["Threat analysis", "Risk assessment", "Intelligence briefings", "Security recommendations"],
              },
            ].map((capability, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-black">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{capability.desc}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Intelligence Process</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to intelligence gathering ensures comprehensive and actionable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                desc: "Detailed consultation to understand your intelligence needs and define specific objectives and scope.",
              },
              {
                step: "02",
                title: "Collection Planning",
                desc: "Development of comprehensive collection strategy using appropriate technical and human intelligence methods.",
              },
              {
                step: "03",
                title: "Intelligence Gathering",
                desc: "Professional execution of surveillance and investigation operations with strict legal and ethical compliance.",
              },
              {
                step: "04",
                title: "Analysis & Reporting",
                desc: "Comprehensive analysis of collected intelligence with detailed reports and actionable security recommendations.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Why Choose Our Intelligence Services?</h2>
              <div className="w-24 h-1 bg-black mb-8" />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Expert Personnel</h3>
                    <p className="text-gray-600">
                      Former military intelligence, law enforcement, and security service professionals with proven
                      operational experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Legal Compliance</h3>
                    <p className="text-gray-600">
                      All operations conducted within strict legal frameworks with full compliance to privacy laws and
                      regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Advanced Technology</h3>
                    <p className="text-gray-600">
                      State-of-the-art surveillance equipment and digital intelligence tools for comprehensive
                      information gathering.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Rapid Response</h3>
                    <p className="text-gray-600">
                      Quick deployment capabilities for urgent intelligence requirements and emergency threat
                      assessments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-black">Request Intelligence Services</h3>
              <p className="text-gray-600 mb-6">
                Contact us for a confidential consultation to discuss your intelligence requirements and receive a
                tailored assessment proposal.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-black" />
                  <span className="text-gray-700">Available on request</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-black" />
                  <span className="text-gray-700">info@globalshieldprotection.com</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link href="/request" className="block">
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Request Intelligence
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Threat Assessment
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                All intelligence operations conducted with strict confidentiality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Related Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/close-protection">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Close Protection</h3>
                  <p className="text-gray-600 text-sm">Personal bodyguard services for high-risk individuals</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/travel-security">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Travel Security</h3>
                  <p className="text-gray-600 text-sm">International travel risk assessment and protection</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/residential-security">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Residential Security</h3>
                  <p className="text-gray-600 text-sm">Comprehensive home and property protection</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
