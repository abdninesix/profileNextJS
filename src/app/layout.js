import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Portfolio | Abdullah",
    description: "Experience true responsiveness",
    icons: {
      icon: "/src/app/favicon.ico",
    },
  };
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <TransitionProvider>
          {children}
          </TransitionProvider>
      </body>
    </html>
  );
}