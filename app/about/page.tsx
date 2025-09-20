import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Users, Globe, Award, Eye, Clock, Target, CheckCircle, ArrowRight, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Global Shield Protection</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Founded on the principles of precision, discretion, and unwavering commitment to client safety, Global
            Shield Protection has established itself as the premier choice for elite security services worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">Our Story</h2>
              <div className="w-16 h-1 bg-black mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Global Shield Protection was established with a singular mission: to provide unparalleled close
                  protection services to high-net-worth individuals, celebrities, executives, and diplomats who require
                  the highest level of security and discretion.
                </p>
                <p>
                  Our founding team, comprised of elite professionals from military special forces and intelligence
                  agencies, recognized the need for a security company that could operate seamlessly across
                  international borders while maintaining the utmost confidentiality and professionalism.
                </p>
                <p>
                  Today, we are trusted by 50+ VIP clients worldwide, providing comprehensive security solutions that
                  adapt to the unique challenges of modern threats while preserving our clients' privacy and lifestyle.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero-security-team.jpg"
                alt="Professional security team"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Our Foundation</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide world-class close protection services that ensure our clients' safety, security, and peace
                  of mind while maintaining absolute discretion and professionalism in all operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in bespoke security solutions, setting the standard for excellence in close
                  protection and risk management across all industries and geographical locations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, discretion, excellence, and unwavering commitment to client safety. We operate with the
                  highest ethical standards and maintain absolute confidentiality in all client relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Our Track Record</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-black mb-2">4+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600 font-medium">VIP Clients Protected</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-black mb-2">25+</div>
              <div className="text-gray-600 font-medium">Countries Operated</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-black mb-2">100%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Elite Team Excellence</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our operatives are carefully selected from the world's most elite military and intelligence units,
              ensuring unparalleled expertise and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Military Trained Personnel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elite personnel with proven military and security backgrounds from specialized units and law
                  enforcement agencies worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Intelligence Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Former intelligence officers with extensive experience in threat assessment, surveillance, and
                  counter-intelligence operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Continuous Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular advanced training in close protection techniques, emergency medical response, and threat
                  mitigation strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">International Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-lingual operatives with extensive international experience and cultural awareness for global
                  operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Vetted Personnel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive background checks and security clearances ensuring the highest levels of trust and
                  reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">24/7 Availability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock operational capability with rapid deployment teams ready for immediate response
                  worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      

      {/* Client Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* UHNWI Testimonial */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed italic">
                  "Really impressed with your professionalism and the quality of your work. They did also mention your
                  attire and the way you handled things on the job, which they appreciated."
                </p>
                <div className="text-sm text-gray-500 mb-4 italic">- PA of an UHNWI</div>

                <div className="border-t pt-4">
                  <p className="text-gray-600 mb-4 leading-relaxed italic">"Very Professional"</p>
                  <div className="text-sm text-gray-500 mb-4 italic">- HNWI</div>
                </div>

                <div className="font-medium text-black">Ultra High Net Worth Individual & PA</div>
                <div className="text-gray-500 text-sm">Verified Clients</div>
              </CardContent>
            </Card>

            {/* Chauffeur Company Testimonial */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "A selection of top experienced drivers from United International Chauffeurs, Scotland had the
                  pleasure of working closely with Global Shield Ltd on a 4 day VIP visit to Scotland by a prominent
                  Middle Eastern businessman, his accompanying family and entourage at the end of June 2025. A
                  thoroughly enjoyable experience for the driving team working closely with such a consummate
                  professional team. We look forward to working with them again in the future."
                </p>
                <div className="font-medium text-black">United International Chauffeurs, Scotland</div>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Global Shield Difference</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our distinguished clientele and experience the peace of mind that comes with world-class protection
            services.
          </p>
          <Link href="/request">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
              Schedule Your Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
