import  { useState, useEffect } from 'react'
import { FaCheck, FaRegCopy } from 'react-icons/fa'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const command = 'npm install alope-ui'

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) 
  }

  useEffect(() => {
    document.onclick = () => {

    }
    return () => {
      document.onclick = null
    }
  }, [])

  return (
   <div className="relative container mx-auto bg-white dark:bg-gray-900 transition-colors duration-500">
  

  <div
    className="absolute inset-0 blur-xl h-[580px] pointer-events-none"
    style={{
      background:
        'linear-gradient(143.6deg, rgba(132, 252, 178, 0.1) 20.79%, rgba(121, 249, 142, 0.26) 40.92%, rgba(171, 238, 204, 0) 70.35%)',
    }}
  ></div>


      <div className="relative z-10">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-20 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
             <a
  href="#"
  className="inline-flex gap-x-6 items-center rounded-lg p-1 pr-6 border border-gray-300 dark:border-gray-700 text-sm font-medium duration-150 hover:bg-green-100 dark:hover:bg-green-700 transition-colors"
>
  <span className="inline-block rounded-lg px-3 py-1 bg-green-600 text-white">
    News
  </span>
  <p className="flex items-center text-gray-800 dark:text-white">
    Listbox Component
    <svg
      className="w-5 h-5 ml-1"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  </p>
</a>


          
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6 max-w-3xl">
                AlopeUI helps you <br /> build faster{' '}
                <span className="inline-block  text-green-700 px-2 rounded-sm  dark:text-green-500 leading-none py-[0.5px]">
                  with ease
                </span>
              </h1>

 
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                React component library to help you build clean, accessible, and responsive interfaces with less effort.
              </p>

              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="#"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-green-600 hover:bg-green-700 active:bg-gray-900 rounded-lg md:inline-flex"
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <div className="relative inline-block w-full max-w-xs">
                  <div className="bg-green-200 dark:bg-gray-800 text-sm font-mono px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200  select-text">
                    $ {command}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <FaCheck className="w-3 h-3" />
                    ) : (
                      <FaRegCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
