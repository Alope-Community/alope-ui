import {
  FaGithub,
  FaRss,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
} from 'react-icons/fa';
import { TextInput } from '../TextInput/TextInput';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t mt-12 text-sm text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">

        {/* Newsletter / Logo */}
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <img src="/img/Alope.png" alt="Alope Logo" className="w-6 h-6 mr-2" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">AlopeUI</span>
          </div>
          <p className="font-semibold text-gray-900 dark:text-white mb-1">
            Keep up to date
          </p>
          <p className="mb-4">
            Join our newsletter for regular updates. No spam ever.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <TextInput  />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Link Section */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Products</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-400">AlopeUI</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Resources</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-400">Material Icons</a></li>
            <li><a href="#" className="hover:text-green-400">Templates</a></li>
            <li><a href="#" className="hover:text-green-400">Components</a></li>
            <li><a href="#" className="hover:text-green-400">Customization</a></li>
            <li><a href="#" className="hover:text-green-400">Design Kits</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-400">About</a></li>
            <li><a href="#" className="hover:text-green-400">Vision</a></li>
            <li>
              <a href="#" className="hover:text-green-400 flex items-center">
                Careers
                <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">
                  HIRING
                </span>
              </a>
            </li>
            <li><a href="#" className="hover:text-green-400">Support</a></li>
            <li><a href="#" className="hover:text-green-400">Privacy policy</a></li>
            <li><a href="#" className="hover:text-green-400">Contact us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t mt-10 pt-6 pb-8 px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-xs text-gray-500 mb-4 md:mb-0">
          © 2025 AlopeUI. All rights reserved.
        </p>
        <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
          <a href="#"><FaGithub className="w-5 h-5 hover:text-black dark:hover:text-white" /></a>
          <a href="#"><FaRss className="w-5 h-5 hover:text-orange-500" /></a>
          <a href="#"><FaLinkedin className="w-5 h-5 hover:text-blue-700" /></a>
          <a href="#"><FaYoutube className="w-5 h-5 hover:text-red-600" /></a>
          <a href="#"><FaDiscord className="w-5 h-5 hover:text-indigo-500" /></a>
        </div>
      </div>
    </footer>
  );
}
