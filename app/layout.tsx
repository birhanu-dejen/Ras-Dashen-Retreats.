import Header from "./_components/Header";
import ReservationProvider from "./_components/ReservationContext";
import "./_styles/globals.css";
export const metadata = {
  title: {
    template: "%s / Ras Dashen Retreats ",
    default: "welcome/ Ras Dashen Retreats ",
  },
  description:
    "Stay at Ras Dashen Retreats, your cozy mountain cabins in Simien Mountains National Park. Enjoy breathtaking views, luxury amenities, and unforgettable adventures. Book your escape to Ethiopia's natural wonder today!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <footer className="bg-primary-900 text-primary-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright Section */}
              <p className="text-lg text-center md:text-left">
                &copy; {new Date().getFullYear()} Ras Dashen Retreats. All
                rights reserved.
              </p>

              {/* Navigation Links */}
              <nav aria-label="Footer Navigation">
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  <li>
                    <a
                      href="#"
                      className="text-lg hover:text-primary-200 transition-colors duration-200"
                      aria-label="Contact Us"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg hover:text-primary-200 transition-colors duration-200"
                      aria-label="Terms & Conditions"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg hover:text-primary-200 transition-colors duration-200"
                      aria-label="Privacy Policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
