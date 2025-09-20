import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Clock,
  Eye,
  Award,
  Camera,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Star,
  Users,
  Mic,
  Film,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CelebrityVIPEscortPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/red-carpet-security.jpg"
            alt="Red carpet event security"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Celebrity & VIP Escort Services</h1>
            <div className="w-24 h-1 bg-white mb-8" />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discreet protection for public figures, celebrities, and high-profile individuals. Our specialized teams
              provide seamless security that preserves your public image while ensuring complete safety and privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  Request VIP Protection
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium bg-transparent"
                >
                  Confidential Consultation
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
              <h2 className="text-4xl font-bold mb-6 text-black">Elite Celebrity Protection</h2>
              <div className="w-24 h-1 bg-black mb-8" />
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our celebrity and VIP escort services are designed specifically for public figures who require the
                highest levels of discretion and professionalism. We understand the unique challenges faced by
                celebrities, from paparazzi management to fan crowd control.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our teams are trained in media-sensitive environments and work seamlessly with publicists, event
                organizers, and venue security to ensure your safety without compromising your public appearances or
                professional commitments.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Media-Trained Officers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Crowd Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Paparazzi Control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Absolute Discretion</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/paparazzi-red-carpet-event.jpg"
                alt="Paparazzi and media at celebrity event"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIP Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">VIP Protection Services</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized security services tailored to the unique needs of celebrities and high-profile individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Red Carpet Events",
                desc: "Professional security for premieres, award shows, and high-profile events with media management.",
              },
              {
                icon: Camera,
                title: "Paparazzi Management",
                desc: "Strategic crowd control and media management to maintain privacy while allowing professional photography.",
              },
              {
                icon: Users,
                title: "Fan Interaction Control",
                desc: "Safe fan meet-and-greet coordination with crowd control and personal space protection.",
              },
              {
                icon: Film,
                title: "On-Set Protection",
                desc: "Discreet security during filming, photo shoots, and production work with minimal disruption.",
              },
              {
                icon: Mic,
                title: "Public Appearances",
                desc: "Security coordination for interviews, talk shows, and public speaking engagements.",
              },
              {
                icon: Shield,
                title: "Personal Shopping",
                desc: "Secure shopping experiences with venue coordination and privacy protection in public spaces.",
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

      {/* Client Types */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Who We Protect</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Film,
                title: "Film & TV Stars",
                desc: "Actors, directors, and entertainment industry professionals requiring discreet protection during public appearances.",
              },
              {
                icon: Mic,
                title: "Musicians & Artists",
                desc: "Recording artists, performers, and creative professionals needing security for tours and public events.",
              },
              {
                icon: Star,
                title: "Social Media Influencers",
                desc: "Digital celebrities and content creators requiring protection from online threats manifesting offline.",
              },
              {
                icon: Award,
                title: "Sports Personalities",
                desc: "Professional athletes and sports figures needing security during competitions and public appearances.",
              },
            ].map((client, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <client.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-black">{client.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{client.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Specialized Capabilities</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced security capabilities designed specifically for the entertainment industry and public figures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Media Relations",
                desc: "Professional coordination with media outlets, photographers, and journalists to manage public exposure while maintaining security.",
                features: [
                  "Press coordination",
                  "Photo opportunity management",
                  "Interview security",
                  "Media escort services",
                ],
              },
              {
                title: "Event Coordination",
                desc: "Comprehensive security planning for premieres, award shows, concerts, and other high-profile entertainment events.",
                features: [
                  "Venue security assessment",
                  "Arrival/departure planning",
                  "Backstage protection",
                  "Emergency evacuation",
                ],
              },
              {
                title: "Privacy Protection",
                desc: "Advanced privacy measures to protect personal information and maintain confidentiality in all security operations.",
                features: [
                  "NDA compliance",
                  "Confidential communications",
                  "Private residence security",
                  "Family protection",
                ],
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
            <h2 className="text-4xl font-bold mb-6 text-black">Our VIP Protection Process</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A refined approach to celebrity protection that balances security with public image management.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Confidential Briefing",
                desc: "Private consultation to understand your specific security needs, schedule, and public image requirements.",
              },
              {
                step: "02",
                title: "Threat Assessment",
                desc: "Comprehensive analysis of potential risks including fan behavior, media pressure, and security vulnerabilities.",
              },
              {
                step: "03",
                title: "Team Assignment",
                desc: "Selection of specialized officers trained in celebrity protection and media-sensitive environments.",
              },
              {
                step: "04",
                title: "Seamless Protection",
                desc: "Discreet security coverage that enhances rather than restricts your professional and personal activities.",
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
              <h2 className="text-4xl font-bold mb-6 text-black">Why Celebrities Choose Global Shield?</h2>
              <div className="w-24 h-1 bg-black mb-8" />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Absolute Discretion</h3>
                    <p className="text-gray-600">
                      All team members sign comprehensive NDAs and are trained in maintaining the highest levels of
                      confidentiality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Media Expertise</h3>
                    <p className="text-gray-600">
                      Specialized training in media environments with experience managing paparazzi and public
                      appearances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Industry Experience</h3>
                    <p className="text-gray-600">
                      Extensive experience working with entertainment industry professionals, publicists, and event
                      organizers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      Adaptable security coverage that works with unpredictable schedules and last-minute changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-black">Request VIP Protection</h3>
              <p className="text-gray-600 mb-6">
                Contact us for a confidential consultation to discuss your security needs and receive a customized
                protection proposal.
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
                    Confidential Inquiry
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                All consultations are strictly confidential and protected by NDA
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
