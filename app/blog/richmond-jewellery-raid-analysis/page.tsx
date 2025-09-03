import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, User, Share2 } from "lucide-react"

export const metadata = {
  title:
    "Richmond Jewellery Raid: How Retail Security Could Have Prevented a £1.3M Loss | Global Shield Protection",
  description:
    "Security analysis of a high-value jewellery raid in Richmond and how layered retail security can prevent seven-figure losses.",
  metadataBase: new URL("https://www.globalshieldprotection.com"),
  alternates: {
    canonical: "/blog/richmond-jewellery-raid-analysis",
  },
  openGraph: {
    type: "article",
    title:
      "Richmond Jewellery Raid: How Retail Security Could Have Prevented a £1.3M Loss",
    description:
      "A daylight raid exposes critical gaps in high-value retail security — here’s how to close them.",
    url: "https://www.globalshieldprotection.com/blog/richmond-jewellery-raid-analysis",
    siteName: "Global Shield Protection",
    images: [
      {
        url: "/luxury-jewellery-store-security.png",
        width: 1200,
        height: 630,
        alt: "Exterior of a luxury jewellery store with discreet security measures",
      },
    ],
    publishedTime: "2025-01-18T00:00:00.000Z",
    authors: ["Global Shield Protection"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Richmond Jewellery Raid: How Retail Security Could Have Prevented a £1.3M Loss",
    description:
      "A daylight raid exposes critical gaps in high-value retail security — here’s how to close them.",
    images: ["/luxury-jewellery-store-security.png"],
  },
  robots: { index: true, follow: true },
}

export default function RichmondJewelleryRaidAnalysis() {
  const publishedISO = "2025-01-18T00:00:00.000Z"
  const heroDisplayDate = "18 January 2025"
  const readTime = "6 min read"

  return (
    <div className="bg-white min-h-screen">
      {/* JSON-LD */}
      <Script
        id="ld-blogposting-richmond"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Richmond Jewellery Raid: How Retail Security Could Have Prevented a £1.3M Loss",
            description:
              "Security analysis of a high-value jewellery raid in Richmond and how layered retail security can prevent seven-figure losses.",
            image: [
              "https://www.globalshieldprotection.com/luxury-jewellery-store-security.png",
            ],
            datePublished: publishedISO,
            dateModified: publishedISO,
            author: { "@type": "Organization", name: "Global Shield Protection" },
            publisher: {
              "@type": "Organization",
              name: "Global Shield Protection",
              logo: {
                "@type": "ImageObject",
                url: "https://www.globalshieldprotection.com/images/c2-white-logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.globalshieldprotection.com/blog/richmond-jewellery-raid-analysis",
            },
          }),
        }}
      />

      {/* Hero Section — matches benchmark */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxury-jewellery-store-security.png"
            alt="Exterior of a luxury jewellery store with discreet security measures"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 1200px"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
          </nav>

          <div className="mb-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
              Case Study
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Richmond Jewellery Raid: How Retail Security Could Have Prevented a £1.3M Loss
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            A daylight raid exposes critical gaps in high-value retail security — and how layered measures close them.
          </p>

          {/* Meta row inside hero */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {heroDisplayDate}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Global Shield Protection
            </div>
            <div aria-hidden className="h-1 w-1 rounded-full bg-gray-500" />
            <div>{readTime}</div>
            <div className="ml-auto">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent text-white border-white/40 hover:bg-white/10">
                <Share2 className="w-4 h-4" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content — typography aligned */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-black mb-6">Incident Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In <strong>May 2024</strong>, a Richmond jewellery store suffered a high-value loss reported at roughly{" "}
              <strong>£1.38 million</strong> in luxury watches during a daylight raid. While later court proceedings
              raised the possibility that the incident may have been staged as part of an insurance scam, the security
              lessons are the same: high-value retail is a predictable target, and gaps in deterrence, access control,
              and response invite seven-figure losses.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Whether the event was genuine or contrived, luxury premises operate under exposure that must be managed
              with layered protection—human presence, technology, and rehearsed procedures working together.
            </p>

            <h2 className="text-3xl font-bold text-black mb-6">Why Luxury Retail is High-Risk</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">High-value assets on display</h3>
                <p className="text-gray-700">
                  Portable, easily resold items create attractive targets—even more so when showcased behind thin glass.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Repeat targeting</h3>
                <p className="text-gray-700">
                  London jewellery districts face organised, often repeat, offenders who probe routines and weak points.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Staff vulnerabilities</h3>
                <p className="text-gray-700">
                  Without drills, staff can freeze or take risky actions that escalate loss and danger.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Public access</h3>
                <p className="text-gray-700">
                  Shops must remain welcoming, balancing customer experience with robust deterrence and control.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">
              How Security Measures Could Have Prevented This Incident
            </h2>

            <div className="space-y-6 mb-10">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-black mb-2">On-site Security Presence</h3>
                <p className="text-gray-700 mb-2">
                  Trained operatives at entry and on the floor raise the perceived risk of intervention and capture.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  Preventive measure: Visible deterrence and immediate human response.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-black mb-2">Access Control &amp; Mantraps</h3>
                <p className="text-gray-700 mb-2">
                  Dual-door vestibules, buzz-in policies, and ID checks slow intruders and create choke points.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  Preventive measure: Time delay for response and evidence capture.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-black mb-2">Protective Surveillance</h3>
                <p className="text-gray-700 mb-2">
                  Monitoring approaches, loitering, and pre-attack reconnaissance along adjoining streets.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  Preventive measure: Disrupt planning before an attack sequence begins.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-black mb-2">Staff Drills &amp; Incident Playbooks</h3>
                <p className="text-gray-700 mb-2">
                  Rehearsed roles, comms, and safe actions reduce panic, preserve life, and limit loss.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  Preventive measure: Faster, safer decisions under pressure.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">Global Shield Protection’s Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We deliver bespoke{" "}
              <Link href="/services/intelligence-surveillance" className="text-black underline hover:text-gray-700">
                protective surveillance
              </Link>{" "}
              and{" "}
              <Link href="/services/secure-transport" className="text-black underline hover:text-gray-700">
                secure movement
              </Link>{" "}
              around retail hotspots, integrated with in-store security and insurer requirements:
            </p>
            <ul className="space-y-3 text-gray-700 mb-10">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0" />
                Specialist in-store operatives and discreet external overwatch.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0" />
                Access control design: mantraps, buzz-in flow, visitor vetting.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0" />
                Staff training: robbery response, comms, and evidence preservation.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0" />
                Police liaison and insurer-aligned documentation for claims.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-6">Key Takeaways for Luxury Retailers</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-10">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0" />
                  Jewellery shops are prime targets—proactive measures are essential.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0" />
                  Staff alone cannot manage violent intrusions: pair people with access control and surveillance.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0" />
                  Integrated security blends deterrence, prevention, and rapid response to cut losses and protect life.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Sources:</strong>
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                <li>
                  <Link
                    href="https://example.com/todo-replace-with-guardian-article"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    TODO: The Guardian — London jewellery shop robbery was staged, defendant tells court
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://example.com/todo-replace-with-police-or-bbc-followup"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    TODO: Follow-up or police statement (BBC/Met Police/Evening Standard)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* CTA — same as benchmark */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your High-Value Retail Business</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Protect inventory, people, and brand reputation with a retail security program tailored to your risk profile.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="/request">
              Discuss Retail Security
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
