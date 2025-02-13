import Navigation from "./components/navigation";
import Logo from "./components/logo";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 birhanu dejen. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
