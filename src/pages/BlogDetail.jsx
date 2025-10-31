import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { blogData } from "../data/BlogData";
import RelatedPosts from "../components/RelatedPosts";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) return <NotFoundBlog />;

  const readingTime = Math.ceil(blog.content.split(" ").length / 200);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[75vh]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end pb-20 px-6 md:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-6xl font-bold max-w-4xl"
          >
            {blog.title}
          </motion.h1>

          <div className="flex flex-wrap gap-3 text-gray-300 text-sm mt-4">
            <span className="font-semibold text-white">{blog.author}</span>
            <span>• {blog.date}</span>
            <span>• {readingTime} min read</span>
            {blog.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 md:px-12 py-16"
      >
        <article className="prose prose-lg max-w-none prose-headings:text-[#780606] prose-h2:font-semibold prose-h2:text-3xl prose-p:text-gray-800 prose-p:leading-relaxed prose-li:marker:text-[#780606] prose-a:text-[#780606] prose-a:underline-offset-4 prose-a:hover:text-[#4a0303] prose-img:rounded-2xl prose-strong:text-[#4a0303]">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  className="text-3xl font-semibold mt-12 mb-6 text-[#780606] border-l-4 border-[#780606] pl-3"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="text-gray-800 leading-relaxed mb-6 text-lg tracking-wide"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc list-inside mb-6 text-gray-800 leading-relaxed space-y-2"
                  {...props}
                />
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </article>

        {/* Related Posts */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-semibold text-[#780606] mb-8">
            Related Posts
          </h3>
          <RelatedPosts currentSlug={slug} tags={blog.tags} />
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block bg-[#780606] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#900707] transition-all duration-300 shadow-md"
          >
            ← Back to Blog
          </Link>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="bg-gradient-to-tr from-[#780606] to-[#4a0303] text-white text-center py-12 sm:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Make Your Visa Process Smooth?
          </h3>

          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8">
            Our experts are here to guide you every step of the way — from preparing
            documents to getting your visa approved without stress.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.25)" }}
            className="inline-block bg-white text-[#780606] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#f4b02a] hover:text-[#4a0303] transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

// 404 Not Found
function NotFoundBlog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-center px-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-extrabold text-[#780606] mb-4"
      >
        404
      </motion.h1>
      <p className="text-gray-600 text-lg mb-8">
        Oops! This blog post seems to be missing.
      </p>
      <Link
        to="/blog"
        className="bg-[#780606] text-white px-8 py-3 rounded-lg hover:bg-[#900707] transition-all duration-300 shadow-md"
      >
        Back to Blog
      </Link>
    </div>
  );
}
