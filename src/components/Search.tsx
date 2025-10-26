import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "./ModalSearch";
import searchData from "../data/DataSearch.json";
import { HiSearch } from "react-icons/hi";

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

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Scroll lock with scrollbar compensation
  useEffect(() => {
    const lockScroll = () => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
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
            className="hidden sm:flex w-full relative items-center p-2 ps-10 pe-16 text-sm rounded-md bg-white border-gray-300 dark:bg-gray-800 text-gray-500 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 cursor-pointer shadow-sm"
            onClick={openModal}
          >
            <HiSearch className="w-5 h-5 absolute inset-y-0 start-3 my-auto text-gray-500 dark:text-gray-400 pointer-events-none" />

            <span className="text-gray-500 dark:text-gray-200">Search</span>

            <kbd className="absolute top-1/2 right-2 -translate-y-1/2 px-1 py-0.5 text-xs font-semibold text-gray-500 bg-white rounded-lg dark:bg-gray-800 dark:text-gray-100 dark:border-gray-500">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Mobile trigger */}
        <div className="sm:hidden flex items-center justify-end">
          <button
            className="sm:hidden flex items-center justify-center pe-1 rounded-lg cursor-pointer"
            onClick={openModal}
          >
            <HiSearch className="w-6 h-6 text-gray-500 dark:text-gray-200" />
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
            className="w-full p-3 pl-10 pr-12 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#80C41C] focus:outline-none placeholder-gray-500"
          />

          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <HiSearch className="w-5 h-5 text-gray-400 dark:text-gray-100" />
          </div>

          {/* Cancel button (mobile) */}
          <button
            type="button"
            onClick={closeModal}
            className="sm:hidden absolute inset-y-0 right-3 flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 cursor-pointer"
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
                <Link
                  key={idx}
                  to={item.url}
                  onClick={() => {
                    closeModal();
                    setQuery(""); // opsional: bersihkan input setelah klik
                  }}
                  className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <h4 className="font-medium">
                    {highlightText(item.title, query)}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {highlightText(item.description, query)}
                  </p>
                </Link>
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
