"use client"

import Link from "next/link"
import Navbar from "@/app/Components/Navbar"
import Footer from "@/app/Components/Footer"
import {
  getArticleBySlug,
  getRelatedArticles,
  getCategoryColor,
} from "@/app/lib/blog"

export default function ArticlePage({params}) {
const { slug } = params
const articleData = getArticleBySlug(slug)
const relatedArticles = getRelatedArticles(slug)

  if (!articleData) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12 mt-10">
        {/* Header */}
        <div className="mb-10">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-10 ${getCategoryColor(
              articleData.category
            )}`}
          >
            {articleData.category}
          </span>

          <h1 className="text-xl md:text-4xl font-bold text-slate-900 mt-4">
            {articleData.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div
          className="w-full h-96 sm:h-[500px] mb-12 rounded-lg border bg-cover bg-center"
          style={{ backgroundImage: `url(${articleData.image})` }}
        />
        {/* Introduction */}
        {articleData.introduction?.map((text, i) => (
          <p key={i} className="mb-4 text-slate-700">
            {text}
          </p>
        ))}

        {/* Sections */}
        {articleData.sections?.map((section, i) => (
          <div key={i} className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4">{section.heading}</h2>

            {section.content?.map((text, j) => (
              <p key={j} className="mb-3">{text}</p>
            ))}

            {section.bullets && (
              <ul className="list-disc ml-6 mb-4">
                {section.bullets.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}

            {section.bullets2 && (
              <ul className="list-disc ml-6 mb-4">
                {section.bullets2.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}

            {section.conclusion?.map((text, j) => (
              <p key={j} className="mt-3">{text}</p>
            ))}
          </div>
        ))}

        {/* Action Plan */}
        {articleData.actionPlan && (
          <div className="mt-12 p-6 border rounded-lg bg-slate-50">
            <h2 className="text-2xl font-bold mb-4">
              {articleData.actionPlan.heading}
            </h2>
            <ul className="list-disc ml-6">
              {articleData.actionPlan.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Conclusion */}
        <div className="mt-12">
          {articleData.conclusion?.map((text, i) => (
            <p key={i} className="mb-3">{text}</p>
          ))}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8 mt-10">Related Articles</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link key={article.slug} href={`/Blog/${article.slug}`}>
                  <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="p-5">
                      <span
                        className={`text-xs px-2 py-1 rounded ${getCategoryColor(
                          article.category
                        )}`}
                      >
                        {article.category}
                      </span>
                      <h3 className="font-bold mt-2">{article.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </div>
  )
}