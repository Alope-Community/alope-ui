import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import blogData from "../data/Blog.json";
import { TextInput } from "../components/TextInput/TextInput";
import Navbar from "../components/Layout/Navbar";

interface Blog {
  id: number;
  title: string;
  desc: string;
  author: string;
  published: string;
  tags: string[];
}

const BlogPage = () => {
  const [darkMode] = useState(false);
  const blogs: Blog[] = blogData as Blog[];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-10">
        <Navbar onToggleSidebar={() => {}} />

        <main className="container mx-auto px-4 sm:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="order-2 md:order-1 md:col-span-1 space-y-6 md:sticky md:top-20 h-fit">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Alope UI Blog
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify tracking-wide">
                Stay updated with the latest tutorials, design trends, and
                community from{" "}
                <span className="font-semibold text-[#80C41C]">ALOPE UI</span>.
              </p>
            </div>

            <div className="px-6">
              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Subscribe to our Newsletter
                </h3>
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
                <button
                  className="w-full bg-[#80C41C] text-white mt-3 text-sm font-semibold py-2 rounded-md 
                             hover:bg-[#80C41C]/90 transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </aside>

          {/* Blog List */}
          <section className="order-1 md:order-2 md:col-span-3 space-y-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="border-b border-gray-300 dark:border-gray-700 pb-6 last:border-none transition"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-[#80C41C]/10 text-[#80C41C]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <Link to={`/detailblog/${blog.id}`}>
                  <h3 className="text-xl sm:text-2xl font-bold hover:underline cursor-pointer">
                    {blog.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {blog.desc}
                </p>

                {/* Meta Info */}
                <div className="mt-5 flex flex-wrap justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.author}</span>
                  <span>{blog.published}</span>
                </div>
              </article>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
