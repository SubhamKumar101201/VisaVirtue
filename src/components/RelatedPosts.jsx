import { Link } from 'react-router-dom';
import { blogData } from '../data/BlogData';

export default function RelatedPosts({ currentSlug, tags }) {
  const related = blogData
  // .filter(
  //   (b) => b.slug !== currentSlug && b.tags.some((t) => tags.includes(t))
  // ).slice(0, 3);

  if (!related.length)
    return <p className="text-gray-500">No related posts available.</p>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {related.map((blog) => (
        <Link
          to={`/blog/${blog.slug}`}
          key={blog.id}
          className="bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition"
        >
          <img src={blog.image} alt={blog.title} className="h-32 w-full object-cover rounded-lg mb-3" />
          <h4 className="font-semibold text-gray-800">{blog.title}</h4>
          <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
        </Link>
      ))}
    </div>
  );
}
