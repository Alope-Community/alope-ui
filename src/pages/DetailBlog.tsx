import { useParams, Link } from "react-router-dom"
import Navbar from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"
import blogsData from "../data/DetailBlog.json"

interface Blog {
  id: number
  tags: string[]
  title: string
  author: string
  published: string
  banner: string
  content: string[]
}

const DetailBlog = () => {
  const { id } = useParams<{ id: string }>()
  const blogs: Blog[] = blogsData as Blog[]
  const blog = blogs.find((b) => b.id === Number(id))

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    )
  }

 
  const recommendedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3)

  return (
    <div className="dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />

      <main className="container mx-auto px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
       
        <article className="md:col-span-3 mt-10 space-y-6">
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

          <h1 className="text-3xl md:text-4xl font-bold leading-snug">{blog.title}</h1>

          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            By <span className="font-semibold">{blog.author}</span> • {blog.published}
          </div>

          {blog.banner ? (
            <img
              src={blog.banner}
              alt={blog.title}
              className="rounded-lg w-full object-cover max-h-[400px]"
            />
          ) : (
            <img
              src="https://via.placeholder.com/800x400?text=No+Image"
              alt="default banner"
              className="rounded-lg w-full object-cover max-h-[400px]"
            />
          )}

          <section className="space-y-4 leading-relaxed">
            {blog.content.map((para: string, idx: number) => (
              <p
                key={idx}
                className="text-base text-gray-700 dark:text-gray-300 text-justify"
              >
                {para}
              </p>
            ))}
          </section>
        </article>

      
        <aside className="md:col-span-1 mt-10 space-y-6 sticky top-20 self-start">
          <h2 className="text-xl font-bold text-[#80C41C] mb-4">Recommended Blogs</h2>
          <div className="space-y-4">
            {recommendedBlogs.map((item) => (
              <Link 
                to={`/detailblog/${item.id}`} 
                key={item.id} 
                className="block border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {item.banner && (
                  <img
                    src={item.banner}
                    alt={item.title}
                    className="w-full h-32 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.published}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}

export default DetailBlog
