import { Cairo, Inter } from "next/font/google";

// Define the fonts with the variable option for Tailwind CSS
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

export const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});
// export const inter = Inter({ subsets: ['latin'] });
