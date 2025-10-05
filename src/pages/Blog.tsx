import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import blog from "../data/blog.json";
import { TextInput } from "../components/TextInput/TextInput";

const BlogPage = () => {
  const [darkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-10">
        <Navbar onToggleSidebar={() => {}} />

        <main className="container mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="order-2 md:order-1 md:col-span-1 space-y-6 md:sticky md:top-20 h-fit">
            <div className="p-5 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="font-bold text-black dark:text-white text-lg">
                ALOPE UI BLOG
              </h2>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                Stay updated with the latest tutorials, design trends, and
                community news from ALOPE UI.
              </p>
            </div>
          </aside>

          <section className="order-1 md:order-2 md:col-span-2 space-y-8">
            {blog.map((blog) => (
              <article
                key={blog.id}
                className=" border-b border-gray-300 dark:border-gray-700 transition last:border-b-0"
              >
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

                <Link to={`/detailblog/${blog.id}`}>
                  <h3 className="text-xl sm:text-2xl font-bold hover:underline cursor-pointer">
                    {blog.title}
                  </h3>
                </Link>

                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {blog.desc}
                </p>
                <div className="mt-5 flex flex-wrap justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.author}</span>
                  <span>{blog.published}</span>
                </div>
              </article>
            ))}
          </section>

          <aside className="order-3 md:order-3 md:col-span-1 space-y-6 md:sticky md:top-20 self-start">
            <div className="p-5 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="font-bold text-black dark:text-white text-lg">
                RECOMMENDED TOPICS
              </h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "React",
                  "Vue",
                  "Tailwind",
                  "Next.js",
                  "Figma",
                  "Open Source",
                ].map((topic, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-[#80C41C]/10 text-[#80C41C]"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="font-bold text-black dark:text-white text-lg">
                COMMUNITY AUTHORS
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <strong className="text-[#80C41C]">Firdan Fauzan</strong> –
                  Frontend Developer
                </li>
                <li>
                  <strong className="text-[#80C41C]">Alope Team</strong> – Open
                  Source
                </li>
                <li>
                  <strong className="text-[#80C41C]">Guest Author</strong> –
                  UI/UX Designer
                </li>
              </ul>
            </div>
          </aside>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
