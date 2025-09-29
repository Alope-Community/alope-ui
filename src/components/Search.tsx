import { useEffect, useState, useRef } from "react";
import Modal from "./ModalSearch";
import searchData from "./DataSearch.json";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const openModal = () => {
    setIsOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const closeModal = () => setIsOpen(false);

    // Ctrl+K / Esc
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

// Scroll lock with scrollbar compensation
useEffect(() => {
  const lockScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  };

  const unlockScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };

  if (isOpen) {
    lockScroll();
  } else {
    unlockScroll();
  }

  return () => unlockScroll();
}, [isOpen]);



  // Highlight
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark
          key={i}
          className="bg-yellow-200 dark:bg-yellow-600 text-black dark:text-white"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Filter
  const filteredData = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        {/* Desktop trigger */}
        <div className="w-full sm:w-75 max-w-md mx-auto">
          <button
            type="button"
            className="hidden sm:flex w-full relative items-center p-1 ps-10 pe-16 text-sm rounded-lg bg-green-200 dark:bg-gray-800 text-gray-500 dark:text-white dark:border-gray-600 shadow-sm focus:outline-none focus:ring-0 cursor-pointer hover:shadow-md"
            onClick={openModal}
          >
            <svg
              className="w-4 h-4 absolute inset-y-0 start-3 my-auto text-gray-500 dark:text-gray-400 pointer-events-none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>

            <span className="text-gray-500 dark:text-gray-200">Search</span>

            <kbd className="absolute top-1/2 right-2 -translate-y-1/2 px-1 py-0.5 text-xs font-semibold text-gray-500 bg-green-200 rounded-lg dark:bg-gray-800 dark:text-gray-100 dark:border-gray-500">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Mobile trigger */}
        <div className="sm:hidden flex items-center justify-end">
          <button
            className="sm:hidden flex items-center justify-center pe-1 rounded-lg"
            onClick={openModal}
          >
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="w-full p-3 pl-10 pr-50 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#80C41C] focus:outline-none placeholder-gray-500"
          />

          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>

          {/* Cancel button (mobile) */}
          <button
            type="button"
            onClick={closeModal}
            className="block sm:hidden absolute inset-y-0 right-3 flex items-center text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Cancel
          </button>

          {/* Clear input (desktop) */}
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="hidden sm:flex absolute inset-y-0 right-3 items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          )}
        </div>

        {/* Search results */}
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 w-full max-h-[85vh] max-w-xl sm:max-w-lg sm:max-h-70 overflow-y-auto box-border">
          {query ? (
            <>
              {filteredData.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <h4 className="font-medium">
                    {highlightText(item.title, query)}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {highlightText(item.description, query)}
                  </p>
                </a>
              ))}

              {filteredData.length === 0 && (
                <p className="p-2 text-gray-400">No results found</p>
              )}
            </>
          ) : (
            <p className="text-gray-400">No recent searches</p>
          )}
        </div>
        <div className="hidden sm:flex mt-4 text-xs text-gray-400 justify-between">
          <span>↵ to select • ↑↓ to navigate</span>
          <span>esc to close</span>
        </div>
      </Modal>
    </>
  );
}
