"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, ArrowRight } from "lucide-react"

// Placeholder for Contentful data fetching — will map over this later
const posts = [
  {
    slug: "knightsbridge-watch-attack-analysis",
    title: "Knightsbridge Watch Attack: How Close Protection Could Have Prevented Tragedy",
    subtitle:
      "A targeted attack in London's luxury district exposes the risks facing high-net-worth individuals — and the critical role of proactive security.",
    excerpt:
      "A recent targeted attack in Knightsbridge reveals the increasing risks to high-net-worth individuals. This analysis explains how close protection measures could have prevented the fatal stabbing of Blue Stevens outside the Park Tower Club hotel.",
    featuredImage: "/images/harrods-knightsbridge-night.jpg",
    category: "News Analysis",
    date: "2025-08-13",
    author: "Global Shield Protection",
  },
  {
    slug: "st-johns-wood-mansion-heist-analysis",
    title: "St John's Wood Mansion Heist: How a Residential Security Team Could Have Prevented a £10M Loss",
    subtitle: "A comprehensive analysis of a high-profile residential burglary and preventive security measures.",
    excerpt:
      "A recent £10 million mansion heist in St John's Wood exposed critical vulnerabilities in residential security. This detailed analysis examines how a professional residential security team could have prevented the loss through layered protection protocols.",
    featuredImage: "/images/st-johns-wood-mansion.jpg",
    category: "News Analysis",
    date: "2025-01-15",
    author: "Global Shield Security Team",
  },
  {
    slug: "george-clarke-knifepoint-robbery-analysis",
    title: "George Clarke Knifepoint Robbery: Why Public Figures Need Close Protection",
    subtitle:
      "A shocking attack on a beloved TV presenter highlights the vulnerability of public figures in everyday situations.",
    excerpt:
      "The knifepoint robbery of TV presenter George Clarke demonstrates how quickly public figures can become targets. This case study examines the security failures and outlines how close protection could have prevented this traumatic incident.",
    featuredImage: "/london-street-scene-with-security-professional.png",
    category: "Case Study",
    date: "2025-01-20",
    author: "Global Shield Protection",
  },
  {
    slug: "richmond-jewellery-raid-analysis",
    title: "Richmond Jewellery Raid: How Retail Security Could Have Prevented a £1.3M Loss",
    subtitle: "A brazen daylight raid exposes critical gaps in high-value retail security protocols.",
    excerpt:
      "The £1.3 million Richmond jewellery store raid reveals systematic security failures that enabled criminals to execute a sophisticated heist. Our analysis shows how proper retail security measures could have prevented this devastating loss.",
    featuredImage: "/luxury-jewellery-store-security.png",
    category: "Case Study",
    date: "2025-01-18",
    author: "Global Shield Security Team",
  },
  {
    slug: "residential-security-team-benefits",
    title: "Why Every High-Net-Worth Family Should Consider a Residential Security Team",
    subtitle:
      "The evolving threat landscape makes professional residential security an essential investment for wealthy families.",
    excerpt:
      "As threats against high-net-worth individuals intensify, residential security teams have become crucial for family protection. This comprehensive guide explains the benefits, implementation strategies, and cost considerations for private security.",
    featuredImage: "/luxury-residential-estate-with-security.png",
    category: "Industry Article",
    date: "2025-01-16",
    author: "Global Shield Protection",
  },
  {
    slug: "rolex-ripper-gangs-london-elite",
    title: 'The Rise of "Rolex Ripper" Gangs: What London\'s Elite Need to Know',
    subtitle: "Sophisticated criminal networks are targeting luxury watch owners across London's affluent districts.",
    excerpt:
      "The emergence of organized 'Rolex Ripper' gangs represents a new threat to London's wealthy residents. This industry analysis examines their tactics, target selection methods, and essential protection strategies for luxury watch owners.",
    featuredImage: "/images/luxury-gold-rolex-watch.jpg",
    category: "Industry Article",
    date: "2025-01-14",
    author: "Global Shield Security Team",
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Case Study":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "Industry Article":
      return "bg-green-100 text-green-800 border-green-200"
    case "News Analysis":
      return "bg-orange-100 text-orange-800 border-orange-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies & Security Insights</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 leading-relaxed">
            Explore our latest security insights, real-world case studies, and expert commentary on incidents affecting
            high-profile clients across the globe. Learn from our experience protecting the world's most prominent
            individuals.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles and case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["All", "Case Study", "Industry Article", "News Analysis"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full border transition-all duration-200 font-medium ${
                  selectedCategory === cat
                    ? "bg-black text-white border-black shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <article
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.featuredImage || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(post.category)}`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-xs">{post.author}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center text-black font-medium text-sm group-hover:text-gray-700 transition-colors">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 bg-transparent"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Discuss Your Security Needs?</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every security challenge is unique. Let our experts develop a customized protection strategy for your
            specific requirements based on real-world experience.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="/request">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
