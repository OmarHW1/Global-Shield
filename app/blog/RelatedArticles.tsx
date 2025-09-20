import Image from "next/image"
import Link from "next/link"

type RelatedItem = {
  href: string
  title: string
  image: string
  excerpt: string
  alt?: string
}

export default function RelatedArticles({
  articles,
  heading = "Related Articles",
}: {
  articles: RelatedItem[]
  heading?: string
}) {
  if (!articles?.length) return null

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">{heading}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <Link key={a.href} href={a.href} className="group">
              <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.alt || a.title}
                    width={400}
                    height={250}
                    sizes="(max-width:768px) 100vw, 400px"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{a.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
