import { Inter } from "next/font/google";
import "/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaxiApp",
  description: "Book your taxi from anywhere today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
