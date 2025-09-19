const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-6">
          🚀 News: Listbox Component
        </span>
        <h1 className="text-5xl font-extrabold mb-6">
          AlopeUI helps you build faster{" "}
          <span className="text-green-600">with ease</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          React component library to help you build clean, accessible, and
          responsive interfaces with less effort.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/docs/introduction"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Get started
          </a>
          <button
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            onClick={() =>
              navigator.clipboard.writeText("npm install alope-ui")
            }
          >
            $ npm install alope-ui
          </button>
        </div>
      </header>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 py-16">
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-lg mb-2">⚡ Fast Development</h3>
          <p className="text-gray-600">
            Build UI faster with ready-to-use components and utilities.
          </p>
        </div>
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-lg mb-2">🎨 Consistent Design</h3>
          <p className="text-gray-600">
            Components follow consistent design system with green as primary.
          </p>
        </div>
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-lg mb-2">🔧 Customizable</h3>
          <p className="text-gray-600">
            Easily override styles and adapt components to your project.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;