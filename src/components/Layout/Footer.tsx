import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
// import { TextInput } from "../TextInput/TextInput";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-500 border-t border-gray-50 dark:border-gray-800 mt-12 text-sm text-gray-600 dark:text-gray-300">
      {/* <div className="container mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <img
              src="/img/svg/logo.svg"
              alt="Alope Logo"
              className="w-8 h-8 mr-2"
            />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              AlopeUI
            </span>
          </div>
          <p className="font-semibold text-gray-900 dark:text-white mb-1">
            Keep up to date
          </p>
          <p className="mb-4">
            Join our newsletter for regular updates. No spam ever.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <TextInput />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Products
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-green-400">
                AlopeUI
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Resources
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-green-400">
                Material Icons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Components
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Customization
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Design Kits
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Company
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-green-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Vision
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 flex items-center">
                Careers
                <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">
                  HIRING
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="mt-10 pt-6 pb-8 px-4 sm:px-6 container mx-auto flex flex-col md:flex-row justify-between items-center gap-y-4 text-center md:text-left">
        <p className="text-xs text-gray-500">
          © 2025 Alope Community. All rights reserved.
        </p>
        <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
          <a
            target="_blank"
            href="https://github.com/Alope-Community/alope-ui"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5 hover:text-black dark:hover:text-white" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/alope-coding-room/posts/?feedView=all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 hover:text-blue-700" />
          </a>
          <a
            target="_blank"
            href="https://discord.gg/j2BhcCKb"
            aria-label="Discord"
          >
            <FaDiscord className="w-5 h-5 hover:text-indigo-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}
