import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700  max-w-[1280px] rounded-2xl mx-auto py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Coursify X</h3>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet lorem consectetur pretium neque leo eu nibh neque ultricies pellentesque.
            </p>
            <div className="flex space-x-4 text-gray-500">
              <FiFacebook size={20} />
              <FiTwitter size={20} />
              <FiInstagram size={20} />
              <FiLinkedin size={20} />
              <FiYoutube size={20} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-100 rounded-2xl p-8">
            {/* Main Pages */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Main pages</h4>
              <ul className="space-y-2 text-gray-500">
                {['Home (Sales)', 'Home V1', 'Home V2', 'Home V3', 'About', 'Contact V1', 'Contact V2', 'Contact V3', 'Pricing', 'Pricing single', 'Chapters', 'Chapter single'].map((item, idx) => (
                  <li key={idx}><a href="#" className="hover:text-gray-700">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Premium Pages */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Premium pages</h4>
              <ul className="space-y-2 text-gray-500">
                {['Home premium', 'Chapters premium', 'Chapter single premium', 'Lesson single premium'].map((item, idx) => (
                  <li key={idx}><a href="#" className="hover:text-gray-700">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Utility Pages */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Utility pages</h4>
              <ul className="space-y-2 text-gray-500">
                {['Start here', 'Styleguide', '404 not found', 'Password protected', 'Licenses', 'Changelog', 'More Webflow Templates'].map((item, idx) => (
                  <li key={idx}><a href="#" className="hover:text-gray-700">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12  border-gray-300 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Coursify X | Designed by <span className="font-semibold">BRIX Templates</span> - Powered by <span className="font-semibold">Webflow</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
