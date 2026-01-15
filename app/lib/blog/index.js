import article1 from "./article1"
import article2 from "./article2"
import article3 from "./article3"
import article4 from "./article4"
import article5 from "./article5"

/**
 * All blog articles
 * Order matters if you want latest first
 */
export const blogPosts = [
  article5,
  article4,
  article3,
  article2,
  article1,
]

/**
 * Get article by slug
 */
export const getArticleBySlug = (slug) =>
  blogPosts.find((article) => article.slug === slug)


/**
 * Get featured article (latest one)
 */
export const getFeaturedArticle = () => {
  return blogPosts[0]
}

/**
 * Get related articles (same category, excluding current)
 */
export const getRelatedArticles = (slug, limit = 3) => {
  const current = getArticleBySlug(slug)
  if (!current) return []

  return blogPosts
    .filter(
      (article) =>
        article.slug !== slug &&
        article.category === current.category
    )
    .slice(0, limit)
}


export const getCategoryColor = (category) => {
  switch (category) {
    case "Language Learning Tips":
      return "bg-blue-100 text-blue-800"
    case "Professional English & Communication":
      return "bg-green-100 text-green-800"
    case "Teaching English / ELT":
      return "bg-purple-100 text-purple-800"
    case "Phonetics & Pronunciation":
      return "bg-pink-100 text-pink-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export const categories = [
  ...new Set(blogPosts.map((article) => article.category)),
]
