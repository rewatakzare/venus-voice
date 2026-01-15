"use client"

import Link from "next/link"
import { useState, useMemo, useEffect } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {
  blogPosts,
  categories,
  getFeaturedArticle,
  getCategoryColor,
} from "../lib/blog"

/* ---------- Helpers ---------- */
const getNextWednesday = () => {
  const today = new Date()
  const currentDay = today.getDay()
  let daysUntilWednesday = 3 - currentDay
  if (daysUntilWednesday <= 0) daysUntilWednesday += 7
  const nextWednesday = new Date(today)
  nextWednesday.setDate(nextWednesday.getDate() + daysUntilWednesday)
  return nextWednesday
}

/* ---------- Page ---------- */
export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null)

  const featuredArticle = getFeaturedArticle()

  const filteredArticles = useMemo(() => {
    return blogPosts.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) 

      const matchesCategory =
        selectedCategory === null || article.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mt-10">
            Venus Voice Language Lab
          </h1>
          <p className=" mt-10 text-amber-200">Learn, Teach, Communicate Better</p>
          <p className="text-amber-200 ">
            Weekly blog on English learning and teaching.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Article</h2>

          <div className="grid md:grid-cols-2 rounded-lg overflow-hidden border">
            <div
              className="h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${featuredArticle.image})` }}
            />

            <div className="p-8">
              <span
                className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${getCategoryColor(
                  featuredArticle.category
                )}`}
              >
                {featuredArticle.category}
              </span>

              <h3 className="text-xl md:text-3xl font-bold mt-4">
                {featuredArticle.title}
              </h3>

              <p className="text-slate-600 mt-4">
                {featuredArticle.excerpt}
              </p>
              
              <Link href={`/Blog/${featuredArticle.slug}`}>
                <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded">
                  Read Full Article
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Articles + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
        {/* Articles */}
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Articles</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <Link key={article.slug} href={`/Blog/${article.slug}`}>
                <div className="border rounded-lg overflow-hidden hover:shadow-lg">
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
                    <h3 className="font-bold mt-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 mt-2">
                      {article.excerpt}
                    </p>
                    <div className="text-xs text-slate-500 mt-3 flex justify-between">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <div className="border rounded-lg p-6">
            <h3 className="font-bold mb-4">Search</h3>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full border rounded px-4 py-2"
            />
          </div>

          {/* Categories */}
          <div className="border rounded-lg p-6">
            <h3 className="font-bold mb-4">Categories</h3>

            {/* All categories button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className={`block w-full text-left mb-2 px-3 py-2 rounded
                ${selectedCategory === null
                  ? "bg-white text-black"
                  : "bg-gray-100 text-gray-800"
                }`}
            >
              All Categories
            </button>

            {/* Category buttons */}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left mb-2 px-3 py-2 rounded-xl transition
                  ${getCategoryColor(cat)}
                  ${selectedCategory === cat ? "ring-2 ring-offset-2 ring-gray-400" : ""}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

        </aside>
      </section>

      <Footer />
    </div>
  )
}