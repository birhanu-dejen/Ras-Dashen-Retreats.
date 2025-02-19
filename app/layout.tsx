import Header from "./_components/header";
import "./_styles/globals.css";
export const metadata = {
  title: {
    template: "%s /Ras Dashen Retreats ",
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
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <footer>
          <p>&copy; 2025 birhanu dejen. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
