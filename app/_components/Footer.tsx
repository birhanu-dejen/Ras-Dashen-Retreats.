import {
  SocialsInfo,
  MoreInfo,
  TermsInfo,
  ContactInfo,
} from "./ReusableComponents";
import {
  socialsLink,
  moreInfoLink,
  termsLink,
  contactLink,
} from "../_constant/constant";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-accent-500">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-accent-500">
              Ras Dashen Retreats
            </h3>
            <p className="text-gray-400">
              Luxury mountain cabins nestled in the Simien Mountains, offering
              breathtaking views and unparalleled tranquility.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialsLink.map((link, index) => (
                <SocialsInfo key={index} Icon={link.Icon} link={link.link} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-accent-500">Explore</h4>
            <ul className="space-y-2">
              {moreInfoLink.map((link, index) => (
                <MoreInfo name={link.name} link={link.link} key={index} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-accent-500">Contact</h4>
            <div className="space-y-3">
              {contactLink.map((link, index) => (
                <ContactInfo name={link.name} Icon={link.Icon} key={index} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-accent-500">
              Stay Updated
            </h4>
            <p className="text-gray-400">
              Subscribe for seasonal offers and mountain retreat updates.
            </p>
            <form className="mt-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 flex-grow rounded bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-accent-500 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-500 px-4 py-2 rounded text-white transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-1">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ras Dashen Retreats. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
            {termsLink.map((link, index) => (
              <TermsInfo name={link.name} link={link.link} key={index} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
