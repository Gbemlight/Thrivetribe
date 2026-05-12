'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

// Centralized data for articles
export const articles = [
  {
    id: "intentional-growth",
    title: "The Art of Intentional Growth",
    excerpt: "Growth is never by accident. It is the result of forces working together—discipline, environment, and purpose.",
    category: "Mindset",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: "building-character",
    title: "Building Character in a Distracted World",
    excerpt: "How to stay rooted in your values when everything around you is designed to pull you away.",
    category: "Leadership",
    date: "Oct 20, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: "community-accountability",
    title: "The Power of Community Accountability",
    excerpt: "Why going alone is a myth and how the right tribe can accelerate your personal development journey.",
    category: "Community",
    date: "Oct 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: "discipline-vs-motivation",
    title: "Discipline vs Motivation: What Wins?",
    excerpt: "Exploring the fundamental shift from relying on feelings to relying on systems for long-term success.",
    category: "Productivity",
    date: "Oct 10, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    featured: false
  }
];

const categories = ["All", "Mindset", "Leadership", "Community", "Productivity"];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(a => a.featured);

  return (
    <div className="min-h-screen bg-light-bg pb-20">
      <header className="bg-white border-b border-gray-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold text-dark-gray mb-4"
          >
            Articles & <span className="text-jade-green">Insights</span>
          </motion.h1>
          <p className="text-lg text-mid-gray max-w-2xl mx-auto">
            Exploring the intersection of discipline, purpose, and communal growth.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                  ? 'bg-jade-green text-white shadow-lg' 
                  : 'bg-white text-mid-gray border border-gray-200 hover:border-jade-green/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mid-gray" />
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-jade-green/20 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link href={`/articles/${article.id}`} className="block group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-jade-green text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[10px] text-mid-gray font-bold uppercase tracking-wider mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-gray mb-3 group-hover:text-jade-green transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-jade-green font-bold text-sm">
                      Continue Reading <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}