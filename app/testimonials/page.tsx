import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Shield, Users, Globe, ArrowRight, Building, Eye, Lock, UserCheck } from "lucide-react"
import Link from "next/link" // Added Link import for navigation

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <div className="w-20 h-1 bg-white mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Trusted by high-profile individuals who value discretion, professionalism, and uncompromising security.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600 font-medium">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">100%</div>
              <div className="text-gray-600 font-medium">Confidentiality</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Anonymous feedback from clients who trust us with their safety and privacy.
            </p>
          </div>

          {/* Featured Anonymous Testimonial */}
          <div className="mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-gray-50 to-white">
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto text-center">
                  <Quote className="w-12 h-12 text-gray-300 mx-auto mb-6" />
                  <blockquote className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed mb-6 italic">
                    "Really impressed with your professionalism and the quality of your work. They did also mention your
                    attire and the way you handled things on the job, which they appreciated."
                  </blockquote>
                  <div className="text-lg text-gray-600 mb-4 italic">- PA of an UHNWI</div>

                  <blockquote className="text-xl font-light text-gray-800 leading-relaxed mb-6 italic border-t pt-6">
                    "Very Professional"
                  </blockquote>
                  <div className="text-lg text-gray-600 mb-6 italic">- HNWI</div>

                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-black text-black mx-1" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg text-black">Verified Clients</div>
                      <div className="text-gray-600">Ultra High Net Worth Individual & PA</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compact Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                  "A selection of top experienced drivers from United International Chauffeurs, Scotland had the
                  pleasure of working closely with Global Shield Ltd on a 4 day VIP visit to Scotland by a prominent
                  Middle Eastern businessman, his accompanying family and entourage at the end of June 2025. A
                  thoroughly enjoyable experience for the driving team working closely with such a consummate
                  professional team. We look forward to working with them again in the future."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">United International Chauffeurs, Scotland</div>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                  {"“Always on time, discreet, and professional. Exactly what we needed for our event.”"}
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Corporate Executive</div>
                    <div className="text-sm text-gray-500">Anonymous Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                  {"“They took us around London for a tour, made us feel safe, and were really nice to deal with.”"}
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Private Individual</div>
                    <div className="text-sm text-gray-500">Anonymous Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                  {"“Travelled with me for a week and blended in perfectly. Felt totally secure the whole time.”"}
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">{"Influencer"}</div>
                    <div className="text-sm text-gray-500">Anonymous Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                  {"“They made me feel safe without being intrusive. Couldn’t ask for more.”"}
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Public Figure</div>
                    <div className="text-sm text-gray-500">Anonymous Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Why Client Privacy Matters</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Absolute Confidentiality</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our clients require the highest levels of discretion. We understand that public testimonials can
                  compromise security and privacy, which is why we prioritize anonymous feedback and confidential
                  service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Discrete Operations</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Effective security often means invisible security. Our clients value our ability to provide
                  comprehensive protection without drawing attention or compromising their public image or private
                  activities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-black mb-6">Understanding High-Profile Security Testimonials</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              In the world of executive protection and celebrity security, traditional testimonials present unique
              challenges. High-profile individuals, corporate executives, government officials, and celebrities require
              security services that operate with complete discretion. Public testimonials can inadvertently reveal
              security protocols, travel patterns, or personal preferences that could be exploited by those with
              malicious intent.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Global Shield Protection understands that our clients' anonymity is paramount. Rather than seeking public
              endorsements, we focus on delivering results that speak for themselves: zero security incidents, 99.9%
              client retention, and referrals from satisfied clients who trust us with their most valuable asset—their
              safety.
            </p>

            <h4 className="text-xl font-bold text-black mb-4">The Value of Anonymous Feedback</h4>

            <p className="text-gray-700 leading-relaxed mb-6">
              Anonymous testimonials allow our clients to share their experiences without compromising their security
              posture. This approach enables us to demonstrate our effectiveness while maintaining the confidentiality
              that high-profile individuals require. Each anonymous review represents a real client who has experienced
              our services firsthand.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our commitment to client privacy extends beyond service delivery to how we handle feedback and
              testimonials. We believe that true professionalism in the security industry means putting client safety
              and privacy above marketing opportunities.
            </p>

            <h4 className="text-xl font-bold text-black mb-4">Verified Client Experiences</h4>

            <p className="text-gray-700 leading-relaxed mb-6">
              While our clients prefer anonymity, their experiences with Global Shield Protection are thoroughly
              documented and verified. We maintain detailed case studies and performance metrics that demonstrate our
              effectiveness across various security scenarios, from threat prevention to crisis management.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our reputation in the security industry is built on results, not publicity. We measure success by our
              clients' safety, their continued trust in our services, and their willingness to recommend us to others
              who require the same level of professional, discrete protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Excellence</h2>
            <div className="w-16 h-1 bg-white mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Measurable results that demonstrate our dedication to client safety and satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-black" />
              </div>
              <div className="text-3xl font-bold mb-2">5/5</div>
              <div className="text-gray-300 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-400 mt-1">Anonymous reviews</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-300 font-medium">Client Retention</div>
              <div className="text-sm text-gray-400 mt-1">Long-term partnerships</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-gray-300 font-medium">Security Incidents</div>
              <div className="text-sm text-gray-400 mt-1">Perfect track record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Experience Global Shield Protection</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients who trust us with their safety and privacy. Contact us for a confidential
            consultation.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3" asChild>
            <Link href="/request">
              Request Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
