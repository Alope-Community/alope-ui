import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import blogsData from "../data/DetailBlog.json";

interface Blog {
  id: number;
  tags: string[];
  title: string;
  author: string;
  published: string;
  banner: string;
  content: string[];
}

const DetailBlog = () => {
  const [darkMode] = useState(false);
  const { id } = useParams<{ id: string }>();

  const blogs: Blog[] = blogsData as Blog[];
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Navbar onToggleSidebar={() => {}} />

        <main className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 space-y-6 sticky top-20 h-fit">
            <div className="p-5 border border-gray-5 rounded-md dark:bg-gray-800 dark:border-gray-700 transition-colors duration-500">
              <h2 className="font-bold text-black dark:text-white text-lg">
                ALOPE UI BLOG
              </h2>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                Stay updated with the latest tutorials, design trends, and
                community news from ALOPE UI.
              </p>
            </div>
          </aside>

          <article className="md:col-span-2 mt-10 space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-[#80C41C]/10 text-[#80C41C]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              {blog.title}
            </h1>
            <img
              src={blog.banner}
              alt={blog.title}
              className="rounded-lg w-full mb-6"
            />
            <div className="text-sm text-gray-500 dark:text-gray-400">
              By <span className="font-semibold">{blog.author}</span> •{" "}
              {blog.published}
            </div>

            <section className="prose prose-lg dark:prose-invert max-w-none">
              {blog.content.map((para: string, idx: number) => (
                <p key={idx}>{para}</p>
              ))}
            </section>
          </article>

          <aside className="md:col-span-1 space-y-6 sticky top-20 self-start">
            <div className="p-5 border border-gray-5 rounded-md dark:bg-gray-800 dark:border-gray-700 transition-colors duration-500">
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

            <div className="p-5 border border-gray-5 rounded-md dark:bg-gray-800 dark:border-gray-700 transition-colors duration-500">
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

export default DetailBlog;
