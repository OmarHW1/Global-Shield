import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Clock, Eye, Award, Globe, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CloseProtectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-security-team.jpg"
            alt="Professional close protection team"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Close Protection Services</h1>
            <div className="w-24 h-1 bg-white mb-8" />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Elite personal protection services for high-risk individuals, executives, and public figures. Our
              SIA-licensed close protection officers provide discreet, professional security tailored to your lifestyle
              and risk profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  Request Protection
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium bg-transparent"
                >
                  Speak to an Expert
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
              <h2 className="text-4xl font-bold mb-6 text-black">What Is Close Protection?</h2>
              <div className="w-24 h-1 bg-black mb-8" />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Close protection is the specialized practice of safeguarding high-profile individuals through
                comprehensive security measures that blend seamlessly with daily life. Our approach combines threat
                assessment, protective surveillance, and strategic planning to create an invisible shield around our
                clients.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike standard security services, close protection is intelligence-led and adaptable, adjusting to
                changing threat levels while maintaining the client's freedom of movement and privacy. Our officers are
                trained to be both protectors and facilitators, ensuring security never compromises lifestyle.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">SIA Licensed Officers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">24/7 Availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Discreet Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Global Coverage</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/vip-event-protection.jpg"
                alt="VIP client with close protection during public event"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Our Close Protection Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection solutions designed to integrate seamlessly with your daily routine and business
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Personal Protection",
                desc: "Dedicated close protection officers providing immediate physical security and threat deterrence.",
              },
              {
                icon: Eye,
                title: "Protective Surveillance",
                desc: "Advanced surveillance techniques to identify and neutralize potential threats before they materialize.",
              },
              {
                icon: Globe,
                title: "Travel Security",
                desc: "Comprehensive protection during domestic and international travel, including route planning and venue security.",
              },
              {
                icon: Users,
                title: "Team Protection",
                desc: "Scalable security teams for family members, business associates, and accompanying personnel.",
              },
              {
                icon: Clock,
                title: "Event Security",
                desc: "Specialized protection for public appearances, business meetings, and high-profile events.",
              },
              {
                icon: Award,
                title: "Risk Assessment",
                desc: "Detailed threat analysis and security planning tailored to your specific risk profile and lifestyle.",
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

      {/* Who Needs Close Protection */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Who Needs Close Protection?</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Business Executives",
                desc: "CEOs, board members, and senior executives facing corporate threats or high-profile business dealings.",
              },
              {
                title: "Celebrities & Public Figures",
                desc: "Entertainment industry professionals, athletes, and media personalities requiring privacy protection.",
              },
              {
                title: "High-Net-Worth Individuals",
                desc: "Wealthy individuals and their families facing kidnapping, extortion, or robbery threats.",
              },
              {
                title: "Government Officials",
                desc: "Diplomats, politicians, and civil servants requiring specialized protection protocols.",
              },
            ].map((client, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-black">{client.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{client.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Our Protection Process</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every protection assignment follows our proven methodology to ensure comprehensive security coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Risk Assessment",
                desc: "Comprehensive threat analysis and vulnerability assessment of your lifestyle, routine, and environment.",
              },
              {
                step: "02",
                title: "Security Planning",
                desc: "Development of tailored protection strategies, including personnel deployment and operational procedures.",
              },
              {
                step: "03",
                title: "Team Deployment",
                desc: "Assignment of qualified close protection officers matched to your specific requirements and preferences.",
              },
              {
                step: "04",
                title: "Ongoing Protection",
                desc: "Continuous security coverage with regular reviews and adjustments based on changing threat levels.",
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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Why Choose Global Shield Protection?</h2>
              <div className="w-24 h-1 bg-black mb-8" />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Elite Personnel</h3>
                    <p className="text-gray-600">
                      Our officers are recruited from military special forces, elite police units, and intelligence
                      services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Absolute Discretion</h3>
                    <p className="text-gray-600">
                      All operations are conducted under strict confidentiality agreements with complete privacy
                      protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Global Reach</h3>
                    <p className="text-gray-600">
                      International protection capabilities with local expertise in major cities worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">24/7 Response</h3>
                    <p className="text-gray-600">
                      Round-the-clock availability with rapid deployment capabilities for emergency situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-black">Request Close Protection</h3>
              <p className="text-gray-600 mb-6">
                Get a confidential consultation to discuss your security requirements and receive a tailored protection
                proposal.
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
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Related Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/secure-transport">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Secure Transport</h3>
                  <p className="text-gray-600 text-sm">Armored vehicles and secure transportation solutions</p>
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
          </div>
        </div>
      </section>
    </div>
  )
}
