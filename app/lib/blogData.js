"use client"

// Blog data - easily update this every Wednesday
export const blogPosts = [
  {
    id: 1,
    title: "Mastering English Pronunciation: The Complete Guide",
    excerpt: "Learn the essential techniques to improve your English pronunciation and speak with confidence.",
    category: "Phonetics & Pronunciation",
    author: "Sarah Johnson",
    date: "March 12, 2025",
    image: "",
    readTime: "8 min read",
    authorBio:
      "Sarah is an experienced English pronunciation trainer with 10+ years of teaching experience. She specializes in helping non-native speakers achieve native-like pronunciation.",
    authorImage: "/english-teacher-profile.png",
    content: `<h2>Introduction to English Pronunciation</h2>
<p>Pronunciation is one of the most challenging aspects of learning English as a second language. Many learners can read and write fluently but struggle when it comes to speaking.</p>
<h2>The Importance of Pronunciation</h2>
<p>Before diving into the techniques, let's understand why pronunciation matters. Clear pronunciation is essential for effective communication.</p>
<h2>Key Pronunciation Fundamentals</h2>
<p>English pronunciation involves several key elements that work together to create clear, intelligible speech.</p>`,
  },
  {
    id: 2,
    title: "10 Common English Mistakes You're Still Making",
    excerpt: "Discover the most frequent errors that even advanced learners make.",
    category: "Phonetics & Pronunciation",
    author: "Michael Chen",
    date: "March 5, 2025",
    image: ,
    readTime: "5 min read",
    authorBio: "Michael is a certified English instructor with expertise in grammar and common learner errors.",
    authorImage: "/english-teacher-profile.png",
    content: `<h2>Common Grammar Mistakes</h2><p>English grammar has many pitfalls even for advanced learners.</p>`,
  },
  {
    id: 3,
    title: "How to Teach Business English Effectively",
    excerpt: "Strategies and techniques for teaching professional communication skills.",
    category: "Teaching English / ELT",
    author: "Emma Wilson",
    date: "February 28, 2025",
    readTime: "7 min read",
    authorBio: "Emma specializes in business English and corporate training.",
    authorImage: "/english-teacher-profile.png",
    content: `<h2>Business English Strategies</h2><p>Teaching business English requires specific approaches.</p>`,
  },
  {
    id: 4,
    title: "Accent Reduction: Is It Really Necessary?",
    excerpt: "Explore the debate around accent reduction and professional communication.",
    category: "Professional English & Communication",
    author: "David Brown",
    date: "February 21, 2025",
    image: "/accent-reduction-english.png",
    readTime: "6 min read",
    authorBio: "David explores the nuances of accent and communication.",
    authorImage: "/english-teacher-profile.png",
    content: `<h2>Accent and Communication</h2><p>Accent reduction is a complex topic in English learning.</p>`,
  },
  {
    id: 5,
    title: "The Best Apps for English Learners in 2025",
    excerpt: "A comprehensive review of top language learning apps.",
    category: "Language Learning Tips",
    author: "Lisa Anderson",
    date: "February 14, 2025",
    image: "/english-learning-apps.png",
    readTime: "9 min read",
    authorBio: "Lisa reviews the latest language learning technology.",
    authorImage: "/english-teacher-profile.png",
    content: `<h2>Top Apps for Learning</h2><p>Modern technology offers many tools for language learning.</p>`,
  },
  {
    id: 6,
    title: "Storytelling: A Powerful Tool in ELT",
    excerpt: "How to use storytelling techniques to engage students.",
    category: "Teaching English / ELT",
    author: "Robert Taylor",
    date: "February 7, 2025",
    image: "",
    readTime: "6 min read",
    authorBio: "Robert is an expert in creative teaching methodologies.",
    authorImage: "/english-teacher-profile.png",
    content: `<h2>Storytelling in Education</h2><p>Stories are powerful teaching tools.</p>`,
  },
  {
    id: 7,
    title: "Idioms That Will Transform Your English",
    excerpt: "Master the most useful English idioms.",
    category: "Language Learning Tips",
    author: "Sarah Johnson",
    date: "January 31, 2025",
    image: "/english-idioms-learning.png",
    readTime: "7 min read",
    authorBio: "Sarah explores the world of English idioms.",
    authorImage: "/english-teacher-profile.png",
    content: `<h2>Understanding Idioms</h2><p>English idioms add flavor to communication.</p>`,
  },
]

export const categories = [
  "Language Learning Tips",
  "Teaching English / ELT",
  "Professional English & Communication",
  "Phonetics & Pronunciation",
]

export const getCategoryColor = (category) => {
  const colors = {
    "Language Learning Tips": "bg-amber-100 text-amber-900",
    "Teaching English / ELT": "bg-blue-100 text-blue-900",
    "Professional English & Communication": "bg-purple-100 text-purple-900",
    "Phonetics & Pronunciation": "bg-green-100 text-green-900",
  }
  return colors[category] || "bg-gray-100 text-gray-900"
}

export const getArticleById = (id) => {
  return blogPosts.find((post) => post.id === Number.parseInt(id))
}

export const getFeaturedArticle = () => {
  return blogPosts[0]
}

export const getRelatedArticles = (currentId, limit = 3) => {
  return blogPosts.filter((post) => post.id !== currentId).slice(0, limit)
}
